# FreelancerAluno
Aplicação Front-End Angular 6 visual para pedido de ajuda para matérias da faculdade e propostas de aulas. Esta foi desenvolvida com um mock do sistema com classes typescript para posteriormente ser integrado a um API REST.
Este sistema possui login com facebook e conta google. [Essa aplicação está disponível aqui](https://skatesham.github.io/freelancer-aluno)

## Implantação
[Este sistema está implantado no github pages neste link](https://skatesham.github.io/freelancer-aluno): https://skatesham.github.io/freelancer-aluno.

## Requisitos funcionais
Os requisitos funcionais são mostrados em um diagrama de caso de uso da UML.

![alt text](https://raw.githubusercontent.com/skatesham/freelancer-aluno/master/readme/uc%20-%20requisitos%20funcionais.png)

## Fotos do Sistema
Algumas fotos do sistema são mostradas a seguir:
- Perfil
![alt text](https://raw.githubusercontent.com/skatesham/freelancer-aluno/master/readme/freelancer-perfil.png)

- Login
![alt text](https://raw.githubusercontent.com/skatesham/freelancer-aluno/master/readme/freelancer-login.png)


## Servidor de Desenvolvimento

Execute `ng serve --ssl -o` para iniciar o servidor com Secure Socket Layer (SSL) e abrir automaticamente uma página. As alterações no código do projeto serão automaticamento recarregadas.

Execute `ng generate component component-name` para gerar um novo componente. Você pode tambem gerar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Implantação

Execute `ng build --prod --output-path docs --base-href freelancer-aluno` para criar o projeto em modo produção. Os artefatos gerados irão para a pasta `docs/` que é possível ser configurado no Github Pages. Para implantar no Github Pages é recomendado a cópia do arquivo `docs/index.html` e renomeação da cópia para `docs/404.html`.

#### Implantação por script no Linux

É possível implantar esse servidor pelo o [script criado](https://github.com/skatesham/freelancer-aluno/blob/master/deploy.sh)

Para concedendo permissão `sudo chmod +x deploy.sh`

Para realizar o deploy completo para o github, execute `./deploy.sh 'texto para o commit'`

#### Enviar os arquivos para o git por script no Linux
É possível implantar esse servidor pelo o [script criado](https://github.com/skatesham/freelancer-aluno/blob/master/push.sh)

Para concedendo permissão `sudo chmod +x push.sh`

Para adicionar, commit, atualizar e enviar,  execute `./push.sh 'texto para o commit'`

## English Develop Explanations (generated)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Development server

Run `ng serve --ssl -o` for a dev server with SSL, and will automaatically open. Navigate to `https://localhost:4200/` to use login with social medias. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build --prod --output-path docs --base-href freelancer-aluno` to build the project to use in Github Pages. The build artifacts will be stored in the `docs/`.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
