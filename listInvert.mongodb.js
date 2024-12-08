const database = 'BD3-NoSQL-AtlasMongoDB'; // Nome do banco de dados
const collection = 'conversas'; // Nome da coleção

use(database); // Acessa ou cria o banco de dados

db[collection].aggregate([
    { $unwind: "$mensagens" }, // Desmembrar o array de mensagens
    { $sort: { "mensagens.data_hora": -1 } }, // Ordenar por data/hora decrescente
    {
      $project: {
        contato: 1, // Exibe o contato
        "mensagens.texto": 1, // Exibe o texto da mensagem
        "mensagens.data_hora": 1 // Exibe a data/hora
      }
    }
  ]);
  