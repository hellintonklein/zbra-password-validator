import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ValidationResult } from '../domain/types';
import { validatePassword } from '../domain/rules';

interface PasswordState {
  name: string;
  email: string;
  password: string;
  validation: ValidationResult;
  
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  reset: () => void;
}

export const usePasswordStore = create<PasswordState>()(
  persist(
    (set) => ({
      name: '',
      email: '',
      password: '',
      validation: { isValid: false, failedRuleIds: [], errors: [] },

      setName: (name) => set({ name }),
      setEmail: (email) => set({ email }),
      setPassword: (password) => {
        const validation = validatePassword(password);
        set({ password, validation });
      },
      
      reset: () => set({
        name: '',
        email: '',
        password: '',
        validation: { isValid: false, failedRuleIds: [], errors: [] }
      }),
    }),
    {
      name: 'password-validator-storage',
      partialize: (state) => ({ 
        name: state.name, 
        email: state.email 
      }),
    }
  )
);
