-- 1. INNER JOIN: nome do aluno e nome do curso
SELECT
    a.nome AS nome_aluno,
    c.nome_curso
FROM alunos a
INNER JOIN cursos c ON a.curso_id = c.id;

-- 2. INNER JOIN + WHERE: apenas alunos de "Desenvolvimento Web"
SELECT
    a.nome AS nome_aluno,
    a.email,
    c.nome_curso
FROM alunos a
INNER JOIN cursos c ON a.curso_id = c.id
WHERE c.nome_curso = 'Desenvolvimento Web';

-- 3. UPDATE: mover Maria Oliveira para "Ciência de Dados" (id = 2)
UPDATE alunos
SET curso_id = 2
WHERE nome = 'Maria Oliveira';

-- Conferir a alteração após o UPDATE
SELECT
    a.nome AS nome_aluno,
    c.nome_curso
FROM alunos a
INNER JOIN cursos c ON a.curso_id = c.id
ORDER BY a.id;

-- 4. EXTRA (Avançado): LEFT JOIN + WHERE para cursos sem nenhum aluno matriculado
SELECT
    c.id,
    c.nome_curso
FROM cursos c
LEFT JOIN alunos a ON c.id = a.curso_id
WHERE a.id IS NULL;