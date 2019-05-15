create database dbnews;
use dbnews;

create table news(
    id bigint auto_increment,
    title varchar(50),
    description varchar(150),
    constraint pk_id primary key (id)
);