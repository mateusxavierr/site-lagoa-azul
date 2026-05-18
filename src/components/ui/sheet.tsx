import { useEffect, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  open: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  className?: string
}

export function Sheet({ open, onClose, children, title, className }: Props) {
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-surface-overlay backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title ?? 'Menu'}
            className={cn(
              'fixed inset-y-0 right-0 z-50 w-full max-w-md bg-surface-inverse text-white shadow-2xl flex flex-col',
              className,
            )}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="flex items-center justify-end p-4">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center w-touch-min h-touch-min rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" aria-hidden />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 pb-8">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
