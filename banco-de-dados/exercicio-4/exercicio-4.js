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
        tags: ["mongodb", "nosql", "modelagem"],
        detalhes: {
            categoria: "Arquitetura de Dados",
            tempo_leitura_min: 6
        }
    }
])

print("\n=== 1. Atualização (updateOne): Adicionando Array de Documentos (comentarios) ===")
db.posts.updateOne(
    { autor: "Maria Oliveira" },
    {
        $set: {
            visualizacoes: 300,
            publicado: true,
            comentarios: [
                { usuario: "Carlos Santos", texto: "Excelente explicação sobre schema flexível!" },
                { usuario: "Ana Costa", texto: "Muito útil para o projeto." }
            ],
            revisao: {
                status: "aprovado",
                nota: 10
            }
        }
    }
)

print("\n=== 2. Filtro Avançado (find): Consulta dentro de Array (tag 'nosql') ===")
db.posts.find({ tags: "nosql" })

print("\n=== 3. Filtro por Campo Específico (find): Autor ===")
db.posts.find({ autor: "Maria Oliveira" })

print("\n=== 4. Filtro Avançado (find): Consulta dentro de Documentos Aninhados ===")
db.posts.find({ "detalhes.categoria": "Arquitetura de Dados", "comentarios.usuario": "Carlos Santos" })

print("\n=== 5. Remoção (deleteOne): Excluindo Post de João Silva ===")
db.posts.deleteOne({ autor: "João Silva" })

print("\n=== 6. Documentos Restantes na Coleção posts ===")
db.posts.find()