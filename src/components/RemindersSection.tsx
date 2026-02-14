import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, BellIcon } from 'lucide-react';
const reminders = [
'Check supply closet inventory',
'Report any equipment issues to maintenance',
'Lock storage room after shift ends',
'Restock soap dispensers in restrooms'];

export function RemindersSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section aria-label="Reminders">
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-5 py-4 min-h-[52px] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-forest"
          aria-expanded={isOpen}
          aria-controls="reminders-content">

          <div className="flex items-center gap-2.5">
            <BellIcon className="w-5 h-5 text-amber-warm" strokeWidth={2} />
            <span className="text-[16px] font-bold text-stone-800 tracking-tight">
              Reminders
            </span>
          </div>
          <motion.div
            animate={{
              rotate: isOpen ? 180 : 0
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20
            }}>

            <ChevronDownIcon
              className="w-5 h-5 text-stone-400"
              strokeWidth={2} />

          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen &&
          <motion.div
            id="reminders-content"
            initial={{
              height: 0,
              opacity: 0
            }}
            animate={{
              height: 'auto',
              opacity: 1
            }}
            exit={{
              height: 0,
              opacity: 0
            }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="overflow-hidden">

              <div className="px-4 pb-4">
                <div className="bg-tan-light rounded-xl px-4 py-3.5 space-y-3">
                  {reminders.map((reminder, index) =>
                <div key={index} className="flex items-start gap-3">
                      <span
                    className="w-1.5 h-1.5 rounded-full bg-amber-warm mt-2 flex-shrink-0"
                    aria-hidden="true" />

                      <span className="text-[14px] text-stone-700 leading-relaxed">
                        {reminder}
                      </span>
                    </div>
                )}
                </div>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </section>);

}