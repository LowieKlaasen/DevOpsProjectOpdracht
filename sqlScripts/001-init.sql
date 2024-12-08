USE mydb;

CREATE TABLE IF NOT EXISTS todos (
    id varchar(255) primary key,
    title varchar(255) not null,
    status varchar(255) not null
);

INSERT INTO todos (id, title, status) VALUES (UUID(), 'mijn eerste taak', 'TODO');
