import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { SUBSCRIPTION_PLANS, PRODUCT_VARIANTS } from '@/constants/formData'
import ReactConfetti from 'react-confetti'
import { useState, useEffect } from 'react'

function SubmissionSuccess({ formData }) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    // Stop confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, 5000)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timer)
    }
  }, [])

  const plan = SUBSCRIPTION_PLANS.find(p => p.id === formData.subscriptionPlan)
  
  const getSelectedProductNames = (category) => {
    return formData.selectedProducts[category].map(productId => {
      const variant = formData.selectedProducts.variants[productId]
      return variant ? variant.name : ''
    }).filter(Boolean)
  }

  return (
    <div className="text-center space-y-6 py-8 relative">
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={200}
          recycle={false}
          colors={['#60A5FA', '#93C5FD', '#3B82F6', '#1D4ED8']}
        />
      )}
      
      <div className="flex justify-center">
        <CheckCircleIcon className="w-20 h-20 text-green-500" />
      </div>
      
      <h2 className="text-2xl font-bold text-brand-blue">
        Registration Successful! 🎉
      </h2>
      
      <div className="max-w-md mx-auto text-left space-y-4 bg-white/50 p-6 rounded-2xl">
        <div>
          <h3 className="font-medium text-brand-blue">Personal Information</h3>
          <p>{formData.name}</p>
          <p>{formData.email}</p>
          <p>{formData.phone}</p>
        </div>
        
        <div>
          <h3 className="font-medium text-brand-blue">Pet Information</h3>
          <p>Type: {formData.petType}</p>
          <p>Breed: {formData.breed}</p>
        </div>
        
        <div>
          <h3 className="font-medium text-brand-blue">Subscription Plan</h3>
          <p>{plan.name} - ₹{plan.price}/month</p>
        </div>
        
        <div>
          <h3 className="font-medium text-brand-blue">Selected Products</h3>
          <div className="space-y-2">
            <p>Food: {getSelectedProductNames('food').join(', ')}</p>
            <p>Grooming: {getSelectedProductNames('grooming').join(', ')}</p>
            <p>Toys: {getSelectedProductNames('toys').join(', ')}</p>
          </div>
        </div>
      </div>
      
      <p className="text-brand-blue/70">
        Thank you for choosing our service! You will receive a confirmation email shortly.
      </p>
    </div>
  )
}

export default SubmissionSuccess 