-- If you want some default data, run psql -f seed.sql
-- Make sure you run schema first though

\c shopmate;

INSERT INTO products (name, description, price, quantity)
VALUES
  ('Product 1', 'Description of Product 1', 9.99, 10),
  ('Product 2', 'Description of Product 2', 19.99, 5),
  ('Product 3', 'Description of Product 3', 14.99, 8);