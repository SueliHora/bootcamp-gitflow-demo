use orion_db

// Limpa a coleção para garantir execução limpa
db.posts.drop()

// Inserção inicial (Schema Flexível)
db.posts.insertMany([
    {
        titulo: "Introdução ao SQL",
        autor: "João Silva",
        visualizacoes: 120,
        tags: ["sql", "relacional"]
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
])

print("\n=== 1. Atualização (updateOne): Adicionando Array e Documento Aninhado ===")
db.posts.updateOne(
    { autor: "Maria Oliveira" },
    {
        $set: {
            visualizacoes: 300,
            publicado: true,
            tags: ["mongodb", "nosql", "modelagem"],
            revisao: {
                status: "aprovado",
                nota: 10
            }
        }
    }
)

print("\n=== 2. Filtro Avançado (find): Consulta dentro de Array ===")
db.posts.find({ tags: "mongodb" })

print("\n=== 3. Filtro Avançado (find): Consulta dentro de Documento Aninhado ===")
db.posts.find({ "detalhes.categoria": "Arquitetura de Dados", "revisao.status": "aprovado" })

print("\n=== 4. Remoção (deleteOne): Excluindo Post de João Silva ===")
db.posts.deleteOne({ autor: "João Silva" })

print("\n=== 5. Documentos Restantes na Coleção posts ===")
db.posts.find()