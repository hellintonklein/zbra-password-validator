import { useState } from 'react';
import { usePasswordStore } from './usePasswordStore';
import { PasswordRepository } from '../infrastructure/repository';

export const usePasswordService = () => {
  const name = usePasswordStore(s => s.name);
  const email = usePasswordStore(s => s.email);
  const password = usePasswordStore(s => s.password);
  const validation = usePasswordStore(s => s.validation);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const submit = async () => {
    if (!validation.isValid || !name || !email) return;

    setIsSubmitting(true);
    setSubmissionStatus('idle');
    
    try {
      await PasswordRepository.submit({ name, email, password });
      setSubmissionStatus('success');
    } catch (error) {
      setSubmissionStatus('error');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => setSubmissionStatus('idle');

  return {
    submit,
    isSubmitting,
    submissionStatus,
    resetStatus
  };
};
