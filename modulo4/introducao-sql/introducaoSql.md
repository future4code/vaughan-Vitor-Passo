### Exercício 1
A) O id está como primary key, pois ele é um atributo chave é unico de cada usuarios
    name é do tipo varchar e é limitado para apenas 255 caractéres.
    birth é do tipo data, mostra data que a pessoa nasceu
### Exercício 2
A) CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUE("002","Gloória Pires", 1200000, "1963-08-23", "F");

B) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY', Basicamente essa chave já está
sebdo usada. E como está defenida como primary não dá pra dois usuários possuir o mesmo valor.

### Exercício 3
A) ``` SELECT * FROM Actor ```
B)  ```SELECT salary, name FROM Actor WHERE name = "Tony Ramos" ```

C) ``` SELECT * From Actor WHERE gender = "Invalid"``` 
Aparece tudo null, pois "ivalid", não é encontrado no campo gender.

D) ``` SELECT id, name, salary from Actor WHERE salary <= 500000``` 