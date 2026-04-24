import { motion } from 'motion/react';
import React from 'react';

interface FeedbackProps {
  children: React.ReactNode;
  className?: string;
}

export const InlineFeedback = ({ children, className = "" }: FeedbackProps) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className={`flex items-center justify-center gap-1.5 text-emerald-600 font-bold text-[11px] uppercase ${className}`}
  >
    {children}
  </motion.div>
);
