# Challenge 01

Challenge prompt:


>Neste desafio você deverá criar uma API Rest com o Nest.js.
> Devemos criar um recurso de categorias com a URI categories com dois endpoints:

  - GET categories -> Consulta de categorias
  - POST categories -> Criação de categorias

>A aplicação terá um banco de dados SQLite para armazenar os dados, este banco ficará na raiz do projeto e usará o TypeORM para persistência dos dados.
>O banco SQLite deverá estar no controle de versão da aplicação e deverá ter 10 categorias cadastradas.
>Utilize o TypeORM, que é uma biblioteca Node.js para administrar a persitência de dados em banco de dados através do conceito de ORM (Object Relation Mapper).
>A aplicação deverá rodar com Docker.
>>Dica: Veja a aula abaixo sobre API Rest Nest.js para saber como configurar o Nest.js com Docker e usar o TypeORM com banco de dados. Há um repositório Git na descrição do vídeo com um exemplo de API Rest com Nest.js usando Docker e TypeORM.
https://www.youtube.com/watch?v=BT7novtdAgI

>NÃO use docker-compose nesta aplicação, deveremos ter apenas um Dockerfile na raiz do projeto expondo a porta 3000, que é a porta que o servidor do Nest.js para rodar a aplicação web.
Faça o docker build da aplicação para gerar sua imagem, suba-a no Docker Hub e compartilhe o endereço da imagem logo abaixo. 

Found [here](http://maratona.fullcycle.com.br/desafios/trabalhando-com-nestjs/).

## Installation

### Docker install

Pull the image from DockerHub:

```bash
docker pull deadpyxel/fullcycle-challenge03
```

Then run it as a container:

```bash
docker run --rm -p 3000:3000 deadpyxel/fullcycle-challenge03
```

### From source

Clone the repo then install the libraries:

```bash
npm install
```

To start the development server:

```bash
npm run start:dev
```

To start the production build:

```bash
npm run start:prod
```

## Usage

If you make a GET request at the resource endpoint (`http://localhost:3000/categories`) you should see the following JSON response:

```json
[
  {
    "id":1,
    "name":"Category 0",
    "description":"Description #0"
  },
  ...,
  {
    "id":10,
    "name":"Category 9",
    "description":"Description #9"
  }
]
```

To create new categories, make POST requests to the resouce endpoint endpoint:

```
POST http://localhost:3000/categories
Content-Type: application/json

{
    "name": "Category Name",
    "description": "Description text"
}
```

To retrieve individual categories, make GET requests to the resouce with the id:

```
GET http://localhost:3000/categories/1

Response 200 OK
{
  "id":1,
  "name":"Category 0",
  "description":"Description #0"
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
