// hooks/usePaymentForm.ts
'use client'

import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { usePaymentStore, FormData } from './paymentStore'

export const usePaymentForm = () => {
  const router = useRouter()
  const { formData, setFormData, setPaymentMethod } = usePaymentStore()

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: formData,
  })

  // Handle payment method selection
  const handlePaymentMethodChange = (method: 'bkash' | 'nagad') => {
    setPaymentMethod(method)
  }

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Save complete form data to the store
    const submissionData = {
      ...data,
      paymentMethod: formData.paymentMethod, // Use the payment method from the store
    }

    setFormData(submissionData)

    // Redirect based on payment method
    if (submissionData.paymentMethod === 'bkash') {
      router.push('/bkash-payment')
    } else {
      router.push('/nagad-payment')
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    paymentMethod: formData.paymentMethod,
    handlePaymentMethodChange,
  }
}
