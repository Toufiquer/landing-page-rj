'use client'

// Example component showing how to use the Zustand hooks

import React, { useState } from 'react'
import {
  useGetDataQuery,
  useGetDataByIdQuery,
  useAddDataMutation,
  useUpdateDataMutation,
  useDeleteDataMutation,
  useBulkDeleteDataMutation,
  useBulkUpdateDataMutation,
} from '@/zustand/useBoxStore'

const BoxManager: React.FC = () => {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [selectedBoxId, setSelectedBoxId] = useState<string | undefined>(
    undefined
  )

  // Fetch all boxes with pagination
  const { data: allBoxes, isLoading: loadingAll } = useGetDataQuery({
    page,
    limit,
  })

  // Fetch a single box by ID
  const {
    data: singleBox,
    refetch,
    isLoading: loadingSingle,
  } = useGetDataByIdQuery(selectedBoxId, { skip: !selectedBoxId })

  // Add a new box
  const [addData, { isLoading: addingData }] = useAddDataMutation()

  // Update a box
  const [updateData, { isLoading: updatingData }] = useUpdateDataMutation()

  // Delete a box
  const [deleteData, { isLoading: deletingData }] = useDeleteDataMutation()

  // Bulk delete boxes
  const [bulkDeleteData, { isLoading: bulkDeleting }] =
    useBulkDeleteDataMutation()

  // Bulk update boxes
  const [bulkUpdateData, { isLoading: bulkUpdating }] =
    useBulkUpdateDataMutation()

  // Example handlers
  const handleAdd = async () => {
    await addData({
      id: 'box8',
      data: {
        isOpen: true,
        title1: 'New Box',
        description1: 'This is a new box',
      },
    })
  }

  const handleUpdate = async () => {
    if (selectedBoxId) {
      await updateData({
        id: selectedBoxId,
        data: {
          title1: 'Updated Title',
          description1: 'This box has been updated',
        },
      })
      refetch() // Refresh the data
    }
  }

  const handleDelete = async () => {
    if (selectedBoxId) {
      await deleteData(selectedBoxId)
      setSelectedBoxId(undefined)
    }
  }

  const handleBulkDelete = async () => {
    await bulkDeleteData(['box8', 'box9', 'box10'])
  }

  const handleBulkUpdate = async () => {
    await bulkUpdateData([
      { id: 'box1', data: { title1: 'Updated Box 1' } },
      { id: 'box2', data: { title1: 'Updated Box 2' } },
    ])
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Box Data Manager</h1>

      {/* Pagination Controls */}
      <div className="mb-4 flex items-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Next
        </button>
        <select
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          className="ml-4 px-2 py-1 border rounded"
        >
          <option value="5">5 per page</option>
          <option value="10">10 per page</option>
        </select>
      </div>

      {/* Data Actions */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={handleAdd}
          disabled={addingData}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          {addingData ? 'Adding...' : 'Add Box'}
        </button>
        <button
          onClick={handleUpdate}
          disabled={updatingData || !selectedBoxId}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          {updatingData ? 'Updating...' : 'Update Selected'}
        </button>
        <button
          onClick={handleDelete}
          disabled={deletingData || !selectedBoxId}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          {deletingData ? 'Deleting...' : 'Delete Selected'}
        </button>
        <button
          onClick={handleBulkDelete}
          disabled={bulkDeleting}
          className="px-3 py-1 bg-orange-500 text-white rounded"
        >
          {bulkDeleting ? 'Bulk Deleting...' : 'Bulk Delete'}
        </button>
        <button
          onClick={handleBulkUpdate}
          disabled={bulkUpdating}
          className="px-3 py-1 bg-purple-500 text-white rounded"
        >
          {bulkUpdating ? 'Bulk Updating...' : 'Bulk Update'}
        </button>
      </div>

      {/* All Boxes */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">All Boxes</h2>
        {loadingAll ? (
          <p>Loading boxes...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(allBoxes).map(([id, box]) => (
              <div
                key={id}
                className={`p-4 border rounded cursor-pointer ${selectedBoxId === id ? 'border-blue-500 bg-blue-50' : ''}`}
                onClick={() => setSelectedBoxId(id)}
              >
                <h3 className="font-medium">{id}</h3>
                <p>Open: {box.isOpen ? 'Yes' : 'No'}</p>
                {box.title1 && <p>Title: {box.title1}</p>}
                {box.description1 && (
                  <p className="text-sm truncate">{box.description1}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Selected Box Details */}
      {selectedBoxId && (
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">
            Box Details: {selectedBoxId}
          </h2>
          {loadingSingle ? (
            <p>Loading details...</p>
          ) : singleBox ? (
            <div>
              <p>
                <strong>Open:</strong> {singleBox.isOpen ? 'Yes' : 'No'}
              </p>
              {singleBox.title1 && (
                <p>
                  <strong>Title:</strong> {singleBox.title1}
                </p>
              )}
              {singleBox.description1 && (
                <p>
                  <strong>Description:</strong> {singleBox.description1}
                </p>
              )}
              {singleBox.priceText && (
                <p>
                  <strong>Price:</strong> {singleBox.priceText}
                </p>
              )}
            </div>
          ) : (
            <p>No details available</p>
          )}
        </div>
      )}
    </div>
  )
}

export default BoxManager
