// src/zustand/store/useBoxStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { BoxType, SingleBoxType, baseData } from './types' // Adjust the import path as needed

// Define the store state type
interface BoxState {
  boxes: BoxType
  isLoading: boolean
  isError: boolean
  error: string | null
  isSuccess: boolean
}

// Create the store
const useBoxStore = create<BoxState>()(
  persist(
    (set) => {
      console.log('set : ', set)
      return {
        boxes: baseData,
        isLoading: false,
        isError: false,
        error: null,
        isSuccess: false,
      }
    },
    {
      name: 'box-storage', // Storage key
    }
  )
)

// Helper function to reset status
interface ResetStatus {
    (set: (partial: BoxState | Partial<BoxState> | ((state: BoxState) => BoxState | Partial<BoxState>)) => void): void
}

const resetStatus: ResetStatus = (set) => {
    setTimeout(() => {
        set({ isLoading: false, isError: false, error: null, isSuccess: false })
    }, 1000)
}

// Hook for getting all boxes data
export function useGetDataQuery(options?: { page?: number; limit?: number }) {
  const boxes = useBoxStore((state) => state.boxes)
  const isLoading = useBoxStore((state) => state.isLoading)
  const isError = useBoxStore((state) => state.isError)
  const error = useBoxStore((state) => state.error)

  let data = boxes

  // Handle pagination if provided
  if (options?.page && options?.limit) {
    const start = (options.page - 1) * options.limit
    const end = start + options.limit

    // Create a subset of data based on pagination
    // Note: This is a simplified approach, in real app you might do this differently
    const boxKeys = Object.keys(boxes).slice(start, end)
    data = boxKeys.reduce((acc, key) => {
      // Fix: Cast the key to keyof BoxType to ensure type safety
      const boxKey = key as keyof BoxType
      acc[boxKey] = boxes[boxKey]
      return acc
    }, {} as BoxType)
  }

  return {
    data,
    isLoading,
    isError,
    error,
  }
}

// Hook for getting a specific box by ID
export function useGetDataByIdQuery(
  id: string | undefined,
  options?: { skip?: boolean }
) {
  const boxes = useBoxStore((state) => state.boxes)
  const isLoading = useBoxStore((state) => state.isLoading)
  const isError = useBoxStore((state) => state.isError)
  const error = useBoxStore((state) => state.error)

  // Skip fetching if option is provided
  if (options?.skip || !id) {
    return {
      data: null,
      isLoading: false,
      isError: false,
      error: null,
      refetch: () => {},
    }
  }

  // Get the specific box (assuming id is boxN where N is a number)
  const boxKey = id.startsWith('box') ? id : `box${id}`
  const data = boxes[boxKey as keyof BoxType] || null

  // Refetch function would normally refresh data from an API
  const refetch = () => {
    // In a real application, this would trigger a new fetch
    // But in this simple store, we just return the current data
    return data
  }

  return {
    data,
    refetch,
    isLoading,
    isError,
    error,
  }
}

// Hook for adding a new box
export function useAddDataMutation() {
  const set = useBoxStore.setState
  const boxes = useBoxStore.getState().boxes

  const addData = async (newBoxData: { id: string; data: SingleBoxType }) => {
    try {
      set({ isLoading: true, isError: false, error: null })

      // In a real app, you'd make an API call here
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      const boxKey = newBoxData.id as keyof BoxType

      // Update the store
      set({
        boxes: {
          ...boxes,
          [boxKey]: newBoxData.data,
        },
        isLoading: false,
        isSuccess: true,
      })

      resetStatus(set)
      return { success: true }
    } catch (error) {
      set({
        isLoading: false,
        isError: true,
        error: error instanceof Error ? error.message : 'Unknown error',
      })
      resetStatus(set)
      return { success: false, error }
    }
  }

  return [
    addData,
    {
      isLoading: useBoxStore((state) => state.isLoading),
      isError: useBoxStore((state) => state.isError),
      error: useBoxStore((state) => state.error),
      isSuccess: useBoxStore((state) => state.isSuccess),
    },
  ] as const
}

// Hook for updating a box
export function useUpdateDataMutation() {
  const set = useBoxStore.setState
  const boxes = useBoxStore.getState().boxes

  const updateData = async (updateBoxData: {
    id: string
    data: Partial<SingleBoxType>
  }) => {
    try {
      set({ isLoading: true, isError: false, error: null })

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      const boxKey = updateBoxData.id as keyof BoxType

      // Ensure the box exists
      if (!boxes[boxKey]) {
        throw new Error(`Box with id ${updateBoxData.id} not found`)
      }

      // Update the store
      set({
        boxes: {
          ...boxes,
          [boxKey]: {
            ...boxes[boxKey],
            ...updateBoxData.data,
          },
        },
        isLoading: false,
        isSuccess: true,
      })

      resetStatus(set)
      return { success: true }
    } catch (error) {
      set({
        isLoading: false,
        isError: true,
        error: error instanceof Error ? error.message : 'Unknown error',
      })
      resetStatus(set)
      return { success: false, error }
    }
  }

  return [
    updateData,
    {
      isLoading: useBoxStore((state) => state.isLoading),
      isError: useBoxStore((state) => state.isError),
      error: useBoxStore((state) => state.error),
      isSuccess: useBoxStore((state) => state.isSuccess),
    },
  ] as const
}

// Hook for deleting a box
export function useDeleteDataMutation() {
  const set = useBoxStore.setState
  const boxes = useBoxStore.getState().boxes

  const deleteData = async (id: string) => {
    try {
      set({ isLoading: true, isError: false, error: null })

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      const boxKey = id as keyof BoxType

      // Ensure the box exists
      if (!boxes[boxKey]) {
        throw new Error(`Box with id ${id} not found`)
      }

      // Create a copy of boxes without the deleted box
      const updatedBoxes = { ...boxes }
      // Instead of deleting, set isOpen to false (preserving the structure)
      updatedBoxes[boxKey] = {
        isOpen: false,
      }

      // Update the store
      set({
        boxes: updatedBoxes,
        isLoading: false,
        isSuccess: true,
      })

      resetStatus(set)
      return { success: true }
    } catch (error) {
      set({
        isLoading: false,
        isError: true,
        error: error instanceof Error ? error.message : 'Unknown error',
      })
      resetStatus(set)
      return { success: false, error }
    }
  }

  return [
    deleteData,
    {
      isLoading: useBoxStore((state) => state.isLoading),
      isError: useBoxStore((state) => state.isError),
      error: useBoxStore((state) => state.error),
      isSuccess: useBoxStore((state) => state.isSuccess),
    },
  ] as const
}

// Hook for bulk deleting boxes
export function useBulkDeleteDataMutation() {
  const set = useBoxStore.setState
  const boxes = useBoxStore.getState().boxes

  const bulkDeleteData = async (ids: string[]) => {
    try {
      set({ isLoading: true, isError: false, error: null })

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      const updatedBoxes = { ...boxes }

      // Process each id
      for (const id of ids) {
        const boxKey = id as keyof BoxType

        // Set isOpen to false (preserving the structure)
        if (updatedBoxes[boxKey]) {
          updatedBoxes[boxKey] = {
            isOpen: false,
          }
        }
      }

      // Update the store
      set({
        boxes: updatedBoxes,
        isLoading: false,
        isSuccess: true,
      })

      resetStatus(set)
      return { success: true }
    } catch (error) {
      set({
        isLoading: false,
        isError: true,
        error: error instanceof Error ? error.message : 'Unknown error',
      })
      resetStatus(set)
      return { success: false, error }
    }
  }

  return [
    bulkDeleteData,
    {
      isLoading: useBoxStore((state) => state.isLoading),
      isError: useBoxStore((state) => state.isError),
      error: useBoxStore((state) => state.error),
      isSuccess: useBoxStore((state) => state.isSuccess),
    },
  ] as const
}

// Hook for bulk updating boxes
export function useBulkUpdateDataMutation() {
  const set = useBoxStore.setState
  const boxes = useBoxStore.getState().boxes

  const bulkUpdateData = async (
    updates: { id: string; data: Partial<SingleBoxType> }[]
  ) => {
    try {
      set({ isLoading: true, isError: false, error: null })

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      const updatedBoxes = { ...boxes }

      // Process each update
      for (const update of updates) {
        const boxKey = update.id as keyof BoxType

        // Update the box if it exists
        if (updatedBoxes[boxKey]) {
          updatedBoxes[boxKey] = {
            ...updatedBoxes[boxKey],
            ...update.data,
          }
        }
      }

      // Update the store
      set({
        boxes: updatedBoxes,
        isLoading: false,
        isSuccess: true,
      })

      resetStatus(set)
      return { success: true }
    } catch (error) {
      set({
        isLoading: false,
        isError: true,
        error: error instanceof Error ? error.message : 'Unknown error',
      })
      resetStatus(set)
      return { success: false, error }
    }
  }

  return [
    bulkUpdateData,
    {
      isLoading: useBoxStore((state) => state.isLoading),
      isError: useBoxStore((state) => state.isError),
      error: useBoxStore((state) => state.error),
      isSuccess: useBoxStore((state) => state.isSuccess),
    },
  ] as const
}

export default useBoxStore
