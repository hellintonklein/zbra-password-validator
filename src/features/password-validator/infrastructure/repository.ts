import { PasswordValidationRequest } from '../domain/types';

const API_URL = 'https://zbra-frontend-challenge.azurewebsites.net/api/PasswordValidation';

export const PasswordRepository = {
  submit: async (data: PasswordValidationRequest): Promise<void> => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status !== 201) {
      throw new Error('Falha ao enviar resultado. Tente novamente.');
    }
  },
};
