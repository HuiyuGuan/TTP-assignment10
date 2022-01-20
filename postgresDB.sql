
-- Create the database

CREATE DATABASE postgres_store_db;

-- create a store table

CREATE TABLE store(
    store_id serial NOT NULL PRIMARY KEY,
    store_name VARCHAR(50) NOT NULL,
    location_city VARCHAR(50) NOT NULL,
    is_open BOOLEAN NOT NULL,
    store_phonenumber VARCHAR(15) NOT NUll);

-- create a employees table with a foreign key referencing to the store_id

CREATE TABLE employees(
    employee_id serial NOT NULL PRIMARY KEY,
    store_id INTEGER,
    employee_name VARCHAR(50) NOT NULL,
    employee_phonenumber VARCHAR(15) NOT NUll,
    employee_email VARCHAR(100) NOT NULL,
    employee_roll VARCHAR(30) NOT NUll,
	FOREIGN KEY (store_id) REFERENCES store(store_id)
);

-- create a product table with foreign key referencing to the store_id

Create table product(
	product_id serial NOT NULL PRIMARY KEY,
	store_id INTEGER,
    FOREIGN KEY (store_id) REFERENCES store(store_id),
	product_name varchar,
	product_price int
);

-- create a purchases table with foreign key referencing to the store_id and product_id

create table purchases(
	purchase_id int NOT NULL PRIMARY KEY,
	store_id int,
	product_id int,
	purchase_date date,
	purchase_price int,
	FOREIGN KEY (store_id) REFERENCES store(store_id),
	FOREIGN KEY (product_id) REFERENCES product(product_id)
);


-- create a customers table with foreign key referencing to the purchase_id

Create table customers (
	customers_id serial NOT NULL PRIMARY KEY,
	purchase_id int,
	customers_name VARCHAR(50) NOT NULL,
	customers_phonenumber VARCHAR(15) NOT NULL,
	customers_address VARCHAR(200) NOT NULL,
	foreign key (purchase_id) references purchases(purchase_id)
);


-- stack of inner joins that joins the 5 tables

select *
From store
inner join employees
on store.store_id = employees.store_id
inner join product
on store.store_id = product.store_id
inner join purchases
on store.store_id = purchases.store_id
inner join customers
on purchases.purchase_id = customers.purchase_id;

