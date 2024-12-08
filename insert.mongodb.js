const database = 'BD3-NoSQL-AtlasMongoDB'; // Nome do banco de dados
const collection = 'conversas'; // Nome da coleção

use(database); // Acessa ou cria o banco de dados

// Inserir duas conversas com 10 mensagens entre duas pessoas (João Silva e Maria Oliveira)
db[collection].insertMany([
  {
    contato: "João Silva",
    mensagens: [
      { data_hora: new Date("2024-12-08T09:00:00Z"), texto: "Oi, tudo bem?" },
      { data_hora: new Date("2024-12-08T09:05:00Z"), texto: "Como você está?" },
      { data_hora: new Date("2024-12-08T09:10:00Z"), texto: "Estou bem, obrigado!" },
      { data_hora: new Date("2024-12-08T09:15:00Z"), texto: "Que bom saber!" },
      { data_hora: new Date("2024-12-08T09:20:00Z"), texto: "E você, como está?" },
      { data_hora: new Date("2024-12-08T09:25:00Z"), texto: "Também estou bem!" }
    ]
  },
  {
    contato: "Maria Oliveira",
    mensagens: [
      { data_hora: new Date("2024-12-08T09:30:00Z"), texto: "Oi, João! Tudo certo!" },
      { data_hora: new Date("2024-12-08T09:35:00Z"), texto: "Estou bem, e você?" },
      { data_hora: new Date("2024-12-08T09:40:00Z"), texto: "Tenho feito algumas coisas do trabalho." },
      { data_hora: new Date("2024-12-08T09:45:00Z"), texto: "Nos falamos depois então." }
    ]
  }
]);
