# 🔐 Sec Pass Generator

> Aplicativo mobile para geração de senhas aleatórias, desenvolvido com
> React Native, TypeScript e Expo.

## 📌 Sobre o projeto

O **Sec Pass Generator** é uma aplicação mobile criada para praticar
conceitos de desenvolvimento com **React Native** e **TypeScript**.

O aplicativo permite gerar senhas aleatórias, definir o tamanho da
senha, visualizar uma indicação de força e copiar a senha gerada para a
área de transferência.

O projeto utiliza uma estrutura componentizada, separando telas,
componentes, estilos e a lógica responsável pela geração das senhas.

## ✨ Funcionalidades

### Geração de senha

-   Geração de senhas aleatórias;
-   Utilização de letras maiúsculas e minúsculas;
-   Inclusão de números;
-   Inclusão de caracteres especiais;
-   Geração com tamanho definido pelo usuário.

### Definição do tamanho da senha

O usuário pode informar o tamanho desejado para a senha por meio de um
campo numérico.

-   Tamanho mínimo: **4 caracteres**;
-   Tamanho máximo: **50 caracteres**;
-   Valor padrão: **10 caracteres**;
-   A entrada aceita somente números;
-   Valores fora do intervalo permitido são ajustados automaticamente
    para o limite válido.

### Copiar senha

Após a geração, a senha pode ser copiada para a área de transferência
utilizando o botão **📄 Copiar**.

O botão permanece desabilitado enquanto nenhuma senha tiver sido gerada.

### Feedback visual dos botões

Os botões possuem um estado visual específico enquanto estão sendo
pressionados.

Ao pressionar:

-   o fundo do botão muda para rosa;
-   o texto muda para branco.

Ao liberar o botão, sua aparência retorna ao estado original.

Esse comportamento utiliza o estado `pressed` fornecido pelo componente
`Pressable` do React Native.

## ⭐ Feature adicional --- Indicador de força da senha

Como terceira feature da tarefa, foi implementado um **indicador de
força da senha**.

Depois que uma senha é gerada, o aplicativo analisa algumas
características da senha e apresenta uma classificação visual:

-   **Fraca**
-   **Média**
-   **Forte**

A avaliação considera fatores como:

-   quantidade de caracteres;
-   presença de letras maiúsculas;
-   presença de letras minúsculas;
-   presença de números;
-   presença de caracteres especiais.

A classificação é uma indicação visual para o usuário e não representa
uma análise criptográfica ou uma garantia absoluta de segurança da
senha.

Antes de uma senha ser gerada, o indicador permanece como **"Aguardando
geração"**.

## 🛠️ Tecnologias utilizadas

-   **React Native** `0.86.3`
-   **React** `19.2.3`
-   **TypeScript** `6.0.3`
-   **Expo** `57.0.0`
-   **Expo Clipboard** `57.0.2`
-   **Expo Status Bar** `57.0.1`

## 🧩 Conceitos aplicados

O projeto utiliza conceitos importantes do desenvolvimento com React
Native e TypeScript:

-   Componentes funcionais;
-   React Hooks, especialmente `useState`;
-   Props e tipagem com TypeScript;
-   Eventos e interação com o usuário;
-   `Pressable` para estados de interação;
-   `TextInput` para entrada de dados;
-   `StyleSheet` para organização dos estilos;
-   Componentização;
-   Separação entre interface e lógica;
-   Criação de um serviço para geração de senhas;
-   Uso de biblioteca Expo para acesso à área de transferência.

## 📂 Estrutura do projeto

``` text
sec-gen-password/
│
├── assets/
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   ├── logo-app.png
│   └── splash-icon.png
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
├── App.tsx
├── index.ts
├── app.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

### Organização das responsabilidades

**`src/components/`**

Contém os componentes reutilizáveis da interface:

-   `ButtonPass`: concentra os controles de geração, cópia, tamanho e
    indicador de força;
-   `TextInputPass`: componente reutilizável para os campos de entrada;
-   `Logo`: componente responsável pela apresentação do logotipo.

**`src/screens/`**

Contém as telas da aplicação. Atualmente, a aplicação possui a tela
principal `Home`.

**`src/services/`**

Contém a lógica relacionada à geração das senhas. O arquivo
`passwordService.ts` possui a função responsável por criar a senha a
partir do tamanho informado.

**Arquivos de estilo**

Os estilos são mantidos em arquivos separados utilizando `StyleSheet` do
React Native, facilitando a organização e manutenção da interface.

## 🚀 Como executar o projeto

### Pré-requisitos

É necessário ter instalado:

-   [Node.js](https://nodejs.org/)
-   npm
-   Expo
-   Um ambiente compatível com React Native, como Android Studio,
    emulador Android ou dispositivo físico.

### 1. Clone o repositório

``` bash
git clone https://github.com/LauraMarDev/sec-gen-password.git
```

### 2. Acesse a pasta

``` bash
cd sec-gen-password
```

### 3. Instale as dependências

``` bash
npm install
```

### 4. Inicie o projeto

``` bash
npm start
```

Também estão disponíveis os comandos:

``` bash
npm run android
```

``` bash
npm run ios
```

``` bash
npm run web
```

## 📱 Fluxo de utilização

1.  Informe o tamanho desejado para a senha.
2.  Pressione **🔑 Gerar Senha**.
3.  O aplicativo gera uma senha aleatória com o tamanho informado.
4.  O indicador apresenta uma classificação de força.
5.  Pressione **📄 Copiar** para copiar a senha para a área de
    transferência.

## 🎯 Tarefa de incremento

Os incrementos realizados nesta versão foram:

  -----------------------------------------------------------------------
  Tarefa                              Implementação
  ----------------------------------- -----------------------------------
  **1. Tamanho da senha**             Campo numérico com limite de 4 a 50
                                      caracteres

  **2. Estado visual dos botões**     Alteração de fundo e texto durante
                                      o pressionamento

  **3. Feature adicional**            Indicador de força da senha
  -----------------------------------------------------------------------

## 🧠 Aprendizados

O desenvolvimento deste projeto permite praticar principalmente:

-   Estruturação de uma aplicação React Native;
-   Componentização de interfaces;
-   Gerenciamento de estado;
-   Manipulação de eventos;
-   Tipagem com TypeScript;
-   Criação de funções reutilizáveis;
-   Separação da lógica em serviços;
-   Estilização com React Native;
-   Feedback visual de interação;
-   Validação de entradas;
-   Integração com recursos do dispositivo por meio do Expo.

## 🔮 Possíveis próximos passos

Algumas evoluções que podem ser adicionadas futuramente:

-   Permitir escolher quais tipos de caracteres serão utilizados;
-   Adicionar opção para excluir caracteres ambíguos;
-   Permitir gerar novamente a senha com um botão dedicado;
-   Adicionar feedback visual após copiar a senha;
-   Criar histórico local de senhas geradas;
-   Adicionar testes automatizados;
-   Aprimorar a acessibilidade da interface;
-   Evoluir a experiência visual da aplicação.

## 👩‍💻 Autora

**Laura Marques Pinheiro**

[LinkedIn](https://www.linkedin.com/in/laura-marques-51748b293) ·
[GitHub](https://github.com/LauraMarDev)