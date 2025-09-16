<h1 align="center">Mini Loja React – Estilização Comparativa</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components"/>
</p>

Este projeto demonstra a mesma interface de uma mini loja, implementada com 4 abordagens de estilização diferentes em React, permitindo uma comparação direta entre elas.

- **CSS Global**
- **CSS Modules**
- **Tailwind CSS**
- **Styled-components**

## ✨ Funcionalidades

✔️ **Navbar Fixa**: Com logo, alternador de tema e ícone de carrinho.
✔️ **Tema Claro/Escuro**: Com persistência no `localStorage`.
✔️ **Grid de Produtos Responsivo**: Adapta o número de colunas conforme o tamanho da tela.
✔️ **Cards de Produto**: Exibem imagem, título, preço, avaliação (estrelas), tag e botão de ação.
✔️ **Animação de Carregamento**: Um spinner é exibido durante a troca entre as diferentes versões de estilização.
✔️ **Lazy Loading**: As imagens dos produtos são carregadas de forma preguiçosa para otimizar o desempenho.
✔️ **Animações e Transições**: Efeitos de `hover` nos cards e transições suaves ao mudar o tema.

## 🚀 Como Executar

1.  **Clone o repositório:**
    ```sh
    git clone https://github.com/seu-usuario/Atividade6-MaisPraTi-main.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```sh
    cd Atividade6-MaisPraTi-main
    ```

3.  **Instale as dependências:**
    ```sh
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```sh
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:5173`.

## 📂 Estrutura de Pastas

O código-fonte está organizado da seguinte forma:

```
src/
├── components/      # Componentes reutilizáveis (Card, Navbar, etc.)
├── context/         # Contexto do tema (ThemeProvider)
├── pages/           # Pastas para cada abordagem de estilização
│   ├── 01-Global-CSS/
│   ├── 02-CSS-Modules/
│   ├── 03-Tailwind/
│   └── 04-Styled-Components/
└── App.jsx          # Componente principal que gerencia a navegação
```

Cada pasta dentro de `src/pages` contém a implementação da página de produtos usando a técnica de estilização correspondente.
