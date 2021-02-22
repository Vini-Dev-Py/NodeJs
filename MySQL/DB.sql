CREATE TABLE user (
    NOME VARCHAR(50),
    EMAIL VARCHAR(100),
    IDADE INT
);

INSERT INTO user (
    NOME, EMAIL, IDADE
) VALUES (
        'Vinicius Batista',
        'vinigbatista@gmail.com',
        17
    );
    
INSERT INTO user (
    NOME, EMAIL, IDADE
) VALUES (
        'Sofia Batista',
        'Sofia@gmail.com',
        4
    );

INSERT INTO user (
    NOME, EMAIL, IDADE
) VALUES (
        'Isabella Alves',
        'IsaAlves@gmail.com',
        17
    );

SELECT * FROM user WHERE idade >= 17;

DELETE FROM user WHERE NOME = "Sofia Batista"

UPDATE user SET NOME = "Isabella Alves Batista", EMAIL = "IsaAlvesBatista@gmail.com" WHERE NOME = "Isabella Alves";