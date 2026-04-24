import React from 'react';
import { PasswordInput as MantinePasswordInput, PasswordInputProps } from '@mantine/core';
import { cn } from '@/src/shared/ui/design-system';

interface CustomPasswordInputProps extends PasswordInputProps {}

export const PasswordInput = React.forwardRef<HTMLInputElement, CustomPasswordInputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <MantinePasswordInput
        ref={ref}
        label={label}
        error={error}
        data-testid={props.id}
        classNames={{
          root: "w-full",
          label: "text-[clamp(0.55rem,1.8vw,0.6rem)] font-bold text-gray-400 uppercase tracking-widest ml-1 mb-1.5",
          input: cn(
            "h-[clamp(2.25rem,8vw,2.75rem)] text-[clamp(0.7rem,2vw,0.8rem)] font-medium",
            "transition-all duration-300 placeholder:text-gray-300"
          ),
          innerInput: "h-full px-4",
          error: "text-[clamp(0.55rem,1.8vw,0.6rem)] font-semibold text-brand-error mt-1.5 ml-1 animate-in fade-in slide-in-from-top-1",
          visibilityToggle: "text-gray-400 hover:text-brand transition-colors mr-2",
        }}
        {...props}
      />
    );
  }
);
