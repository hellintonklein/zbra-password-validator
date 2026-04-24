import React from 'react';
import { TextInput, TextInputProps } from '@mantine/core';
import { cn } from '@/src/shared/ui/design-system';

interface InputProps extends TextInputProps {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        label={label}
        error={error}
        data-testid={props.id}
        classNames={{
          root: "w-full",
          label: "text-[clamp(0.55rem,1.8vw,0.6rem)] font-bold text-gray-400 uppercase tracking-widest ml-1 mb-1.5",
          input: cn(
            "h-[clamp(2.25rem,8vw,2.75rem)] px-4 text-[clamp(0.7rem,2vw,0.8rem)] font-medium",
            "transition-all duration-300 placeholder:text-gray-300"
          ),
          error: "text-[clamp(0.55rem,1.8vw,0.6rem)] font-semibold text-brand-error mt-1.5 ml-1 animate-in fade-in slide-in-from-top-1",
        }}
        {...props}
      />
    );
  }
);

