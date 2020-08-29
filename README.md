# Challenge 01

Challenge prompt:

> Durante toda a Maratona utilizaremos containers como base de desenvolvimento bem como para produção. Logo, ter uma noção básica de Docker é mais do que necessário.

> Nesse desafio, você terá de criar uma imagem docker que quando executada deverá expor a porta 8080 exibindo a mensagem: Eu sou Full Cycle.

> Fique na liberdade para utilizar a tecnologia/linguagem de programação de sua escolha. Exemplo: você poderá criar uma simples aplicação usando Node.js com Express para exibir essa mensagem.
> Gere o build da sua imagem, faça o push para o DockerHub e a informe no formulário abaixo.

Found [here](http://maratona.fullcycle.com.br/desafios/hello-world-com-docker/).

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
