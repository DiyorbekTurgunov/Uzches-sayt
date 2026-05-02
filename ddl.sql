CREATE DATABASE dars707;

CREATE TABLE authors(
    id SERIAL PRIMARY KEY,
    fullName VARCHAR(32) NOT NULL,
    birthdate DATE NOT NULL,
    gender VARCHAR(10) CHECK ( gender IN ('male', 'female'))
);

ALTER TABLE authors
DROP COLUMN gender;

ALTER TABLE authors
ADD COLUMN gender VARCHAR(10) CHECK ( gender IN ('male', 'female'));

ALTER TABLE authors
    ADD CONSTRAINT unique_fullname UNIQUE (fullName);

ALTER TABLE authors
    ADD COLUMN phoneNumber VARCHAR(16)
        CHECK (LENGTH(phoneNumber) BETWEEN 9 AND 16);


