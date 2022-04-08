### 1
 A) A Uma chave estrangeira é um relacionamento entre destintas tabelas e Uma chave estrangeira é chamada quando há o relacionamento entre duas tabelas

B)INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);
C) Erro pois o filme não existe

D) ALTER TABLE Movie DROP COLUMN rating;

### 2
A) A criação de uma tabela de elenco e ta sendo relacionada com a tabela atores e filmes

B)


### 3 
A) 

B)SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;