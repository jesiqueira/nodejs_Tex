CREATE SCHEMA restaurante_delivery DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS produto_categoria(
    id_categoria_tipo int not null  auto_increment,
    nome_produto_categoria varchar(80) not null,
    primary key(id_categoria_tipo)
);

INSERT INTO produto_categoria (nome_produto_categoria) VALUES ('Frutos do Mar');
INSERT INTO produto_categoria (nome_produto_categoria) VALUES ('Carne');
INSERT INTO produto_categoria (nome_produto_categoria) VALUES ('Pastas');
INSERT INTO produto_categoria (nome_produto_categoria) VALUES ('Caldos');
INSERT INTO produto_categoria (nome_produto_categoria) VALUES ('Comidas Brasileiras');

CREATE VIEW selectCategorias AS SELECT produto_categoria.id_produto_tipo as id_categoria_tipo, produto_categoria.nome_produto_categoria as nome_produto_categoria FROM produto_categoria order by produto_categoria.nome_produto_categoria