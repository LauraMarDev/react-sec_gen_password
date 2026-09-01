# 🔐 Sec Pass Generator

> Aplicativo mobile para geração de senhas, desenvolvido com React Native e TypeScript como projeto de estudo e prática de desenvolvimento mobile.

## 📌 Sobre o projeto

O **Sec Pass Generator** é uma aplicação mobile desenvolvida com **React Native**, utilizando **TypeScript**, com a proposta de explorar a construção de interfaces, componentização e organização de um projeto mobile.

A aplicação possui uma interface dedicada à geração de senhas, com campo de entrada e ações para gerar e copiar uma senha.

O projeto está em desenvolvimento e vem sendo utilizado como prática para consolidar conceitos fundamentais do ecossistema React Native e do TypeScript.

## ✨ Funcionalidades

### Implementadas / em desenvolvimento

* [x] Interface principal do aplicativo;
* [x] Componente de campo de senha;
* [x] Componente de botão para geração de senha;
* [x] Componente de botão para copiar senha;
* [x] Organização da interface em componentes reutilizáveis;
* [ ] Implementação da lógica definitiva de geração de senhas;
* [ ] Implementação da cópia da senha para a área de transferência.

> **Status atual:** a estrutura da interface e dos componentes já está implementada. A lógica de geração e cópia de senhas ainda está em desenvolvimento.

## 🖼️ Demonstração

### Tela principal

![Tela principal](./assets/home.png)

## 🛠️ Tecnologias utilizadas

* **React Native** `0.81.5`
* **React** `19.1.0`
* **TypeScript** `5.9.2`
* **Expo** `54.0.36`
* **Expo Status Bar**

## 🧩 Conceitos aplicados

Durante o desenvolvimento do projeto, estão sendo praticados conceitos importantes do desenvolvimento com React Native e TypeScript, incluindo:

* Desenvolvimento de interfaces para dispositivos móveis;
* Criação e reutilização de componentes;
* Componentização de interfaces;
* Uso de `useState` para gerenciamento de estado;
* Manipulação de eventos com `onPress`;
* Tipagem de propriedades com TypeScript;
* Organização de estilos utilizando `StyleSheet`;
* Separação de componentes, telas, estilos e serviços;
* Criação de funções e serviços responsáveis pela lógica da aplicação.

## 📂 Estrutura do projeto

```text
sec-gen-password/
│
├── assets/
│   └── logo-app.png
│
├── src/
│   ├── components/
│   │   ├── ButtonPass/
│   │   │   ├── ButtonPass.tsx
│   │   │   └── ButtonPassStyles.tsx
│   │   │
│   │   ├── Logo/
│   │   │   ├── Logo.tsx
│   │   │   └── LogoStyles.tsx
│   │   │
│   │   └── TextInputPass/
│   │       ├── TextInputPass.tsx
│   │       └── TextInputPassStyles.tsx
│   │
│   ├── screens/
│   │   ├── Home.tsx
│   │   └── HomeStyles.tsx
│   │
│   └── services/
│       └── passwordService.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

### Organização

A estrutura foi dividida em diferentes responsabilidades:

**`components/`**
Contém os componentes reutilizáveis da interface, como o logotipo, campo de senha e botões.

**`screens/`**
Contém as telas da aplicação. Atualmente, o projeto possui a tela principal `Home`.

**`services/`**
Contém funções relacionadas à lógica da aplicação. O arquivo `passwordService.ts` concentra a função responsável pela geração da senha.

**Arquivos de estilo**
Os estilos estão separados dos componentes em arquivos específicos utilizando `StyleSheet` do React Native.

Essa organização facilita a manutenção e permite que novas funcionalidades sejam adicionadas sem concentrar toda a lógica em um único arquivo.

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* [Node.js](https://nodejs.org/)
* npm
* Expo
* Um ambiente para execução de aplicações React Native, como Android Studio, dispositivo Android ou emulador compatível.

### 1. Clone o repositório

```bash
git clone https://github.com/LauraMarDev/sec-gen-password.git
```

### 2. Acesse a pasta do projeto

```bash
cd sec-gen-password
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o projeto

```bash
npm start
```

Também é possível utilizar os scripts disponíveis no projeto:

```bash
npm run android
```

```bash
npm run ios
```

```bash
npm run web
```

## 🧠 Aprendizados

Este projeto está sendo utilizado para desenvolver e consolidar conhecimentos em **React Native e TypeScript**, principalmente relacionados à construção de interfaces mobile e à organização de aplicações.

Entre os principais aprendizados estão:

* Estruturação de projetos React Native;
* Criação de componentes funcionais;
* Comunicação entre componentes através de props;
* Gerenciamento de estado com React Hooks;
* Manipulação de eventos de interação;
* Estilização utilizando `StyleSheet`;
* Tipagem com TypeScript;
* Separação entre interface e lógica da aplicação;
* Organização de funcionalidades em serviços.

## 🔮 Próximos passos

* [ ] Implementar a geração de senhas aleatórias;
* [ ] Permitir a configuração do tamanho da senha;
* [ ] Permitir a escolha dos tipos de caracteres utilizados;
* [ ] Implementar a funcionalidade de copiar a senha para a área de transferência;
* [ ] Melhorar a validação e experiência de uso do campo de senha;
* [ ] Adicionar feedback visual após a geração ou cópia da senha;
* [ ] Adicionar testes automatizados;
* [ ] Evoluir a interface e a experiência do usuário.

## 👩‍💻 Autora

**Laura Marques Pinheiro**

[LinkedIn](https://www.linkedin.com/in/laura-marques-51748b293) ♥ [GitHub](https://github.com/LauraMarDev)