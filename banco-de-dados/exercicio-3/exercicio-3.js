// Seleciona o banco de dados
db = db.getSiblingDB('orion_db');

// Limpa a coleção caso o script seja reexecutado
db.posts.drop();

// 1. Inserir 2 documentos com estruturas diferentes (Schema Flexível)
const resultadoInsert = db.posts.insertMany([
    {
        titulo: "Introdução ao NoSQL e MongoDB",
        autor: "João Silva",
        tags: ["nosql", "mongodb", "orientado-a-documentos"],
        publicado: true
    },
    {
        titulo: "Modelagem Flexível na Prática",
        autor: "Maria Oliveira",
        visualizacoes: 240,
        detalhes: {
            categoria: "Arquitetura de Dados",
            tempo_leitura_min: 6
        }
    }
]);

print("=== Resultado da Inserção ===");
printjson(resultadoInsert);

// 2. Listar todos os documentos da coleção posts
print("=== Documentos na Coleção posts ===");
printjson(db.posts.find().toArray());