<p align="center">
  <a>
    <a href="https://www.mongodb.com/cloud/atlas"><img alt="Database MongoDB" src="https://img.shields.io/badge/database-mongodb.com-blueviolet">
    <a href="https://nodejs.org/pt-br/"><img alt="Node version" src="https://img.shields.io/badge/node-v18.12.1-AA336A">
  </a>
</p>
<br>

# <div align = 'center'> JARDINS COMUNITÁRIOS</div>
<br>
<br>
<div align = "center">
<img src='./assets/jardins.jpg' width = 1000 alt = 'jardins'

</div>
<br>
<div align = "center">
Foto de Antoni Shkraba: https://www.pexels.com/pt-br/foto/avental-uniforme-celular-telefone-celular-7342610/

Este projeto é resultado do Bootcamp Back-End - Todas em Tech - { Reprograma }
 
</div>

<br>
<div align ='justify'>


#  Justificativa

A importância das áreas verdes nas cidades envolvem vários aspectos, 
tais como a qualidade de vida no ambiente urbano, a saúde pública,
promover o bem-estar, maior socialização na comunidade, entre outros benefícios.

Apesar de sua importância, diversas pessoas não têm acesso às áreas verdes ou 
espaços arborizados, especialmente a população residente em grandes aglomerados
urbanos localizados em regiões periféricas.

Frente  a  esta  crescente  urbanização,  é  cada  vez  mais  importante  a existência das  áreas  verdes.  
Essas  possuem  a  capacidade  de  proporcionar melhores  condições  ambientais,contribuindo  para  a  melhoria  na qualidade  de vida  das  pessoas,  devido às  suas  funções  sociais,  ecológicas,  estéticas e educativas (LOBODA e ANGELIS, 2009; SILVA et al., 2016).

Essa problemática da escassez de regiões vegetadas acontece na cidade de **São João de Meriti - RJ** , onde a cidade apresenta índice nulo de áreas verdes. 
RIO DE JANEIRO (Capital). Caderno Metropolitano. Rio de Janeiro, 2017. 

Esse dado é preocupante uma vez que a ausência áreas verdes pode causar danos à saúde, baixa qualidade do ar, podendo interferir inclusive na saúde mental – especialmente no que se refere ao estresse. 

---
# Impactos sociais :

*Socioambiental* -
*Saúde* -
*Autoestima* -
*Aquecimento global* -
*Solidariedade* -
*Polinizadores* -
*Resgate do laço entre as pessoas da comunidade* - 
*Valorização do trabalho Coletivo* -
*Beleza e contemplação urbana* -
*Valorização da Sabedoria Popular* -
*Riqueza Cultural*




---

#  Solução 

A Jardins Comunitários é uma plataforma de conexão entre as pessoas interessadas e dispostas  a auxiliar a expandir o verde na cidade doando seu tempo, sugerindo locais de plantio, semeando, plantando, regando ou doando com recursos para esse fim. A iniciativa consiste em encurtar o caminho entre pessoas dispostas a receber essa ação socioambiental. E verdejar onde for preciso...
**Jardins Comunitários - Conectando pessoas às plantas!**

</div>



<div align ='justify'>

#  Objetivo 

Por facilitar a conexão entre pessoas que queiram  contribuir com a jardinagem, a plataforma tem como objetivo principal estimular o aumento do índice áreas verdes na cidade, com o aproveitamento de todo local onde for possível propagar o verde, através da tecnologia para sendo usada para gerar impacto socioambiental.

---

#  Arquitetura 

<div align = "justify">

O projeto Jardins Comunitários foi desenvolvido utilizando o padrão de arquitetura de software MVC (Model-View-Controller),
focado no reuso de código e a separação de conceitos em três camadas interconectadas, onde a apresentação dos dados e interação dos usuários (front-end) são separados dos métodos que interagem com o banco de dados (back-end).

A construção do código separado em camadas permite a aplicação ficar mais leve e independente, permitindo que uma mesma lógica de negócios possa ser visualizada e  acessada através de várias interfaces.

</div>

```

  📁 projetoFinal
   |
   |---📁 assets
   |
   |---📁 src
   |    |
   |    |--📄 app.js
   |    |
   |    |    |--📁 controllers
   |    |    |--📄 doadorDeMudasController.js
   |    |    |--📄 espacoJardimController.js
   |    |    |--📄 jardineiroSolidarioController.js
   |    |    |--📄 authController.js
   |    |    |--📄 userController.js
   |    |
   |    |--📁 middlewares
   |         |- 📄 auth.js
   |
        |--📁 database
   |         |- 📄 mongoConfig.js

   |    |--📁 models
   |    |    |--📄 doadorDeMudasSchema.js
   |    |    |--📄 espacoJardimSchema.js
   |    |    |--📄 jardineiroSolidarioSchema.js
   |    |    |--📄 userSchema.js
   |    |    
        |--📁 routes
   |    |    |--📄 jardinagemSolidariaRoutes.js
   |    |    |--📄 userRoutes.js
   |
   |    |--📁 test
   |         |- 📄 api.test.js     
   |
      
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock,json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 vercel.json
```


#  Desenvolvimento 

A plataforma **Jardins Comunitários** é uma API REST, criada utilizando a linguagem de programação JavaScript e o ambiente de execução Node.js com conexão ao MongoDB , um banco de dados noSQL . No projeto também foi implementado autenticação de usuários e testes unitários utilizando o jest e o supertest.

---

## 🔸 SignUp

Para acessar as funcionalidades da plataforma é preciso que seja feito o cadastro do usuário, nesse momento é solicitado email e senha. No projeto foi utilizado o método de criptografia do tipo hash, bcrypt para gerar senhas criptografadas. 






# Rotas

---
utilizar o **Postman**  ou **Insomnia** para testes
---

<br>

## Métodos POST/GET/PATCH/DELETE - *Cadastrando um  novo Jardineiro Solidário* 
<br>
<div align = "center">

|  Método  |                  Rota                       |                                        Descrição                                |
| :------: | :-----------------------------------:     | :-------------------------------------------------------:
|  `POST`  | /jardinagem/cadastrar/jardineiro          |    Cadastra novos jardineiros                                |
|  `PATCH` | /jardinagem/atualizar/jardineiro/:id      |    Atualiza dados dos jardineiros                            |
|  `GET`   | /jardinagem/exibirtodos/jardineiro        |    Listar todos os jardineiros                               |
|  `GET`   | /jardinagem/buscarpornome/jardineiro      |    Busca um jardineiro passando nome por parâmetro           |
|  `GET`   | /jardinagem/buscar/jardineiro/:id         |    Atualizar senha do usuário buscando por ID                |
| `DELETE` | /jardinagem/deletar/jardineiro/:id        |    Deletar registro de jardineiro buscando por ID            |

</div>
<br>


## Métodos POST/GET/PATCH/DELETE - *Cadastrando um  novo Doador de Mudas e Sementes* 
<br>
<div align = "center">

|  Método  |                  Rota                       |                                        Descrição                                |
| :------: | :-----------------------------------: | :-------------------------------------------------------:    |
|  `POST`  | /jardinagem/cadastrar/doador          |    Cadastra novos doadores de mudas e sementes               |
|  `PATCH` | /jardinagem/atualizar/doador/:id      |    Atualiza dados dos doadores de mudas e sementes           |
|  `GET`   | /jardinagem/exibirtodos/doador        |    Listar todos os doadores de mudas e sementes              |
|  `GET`   | /jardinagem/buscarpornome/doador      |    Busca um doador passando nome por parâmetro               |
|  `GET`   | /jardinagem/buscar/doador/:id         |    Encontra registro de doador buscando por ID               |
| `DELETE` | /jardinagem/deletar/doador/:id        |    Deletar registro de doador buscando por ID                |

</div>
<br>



## Métodos POST/GET/PATCH/DELETE - *Cadastrando um  novo Espaço para Jardim Comunitário* 
<br>
<div align = "center">

|  Método  |                  Rota                       |                                        Descrição                                |
| :------: | :-----------------------------------: | :-------------------------------------------------------:    |
|  `POST`  | /jardinagem/cadastrar/espaco          |    Cadastra novos espaços para criar jardins                 |
|  `PATCH` | /jardinagem/atualizar/espaco/:id      |    Atualiza dados dos espaços para jardins cadastrados       |
|  `GET`   | /jardinagem/exibirtodos/espaco        |    Listar todos os espaços para jardins disponíveis          |
|  `GET`   | /jardinagem/buscarpornome/espaco      |    Busca um responsável pelo espaço por nome                 |
|  `GET`   | /jardinagem/buscar/espaco/:id         |    Encontra registro de espaço buscando por ID               |
| `DELETE` | /jardinagem/deletar/espaco/:id        |    Deletar registro de espaço buscando por ID                |

</div>
<br>




## Métodos POST/GET/ - *Cadastrando um usuário para autenticação* 
<br>
<div align = "center">

|  Método  |                  Rota                       |                                        Descrição                                |
| :------: | :-----------------------------------: | :-------------------------------------------------------:    |
|  `POST`  | /jardinagem/create                    |    Cadastrar usuário                                         |
|          |
|  `GET`   | /jardinagem/all                       |    Listar todos os usuários                                  |
|  `GET`   | /jardinagem/login                     |    Autenticar / logar usuário                                |
|  `GET`   | /jardinagem/administrar               |    Mostrar todos para administrador                          |

</div>
<br>




# Tecnologias Utilizadas
<br>

Para a execução desse projeto, foi necessário a utilização das seguintes dependências:

## ⚙️Dependências do Projeto

<div align = "justify">


 
 
- [Express](https://www.npmjs.com/package/express) - Framework para aplicativo da web do Node.js.
 <br>

- [Cors](https://www.npmjs.com/package/cors) - Permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.
 <br>

 - [Mongoose](https://www.npmjs.com/package/mongoose) - É uma biblioteca de programação orientada a objetos JavaScript que cria uma conexão entre MongoDB e a estrutura de aplicativo da web Express.
 <br>

 - [Dotenv](https://www.npmjs.com/package/dotenv-safes) - Carrega variáveis de ambiente de um arquivo .env para process.env.
 <br>

 - [Bcrypt](https://www.npmjs.com/package/bcryptjs) - Método de criptografia do tipo hash para senhas baseado no Blowfish.
 <br>

 - [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - É um método definido na RFC 7519 para autenticação remota entre duas partes. Ele é uma das formas mais utilizadas para autenticar usuários em APIs RESTful.

<br>

## ⚙️Dependências de Desenvolvimento

- [Nodemon](https://www.npmjs.com/package/nodemon) - Ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor;
<br>

 

## 📑 Arquivos: 

<div align = "justify">

- [package-lock.json]- Especifica a versão e suas dependências;
<br>

- [package.json]- Arquivo de configuração utilizado para estipular e configurar dependências;
<br>

- [.gitignore]- Arquivo que lista quais arquivos ou pastas o Git deve ignorar;

<br>

# Instalação
<br>

1. Entre na pasta onde você deseja clonar o repositório. Abra o **git** nela e digite: 

    ```bash
    $ git clone https://github.com/lucianagmbw/projeto-final-jardinagem 
    ```

2. Digite a linha abaixo para entrar na pasta correta: 

   ```bash
    $ cd projetoFinal
     ```

3. Escreva a seguinte linha para instalar as dependências utilizadas nesse projeto: 

   ```bash
    $ npm install
    ```
4. Inicie o servidor com o comando: 

   ```bash
    $ npm run dev
    ```   

<br>

# Testando a API 
<br>

## Acesse através do link:
<br>

<a href="https://reprograma-projeto-jardinagem-solidaria.vercel.app/">
   Clique aqui para acessar vercel.app
</a>
 
-  Adicione as rotas a serem testadas. 
-  Exemplo : Rota para exibir todos os jardineiros : /jardinagem/exibirtodos/jardineiro
   
  - [ https://reprograma-projeto-jardinagem-solidaria.vercel.app/jardinagem/exibirtodos/jardineiro ]
   
  - Rota com Autenticação Requerida
  - Resposta do Servidor : Sem autorização




<br>



<br>

# Implementações futuras
<br>

-  Adicionar testes automatizados.
-  Adicionar mais validações  autenticação
-  Construção do Frontend do Sistema Jardins Comunitários 
-  Adicionar espaço  empresas parceiras
-  Alerta de locais precisando de doadores/trabalhadores para facilitar o voluntariado.
-  Adicionar uma página para cada jardim construído (incluindo imagens)
-  Adicionar um perfil de Empresas Parceiras
-  Mais ideias para acrescentar também são bem vindas, contate-me! <3 

<br>


# Desenvolvedora

<div align = "center">
<img src ='./assets/foto_autora.jpeg' width = 200 alt = 'autora'>


<a>
    <a href="www.linkedin.com/in/lucianagmbw"><img alt="LinkedIn" src="https://img.shields.io/badge/LucianaLima-LinkedIn-blue">
    <a href="https://drive.google.com/file/d/1eV-wFgg_8JMZ2XUUu4drsjLcFT7JUT5h/view?usp=sharing"><img alt="Curriculo" src="https://img.shields.io/badge/LucianaLima-Curriculo-yellow">
    <a href="https://github.com/lucianagmbw"><img alt="GithubProfile" src="https://img.shields.io/badge/LucianaLima-GithubProfile-violet">
</a>

<div align ='justify'>
 
Sou Luciana Santos , fluminense , natural de São João de Meriti - Rio de Janeiro , formada em Análise e Desenvolvimento de Sistemas pela FAETERJ-RIO, apaixonada por tecnologia , inovação e desenvolvimento de Software. Desenvolvedora Back-end pela {Reprograma} , desenvolve API's REST na linguagem JavaScript com Node.js , com integração ao banco de dados NoSQL MongoDB.Estou à disposição para sempre aprender e contribuir com a tecnologia e inovação em prol de melhorar a vida das pessoas.



<br>

#  Referências

[A importância das áreas verdes](https://educacaopublica.cecierj.edu.br/artigos/20/25/cine-debate-abordando-a-importancia-das-areas-verdes-atraves-de-cienciarte)
<br>
[Áreas verdes na Baixada Fluminense](https://periodicos.furg.br/ambeduc/article/view/11846/9075)