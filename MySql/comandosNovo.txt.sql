Comando MySQL  par acessar o SGBD


1)    sudo mysql -u root -p
     digite em seguida a  senha

2) CREATE DATABASE nome_do_banco_de_dados;

3) CREATE USER 'novo_usuario'@'localhost' IDENTIFIED BY 'nova_senha';

4) GRANT ALL PRIVILEGES ON nome_do_banco_de_dados.* TO 'novo_usuario'@'localhost';

5) Atualizar os privilégios
FLUSH PRIVILEGES;  

$---- Exercicio 1 ------------------------
CREATE DATABASE loja;
CREATE USER 'leitor'@'localhost' IDENTIFIED BY 'senha123';
GRANT SELECT ON loja.* TO 'leitor'@'localhost';


$$$--- Exercicio 2 ----------------------------
CREATE DATABASE aplicativo;
CREATE USER 'escritor'@'localhost' IDENTIFIED BY 'senha456';
GRANT SELECT, INSERT, UPDATE, DELETE ON aplicativo.* TO 'escritor'@'localhost';



$---- Exercício 3  ------------------------------------------
Criando o banco de dados
CREATE TABLE alunos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    idade INT
);

$---- Exercício 4  --- Inserindo alunos na tabela  -------------------------
INSERT INTO alunos (nome, idade) VALUES ('João', 20);
INSERT INTO alunos (nome, idade) VALUES ('Maria', 22);
INSERT INTO alunos (nome, idade) VALUES ('Pedro', 25);


$---- Exercício 5 --- Listando todos os alunos  ----------------
SELECT * FROM alunos;


$----- Exercício 6 --- Listando alunos com idade maior que 20 -----------
SELECT * FROM alunos WHERE idade > 20;

$---- Exercicio 7 --  Atualizando dados  ------------------------
UPDATE alunos SET idade = 23 WHERE nome = 'João';


$---- Exercicio 6  --- Exclucindo dados  --------------------------
DELETE FROM alunos WHERE nome = 'Pedro';


