PROJETO BACK END PARA O PROCESSE SELETIVO DA EMPRESA QUIKDEV.

* TECNOLOGIAS USADAS 
NODE.JS
BANCO DE DADOS  MONGODB
PARA TESTES DA API FOI USADO O INSOMNIA

* PARA RODAR O SERVIDOR ENCONTRODO NO 'index.js' digite no terminal o comando 'npm run dev'

* COPIE O CODIGO DO BANCO DE DADOS E COLE NA PASTA '.ENV.EXAMPLE'

* BIBLIOTECAS USADAS

npm install  dotenv express mongoose nodemon uuid

"dotenv": "^14.3.2",
"express": "^4.17.2",
"mongoose": "^6.1.8",
"nodemon": "^2.0.15",
"uuid": "^8.3.2"
 
* USO NO INSOMNIA
USE A PORTA 3333 / cadastro
 CREATE => TIPO POST
NO CORPO DA API // TODOS OS CAMPOS SÃO OBRIGATORIOS//
{    
    ID SÃO AUTOMATICAS
	"name":"--",
	"username":"--",
	"birthdate":"--",
	"address": "--",
	"addressNumber": "--",
	"primaryPhone": "(xx)xxxxx-xxxx",
	"description":"--"
    createdAt DE FORMA AUTOMATICA
}

LISTAR => TIPO GET

DELETE => TIPO DEL // USAR A ID PARA DELETAR // 

UPDATE => TIPO PUT // USAR A ID PARA FAZER UPDATE E ESCREVA O MUDANÇA NO CORPO DA API //
EX:
{
"username":"--"
}