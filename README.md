# 📧 Alura Newsletter

Uma página de inscrição mock para newsletter, criada com o objetivo de aprender e praticar **React**, **Tailwind CSS** e o uso de componentes reutilizáveis e formulários. Este projeto simula o fluxo de registro de usuários em uma newsletter, utilizando boas práticas de desenvolvimento front-end.

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- 🎨 **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- 🔄 **Hooks do React**: Uso de `useState` e `useEffect` para gerenciar estado e efeitos colaterais.
- ✅ **PropTypes**: Validação de propriedades dos componentes.
- 🌐 **Vite**: Ferramenta de construção para um ambiente de desenvolvimento rápido.

---

## ✨ Funcionalidades

- **💡 Alternância de Tema (Claro/Escuro)**:
  - Botão para alternar entre os temas claro e escuro.
  - Preferência salva no `localStorage` e sincronizada com o sistema operacional.

- **📝 Formulário de Inscrição**:
  - Validação de campos em tempo real:
    - **Nome**: Campo obrigatório.
    - **Email**: Validação de formato usando regex.
  - Botão **Seguir**:
    - Desabilitado até que todos os campos sejam preenchidos corretamente.
    - Exibe um spinner de **loading** ao submeter o formulário (atraso simulado de 3 segundos).

- **👤 Exibição Dinâmica do Nome do Usuário**:
  - Após a submissão do formulário, o nome do usuário é exibido no cabeçalho da página.

- **📱 Layout Responsivo**:
  - A interface adapta-se perfeitamente a dispositivos móveis, tablets e desktops.

---

## 🌟 Aprendizados

- 🧩 **Criação de componentes reutilizáveis no React**:
  - Componentes modulares para melhor organização e manutenção do código.

- ✅ **Validação de formulários**:
  - Utilização de regex para validação de email.
  - Gerenciamento de estado para controle de erros e validações.

- 🔄 **Gerenciamento de estado**:
  - Uso de `useState` para controlar entradas do formulário, botões e preferências de tema.

- 🎨 **Estilização com Tailwind CSS**:
  - Estilo responsivo e utilização de temas claro/escuro.

- 💡 **Boas práticas no React**:
  - Uso de PropTypes para validação de propriedades.
  - Aplicação de estados e efeitos para controle dinâmico.

---