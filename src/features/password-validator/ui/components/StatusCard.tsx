import React from 'react';
import { Text, Paper, Transition } from '@mantine/core';
import { cn } from '@/src/shared/ui/design-system';
import { useTranslation } from 'react-i18next';

interface StatusCardProps {
  show: boolean;
  status: 'idle' | 'success' | 'error';
  children: React.ReactNode;
}

export const StatusCard: React.FC<StatusCardProps> = ({ 
  show, 
  status,
  children 
}) => {
  const { t } = useTranslation('password_validator');

  return (
    <Transition mounted={show} transition="slide-up" duration={400} timingFunction="ease">
      {(styles) => (
        <Paper 
          data-testid="status-card"
          data-status={status}
          style={styles}
          p="clamp(0.6rem,2.5vw,0.8rem)"
          radius="clamp(0.4rem,1.5vw,0.8rem)"
          className={cn(
            "border relative overflow-hidden",
            status === 'success' ? "bg-emerald-50 border-emerald-100" : "bg-brand-error/5 border-brand-error/10"
          )}
        >
          <div 
            className={cn(
              "absolute top-0 right-0 w-24 h-24 blur-2xl opacity-10 rounded-full -translate-y-1/2 translate-x-1/2",
              status === 'success' ? "bg-brand-success" : "bg-brand-error"
            )} 
          />
          
          <Text fw={800} c="dimmed" tt="uppercase" lts="0.1em" mb={4} className="text-[clamp(0.5rem,1.5vw,0.55rem)]">
            {t('status.analysis')}
          </Text>
          <Text 
            fw={700} 
            className={cn(
              "text-[clamp(0.65rem,2.2vw,0.75rem)]",
              status === 'success' ? "text-emerald-800" : "text-brand-error"
            )}
          >
            {children}
          </Text>
        </Paper>
      )}
    </Transition>
  );
};
