### EXERCÍCIO 1

A) ```ALTER TABLE Actor DROP COLUMN salary;```
Com esse comando vai ser capaz de excluir a coluna salário da tabela

B) ```ALTER TABLE Actor CHANGE gender sex VARCHAR(6);```
Esse comando será capaz de redeclarar uma coluna com 6 caractere e alterou gender para sex

C) ```ALTER TABLE Actor CHANGE gender gender VARCHAR(255);```
Irá dá um erro, pois o nome da coluna foi alterado

D) ```ALTER TABLE actor CHANGE gender gender VARCHAR(100);```
````SELECT * FROM actor;``` DESCRIBE actor;

### EXERCÍCIO 2

A)```UPDATE actor SET nome = "Vitin" WHERE id = 1;```
B) é a mesma coisa da.
C)  ``` UPDATE actor set nome = "Ellen", salary = 15000, gender = "F" WHERE id = 3; ```
D) ele deu certo, mas nao alterou na coluna.

### EXERCÍCIO 3
A) ```DELETE FROM actor WHERE nome = "Vinicius";``` , mas tive que tirar a proteção do mysql.

B)```DELETE FROM actor WHERE gender= "M" AND salary >= 1600;```

### EXERCÍCIO 4

A)```SELECT MAX(salary) FROM actor;```
B) ````SELECT MIN(salary) FROM actor WHERE gender = "F";````
C)  ``` SELECT COUNT(*) FROM actor WHERE gender = "F"; ```
D) ``SELECT SUM(salary) from actor;``


### EXERCÍCIO 5

A)```Basicamente vai retornar a quantidade de uma determinada coluna nesse caso retorna a quantidade de atores da coluna gender```
B) ````SELECT id, nome FROM actor ORDER BY nome DESC;````
C)  ``` SELECT * FROM actor ORDER BY salary; ```
D) ``SELECT * FROM actor ORDER BY salary DESC LIMIT 3;``
E) ``SELECT AVG(salary), gender from actor GROUP BY gender;``

### EXERCÍCIO 6
``A questão 6 eu já comecei com os valores certinhos. Por exemplo coloquei float na avaliação, mas vou mandar meu código sql abaixo.``

```
CREATE TABLE actor(
    id INt PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    gender VARCHAR(6) NOT NULL
);

INSERT INTO actor (id, nome, salary, gender) 
VALUES (6, "Vitinho", 160000, "M") ,(4, "Benjamin", 156000, "M"),(7, "Cleiton", 150, "M");

SELECT nome, salary, gender FROM actor WHERE id = 1;
SELECT * FROM actor;
SELECT MIN(salary) FROM actor WHERE gender = "F";
SELECT COUNT(*) FROM actor WHERE gender = "F";
SELECT SUM(salary) FROM actor;
SELECT id, nome FROM actor ORDER BY nome DESC;
SELECT * FROM actor ORDER BY salary DESC LIMIT 3;
SELECT AVG(salary), gender from actor GROUP BY gender;

CREATE TABLE movie(
	id INT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    sinopse VARCHAR(255) NOT NULL,
    data_lancamento VARCHAR(15) NOT NULL,
    avaliacao FLOAT NOT NULL
);

INSERT INTO movie (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES (300, "It a coisa", "É uma historia de terror que conta a história de 6 amigos e um palhaço", "17/06/2003", 7),
(200, "A visitia", "É uma historia de terror que conta a história de 2 meninos que foram visitar os avós que não conhece e começa aconter coisas estranhas
", "30/09/2015", 8.5)
;
SET SQL_SAFE_UPDATES = 0;

ALTER TABLE actor CHANGE gender gender VARCHAR(100);
UPDATE actor SET nome = "Vitin" WHERE id = 1;
UPDATE actor set nome = "Elen", salary = 15000, gender = "F" WHERE id = 30;

SELECT * FROM actor;
DELETE FROM actor WHERE gender= "M" AND salary >= 1600;

DESCRIBE actor;

SELECT * FROM Actor;
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
SELECT * FROM movie;
```