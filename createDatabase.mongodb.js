// Conecta ao banco de dados
const database = 'BD3-NoSQL-AtlasMongoDB';
const collection = 'conversas';

use(database);

// Cria a coleção, caso ainda não exista
db.createCollection(collection);
