import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

function ProductVariantModal({ isOpen, onClose, product, variants, onSelect, selectedVariant }) {
  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-white rounded-3xl p-6">
          <Dialog.Title className="text-xl font-semibold text-brand-blue">
            Select {product?.name} Brand
          </Dialog.Title>

          <div className="grid grid-cols-1 gap-4 mt-4">
            {variants?.map((variant) => (
              <button
                key={variant.id}
                onClick={() => {
                  onSelect(variant)
                  onClose()
                }}
                className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all
                  ${selectedVariant?.id === variant.id 
                    ? 'border-brand-blue bg-brand-cream/20' 
                    : 'border-transparent hover:border-brand-blue/20'
                  }`}
              >
                <span className="text-3xl">{variant.image}</span>
                <div className="flex-1 text-left">
                  <h4 className="font-medium text-brand-blue">{variant.name}</h4>
                  <p className="text-sm text-brand-blue/70">{variant.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-blue">{variant.price}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-brand-blue/70 hover:text-brand-blue"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                if (selectedVariant) {
                  onSelect(selectedVariant)
                  onClose()
                }
              }}
              disabled={!selectedVariant}
              className="px-6 py-2 rounded-full bg-brand-blue text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm Selection
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default ProductVariantModal 