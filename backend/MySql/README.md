# Base de datos de MySql

```MySQL
create database programacion;
use programacion;
drop table lenguajes_programacion;
create table lenguajes_programacion
(
    id          int                                  not null auto_increment primary key,
    nombre      varchar(255)                         not null,
    anio_salida int                                  null,
    github_rank int                                  null,
    created_at  datetime                             not null default current_timestamp,
    updated_at  datetime on update current_timestamp not null default current_timestamp
);

insert into lenguajes_programacion (nombre, anio_salida, github_rank)
values ('JavaScript', 1995, 1),
       ('Python', 1990, 2),
       ('Java', 2000, 3);

select *
from lenguajes_programacion;
```

## Instalar lo siguiente

```cmd
npm i dotenv --save-dev
npm i mysql2
npm i express
```

## .env

- Sirve para crear variables de entorno, lo que nos ayuda a tener una mejor estructura de datos, al igual que tener
  datos de manera aislada, lo que permite mejorar la seguridad de coneccion o algun otro tipo

