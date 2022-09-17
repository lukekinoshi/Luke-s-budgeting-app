DROP DATABASE IF EXISTS budgets;
CREATE DATABASE budgets;

\c budgets;

CREATE TABLE budgets (
    id SERIAL PRIMARY KEY,
    item_name TEXT NOT NULL,
    date TEXT NOT NULL,
    item_from TEXT,
    category TEXT,
    amount INT
);