import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
interface TaskCardProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
  subtitle?: string;
}
export function TaskCard({
  label,
  checked,
  onToggle,
  subtitle
}: TaskCardProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-start gap-4 w-full text-left py-3 px-1 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 rounded-lg transition-colors"
      role="checkbox"
      aria-checked={checked}
      aria-label={`${label}${checked ? ' — completed' : ''}`}>

      {/* Custom circular checkbox */}
      <motion.div
        className="relative flex-shrink-0 mt-0.5"
        whileTap={{
          scale: 0.85
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 17
        }}>

        <motion.div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${checked ? 'bg-forest border-forest' : 'bg-white border-stone-300'}`}
          animate={
          checked ?
          {
            scale: [0.85, 1.1, 1]
          } :
          {
            scale: 1
          }
          }
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 15
          }}>

          <motion.div
            initial={false}
            animate={{
              scale: checked ? 1 : 0,
              opacity: checked ? 1 : 0
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 20
            }}>

            <CheckIcon className="w-3.5 h-3.5 text-white" strokeWidth={3} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Text content */}
      <div className="flex-1 min-w-0">
        <span
          className={`block text-[15px] font-medium leading-snug transition-all duration-200 ${checked ? 'text-stone-400 line-through' : 'text-stone-800'}`}>

          {label}
        </span>
        {subtitle &&
        <span
          className={`block text-[13px] mt-0.5 transition-colors duration-200 ${checked ? 'text-stone-300' : 'text-stone-500'}`}>

            {subtitle}
          </span>
        }
      </div>
    </button>);

}