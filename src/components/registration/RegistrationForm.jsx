import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import PersonalInfo from './PersonalInfo'
import PetInfo from './PetInfo'
import { useState } from 'react'
import SubscriptionPlan from './SubscriptionPlan'
import ProductSelection from './ProductSelection'
import SubmissionSuccess from './SubmissionSuccess'

const personalInfoValidation = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  address: Yup.string().required('Address is required'),
})

const petInfoValidation = Yup.object({
  petType: Yup.string().required('Pet type is required'),
  breed: Yup.string().required('Breed is required'),
  petPhoto: Yup.mixed().required('Pet photo is required')
})

const subscriptionValidation = Yup.object({
  subscriptionPlan: Yup.string().required('Please select a subscription plan')
})

const productSelectionValidation = Yup.object({
  selectedProducts: Yup.object().shape({
    food: Yup.array().min(1, 'Please select at least one food item'),
    grooming: Yup.array().min(1, 'Please select at least one grooming product'),
    toys: Yup.array().when('subscriptionPlan', {
      is: (val) => val !== 'essential',
      then: () => Yup.array().min(1, 'Please select at least one toy'),
      otherwise: () => Yup.array()
    }),
    variants: Yup.object()
  })
})

function RegistrationForm() {
  const [step, setStep] = useState(1)
  const [showErrors, setShowErrors] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submittedData, setSubmittedData] = useState(null)

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    petType: '',
    breed: '',
    petPhoto: null,
    subscriptionPlan: '',
    selectedProducts: {
      food: [],
      grooming: [],
      toys: []
    }
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log('Form values:', values)
      // Here you would typically make an API call
      setSubmittedData(values)
      setIsSuccess(true)
      setSubmitting(false)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitting(false)
    }
  }

  const handleNextStep = async (values, actions) => {
    setShowErrors(true)
    try {
      await getValidationSchema(step).validate(values, { abortEarly: false })
      setStep(prev => Math.min(prev + 1, 4))
      setShowErrors(false)
    } catch (err) {
      const errors = {}
      err.inner.forEach((e) => {
        errors[e.path] = e.message
      })
      actions.setErrors(errors)
    }
  }

  const getValidationSchema = (currentStep) => {
    switch (currentStep) {
      case 1:
        return personalInfoValidation
      case 2:
        return petInfoValidation
      case 3:
        return subscriptionValidation
      case 4:
        return productSelectionValidation
      default:
        return null
    }
  }

  if (isSuccess && submittedData) {
    return <SubmissionSuccess formData={submittedData} />
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getValidationSchema(step)}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, setErrors }) => (
        <Form className="space-y-6">
          {step === 1 && <PersonalInfo showErrors={showErrors} />}
          {step === 2 && <PetInfo showErrors={showErrors} />}
          {step === 3 && <SubscriptionPlan showErrors={showErrors} />}
          {step === 4 && <ProductSelection showErrors={showErrors} />}
          
          <div className="flex justify-between gap-4 mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => {
                  setStep(step - 1)
                  setShowErrors(false)
                }}
                className="btn-secondary"
              >
                Previous
              </button>
            )}
            
            {step < 4 ? (
              <button
                type="button"
                onClick={() => handleNextStep(values, { setErrors })}
                className="btn-primary ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary ml-auto"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm 