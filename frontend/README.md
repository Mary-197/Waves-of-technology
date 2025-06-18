# Livro Caixa - Frontend

Este projeto é uma aplicação frontend desenvolvida com o objetivo de gerenciar um livro caixa. Ele foi criado utilizando o [Create React App](https://github.com/facebook/create-react-app) e segue boas práticas de desenvolvimento com React.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Gerenciamento de rotas para navegação entre páginas.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Jest e Testing Library**: Ferramentas para testes unitários e de integração.
- **Web Vitals**: Métricas de desempenho para monitoramento da aplicação.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 22 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/aulassaojudas/frontend-livro-caixa.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd frontend-livro-caixa
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```
   ou, se estiver usando Yarn:
   ```bash
   yarn install
   ```

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

### `npm start`

Inicia o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada automaticamente ao fazer alterações no código.\
Você também verá erros de lint no console.

### `npm test`

Executa o executor de testes no modo interativo.\
Consulte a seção sobre [testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Cria uma versão otimizada para produção na pasta `build`.\
Os arquivos são minificados e os nomes incluem hashes para melhor cacheamento.

Sua aplicação está pronta para ser implantada!

Consulte a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Atenção: esta é uma operação irreversível.**\
Remove a dependência única de build e copia todas as configurações para o projeto, permitindo personalizações avançadas.

Você não precisa usar `eject` a menos que realmente precise personalizar as configurações.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
src/
├── components/       # Componentes reutilizáveis
├── pages/            # Páginas da aplicação
├── App.tsx           # Componente principal
├── index.tsx         # Ponto de entrada da aplicação
├── styles/           # Arquivos de estilo
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a MIT License.

## Saiba Mais

Você pode aprender mais na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulte a [documentação do React](https://reactjs.org/).
```
