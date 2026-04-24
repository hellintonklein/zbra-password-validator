import React from 'react';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';

interface ButtonProps extends MantineButtonProps {
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, isLoading, children, disabled, ...props }, ref) => {
    return (
      <MantineButton
        ref={ref}
        loading={isLoading}
        disabled={disabled}
        data-testid={props.id}
        variant="filled"
        color="brand"
        size="lg"
        className={className}
        classNames={{
          root: "h-[clamp(2.5rem,10vw,3rem)] px-8 font-bold tracking-tight text-[clamp(0.75rem,2vw,0.875rem)]",
          inner: "gap-2",
        }}
        {...props}
      >
        {children}
      </MantineButton>
    );
  }
);
