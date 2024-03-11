# Caixa de Letra

Exemplo de app nativo multiplataforma criado com React Native e Expo.

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
