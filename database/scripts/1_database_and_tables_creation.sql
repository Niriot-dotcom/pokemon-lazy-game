create database finalProject_LopezMendezPatyYarely
go
use finalProject_LopezMendezPatyYarely
go

create table users (
	id int identity(1, 1) primary key not null,
	username nvarchar(50) unique not null,
	password nvarchar(50) not null,
	country_code nvarchar(2) not null,
	experience float not null
)

create table pokemons (
	id int identity(1, 1) primary key not null,
	name nvarchar(100) not null,
	img nvarchar(200) not null,
	height float not null,
	weight float not null,
	abilities nvarchar(100) not null,
	types nvarchar(100) not null,
)

create table games (
	id int identity(1, 1) primary key not null,
	timestamp int not null,
	status nvarchar(20) not null,
	constraint ck_status check(status in('WON', 'LOST', 'TIED')),
)

select * from users
select * from pokemons
select * from games