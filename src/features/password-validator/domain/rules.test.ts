import { describe, it, expect } from 'vitest';
import { validatePassword } from './rules';
import { RuleId } from './types';

describe('Password Validation Logic - JSON Requirements', () => {
  const testCases = {
    boundary: [
      {
        input: '184759',
        valid: false,
        errors: [RuleId.ADJACENT],
        description: 'Limite inferior sem dígitos repetidos'
      },
      {
        input: '184760',
        valid: false,
        errors: [RuleId.ADJACENT, RuleId.NON_DECREASING],
        description: 'Logo acima do mínimo mas com queda de dígito'
      },
      {
        input: '856920',
        valid: false,
        errors: [RuleId.NON_DECREASING],
        description: 'Limite superior com dígitos decrescentes'
      },
      {
        input: '856921',
        valid: false,
        errors: [RuleId.RANGE],
        description: 'Acima do limite máximo'
      },
      {
        input: '184758',
        valid: false,
        errors: [RuleId.RANGE],
        description: 'Abaixo do limite mínimo'
      }
    ],
    validCases: [
      {
        input: '188888',
        valid: true,
        errors: [],
        description: 'Repetição múltipla e não decrescente dentro do range'
      },
      {
        input: '223456',
        valid: true,
        errors: [],
        description: 'Par adjacente no início e crescente'
      },
      {
        input: '345555',
        valid: true,
        errors: [],
        description: 'Repetição no final'
      },
      {
        input: '667789',
        valid: true,
        errors: [],
        description: 'Repetição no meio e crescente'
      },
      {
        input: '778899',
        valid: true,
        errors: [],
        description: 'Múltiplos pares adjacentes'
      }
    ],
    format: [
      {
        input: '12345',
        valid: false,
        errors: [RuleId.LENGTH],
        description: 'Menos de 6 dígitos'
      },
      {
        input: '1234567',
        valid: false,
        errors: [RuleId.LENGTH],
        description: 'Mais de 6 dígitos'
      },
      {
        input: '012345',
        valid: false,
        errors: [RuleId.LENGTH],
        description: 'Começa com zero (não considerado 6 dígitos válidos)'
      },
      {
        input: 'abcdef',
        valid: false,
        errors: [RuleId.LENGTH],
        description: 'Entrada não numérica'
      },
      {
        input: '',
        valid: false,
        errors: [RuleId.LENGTH],
        description: 'Entrada vazia'
      }
    ],
    adjacency: [
      {
        input: '123456',
        valid: false,
        errors: [RuleId.ADJACENT, RuleId.RANGE],
        description: 'Sem dígitos repetidos'
      },
      {
        input: '121212',
        valid: false,
        errors: [RuleId.ADJACENT, RuleId.NON_DECREASING, RuleId.RANGE],
        description: 'Repetição não adjacente'
      }
    ],
    ordering: [
      {
        input: '223450',
        valid: false,
        errors: [RuleId.NON_DECREASING],
        description: 'Queda no final'
      },
      {
        input: '123454',
        valid: false,
        errors: [RuleId.NON_DECREASING],
        description: 'Queda após crescimento'
      },
      {
        input: '111110',
        valid: false,
        errors: [RuleId.NON_DECREASING],
        description: 'Queda no último dígito'
      }
    ],
    combinedEdgeCases: [
      {
        input: '111111',
        valid: false,
        errors: [RuleId.RANGE],
        description: 'Todos iguais mas fora do range'
      },
      {
        input: '135679',
        valid: false,
        errors: [RuleId.ADJACENT, RuleId.RANGE],
        description: 'Crescente mas sem repetição'
      },
      {
        input: '124433',
        valid: false,
        errors: [RuleId.NON_DECREASING],
        description: 'Tem repetição mas quebra ordem'
      },
      {
        input: '122221',
        valid: false,
        errors: [RuleId.NON_DECREASING],
        description: 'Sobe e depois desce'
      },
      {
        input: '100000',
        valid: false,
        errors: [RuleId.NON_DECREASING, RuleId.RANGE],
        description: 'Queda brusca e fora do range'
      }
    ]
  };

  Object.entries(testCases).forEach(([category, cases]) => {
    describe(category, () => {
      cases.forEach(({ input, valid, errors, description }) => {
        it(`${description} (${input})`, () => {
          const result = validatePassword(input);
          expect(result.isValid).toBe(valid);
          
          // Check if all expected errors are present
          errors.forEach(expectedError => {
            expect(result.failedRuleIds).toContain(expectedError);
          });

          // Verify that errors are translated (not just keys)
          if (!valid) {
            result.errors.forEach(error => {
              expect(typeof error).toBe('string');
              expect(error).not.toContain('requirements.'); // Should be translated, not a raw key
            });
          }
        });
      });
    });
  });
});
