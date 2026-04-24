# Plano de Desenvolvimento: ZBRA Password Validator

Este documento descreve o planejamento estratégico realizado antes de cada etapa da implementação técnica.

---

## 📅 Fase 1: Arquitetura e Estrutura de Pastas
**Objetivo**: Estabelecer uma base escalável que suporte mudanças futuras sem afetar o core da aplicação.
- **Plano**:
    - Adotar **Feature-Based Clean Architecture**.
    - Definir `src/features/password-validator` como o módulo principal.
    - Criar as subcamadas: `domain`, `application`, `infrastructure`, e `ui`.
    - Configurar aliases de caminho (`@/`) para importações limpas.

## 📅 Fase 2: Lógica de Domínio (Business Rules)
**Objetivo**: Implementar a lógica de validação de 6 dígitos puro e cego a frameworks.
- **Regras Matemáticas**:
    - Comprimento exato de 6.
    - Range: `184759` a `856920`.
    - Adjacência: Pelo menos um par de dígitos iguais.
    - Ordem: Sequência nunca decrescente (Non-decreasing).
- **Plano**: Escrever as funções de validação e cobrir 100% com testes unitários no Vitest antes de criar qualquer tela.

## 📅 Fase 3: Gerenciamento de Estado (Global Store)
**Objetivo**: Permitir que os resultados das validações sejam compartilhados eficientemente.
- **Plano**:
    - Implementar `usePasswordStore` com **Zustand**.
    - Adicionar middleware de persistência para manter dados básicos se necessário.
    - Integrar o repositório (`infrastructure`) para lidar com o POST da API.

## 📅 Fase 4: Interface do Usuário (UI/UX)
**Objetivo**: Criar uma interface "Mobile-First" focada em feedback em tempo real.
- **Plano**:
    - Utilizar **Tailwind CSS v4** para estilização utilitária.
    - Adotar a filosofia de "Sleek Interface" com contrastes suaves e tipografia moderna (Inter/Space Grotesk).
    - Implementar feedback visual (verde/vermelho + strikethrough) para cada regra de senha enquanto o usuário digita.

## 📅 Fase 5: Refinamento Minimalista (Optimization)
**Objetivo**: Eliminar o scroll em telas pequenas e melhorar a densidade de informação.
- **Plano**:
    - Comprimir paddings e margens.
    - Transformar a emulação de celular em um layout web responsivo completo (split-pane no desktop, vertical no mobile).
    - Garantir que o formulário de cadastro seja o único foco visual.

## 📅 Fase 6: Garantia de Qualidade (QA & E2E)
**Objetivo**: Validar fluxos completos e casos de borda.
- **Plano**:
    - Criar o arquivo `test-data.md` com casos válidos e inválidos.
    - Implementar o fluxo do **Playwright** para cobrir erros de submissão, campos obrigatórios e sucesso final.

## 📅 Fase 7: Finalização e Limpeza
**Objetivo**: Preparar o projeto para entrega final.
- **Plano**:
    - Executar `npm run lint` e `npm run build`.
    - Remover dependências órfãs (`package.json`).
    - Escrever as documentações finais (`README.md` e `DEVELOPMENT_LEDGER.md`).
