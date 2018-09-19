# Ebanx Challenge Minicart

## Rodar o projeto
Para rodar o projeto é necessário acessar a pasta raiz do projeto (onde está localizado o arquivo package.json) pelo terminal e digitar primeiro **yarn install** ou **npm install**, após a conclusão da instalação dos pacotes, será necessário digitar **yarn dev** ou **npm run dev** e seu projeto irá carregar no browser.

## Comportamento
### Regras do carrinho:
- Ao clicar em qualquer dos checkboxes de produto, o sistema irá calcular o valor total dos produtos e também habilitará o formulário de dados pessoais (1° passo).
- Ao preencher todos os dados pessoais e todos estiverem validados, o sistema irá habilitar os dados de endereço (2º passo).
- Ao preencher todos os dados de endereço e todos estiverem validados, o sistema irá habilitar os dados de pagamento (2º passo).
- Ao preencher todos os dados de pagamento e todos estiverem validados, o sistema irá habilitar o botão de fechamento (3º passo).