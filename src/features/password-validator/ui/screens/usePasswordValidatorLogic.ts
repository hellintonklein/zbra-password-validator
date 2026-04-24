import { usePasswordStore } from '../../application/usePasswordStore';
import { usePasswordService } from '../../application/usePasswordService';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export const usePasswordValidatorLogic = () => {
  const name = usePasswordStore(s => s.name);
  const email = usePasswordStore(s => s.email);
  const password = usePasswordStore(s => s.password);
  const validation = usePasswordStore(s => s.validation);
  const setName = usePasswordStore(s => s.setName);
  const setEmail = usePasswordStore(s => s.setEmail);
  const setPassword = usePasswordStore(s => s.setPassword);
  const resetStore = usePasswordStore(s => s.reset);

  const service = usePasswordService();
  
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { isValid: formIsValid } 
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: name,
      email: email,
      password: password
    }
  });

  const watchedPassword = watch('password');
  const watchedName = watch('name');
  const watchedEmail = watch('email');

  useEffect(() => {
    setPassword(watchedPassword || '');
  }, [watchedPassword, setPassword]);

  useEffect(() => {
    setName(watchedName || '');
  }, [watchedName, setName]);

  useEffect(() => {
    setEmail(watchedEmail || '');
  }, [watchedEmail, setEmail]);

  const canSubmit = formIsValid && validation.isValid;

  const onFormSubmit = async () => {
    if (canSubmit) {
      await service.submit();
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onFormSubmit),
    validation: validation,
    isSubmitting: service.isSubmitting,
    submissionStatus: service.submissionStatus,
    canSubmit,
    reset: () => {
      resetStore();
      service.resetStatus();
    }
  };
};
