import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { PaintbrushIcon, CalendarIcon, StarIcon } from 'lucide-react';
import { DateHeader } from './DateHeader';
import { TaskSection } from './TaskSection';
import { TaskCard } from './TaskCard';
import { ConfirmationSection } from './ConfirmationSection';
import { RemindersSection } from './RemindersSection';
interface TaskItem {
  id: string;
  label: string;
  subtitle?: string;
  checked: boolean;
}
interface TaskGroup {
  title: string;
  icon: React.ReactNode;
  tasks: TaskItem[];
}
const initialTaskGroups: TaskGroup[] = [
{
  title: 'Daily Routine Cleaning',
  icon: <PaintbrushIcon className="w-5 h-5" strokeWidth={2} />,
  tasks: [
  {
    id: 'daily-1',
    label: 'Sweep all walkways',
    checked: false
  },
  {
    id: 'daily-2',
    label: 'Empty recycling bins',
    checked: false
  },
  {
    id: 'daily-3',
    label: 'Wipe down benches and tables',
    checked: false
  },
  {
    id: 'daily-4',
    label: 'Clean restroom facilities',
    checked: false
  }]

},
{
  title: "Today's Scheduled Cleaning",
  icon: <CalendarIcon className="w-5 h-5" strokeWidth={2} />,
  tasks: [
  {
    id: 'sched-1',
    label: 'Zone A — Mop entrance hall',
    subtitle: 'Scheduled: 9:00 AM',
    checked: false
  },
  {
    id: 'sched-2',
    label: 'Zone B — Mop activity room',
    subtitle: 'Scheduled: 10:30 AM',
    checked: false
  },
  {
    id: 'sched-3',
    label: 'Collect and replace trash bags',
    subtitle: 'All zones',
    checked: false
  }]

},
{
  title: 'Special Tasks Today',
  icon: <StarIcon className="w-5 h-5" strokeWidth={2} />,
  tasks: [
  {
    id: 'special-1',
    label: 'Clear debris from nature trail',
    subtitle: 'Section 3–5',
    checked: false
  },
  {
    id: 'special-2',
    label: 'Pressure wash rock climbing wall',
    subtitle: 'East face only',
    checked: false
  }]

}];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};
export function CleaningDashboard() {
  const [taskGroups, setTaskGroups] = useState<TaskGroup[]>(initialTaskGroups);
  const [staffConfirmed, setStaffConfirmed] = useState(false);
  const [managerConfirmed, setManagerConfirmed] = useState(false);
  const toggleTask = (groupIndex: number, taskId: string) => {
    setTaskGroups((prev) =>
    prev.map((group, gi) =>
    gi === groupIndex ?
    {
      ...group,
      tasks: group.tasks.map((task) =>
      task.id === taskId ?
      {
        ...task,
        checked: !task.checked
      } :
      task
      )
    } :
    group
    )
    );
  };
  const totalTasks = taskGroups.reduce((sum, g) => sum + g.tasks.length, 0);
  const completedTasks = taskGroups.reduce(
    (sum, g) => sum + g.tasks.filter((t) => t.checked).length,
    0
  );
  const progress = totalTasks > 0 ? completedTasks / totalTasks * 100 : 0;
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-md mx-auto px-5 py-6 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6">

          {/* Header */}
          <motion.div variants={itemVariants}>
            <h1 className="text-[22px] font-bold text-forest-dark tracking-tight mb-1">
              Cleaning Dashboard
            </h1>
            <p className="text-[14px] text-stone-500 mb-4">
              {completedTasks} of {totalTasks} tasks completed
            </p>

            {/* Progress bar */}
            <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden mb-5">
              <motion.div
                className="h-full bg-forest rounded-full"
                initial={{
                  width: 0
                }}
                animate={{
                  width: `${progress}%`
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut'
                }} />

            </div>

            <DateHeader />
          </motion.div>

          {/* Task Sections */}
          {taskGroups.map((group, groupIndex) =>
          <motion.div key={group.title} variants={itemVariants}>
              <TaskSection title={group.title} icon={group.icon}>
                {group.tasks.map((task) =>
              <TaskCard
                key={task.id}
                label={task.label}
                subtitle={task.subtitle}
                checked={task.checked}
                onToggle={() => toggleTask(groupIndex, task.id)} />

              )}
              </TaskSection>
            </motion.div>
          )}

          {/* Confirmation */}
          <motion.div variants={itemVariants}>
            <ConfirmationSection
              staffConfirmed={staffConfirmed}
              managerConfirmed={managerConfirmed}
              onStaffConfirm={() => setStaffConfirmed(true)}
              onManagerConfirm={() => setManagerConfirmed(true)} />

          </motion.div>

          {/* Reminders */}
          <motion.div variants={itemVariants}>
            <RemindersSection />
          </motion.div>
        </motion.div>
      </div>
    </div>);

}