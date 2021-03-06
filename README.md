# README

Processo para deploy

### Oque é preciso?

- Node 14.x.x
- Yarn
- Json Server

### Instalação

1-Efetue a instalação do json-server.
https://www.npmjs.com/package/json-server

```bash
yarn global json-server
```

2-Instale as dependencias do projeto

```bash
yarn
```

3-Stater nossa fake api JSON SERVER e teste no link http://localhost:3333/

```bash
yarn fake-server
```

4-Rodando em iOS

OBS.: Verifique em src/services/api.ts se a baseURL está apontando para
http://localhost:3333 rodar em iOS. Emuladores iOS reconhecem localhost

```bash
yarn ios
```

4-Rodando em Android
OBS.: Verifique em src/services/api.ts em emuladores android precisamos apontar para http://10.0.2.2:3333 para acessar localhost.

```bash
yarn android
```
