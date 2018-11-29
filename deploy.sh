#!/bin/bash

## Compilar aplicação para implantação
ng build --prod --output-path docs --base-href freelancer-aluno

## Criando página de "not found"
cp docs/index.html docs/404.html

## Gerenciamento e Implantação para o Github

# Adicionar todos os arquivos para envio
git add .

# Criar commit com o primeiro argumento como comit
# para commit's com espaço utilizar 'commit com espaço'
git commit -m "$1"
# Obter o repositório atualizado
git pull origin master
#Enviar para o Github o commit criado
git push origin master 
