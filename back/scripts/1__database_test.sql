create database test_1
go
use test_1
go

create table users (
	id int identity(1, 1) primary key not null,
	username nvarchar(50) unique not null,
	password nvarchar(50) not null,
	country_code nvarchar(2) not null,
	experience float not null
)
go

create table pokemons (
	id int identity(1, 1) primary key not null,
	name nvarchar(50) not null,
	url_image nvarchar(200) not null,
	height float not null,
	weight float not null,
)

select abilities from array_pokemons
select types from array_pokemons

SELECT value FROM array_pokemons CROSS APPLY STRING_SPLIT(abilities, ';')
SELECT value FROM array_pokemons CROSS APPLY STRING_SPLIT(types, ';')

SELECT value as typ, COUNT(*) AS [number_of_types]  
FROM array_pokemons  
    CROSS APPLY STRING_SPLIT(types, ';')  
GROUP BY value  
--HAVING COUNT(*) > 2  
ORDER BY COUNT(*) DESC

use finalProject_LopezMendezPatyYarely
drop table pokemons