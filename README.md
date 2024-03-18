# Caixa de Letra

Exemplo de app nativo multiplataforma criado com React Native e Expo.

## Branch 10-processo-de-build-ou-compilacao

### Roteiro geral para build usando Expo EAS:

1.  Acessar a conta Expo e criar um projeto no Expo EAS: https://expo.dev
2.  Instalar os eas-cli
3.  Adicionar o id do projeto ao aplicativo
4.  Verificar a conta logada: `npx eas whoami`
    - se não estiver logado, use: `npx eas login`
    - se estiver logado e quiser deslogar ou mudar de usuario use: `npx eas logout`
5.  configurar o build (compilação): `eas build:configure`
6.  Escolha Android e dê enter. isso criará um arquivo chamado `eas.json`
7.  É necessário modificar o segmemto `preview` dentro do `eas.json`, adicionando o código abaixo:

```JSON
// Executavel para loja: .aab
// Executavel geral: .apx
"developmentClient" : true,
    "android" : {
        "buildType": "apk",
        "gradleCommand": ":app:assembleRelease"
    },
```

8. Analisar os pacotes do projeto e outros possíveis problemas: `npx -y expo-doctor`

9. Adicionar ao `eas json` dentro de `preview` a API Key de acordo com o conteúdo do arquivo `.env`:

```json
"env": {
  "EXPO_PUBLIC_NOME_ENV": "valor"
}
```

10. Iniciar o processo de build/compilação: `eas build --profile preview`

## Branch 09-gerenciamento-de-favoritos

### Recurso nativo/lib: AsyncStorage

`AsyncStorage` é uma lib mantida pela equipe do Expo que permite armarzenar dados **offline** em formato de `string` no dispositivo
do usuário. É uma lib semelhante à API Web `localStorage` usada em sites.

## Branch 08-tela-de-detalhes-do-filme

- Criação da tela `Detalhes.js` e adição dela à `Stack` em `App.js`
- Em `CardFilme`, utilização do hook `useNavigation` para funcionalidade de navegação do botão **Leia mais**.
- Em `App.js` na `Stack.Screen Detalhes`, adicionamos uma prop `options`
  configurada para exibir um `Button` responsável por permitir a navegação direta para `Home`.

## Branch 07-melhorias-nos-resultados

- Loading usando `ActivityIndicator`
- Em `Resultados`, aplicamos à `FlatList` componentes personalizados para o caso de não haver filmes na busca (`NaoEncontrado/ListEmptyComponent`) e
  para separar cada elemento da `FlatList` (`Separador/ItemSeparatorComponent`)
- Em `CardFilme` colocamos uma condicional para o carregamento de imagem alternativa caso algum filme não tenha imagem, e também ícones nos botões.

## Branch 06-tela de resultados-e-programação

- Cadastro na API TheMovieDB
- Criação de variável ambiente através do arquivo `.env`
  contendo a API key via Expo. (arquivo ENV são ignorados no versionamento)

### Consumo de dados API

- Instalação da lib **Axios**
- Configuração/exportação do `services/api-moviedb.js` contendo a programação básica de acesso a API para uso em diferentes partes do app .

#### Exibição dos resultados

- Utilização do componente `FlatList` para listagem dinâmica dos resultados
- Criação do componente `CardFilme` com uso de prop (`filme`) com carregamento do `title` e do `poster_path` (imagem) de cada filme.

## Branch 05-desafio--tela-BuscarFilmes

### Solução: recursos utilizados

- Componentes/Recursos nativos: `TextInput`, `Vibration` e `Alert`
- Eventos:
  - `onChangeText` no `TextInput` para captura em tempo real do nome do filme digitado e atualização no `state` usando a função `filmeDigitado`
  - `onPress` no `Button` para acionamento da função `pesquisar`
  - `onSubmitEditing` no `TextInput` para acionamento da função `buscarFilmes`

## Branch 04

Para gerenciar os recursos de navegação é necessário usar uma biblioteca de navegação.

As mais conhecidas são a **React Navigation** e a **Expo Router**.

Atualmente (02/2024) a biblioteca mais usada e considerada padrão é a **React Navigation**

### Site oficial

- React Navigation: https://reactnavigation.org
- Expo Router: https://docs.expo.dev/router/introduction

### Dependências

React Navigation `npm install @react-navigation/native`

Dependências para navegação:

`npx expo install react-native-screens react-native-safe-area-context`

Mecanismo de navegação Stack: `npm install @react-navigation/native-stack`

### Configurações

No `App.js` importamos o `NavigationContainer` e o `createNativeStackNavigator`, em seguida os configuramos para determinar as telas `Stack.Screen` e seus componentes correspondentes (`Home`, `Privacidade` e `Sobre`).

## Branch 03

- Criação das telas básicas: Sobre e Privacidade
- Componente `ScrollView` para conteúdos maiores que a tela com suporte à rolagem
- Componente `Linking` para criação de link para a web.

## Branch 02

### Utilização de fontes adicionais

- Download dos arquivos de fonte (formato TTF ou OTF)
- Colocação na pasta `assets\fonts`
- Instalação das libs `expo-fonts` e `expo-splash-screen`
- Importação das fontes com auxílio dos `hooks` `useFonts` e `useCallback`.
- Aplicação das fontes usando regras de StyleSheet.

Para mais detalhes sobre o processo veja a documentação do Expo Fonts e do Expo Splash Screen:

- https://docs.expo.dev/versions/latest/sdk/font/
- https://docs.expo.dev/versions/latest/sdk/splash-screen/

---

## Dica

Instale a extensão **ES7+ React...** no VSCode para facilitar a programação de componentes.
