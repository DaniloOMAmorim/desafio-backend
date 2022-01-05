## Contextualização
Nossa plataforma é responsável por gerar relatórios para análise de dados de e-commerces. Para isso, precisamos armazenar informações sobre pedidos e sobre clientes, cruzar alguns dados e gerar relatórios.

## Definição
### Order
- Um order é a entidade que representa um pedido
- Um exemplo de order seria:
```json
{
  "id": "411594b5-c996-4756-a719-408dd4517161",
  "amount": 23.78,
  "customer_id": "511594b8-c322-4732-a712-438dd4517938",
  "created_at": "2021-10-10T05:43:22Z",
  "updated_at": "2021-10-10T05:43:22Z"
}
```
Onde:
- `id` é um UUID v4;
- `amount` é um valor do pedido;
- `customer_id` é o id que referencia um cliente;
- `created_at` é o data de criação do pedido em UTC;
- `updated_at` é o data de atualização do pedido em UTC;
### Customer
- Um customer é a entidade que representa um cliente
- Um exemplo de customer seria:
```json
{
  "id": "511594b8-c322-4732-a712-438dd4517938",
  "name": "John Doe",
  "email": "johndoe@mail.com",
  "created_at": "2021-10-10T05:43:22Z",
  "updated_at": "2021-10-10T05:43:22Z"
}
```
Onde:
- `id` é um UUID v4;
- `name` é o nome do cliente;
- `email` é o email do cliente;
- `created_at` é o data de criação do cliente em UTC;
- `updated_at` é o data de atualização do cliente em UTC;

## Desafio
### Criar um endpoint para inserir Pedidos
Nessa parte do desafio, será necessário criar um endpoint para inserir pedidos, para cada pedido, será criado um novo cliente, mesmo que já exista um cliente no banco de dados com o mesmo email, pois representa o mesmo cliente, só que em outra compra.

Requisição: POST `/orders`

Exemplo de dados de entrada:
```json
{
  "orders": [
    {
      "amount": 23.78,
      "created_at": "2021-10-10T05:43:22Z",
      "customer": { "name": "John Doe", "email": "johndoe@mail.com" }
    },
    {
      "amount": 213.32,
      "created_at": "2021-10-15T17:22:32Z",
      "customer": { "name": "John Doe", "email": "johndoe@mail.com" }
    },
    {
      "amount": 2334.23,
      "created_at": "2021-10-19T00:38:11Z",
      "customer": { "name": "Luck Det", "email": "luckdet@mail.com" }
    }
  ]
}
```
### Criar um endpoint para listar Pedidos
Nessa parte do desafio, será necessário criar um endpoint para listar pedidos. Será retornado os pedidos criados entre um período, definido pelos parametros `start_date` e `end_date`.

Requisição: GET `/orders`

Parametros:
- `start_date` é um Date, no formato YYYY-MM-DD;
- `end_date` é um Date, no formato YYYY-MM-DD;
Exemplo de retorno:
```json
{
  "orders": [
    {
      "id": "511594b8-c322-4732-a712-438dd4517938",
      "amount": 23.78,
      "customer_id": "511594b8-c322-4732-a712-438dd4517938",
      "created_at": "2021-10-10T05:43:22Z",
      "updated_at": "2021-10-10T05:43:22Z"
    },
    {
      "id": "0192c1n3-c322-4732-a712-438dd4517938",
      "amount": 213.32,
      "customer_id": "91308131-c322-4732-a712-082371301",
      "created_at": "2021-10-15T17:22:32Z",
      "updated_at": "2021-10-10T05:43:22Z"
    },
    {
      "id": "09812bv1-c322-4732-a712-438dd4517938",
      "amount": 2334.23,
      "customer_id": "1312312-c322-4732-a712-1cx1313x1",
      "created_at": "2021-10-19T00:38:11Z",
      "updated_at": "2021-10-10T05:43:22Z"
    }
  ]
}
```
### Critérios para listar Pedidos:
- Timezone é America/Sao_Paulo;

### Criar um endpoint para listar Clientes
Nessa parte do desafio, será necessário criar um endpoint para listar todos clientes. Será retornado cada cliente com ticket médio calculado e valor total de compras.

Requisição: GET `/customers`
Exemplo de retorno:
```json
{
  "customers": [
    {
      "email": "johndoe@mail.com",
      "average_ticket_amount": 23.72,
      "total_spend_amount": 3123.52
    },
    {
      "email": "luckdet@mail.com",
      "average_ticket_amount": 101.72,
      "total_spend_amount": 4593.52
    }
  ]
}
```
### Critérios para listar Clientes:
- Caso tenha dois clientes com mesmo email, é necessário agrupar o cliente e seus pedidos pois são do mesmo cliente;
- O cálculo do ticket médio é feito pela soma do <em>amount</em> dos pedidos, dividido pelo número de pedidos de um cliente;
- O cálculo do total gasto é feito pela soma do <em>amount</em> dos pedidos de um cliente;
## Dados de entrada
Link com o JSON de entrada:
https://s3.us-west-2.amazonaws.com/desafio-profitfy.me/new-new-teste.json
## Requisitos
- TypeScript;
- Node.js;
- PostgreSQL;
## Diferenciais
- Testes unitários e integrados;
- ORM;
## Entre os critérios de avaliação estão:
- Código limpo e organização;
- Documentação do projeto (readme);
- Performance;
- Detalhamento;
## Como devo entregar o desafio?
- Clone o repositório (não forke);
- Suba o projeto para seu repositório
- Nos envie o link do repositório.
- Envie um e-mail para [victorlevi@profitfy.me](mailto:victorlevi@profitfy.me), com o assunto '\[Teste Dev\] Desafio';
## Dúvida
Se tiver qualquer dúvida sobre esse teste, envie um e-mail com o título '\[Teste Dev\] Dúvida' para [victorlevi@profitfy.me](mailto:victorlevi@profitfy.me)
Good Luck! 🍀
