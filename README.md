# ZBRA Password Validator Challenge

Este projeto é uma solução para o **ZBRA Frontend Challenge**, focada na criação de um validador de senhas robusto, performático e com uma experiência de usuário (UX) de alto nível.

## 🚀 Passo a Passo de Execução

Siga as instruções abaixo para rodar o projeto localmente:

### Pré-requisitos
- **Node.js** (v18 ou superior)
- **npm** ou **yarn**

### Instalação
```bash
# Clone o repositório
git clone https://github.com/hellintonklein/zbra-password-validator.git

# Entre no diretório
cd zbra-password-validator

# Instale as dependências
npm install
```

### Rodando a Aplicação
```bash
# Iniciar o servidor de desenvolvimento
npm run dev
```
A aplicação estará disponível em `http://localhost:3012` ou na porta configurada em env (`PORT`).

### Executando Testes
```bash
# Testes Unitários (Vitest)
npm run test

# Testes de Integração End-to-End com Playwright
npm run test:e2e

# Testes de Integração End-to-End com Playwright com UI
npm run test:e2e:ui

# Verificação de Tipagem e Lint
npm run lint
```

---

## 🏗️ Descrição da Solução

### Arquitetura e Organização
A aplicação foi estruturada seguindo o padrão de **Feature-Driven + Layered Architecture**, combinada com um **Shared Design System**. Esta escolha garante a separação total entre a lógica de negócio e os detalhes de infraestrutura/UI, além de promover alta reutilização de código.

**Camadas do Projeto:**
1.  **Domain (`src/features/*/domain`)**: Lógica pura de validação e regras de negócio.
2.  **Application (`src/features/*/application`)**: Orquestração de casos de uso e estado global (Zustand).
3.  **Infrastructure (`src/features/*/infrastructure`)**: Comunicações externas e persistência.
4.  **UI (`src/features/*/ui`)**: Telas e componentes específicos da funcionalidade.
5.  **Shared UI (`src/shared/ui`)**: Componentes globais (`/components`) e Primitivos de Layout (`/layouts`).

### Padrões de Projeto (Design Patterns)
- **Vertical Slice**: Cada funcionalidade (como `password-validator`) é autossuficiente.
- **Shared Design System**: Componentes de UI agnósticos e reutilizáveis globalmente.
- **Layout Primitives**: Uso de componentes como `PageContainer` e `SplitLayout` para padronizar a estrutura macro da aplicação.

---

## 🎨 Styling & UI Architecture

O projeto utiliza um sistema triplo para maximizar produtividade e consistência visual:

1.  **Tailwind CSS (Macro Layout)**: Utilizado exclusivamente para posicionamento estrutural (`flex`, `grid`, `spacing`) e responsividade.
2.  **Mantine UI (Components)**: Utilizado para componentes funcionais (`Input`, `Button`, `Paper`) garantindo acessibilidade.
3.  **CSS Variables (Design Tokens)**: Centraliza as cores, sombras e raios em `variables.css`.

**Regras de Estilização:**
- Nunca usar `Stack` ou `Group` do Mantine para o layout estrutural da página.
- Telas devem ser compostas usando layouts compartilhados em `src/shared/ui/layouts`.
- Qualquer elemento de UI reutilizável deve ser promovido para `src/shared/ui/components`.


---

## 🛠️ Explicação Técnica

### Decisões de Engenharia
1.  **Tailwind CSS v4**: Utilizado para garantir agilidade no desenvolvimento de uma interface responsiva sem a necessidade de arquivos CSS complexos, aproveitando o novo motor de alto desempenho.
2.  **Vitest**: Escolhido pela sua velocidade superior ao Jest no ambiente Vite, utilizado para garantir que a lógica de validação de senha (o coração do desafio) seja 100% testada e determinística.
3.  **Minimalismo Mobile**: A decisão de remover o scroll em dispositivos móveis foi tomada para reduzir a carga cognitiva e permitir que o usuário valide todos os requisitos visuais instantaneamente ao digitar.
4.  **Zustand**: Selecionado por ser significativamente mais leve e menos burocrático que o Redux, perfeito para aplicações que precisam de performance extrema e persistência simples.
