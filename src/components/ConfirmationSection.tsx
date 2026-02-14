import React from 'react';
import { motion } from 'framer-motion';
import { UserCheckIcon, ShieldCheckIcon } from 'lucide-react';
interface ConfirmationSectionProps {
  onStaffConfirm: () => void;
  onManagerConfirm: () => void;
  staffConfirmed: boolean;
  managerConfirmed: boolean;
}
export function ConfirmationSection({
  onStaffConfirm,
  onManagerConfirm,
  staffConfirmed,
  managerConfirmed
}: ConfirmationSectionProps) {
  return (
    <section aria-label="Confirmation" className="space-y-3">
      <motion.button
        type="button"
        onClick={onStaffConfirm}
        disabled={staffConfirmed}
        whileTap={{
          scale: 0.97
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 17
        }}
        className={`w-full rounded-full py-4 px-6 text-[16px] font-semibold text-white flex items-center justify-center gap-2.5 min-h-[52px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest ${staffConfirmed ? 'bg-forest/60 cursor-default' : 'bg-forest active:bg-forest-dark'}`}
        aria-label={staffConfirmed ? 'Staff confirmed' : 'Confirm as staff'}>

        <UserCheckIcon className="w-5 h-5" strokeWidth={2} />
        {staffConfirmed ? 'Staff Confirmed ✓' : 'Staff Confirmation'}
      </motion.button>

      <motion.button
        type="button"
        onClick={onManagerConfirm}
        disabled={managerConfirmed}
        whileTap={{
          scale: 0.97
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 17
        }}
        className={`w-full rounded-full py-4 px-6 text-[16px] font-semibold text-white flex items-center justify-center gap-2.5 min-h-[52px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest-dark ${managerConfirmed ? 'bg-forest-dark/60 cursor-default' : 'bg-forest-dark active:bg-[#143526]'}`}
        aria-label={
        managerConfirmed ? 'Manager confirmed' : 'Confirm as manager'
        }>

        <ShieldCheckIcon className="w-5 h-5" strokeWidth={2} />
        {managerConfirmed ? 'Manager Confirmed ✓' : 'Manager Confirmation'}
      </motion.button>
    </section>);

}