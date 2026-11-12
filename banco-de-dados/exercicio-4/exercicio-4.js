// Seleciona a base de dados
db = db.getSiblingDB('orion_db');

// Garante o estado inicial da coleção para execução determinística
db.posts.drop();
db.posts.insertMany([
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

// 1. Consulta com filtro (find)
print("=== 1. Filtro: Posts de Maria Oliveira ===");
printjson(db.posts.find({ autor: "Maria Oliveira" }).toArray());

// 2. Atualização de documento (updateOne com $set)
const resultadoUpdate = db.posts.updateOne(
    { autor: "Maria Oliveira" },
    { $set: { publicado: true, visualizacoes: 300 } }
);
print("=== 2. Resultado da Atualização ===");
printjson(resultadoUpdate);

// 3. Remoção de documento (deleteOne)
const resultadoDelete = db.posts.deleteOne({ autor: "João Silva" });
print("=== 3. Resultado da Remoção ===");
printjson(resultadoDelete);

// 4. Listar documentos finais na coleção posts
print("=== 4. Documentos Restantes na Coleção posts ===");
printjson(db.posts.find().toArray());