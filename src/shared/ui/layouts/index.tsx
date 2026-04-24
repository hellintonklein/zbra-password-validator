import React from 'react';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageContainer: Global screen wrapper that maintains the application's "Luxury" aesthetic.
 * Base for every page in the system.
 */
export const PageContainer: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-bg-main relative overflow-hidden flex items-center justify-center p-[clamp(0.2rem,1.5vw,1.5rem)]">
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
    {children}
  </div>
);

/**
 * SplitLayout: Standard card container for main content with consistent shadows and animations.
 * Provides a flex layout for MainSection and Sidebar.
 */
export const SplitLayout: React.FC<LayoutProps> = ({ children }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    style={{ willChange: 'transform, opacity' }}
    className="w-full max-w-5xl md:min-h-[600px] bg-bg-surface flex flex-col md:flex-row border border-border-light rounded-[clamp(0.6rem,3vw,2rem)] shadow-[var(--shadow-luxury)] relative z-10 overflow-hidden"
  >
    {children}
  </motion.div>
);

/**
 * MainSection: Main content area within a SplitLayout.
 */
export const MainSection: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex-1 p-[clamp(0.75rem,4vw,3rem)] flex flex-col justify-center min-w-0">
    {children}
  </div>
);

/**
 * Sidebar: Sidebar area within a SplitLayout.
 */
export const Sidebar: React.FC<LayoutProps> = ({ children }) => (
  <div className="w-full md:w-[320px] lg:w-[400px] flex-shrink-0 bg-gray-50/80 backdrop-blur-sm p-[clamp(0.75rem,3vw,2rem)] border-t md:border-t-0 md:border-l border-border-light flex flex-col justify-between">
    {children}
  </div>
);

/**
 * FormLayout: Standardized form layout with consistent vertical spacing.
 */
export const FormLayout: React.FC<LayoutProps & { id?: string; onSubmit?: (e: React.FormEvent) => void }> = ({ 
  children, 
  id, 
  onSubmit 
}) => (
  <form 
    id={id}
    onSubmit={onSubmit} 
    className="w-full flex flex-col space-y-[clamp(0.4rem,2vw,0.8rem)]"
  >
    {children}
  </form>
);

/**
 * FormActions: Container for form actions (buttons, status messages) with consistent spacing.
 */
export const FormActions: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col space-y-[clamp(0.3rem,1.2vw,0.6rem)] mt-[clamp(0.6rem,3vw,1.5rem)]">
    {children}
  </div>
);
