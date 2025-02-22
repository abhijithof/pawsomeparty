import { Field, ErrorMessage } from 'formik'
import { useState, useEffect } from 'react'
import { SUBSCRIPTION_PLANS, PRODUCT_VARIANTS } from '@/constants/formData'
import ProductVariantModal from './ProductVariantModal'
import { CheckIcon } from '@heroicons/react/24/outline'

function ProductSelection({ showErrors, onSubmit }) {
  const [selectedProducts, setSelectedProducts] = useState({
    food: [],
    grooming: [],
    toys: []
  })
  
  const [selectedVariants, setSelectedVariants] = useState({})
  const [currentProduct, setCurrentProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [availableProducts] = useState({
    food: [
      { id: 'f1', name: 'Premium Dry Food', category: 'food', image: '🥩', description: 'High-quality kibble for daily nutrition' },
      { id: 'f2', name: 'Wet Food Selection', category: 'food', image: '🥫', description: 'Delicious wet food varieties' },
      { id: 'f3', name: 'Natural Diet Pack', category: 'food', image: '🍖', description: 'All-natural ingredients' },
    ],
    grooming: [
      { id: 'g1', name: 'Shampoo Collection', category: 'grooming', image: '🧴', description: 'Gentle cleansing products' },
      { id: 'g2', name: 'Brush Set', category: 'grooming', image: '🧹', description: 'Essential grooming tools' },
    ],
    toys: [
      { id: 't1', name: 'Interactive Toy', category: 'toys', image: '🧸', description: 'Mental stimulation and fun' },
      { id: 't2', name: 'Chew Toy Bundle', category: 'toys', image: '🦴', description: 'Durable chewing toys' },
      { id: 't3', name: 'Training Toys Set', category: 'toys', image: '🎾', description: 'Perfect for training sessions' },
    ]
  })

  const handleProductSelect = (product, form) => {
    const currentPlan = SUBSCRIPTION_PLANS.find(
      plan => plan.id === form.values.subscriptionPlan
    )
    
    const newSelected = { ...selectedProducts }
    const category = product.category
    const isSelected = newSelected[category].includes(product.id)

    if (isSelected) {
      // Remove product
      newSelected[category] = newSelected[category].filter(id => id !== product.id)
    } else {
      // Check if we can add more products in this category
      if (newSelected[category].length < currentPlan.allowances[category]) {
        newSelected[category] = [...newSelected[category], product.id]
      } else {
        return // Can't add more products in this category
      }
    }

    setSelectedProducts(newSelected)
    form.setFieldValue('selectedProducts', newSelected)
  }

  const handleProductClick = (product, form) => {
    console.log('Product clicked:', product);
    console.log('Available variants:', PRODUCT_VARIANTS[product.id]);
    
    const currentPlan = SUBSCRIPTION_PLANS.find(
      plan => plan.id === form.values.subscriptionPlan
    )
    
    const category = product.category
    
    if (currentPlan.allowances[category] === 0) {
      return;
    }
    
    setCurrentProduct(product)
    setIsModalOpen(true)
  }

  const handleVariantSelect = (variant, form) => {
    const newSelectedVariants = { ...selectedVariants }
    newSelectedVariants[currentProduct.id] = variant
    setSelectedVariants(newSelectedVariants)
    
    // Update form values
    const newSelected = { ...selectedProducts }
    const category = currentProduct.category
    if (!newSelected[category].includes(currentProduct.id)) {
      newSelected[category] = [...newSelected[category], currentProduct.id]
    }
    setSelectedProducts(newSelected)
    
    form.setFieldValue('selectedProducts', {
      food: newSelected.food,
      grooming: newSelected.grooming,
      toys: newSelected.toys,
      variants: newSelectedVariants
    })
  }

  return (
    <div className="space-y-8">
      <h3 className="section-title">Select Your Products ✨</h3>

      <Field name="selectedProducts">
        {({ form }) => {
          const currentPlan = SUBSCRIPTION_PLANS.find(
            plan => plan.id === form.values.subscriptionPlan
          )
          
          return (
            <>
              <div className="space-y-8">
                {Object.entries(availableProducts).map(([category, products]) => (
                  currentPlan?.allowances[category] > 0 && (
                    <div key={category} className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium text-brand-blue capitalize">
                          {category} {category === 'food' ? '🍽️' : category === 'toys' ? '🧸' : '✨'}
                        </h4>
                        <span className="text-sm text-brand-blue/70">
                          Selected: {selectedProducts[category].length}/{currentPlan?.allowances[category]}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {products.map((product) => (
                          <button
                            key={product.id}
                            type="button"
                            onClick={() => handleProductClick(product, form)}
                            className={`product-card relative transition-all border-2 ${
                              selectedProducts[category].includes(product.id) 
                              ? 'border-brand-blue bg-brand-cream/20' 
                              : 'border-transparent hover:border-brand-blue/20'
                            }`}
                          >
                            <span className="text-4xl mb-2">{product.image}</span>
                            <h5 className="product-name">{product.name}</h5>
                            <p className="text-sm text-brand-blue/70">{product.description}</p>
                            
                            {selectedProducts[category].includes(product.id) && (
                              <div className="absolute -top-2 -right-2 bg-white border-2 border-brand-blue text-brand-blue p-2 rounded-full">
                                <CheckIcon className="w-5 h-5" />
                              </div>
                            )}
                            {selectedVariants[product.id] && (
                              <div className="mt-2 text-sm font-medium text-brand-blue">
                                Selected: {selectedVariants[product.id].name}
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
              
              <ProductVariantModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={currentProduct}
                variants={currentProduct ? PRODUCT_VARIANTS[currentProduct.id] : []}
                onSelect={(variant) => handleVariantSelect(variant, form)}
                selectedVariant={currentProduct ? selectedVariants[currentProduct.id] : null}
              />
            </>
          )
        }}
      </Field>
      
      {showErrors && (
        <ErrorMessage 
          name="selectedProducts" 
          component="div" 
          className="form-error" 
        />
      )}

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="btn-secondary"
        >
          Previous
        </button>
        <button
          type="submit"
          className="btn-primary"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default ProductSelection 