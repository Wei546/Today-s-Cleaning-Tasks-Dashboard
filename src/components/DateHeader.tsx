import React from 'react';
import { LeafIcon } from 'lucide-react';
export function DateHeader() {
  const today = new Date();
  const formatted = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return (
    <div
      className="rounded-xl px-5 py-4 flex items-center justify-center gap-2.5"
      style={{
        backgroundColor: 'rgba(64, 145, 108, 0.12)'
      }}
      role="banner">

      <LeafIcon className="w-5 h-5 text-forest" strokeWidth={2} />
      <time
        dateTime={today.toISOString().split('T')[0]}
        className="text-forest font-semibold text-[15px] tracking-tight">

        {formatted}
      </time>
    </div>);

}