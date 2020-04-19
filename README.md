# PrimePass Challenge

Aplicação construída com React Native para dispositivos mobile `Android`(O código não foi testado em dispositivos `iOS` por motivos limitação de recurso), as funcionalidades dessa aplicação são:

- Listar cinemas por cidade.
- Listar os filmes mais populares.
- Buscar filmes.
- Trazer informações detalhadas de um filme.

Para inicializar esta aplicação em modo de desenvolvimento, comece com o clone do repositório, logo após o clone utilize um dos gerenciadores de pacotes do Node `NPM/Yarn`,(Aconselho  a utilização do `Yarn` por sua maior velocidade) para instalar as dependências da aplicação.

Feito isso, certifique-se que você tenha instalado em sua máquina o `[adb](https://developer.android.com/studio/command-line/adb)`, dito isso execute o seguinte comando na pasta em que o repositório foi clonado:
```bash
    yarn build:dev:android
```
O arquivo executável(`.apk`) se encontra na pasta `executable/` na raiz do projeto.

Processo padrão de inicialização da aplicação:
```bash
    # instala as dependencias
    yarn
```
```bash
    # faz o build da aplicaçãop em dispositivos android
    react-native run-android
```
```bash
    # Incializa o Metro-Bundler
    react-native start
```
## Nota

> Por motivos da pandemia, as rotas que forneciam os dados na API que a PrimePass forneceu não estavam retornando as informações dos filmes por cinema selecionado (E consequentemente não foi possível listar as salas que o filme estaria em cartaz), então busquei outras alternativas, uma delas foi a API do IMDb, que me foi sugerida pelo Alan Freire (Tech Lead na PrimePass).

## Funcionalidades Extras

- Busca de Filmes
- Filtro de cinema por cidade
- Lista de Atores do Filme

## Sugestões

> A funcionalidade do filtro de cinemas por cidade não ficou tão agradável esteticamente pela limitação de estilo do próprio `Picker`(Componente similar ao elemento <select> do html ), então seria interessante uma rota que listasse todos os cinemas mais próximos baseado em uma coordenada.

## Ferramentas auxiliares

- Facebook Flipper

## To-do proposto pela PrimePass

- [x]  tela que liste todos os shopping
- [x]  quando clicar em um shopping trazer os filmes que estão em cartaz

    > Leia as Notas

- [ ]  ao clicar em um filme trazer as sessões do mesmo para o shopping selecionado

    > Leia as Notas

- [x]  quando clicar em um filme trazer informações básicas do filme como (Sinopse, diretor, idade recomendado, etc...).