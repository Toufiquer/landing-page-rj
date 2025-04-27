/*
|-----------------------------------------
| setting up SummitForm for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'

// Define type for form inputs
type FormInputs = {
  fullName: string
  mobileNumber: string
  email: string
  paymentMethod: 'bkash' | 'nagad'
}

const UsersForm: React.FC = () => {
  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>()

  // State for selected payment method
  const [paymentMethod, setPaymentMethod] = useState<'bkash' | 'nagad'>('bkash')

  // Handle form submission
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Include payment method in submission data
    const submissionData = {
      ...data,
      paymentMethod,
    }
    console.log(submissionData)
    // Add your API call or further processing here
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
      },
    },
  }

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.6 },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  }

  return (
    <motion.div
      className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-6 md:p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Complete Your Order
        </h2>
        <p className="text-gray-600">Digital Product Cart</p>
      </motion.div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <motion.div variants={itemVariants} className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your full name"
            {...register('fullName', { required: true })}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">Full name is required</p>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4">
          <label
            htmlFor="mobileNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mobile Number
          </label>
          <input
            id="mobileNumber"
            type="tel"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your mobile number"
            {...register('mobileNumber', {
              required: true,
              pattern: /^[0-9]{11}$/,
            })}
          />
          {errors.mobileNumber?.type === 'required' && (
            <p className="mt-1 text-sm text-red-500">
              Mobile number is required
            </p>
          )}
          {errors.mobileNumber?.type === 'pattern' && (
            <p className="mt-1 text-sm text-red-500">
              Please enter a valid 11-digit mobile number
            </p>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your email address"
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email?.type === 'required' && (
            <p className="mt-1 text-sm text-red-500">Email is required</p>
          )}
          {errors.email?.type === 'pattern' && (
            <p className="mt-1 text-sm text-red-500">
              Please enter a valid email address
            </p>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <p className="block text-sm font-medium text-gray-700 mb-3">
            Payment Method
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.div
              className={`relative flex-1 min-w-[140px] p-4 border-2 rounded-lg cursor-pointer flex items-center justify-center ${paymentMethod === 'bkash' ? 'border-pink-500 bg-pink-50' : 'border-gray-200'}`}
              whileHover={{ scale: 1.03 }}
              onClick={() => setPaymentMethod('bkash')}
            >
              <div className="text-center">
                <div className="h-8 w-16 relative mx-auto mb-2">
                  <Image
                    src="BKash-Icon-Logo.wine.svg"
                    alt="bKash logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <span className="text-sm font-medium">Pay with bKash</span>
              </div>
              {paymentMethod === 'bkash' && (
                <div className="absolute top-2 right-2 w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </motion.div>

            <motion.div
              className={`relative flex-1 min-w-[140px] p-4 border-2 rounded-lg cursor-pointer flex items-center justify-center ${paymentMethod === 'nagad' ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}
              whileHover={{ scale: 1.03 }}
              onClick={() => setPaymentMethod('nagad')}
            >
              <div className="text-center">
                <div className="h-8 w-16 relative mx-auto mb-2">
                  <Image
                    src="Nagad-Vertical-Logo.wine.svg"
                    alt="Nagad logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <span className="text-sm font-medium">Pay with Nagad</span>
              </div>
              {paymentMethod === 'nagad' && (
                <div className="absolute top-2 right-2 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="p-4 bg-blue-50 rounded-lg mb-6"
        >
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">Total Amount:</span>
            <span className="font-bold text-lg text-blue-600">৳ 1,999</span>
          </div>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Pay Now
        </motion.button>
      </form>
    </motion.div>
  )
}

export default UsersForm
