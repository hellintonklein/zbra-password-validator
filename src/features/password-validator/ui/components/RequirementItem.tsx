import React from 'react';
import { Text } from '@mantine/core';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/shared/ui/design-system';

interface RequirementItemProps {
  id: string;
  label: string;
  isError: boolean;
}

export const RequirementItem: React.FC<RequirementItemProps> = ({ 
  id,
  label, 
  isError 
}) => (
  <div 
    data-testid={`requirement-${id}`}
    data-valid={!isError}
    className="flex items-center gap-[clamp(0.4rem,1.5vw,0.6rem)] py-[clamp(0.2rem,0.8vw,0.4rem)]"
  >
    <div
      className={cn(
        "w-[clamp(0.85rem,3.5vw,1.1rem)] h-[clamp(0.85rem,3.5vw,1.1rem)] rounded-md flex-shrink-0 transition-all duration-500 flex items-center justify-center",
        isError 
          ? "bg-gray-100 text-gray-300" 
          : "bg-brand-success text-white shadow-md shadow-brand-success/20"
      )} 
    >
      <CheckCircle2 strokeWidth={3} className="w-[clamp(0.5rem,2vw,0.65rem)] h-[clamp(0.5rem,2vw,0.65rem)]" />
    </div>
    <Text 
      fw={600}
      className={cn(
        "transition-all duration-300 text-[clamp(0.65rem,2.2vw,0.75rem)]",
        !isError ? "text-gray-400 line-through opacity-70" : "text-gray-700"
      )}
    >
      {label}
    </Text>
  </div>
);
