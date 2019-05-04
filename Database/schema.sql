
CREATE DATABASE petPartyDB;
USE petPartyDB;

CREATE TABLE users
(
    userid int NOT NULL AUTO_INCREMENT,
    username varchar(30) NOT NULL,
    userphoto varchar(255),
    email varchar(30) NOT NULL,
    -- pet column will collect: dog, cat, bird, fish, reptile from dropdown or checklist
    pet varchar(30) NOT NULL, 
    petNames varchar(255),
    PRIMARY KEY (userid)
);

CREATE TABLE events
(
    eventid int NOT NULL AUTO_INCREMENT,
    title varchar(180) NOT NULL,
    date varchar(25) not null,
    time varchar(25) not null,
    link varchar(255),
    address varchar(255) NOT NULL,
    -- pet column will collect: dog, cat, bird, fish, reptile from dropdown or checklist
    pet varchar(30) NOT NULL,
    hostname varchar(255),
    PRIMARY KEY (eventid)

);




