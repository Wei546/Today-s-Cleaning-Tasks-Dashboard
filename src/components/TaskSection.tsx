import React from 'react';
interface TaskSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}
export function TaskSection({ title, icon, children }: TaskSectionProps) {
  return (
    <section aria-label={title}>
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm border-l-4 border-l-forest overflow-hidden">
        {/* Section header */}
        <div className="flex items-center gap-2.5 px-5 pt-5 pb-2">
          <span className="text-forest flex-shrink-0">{icon}</span>
          <h2 className="text-[16px] font-bold text-forest tracking-tight">
            {title}
          </h2>
        </div>

        {/* Task list */}
        <div className="px-4 pb-4 divide-y divide-stone-100">{children}</div>
      </div>
    </section>);

}