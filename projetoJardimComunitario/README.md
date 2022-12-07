Justificativa

# <div align = 'center'> JARDINS COMUNITÁRIOS</div>
<br>
<br>
<div align = "center">
<img src='./assets/jardins.jpg' width = 1000 alt = 'jardins'

</div>
<br>
<div align = "center">
Foto de Antoni Shkraba: https://www.pexels.com/pt-br/foto/avental-uniforme-celular-telefone-celular-7342610/>

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
Essas  possuem  a  capacidade  de  proporcionar melhores  condições  ambientais,  
contribuindo  para  a  melhoria  na qualidade  de vida  das  pessoas,  devido  
às  suas  funções  sociais,  ecológicas,  estéticas  
e educativas (LOBODA e ANGELIS, 2009; SILVA et al., 2016).

Essa problemática da escassez de regiões vegetadas acontece na cidade de **São João de Meriti - RJ** , onde a cidade apresenta índice nulo de áreas verdes. 
RIO DE JANEIRO (Capital). Caderno Metropolitano. Rio de Janeiro, 2017. 

Esse dado é preocupante uma vez que a ausência áreas verdes pode causar danos à saúde,
baixa qualidade do ar, podendo interferir inclusive na saúde mental – especialmente no 
que se refere ao estresse. 

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

  📁 projetoJardimComunitario
   |
   |---📁 assets
   |
   |---📁 src
   |    |
   |    |--📄 app.js
   |    |
   |    |--📁 config
   |    |    |--📄 database.js
   |    |
   |    |--📁 controllers
   |    |    |--📄 doadorDeMudasController.js
   |    |    |--📄 espacoJardimController.js
   |    |    |--📄 jardineiroSolidarioController.js
   |    |    |--📄 xxxxxxxxxxxxxx.js
   |    |    |--📄 xxxxxxxxxxxxxx.js
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
   |    |    |--📄 xxxxxxxxxxx.js
   |      |    
        |--📁 routes
   |    |    |--📄 jardinagemSolidariaRoutes.js
   |    |   
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

```


#  Desenvolvimento 

A plataforma **Jardins Comunitários** é uma API REST, criada utilizando a linguagem de programação JavaScript e o ambiente de execução Node.js com conexão ao MongoDB , um banco de dados noSQL . No projeto também foi implementado autenticação de usuários e testes unitários utilizando o jest e o supertest.

---

## 🔸 SignUp

Para acessar as funcionalidades da plataforma é preciso que seja feito o cadastro do usuário, nesse momento é solicitado email e senha. No projeto foi utilizado o método de criptografia do tipo hash, bcrypt para gerar senhas criptografadas. 






# Rotas

<br>

## Métodos POST/GET/PATCH/DELETE - *Cadastrando um  novo Jardineiro Solidário* 
<br>
<div align = "center">

|  Método  |                  Rota                       |                                        Descrição                                |
| :------: | :--------------------------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  | http://localhost:7070/jardinagem/cadastrar/jardineiro          |    Cadastra novos jardineiros                                |
|  `PATCH` | http://localhost:7070/jardinagem/atualizar/jardineiro/:id      |    Atualiza dados dos jardineiros                            |
|  `GET`   | http://localhost:7070/jardinagem/exibirtodos/jardineiro        |    Listar todos os jardineiros                               |
|  `GET`   | http://localhost:7070/jardinagem/buscarpornome/jardineiro      |    Busca um jardineiro passando nome por parâmetro           |
|  `GET`   | http://localhost:7070/jardinagem/buscar/jardineiro/:id         |    Atualizar senha do usuário buscando por ID                |
| `DELETE` | http://localhost:7070/jardinagem/deletar/jardineiro/:id        |    Deletar registro de jardineiro buscando por ID            |

</div>
<br>

