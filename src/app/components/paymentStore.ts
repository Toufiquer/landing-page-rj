// store/paymentStore.ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// Define the store state type
export type FormData = {
  fullName: string
  mobileNumber: string
  email: string
  paymentMethod: 'bkash' | 'nagad'
}

// Define the store type
type PaymentStore = {
  formData: FormData
  setFormData: (data: FormData) => void
  setPaymentMethod: (method: 'bkash' | 'nagad') => void
  resetFormData: () => void
}

// Initial form data
const initialFormData: FormData = {
  fullName: '',
  mobileNumber: '',
  email: '',
  paymentMethod: 'bkash',
}

// Create the store with persist middleware for localStorage
export const usePaymentStore = create<PaymentStore>()(
  persist(
    (set) => ({
      formData: initialFormData,

      setFormData: (data: FormData) => set({ formData: data }),

      setPaymentMethod: (method: 'bkash' | 'nagad') =>
        set((state) => ({
          formData: {
            ...state.formData,
            paymentMethod: method,
          },
        })),

      resetFormData: () => set({ formData: initialFormData }),
    }),
    {
      name: 'payment-storage',
      storage: createJSONStorage(() => localStorage),
      // Only persist the payment method to localStorage
      partialize: (state) => ({
        formData: {
          paymentMethod: state.formData.paymentMethod,
        },
      }),
    }
  )
)
