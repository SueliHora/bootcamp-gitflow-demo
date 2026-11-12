-- Limpa tabelas anteriores caso o script seja reexecutado
DROP TABLE IF EXISTS alunos;
DROP TABLE IF EXISTS cursos;

-- 1. Criar a tabela cursos
CREATE TABLE cursos (
    id INT PRIMARY KEY,
    nome_curso VARCHAR(100) NOT NULL
);

-- 2. Criar a tabela alunos com Chave Estrangeira (FK)
CREATE TABLE alunos (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    curso_id INT NOT NULL,
    CONSTRAINT fk_aluno_curso FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

-- 3. Inserir 3 cursos na tabela cursos
INSERT INTO cursos (id, nome_curso) VALUES
    (1, 'Desenvolvimento Web'),
    (2, 'Ciência de Dados'),
    (3, 'Engenharia de Dados');

-- 4. Inserir 4 alunos na tabela alunos
INSERT INTO alunos (id, nome, email, curso_id) VALUES
    (1, 'João Silva', 'joao.silva@email.com', 1),
    (2, 'Maria Oliveira', 'maria.oliveira@email.com', 1),
    (3, 'Carlos Santos', 'carlos.santos@email.com', 2),
    (4, 'Ana Costa', 'ana.costa@email.com', 2);

-- 5. Teste de integridade da Chave Estrangeira (deve exibir erro de violação de FK)
INSERT INTO alunos (id, nome, email, curso_id) VALUES
    (5, 'Aluno Inválido', 'erro@email.com', 999);

-- 6. Consultar todos os alunos inseridos
SELECT * FROM alunos;