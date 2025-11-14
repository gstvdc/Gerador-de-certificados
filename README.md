# 🎓 Gerador de Certificados

![Badge Angular](https://img.shields.io/badge/Angular-v19-DD0031?logo=angular&logoColor=white)
![Badge Bootstrap](https://img.shields.io/badge/Bootstrap-v5.3-7952B3?logo=bootstrap&logoColor=white)
![Badge TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

Um aplicativo web simples, construído com Angular, para criar, gerenciar e visualizar certificados de conclusão. Todos os dados são salvos localmente no navegador usando `localStorage`.

---

## 🚀 Funcionalidades Principais

- **Criação de Certificados:** Formulário para gerar novos certificados com o nome do aluno e uma lista dinâmica de atividades concluídas.
- **Listagem e Gerenciamento:** Página principal que exibe todos os certificados gerados e permite limpá-los.
- **Visualização Individual:** Cada certificado possui uma página de visualização própria com um layout estilizado, pronto para impressão ou para salvar como PDF.
- **Persistência de Dados:** Utiliza o `localStorage` do navegador para salvar os certificados, permitindo que os dados persistam mesmo após fechar a aba (não necessita de banco de dados ou backend).
- **Identificação Única:** Cada certificado recebe um ID único gerado pela biblioteca `uuid`.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **[Angular](https://angular.dev/) (v19)**: Framework principal para a construção da interface.
- **[Bootstrap (v5.3)](https://getbootstrap.com/)**: Para estilização e layout responsivo.
- **[Phosphor Icons](https://phosphoricons.com/)**: Biblioteca de ícones utilizada na interface.
- **[UUID](https://github.com/uuidjs/uuid)**: Para a geração de IDs únicos para cada certificado.

---

## 📋 Como Executar o Projeto

Siga os passos abaixo para executar o projeto localmente.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (v18 ou superior)
- [Angular CLI](https://angular.dev/tools/cli) (v19 ou superior)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/seu-usuario/gerador-de-certificados.git](https://github.com/seu-usuario/gerador-de-certificados.git)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd gerador-de-certificados
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### Rodando o Projeto

1.  Execute o servidor de desenvolvimento:
    ```bash
    ng serve
    ```
2.  Abra seu navegador e acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

---

## 👨‍💻 Autor

Feito por **Gustavo** 👋
