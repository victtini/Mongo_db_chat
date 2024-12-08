const database = 'BD3-NoSQL-AtlasMongoDB'; // Nome do banco de dados
const collection = 'conversas'; // Nome da coleção

use(database)
db[collection].aggregate([
    { $unwind: "$mensagens" }, // Desmembra o array de mensagens
    { $sort: { "mensagens.data_hora": 1 } }, // Ordena as mensagens por data/hora em ordem crescente
    {
      $project: {
        contato: 1, // Exibe o contato
        "mensagens.texto": 1, // Exibe o texto da mensagem
        "mensagens.data_hora": 1 // Exibe a data/hora da mensagem
      }
    }
  ]);
  