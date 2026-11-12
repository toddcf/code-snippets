# SQL Mastery for Data Analytics - Notes

SQL = Structured Query Language
It is the language used to communicate with databases.


## DBMS

DBMS = Database Management System
This is the software used to interact between the database and the various entities that access it, such as:

- Individual analysts writing SQL queries
- Apps
- Power BI
- Spark
- Tableau
- Kafka
- Synapse


## Database Types

1. Relational (SQL Database -- the only one)

Tables, like spreadsheets, with columns and rows.  There is a "relationship" between the tables.

Examples: Microsoft SQL Server (which this course focuses on), MySQL, PostgreSQL


2. Key-Value (NOSQL Database)

Key/value pairs, like JavaSCript objects.

Examples: Redis, Amazon DynamoDB


3. Column-Based (NOSQL Database)

Data is arranged in rows.  This is an advanced style of database used to handle large amounts of data, where the main purpose is to search for data.

Examples: Apache Cassandra, Amazon Redshift


4. Graph (NOSQL Database)

The main focus is the relationship between objects.  Can be connected in multiple ways and combinations.

Example: Neo4j


5. Document (NOSQL Database)

The data is stored as an entire document.  Here, searching is not as important as fitting everything onto one page.

Example: MongoDB


## SQL Commands

### Data Definition Language (DDL)

DDL defines the structure of the database itself.


#### CREATE

Creates a brand new table in the database.


#### ALTER

Edit the structure of a table that already exists.


#### DROP

Delete an entire table.


### Data Manipulation Language (DML)

DML manipulates the data without changing the structure of the database itself.


#### INSERT

Add new data into a table.


#### UPDATE

Edit existing data within a table (but keep the table structure the same).


#### DELETE

Delete data within a table.


### Data Query Language (DQL)

The following are called "clauses."  Best practice: Always make these UPPERCASE.


#### DISTINCT

Removes duplicates.  Comes directly after the `SELECT` command:

```
SELECT DISTINCT
  column
FROM table;
```

It will take the first match and ignore any subsequent matches -- so make sure that is what you want.

Note that this is an expensive operation, so don't use it if the data is already unique -- you will burn unnecessary processing power.

##### Example

Return unique list of all countries:

```
SELECT DISTINCT
  country
FROM customers;
```


#### FROM

FROM is the clause in the query that tells which table you want to get the data from.

Example: `FROM customers`


#### GROUP BY

Aggregates a column by another column.

When you "group by" a category, you see each category only once, followed by the aggregated result for that category.

Note that you must use a function to tell SQL what kind of aggregation you want to do.  You can't just select the whole column and leave it at that.

##### Example

You want to find the total score *by* country.  If you have two "Germany" results, with scores of 350 and 500, the output will be *one* Germany result with a total score of 850.

```
SELECT
  country,
  SUM(score)
FROM customers
GROUP BY country;
```

##### Alias

When you aggregate a column, the new output column will be labeled `(No column name)`.  To give it a label using `AS` after the aggregation function:

```
SELECT
  country,
  SUM(score) AS total_score
FROM customers
GROUP BY country;
```

NOTE: You *cannot* use a space in the label.  It will require an underscore or some other character instead of a space.  OR, you can put the value inside brackets, and this will allow you to use spaces.  For example: `[Total Score]`

SCOPE: This label will only apply to this query.  Not any other queries.  And it will not modify the database itself.

NOTE: You can use `AS` to rename other columns, too.  This technique is not just limited to aggregates.

##### Multiple Group By

All columns in the `SELECT` clause must be either aggregated or included in the `GROUP BY` clause.  In this example, `first_name` has been added to both `SELECT` and `GROUP BY` because it is not aggregated:

```
SELECT
  country,
  first_name,
  SUM(score) AS total_score
FROM customers
GROUP BY country,first_name;
```

Do not separate the values with a space -- just a comma.


#### HAVING

Filters data *after* aggregation. Can be used only with `GROUP BY`.  (And gets placed *after* `GROUP BY`.)

Uses a condition to filter the results.

##### Example

Countries having a score *higher than 800*:

```
SELECT
  country,
  SUM(score) AS total_score
FROM customers
GROUP BY country
HAVING SUM(score) > 800;
```

DIFFERENCE BETWEEN `WHERE` and `HAVING`: `WHERE` is used to filter the data *before* aggregation.  `HAVING` is used to filter the data *after* aggregation.

#### JOIN

Combines two tables, and you can think of one as the "left" table, and one as the "right" table.

In most companies, data is never contained in a single table -- it is spread across multiple tables.  (Maybe there is one table for products, one for customers, another for orders, etc.)  So you may need to combine data, either with `JOIN` or `UNION`.

If you want to combine *columns* (as in, place two tables side-by-side), you want to `JOIN` tables.  The first table is considered the LEFT table, and the second table is considered RIGHT table.

(If you want to stack *rows*, you want to use set operators like `UNION`, `UNION ALL`, `EXCEPT`, and `INTERSECT`.  Here, both tables will need to have the exact same number of columns, but you don't need any key column.)

To `JOIN` tables, you need to define the "key columns" between the two tables.  This is a common column between the two tables, such as an ID number.  When joining, SQL will match these two key columns with each other.  If a key column doesn't have a matching value, that row will be dropped from the join.  (Depending on the type of `JOIN` you're using, it will keep the data it does have and fill in the missing fields with `NULL`, or it will drop both.)

You can even use one large query to combine more than two tables into one result.


Use Cases:

1. Recombine Data.  Add different data together to form a fuller big picture.
	- `INNER JOIN`
	- `LEFT JOIN`
	- `FULL JOIN`
2. Enhancing Data.  Adding the data from one table to another table gives you extra info that you didn't have in just the first table.
	- `LEFT JOIN`
3. Filtering.  Rather than pulling in the actual data from a second table, you just check it for the existence of certain data.  For example, Table A could be all customers, and Table B could be orders.  You can use Orders as a lookup table to determine which of your customers placed an order (if they exist in Table B), and return a table containing info just the customers who placed an order.
	- `INNER JOIN`
	- Left Anti-Join (`LEFT JOIN` + `WHERE` + `IS NULL`)
	- Full Anti-Join (`FULL JOIN` + `WHERE` + `IS NULL`)


	Decision Tree -- Choosing the Best JOIN:

- See only the matching data = `INNER JOIN`
- See ALL the data:
	- If both tables are equally important, use `FULL JOIN`.
	- If one table is more important, or is a "main" table, use `LEFT JOIN` (and list that "main" table first, so that it's the left table).
- See only *unmatching* data:
	- If both tables are equally important, use Full Anti-Join.
	- If one table is more important, or is a "main" table, use Left Anti-Join.

NOTE: Although `RIGHT JOIN` exists, it is not part of this decision tree because it is not a best practice.  (It is better to use `LEFT JOIN` and just list the tables in the order they need to be listed in.)


##### CROSS JOIN

Combines *every row* from the left table with *every row* from the right table -- all possible combinations from both tables.

(Venn Diagram showing two separate circles, but with lots of lines criss-crossing between them.)

A "Cartersian Join."  For example, if Table A has two rows, and Table B has three rows, you will get Row A1 combined with Rows B1, B2, and B3, and then Row A2 combined with Rows B1, B2, and B3.  In other words, multiply the number of rows in Table A by the number of rows in Table B.  *So be careful with this one.*  It will result in a massive number of rows in the output.

Syntax:

```
SELECT *
FROM tableA
CROSS JOIN tableB;
```

There are no conditions, because you just want to get every possible combination of everything.

It's a rare use case.  But maybe you want to see every combination of products and colors, or something like that.


###### Example

Generate all possible combinations of customers and orders.

```
SELECT *
FROM customers
CROSS JOIN orders;
```


##### FULL JOIN

Combines *all* rows from the "left" table and "right" table, whether they match or not.

(Venn Diagram with both sides (including the middle overlap) filled in.)

Syntax:

```
SELECT *
FROM tableA
FULL JOIN tableB
ON tableA.key = tableB.key;
```

Any fields that don't have a match will be populated with `NULL`.

For `FULL JOIN`, the order you list the tables doesn't matter -- either way, you are only retrieving the data that is in both.


###### Example

Get all customers and all orders, *even if there's no match*.

```
SELECT
	c.id,
	c.first_name,
	o.order_id,
	o.sales
FROM customers AS c
FULL JOIN orders AS o
ON c.id = o.customer_id;
```


###### FULL ANTI-JOIN

Retrieves only the *unmatching* rows from two tables.

(Venn Diagram where only the two outsides (not the middle overlap) are filled.)

Syntax:

```
SELECT *
FROM tableA
FULL JOIN tableB
ON tableA.key = tableB.key
WHERE tableA.key IS NULL OR tableB.key IS NULL;
```

Since this is still a `FULL JOIN`, it doesn't matter which table you make the LEFT or the RIGHT.


####### Example

Find customers *without orders* and orders that are *without customers*.

```
SELECT *
FROM customers AS c
FULL JOIN orders AS o
ON c.id = o.customer_id
WHERE c.id IS NULL OR o.customer_id IS NULL;
```


##### INNER JOIN

Combines only the rows that match in *both* the "left" and "right" tables.  The default type of join, if you do not specify a JOIN type (but the BEST PRACTICE is to always mention the type).

(Venn Diagram with only the middle overlap filled in.)

Syntax:

```
SELECT *
FROM <Table A>
INNER JOIN <Table B>
ON <condition -- how to MATCH rows, such as A.Key = B.Key>
```

Any fields that don't have a match will be populated with `NULL`.

For `INNER JOIN`, the order you list the tables doesn't matter -- either way, you are only retrieving the data that is in both.


###### Example

Get all customers along with their orders, *but only those who have placed an order*.

```
SELECT *
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;
```

ALTERNATIVELY, you can accomplish the same thing using `LEFT JOIN` by doing this:

```
SELECT *
FROM customers AS c
LEFT JOIN orders AS o
ON c.id = o.customer_id
WHERE o.order_id IS NOT NULL;
```

GOING BACK TO THE ORIGINAL EXAMPLE:

Additional cleanup: `SELECT` only the columns that make sense for this output.  For example, you don't need to return both the `id` and `customer_id` columns, because they are redundant.

```
SELECT
	id,
	first_name,
	order_id,
	sales
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;
```

IF BOTH TABLES HAVE AN IDENTICAL COLUMN NAME, specify which table you mean using dot notation, like this:

```
SELECT
	customers.id,
	orders.id
```

However, if this results in too many characters because you are writing out each table name in every clause, you can use aliases to reference each table by a shorter name.  In the following example, `FROM customers AS c` establishes that the `customers` table is `c`, and `INNER JOIN orders AS o` establishes that the `orders` table is `o`.  And then everywhere else in the query, you can just write `c` instead of `customers`, even if it comes before the declaration of the alias:

```
SELECT
	c.id,
	c.first_name,
	o.order_id,
	o.sales
FROM customers AS c
INNER JOIN orders AS o
ON c.id = o.customer_id;
```


##### LEFT JOIN

Combines *all* the rows from the "left" table plus *only the matching rows* from the "right" table.

(Venn Diagram with the left side plus the middle overlap filled in.)

The left table is the primary source of data, and the right table is secondary additional data.

Syntax:

```
SELECT *
FROM tableA
LEFT JOIN tableB
ON tableA.key = tableB.key;
```

The order of the tables in the syntax is very important -- you must mention the LEFT table first (in the `FROM` clause).


###### Example

Get all customers along with their orders, *including those without orders*.

```
SELECT
	c.id,
	c.first_name,
	o.order_id,
	o.sales
FROM customers AS c
LEFT JOIN orders AS o
ON c.id = o.customer_id;
```

SIDE NOTE: The same thing can be accomplished by using `RIGHT JOIN` and reversing which tables are left and right:

```
SELECT
	c.id,
	c.first_name,
	o.order_id,
	o.sales
FROM customers AS c
RIGHT JOIN orders AS o
ON c.id = o.customer_id;
```

*However, the instructor recommends always using `LEFT JOIN` and just controlling the order of the tables in the syntax.*


###### LEFT ANTI-JOIN

This concept is *all* rows from the "left" table *without* the matching rows from the "right" table.

There is no keyword for this concept, so you must use `LEFT JOIN` + `WHERE` + `IS NULL`.


####### Example

List all details for customers who have not placed any orders.

```
SELECT
	c.*,
	o.OrderID
FROM Sales.Customers AS c
LEFT JOIN Sales.Orders AS o
ON c.CustomerID = o.CustomerID
WHERE o.CustomerID IS NULL;
```


##### NO JOIN

This is used to return data from two tables *without* combining them.

(Venn Diagram of two separate circles, not touching.)

```
SELECT *
FROM tableA;

SELECT *
FROM tableB;
```

Just write two separate queries and get two separate results.


###### Example

Retrieve all data from customers and orders as separate results.

```
SELECT *
FROM customers;

SELECT *
FROM orders;
```


##### RIGHT JOIN

Combines *all* the rows from the "right" table plus *only the matching rows* from the "left" table.

(Venn Diagram with the right side plus the middle overlap filled in.)

Syntax:

```
SELECT *
FROM tableA
RIGHT JOIN tableB
ON tableA.key = tableB.key
```


###### Example

Get all customers along with their orders, including orders *without matching customers*.

```
SELECT
	c.id,
	c.first_name,
	o.order_id,
	o.sales
FROM customers AS c
RIGHT JOIN orders AS o
ON c.id = o.customer_id;
```

SIDE NOTE: The same thing can be accomplished by using `LEFT JOIN` and reversing which tables are left and right:

```
SELECT
	c.id,
	c.first_name,
	o.order_id,
	o.sales
FROM orders AS o
LEFT JOIN customers AS c
ON c.id = o.customer_id;
```

*The instructor recommends always using `LEFT JOIN` and just controlling the order of the tables in the syntax.*


###### RIGHT ANTI-JOIN

This concept is *all* rows from the "right" table *without* the matching rows from the "left" table.

There is no keyword for this concept, so you must use `RIGHT JOIN` + `WHERE` + `IS NULL`.

Syntax:

```
SELECT *
FROM tableA
RIGHT JOIN tableB
ON tableA.key = tableB.key
WHERE tableA.key IS NULL;
```


####### Example

Get all orders *without matching customers*.

```
SELECT *
FROM customers AS c
RIGHT JOIN orders AS o
ON c.id = o.customer_id
WHERE c.id IS NULL;
```


To do the same thing using `LEFT JOIN`:

```
SELECT *
FROM orders AS o
LEFT JOIN customers AS c
ON c.id = o.customer_id
WHERE c.id IS NULL;
```

Essentially, change `RIGHT JOIN` to `LEFT JOIN`, and then reverse which table is left and which is right.


##### Joining Multiple Tables

If you need to `JOIN` more and more tables, the general approach is to keep using `LEFT JOIN` to add more and more tables, and then at the end of the query, use the `WHERE` clause for one overall filter (rather than doing complicated joins every step of the way).

```
SELECT *
FROM tableA
LEFT JOIN tableB ON...
LEFT JOIN tableC ON...
LEFT JOIN tableD ON...
WHERE...
```

Or, if you only want the overlapping matches from all these tables, use `INNER JOIN` each time:

```
SELECT *
FROM tableA
INNER JOIN tableB ON...
INNER JOIN tableC ON...
INNER JOIN tableD ON...
WHERE...
```


###### Example

Retrieve a list of all orders, along with the related customer, product, and employee details.


#### ORDER BY

Sorting the results.  In your query, you must list two things, in this order:

1. The name of the column that should be used to sort the results.
2. `ASC` ("ascending") or `DESC` ("descending").  Technically, you do not *need* to specify this -- SQL will default to `ASC` if you do not -- but it is a best practice to always specify.  It helps the humans reading the code to know exactly what is going on.

##### ASC

Order by "ascending" values -- lowest to highest numbers, or in alphabetical order (A to Z).  (This is the default, if you do not specify `ASC` vs. `DESC`.  But you should always specify, as a best practice for clarity.)

##### DESC

Order by "descending" values -- highest to lowest numbers, or in reverse alphabetical order (Z to A).

##### Examples

`ORDER BY score ASC` (display in order of lowest scores to highest scores)

`ORDER BY score DESC` (display in order of highest scores to lowest scores)


##### Nested ORDER BY

This is the ability to sort by multiple columns.

The following example will first sort the results by alphabetical order of the country, and then by highest to lowest score within each country.

```
ORDER BY 
  country ASC,
  score DESC;
```

NOTE: The order you list these in in the query is the order in which the logic will be nested.  If you were to list score first, the results will show all of the scores in descending order, and then the countries in alphabetical order *within* each of those scores.  (And if no countries have the exact same score, in this example adding the nested sorting of the countries would not accomplish anything, and it would be best to remove it from the query completely.)


#### SELECT

SELECT is the clause in the query that gets data from within the table.  Tells which columns to get, separated by commas.

Example 1 -- select just the `name` and `country` columns:

```
SELECT
  name,
  country;
```

The order matters -- you will get the results in the same order you list the columns you want.


Example 2 -- the star selects ALL COLUMNS in the table:

```
SELECT *
FROM table_name;
```

NOTE: Even if you only select certain columns, you can still run `WHERE` conditions on other columns that you did not select; those columns simply won't be shown in the results. For example, if you SELECT only the First Name and Country columns, you can still use `WHERE` to filter the results based on the Score column.  The results will only display the First Name and Country columns, but they will still filter out any rows that failed to meet your Score condition.


#### SET Operators

Set operators combine tables vertically (whereas `JOIN` operators combine tables horizontally).  They stack one table on top of another.  There are four types:

1. `UNION`
2. `UNION ALL`
3. `EXCEPT`
4. `INTERSECT`

Syntax:

```
SELECT
	FirstName,
	LastName
FROM Customers

UNION

SELECT
	FirstName,
	LastName,
FROM Employees;
```

You simply have two separate queries, and you put the SET operator you want to use in between them.  (NOTE that the semicolon only goes at the end of the final query, not at the end of every query.)

SET Operator Principles:

- SET operators can be used in almost all clauses.  (`WHERE`, `JOIN`, `GROUP BY`, `HAVING`, etc.)
- `ORDER BY` is allowed only once, at the end of the entire query.
- Each query must have the same number of columns.  (You can control this in the `SELECT` clauses.)
- The *data types* of the columns in each query must match / be compatible.
- The *order* of the columns in each query must be the same.
- Column names in the result set are determined by the column names specified in the *first* query.  (But you can use aliases in that first query to fine-tune these result names.)
- BEST PRACTICE: Never use `*` to combine tables; list each specific column needed instead.  (Even if the columns are identical now, they could change later.)
- BEST PRACTICE: In the results, add another column that tells the source of each row.
- Even if all rules are met and SQL shows no errors, the result could still be incorrect.  Incorrect column selection leads to inaccurate results -- that onus is on the developer.


Use Cases:

- Combine similar tables prior to doing data analysis: `UNION` or `UNION ALL`.
	- This is better than writing lots of similar queries for each individual table.  (Not only would that be redundant, but you might accidentally have a slight difference between each query.  Plus it would be harder to maintain multiple queries.)
	- Database developers tend to divide the data into multiple tables to optimize performance and archive old data.  So maybe there is a separate table for each year, and you need to combine them into one table containing all the years before creating a report.


##### UNION

`UNION` returns *all distinct rows* from both queries.  ("Distinct" means SQL automatically removes all duplicate rows from the result set.  However, this deduplication makes `UNION` slower than `UNION ALL`.)


###### Example

Combine the data from employees and customers into one table:

```
SELECT
	CustomerID AS ID,
	FirstName,
	LastName
FROM Sales.Customers

UNION

SELECT
	EmployeeID,
	FirstName,
	LastName
FROM Sales.Employees;
```

NOTE that the alias `ID` will be used in place of `CustomerID` and `EmployeeID`.  Only the columns that are compatible have been selected, and in the same order.


##### UNION ALL

`UNION ALL` returns *all rows* from both queries.  (This is the only SET operator that does *not* perform any deduplication.  However, this results in faster performance.  Therefore, if you *know* that your data does not contain any duplicates, or if you *want* to see duplicates, use `UNION ALL`.)


###### Example

Combine the data from employees and customers into one table, *including duplicates*.

```
SELECT
	FirstName,
	LastName
FROM Sales.Customers

UNION ALL

SELECT
	FirstName,
	LastName
FROM Sales.Employees;
```


##### EXCEPT

(Sometimes called `MINUS` in other databases.)  `EXCEPT` returns all distinct rows from the *first query* that are *not found in the second query*.

Therefore, this is the only SET operator where the order of the queries affects the final result.

Duplicates will be automatically removed.

The second table is only being used as a lookup; no data from this table gets mapped into the final result.  It is only being checked whether each row from the first table should be included in the results or not.


###### Example

Find employees who are *not* also customers.

```
SELECT
	FirstName,
	LastName
FROM Sales.Employees

EXCEPT

SELECT
	FirstName,
	LastName
FROM Sales.Customers;
```


##### INTERSECT

`INTERSECT` returns only the rows that are common in both queries.  (Similar to `INNER JOIN`.)  It also removes duplcates.

The order of the queries do not matter.


###### Example

Find employees who are also customers.

```
SELECT
	FirstName,
	LastName
FROM Sales.Employees

INTERSECT

SELECT
	FirstName,
	LastName
FROM Sales.Customers;
```


#### TOP

Limits your data.  Restricts the number of rows returned in the results.  Just takes the first X number of rows and then stops.

Gets placed immediately after the word `SELECT`:

```
SELECT TOP 3
```

##### Example 1

Retrieve only 3 customers:

```
SELECT TOP 3 *
FROM customers;
```

Note that it still needs something after it, such as the asterisk in this example, to describe which columns you want.


##### Example 2

Retrive the top 3 customers *with the highest scores*:

```
SELECT TOP 3 *
FROM customers
ORDER BY score DESC;
```

This orders the rows by the values in the Score column by descending orders.  Then it keeps only the top 3 rows.

(This one is a little weird to me because if you look at the order of the syntax, you would think it is selecting the first three rows before it orders those rows by descending score.  However, it still works -- the `TOP 3` results will change if you comment the `ORDER BY` clause out.)


##### Example 3

Retrieve the lowest two customers based on the score:

```
SELECT TOP 2 *
FROM customers
ORDER BY score ASC;
```

This time we look for `TOP 2` instead of `TOP 3`, and we change the `ORDER BY` from `DESC` to `ASC`.


##### Example 4

Get the two most recent orders.  (This one uses the `orders` table instead of the `customers` table.)

```
SELECT TOP 2 *
FROM orders
ORDER BY order_date DESC;
```


#### USE

Tells SQL which database you want your query to use.  Goes at the top of the file.

`USE MyDatabase`


#### WHERE

WHERE is the clause in the query that filters the data you "selected" "from" the table.

Typically gets placed between `FROM` and `GROUP BY`.

Example: `WHERE country = 'Italy'`

Example: Score must be higher than 500
`WHERE score > 500`

DIFFERENCE BETWEEN `WHERE` and `HAVING`: `WHERE` is used to filter the data *before* aggregation.  `HAVING` is used to filter the data *after* aggregation.


## Setup

1. Install Microsoft SQL Server Express (Basic)
2. Install SQL Server Management Studio (SSMS)


## Run

On your computer, search for and run SQL Server Management Studio 22.


## Comments

### Single-Line Comments

Single-line comments start with `-- `, like this:

```
-- Comment goes here.
```


### Multi-Line Comments

Multi-line comments are nested between `/*` and `*/`, like this:

```
/*
  Comment line 1.
  Comment line 2.
*/
```


## Functions

Functions take in data, process it, and then return an output.  In the example below, `LOWER` is a function.  It takes in the `country`, converts it to lowercase, then returns it:

```
SELECT
  name,
  LOWER(country)
```


## Identifiers

Identifiers are names for properties in your database. In the example below, `name`, `customers`, and `country` are identifiers:

```
SELECT
  name,
  LOWER(country)
FROM customers
WHERE country = 'Italy';
```


## Operators

These compare values.  Typically used inside the `WHERE` clause.

In the example below, `=` is an operator:

`WHERE country = 'Italy'`

`!` means 'not'. In the example below, the country of Italy would be excluded from the results:

`WHERE country != 'Italy'`


## Values

The actual piece of information in the database.  In the example below, `'Italy'` is a value:

```
WHERE country = 'Italy'
```


## Examples

## Average Score

Find the average score for each country, considering only customers with a score not equal to 0, and return only those countries with an average score greater than 430:

```
SELECT
	country,
	AVG(score) AS avg_score
FROM customers
WHERE score != 0
GROUP BY country
HAVING AVG(score) > 430;
```


## Troubleshooting

DO NOT allow a trailing comma after the line in the clause like you might in JavaScript -- any time SQL sees a comma, it expects another line within that same clause.  If it doesn't get it, or if it gets the next clause after that, it will throw an error.

BAD, because there is a comma after `score`:
```
SELECT
  name,
  country,
  score,
```

GOOD, because there is no comma after `score`:
```
SELECT
  name,
  country,
  score
```

## Ways to Filter the Data

1. Filter *columns* using SELECT.
2. Filter out duplicates using DISTINCT.
3. Filter *rows* using TOP.
4. Filter *rows* *prior to* aggregation using WHERE.
5. Filter *rows* *after* aggregation using HAVING.


## Query Syntax Order

The query syntax is in more of a plain-English order, but it is not

1. SELECT (optional: followed by DISTINCT, followed by TOP)
2. FROM
3. WHERE (always comes directly after FROM if it is used)
4. GROUP BY (always comes directly after WHERE, if it is used)
5. HAVING (to filter post-aggregation)
6. ORDER BY (always last)


## Query Execution Order

The order that the query is actually executed in is quite different from the order of the coding syntax:

1. FROM (First, SQL goes to the table/database.)
2. WHERE (Next, SQL filters pre-aggregated data.)
3. GROUP BY (Next, SQL aggregates the data.)
4. HAVING (Next, SQL filters the post-aggregated data.)
5. SELECT (Only now does SQL select the columns to display.)
6. ORDER BY (Then SQL sorts the display order of the final results.)
7. TOP (The last thing SQL does is lop off any rows beyond the maximum specified.)


## Multiple Queries

You can run multiple queries from multiple tables at the same time.

NOTE: While it is a best practice to always end your SQL query statement with a semicolon, when you are running multiple queries it becomes *necessary* to end each query with one for many types of databases.  The easiest and most consistent thing you can do as a developer is to always end with a semicolon.

```
SELECT *
FROM customers;

SELECT *
FROM orders;
```

This will spit out two results.

## Static (Fixed) Values

You can hardcode a value after `SELECT` rather than specifying columns.

```
SELECT 123;
```

This will output a table with a single row and column, containing a value of 123.  (In this example, the column will not have a name, but as always, you can add an alias using `AS`.)

You can even combine dynamic and static values, like this:

```
SELECT
  id,
  first_name,
  'New Customer' AS customer_type
FROM customers;
```

This will output a table containing dynamic columns for `id` and `first_name`, followed by a static column named 'customer_type', with each row of that column containing the value 'New Customer'.


## Highlight & Execute

If you only want to execute *part* of your query (without having to delete or comment out the rest), you can highlight it with your cursor before hitting the "Execute" button.  Only the highlighted portion will be executed.


## Filtering (in More Detail)

Often, you will be working with massive tables of data, so you need to surgically select only the portions that you need (subsets), such as:

- Sales last month.
- Total orders from China.
- How many active customers?


### Comparison Operators

`=`, `<> =!`, `>`, `>=`, `<`, `<=`.

These simply compare two values.

The condition syntax consists of: `Expression` `Operator` `Expression`

You can compare:

- One column to another column: `first_name = last_name`
- A column with a value: `first_name = 'John'`
- Function = value: `UPPER(first_name) = 'JOHN'`
- Expression = value: `price * quantity = 1000`
- An entire subquery = value: `(SELECT AVG(sales) FROM orders) = 1000`

This will allow SQL to go row by row, collecting only those that meet the conditions.


#### =

Checks if two values are equal, or identical, to each other.


##### Example

Retrieve all customers from Germany:

```
SELECT *
FROM customers
WHERE country = 'Germany';
```


#### <> or !=

`<>` or `!=` check that two values are *not* equal.


##### Example

Retrive all customers who are *not* from Germany:

```
SELECT *
FROM customers
WHERE country != 'Germany';
```

Or:

```
SELECT *
FROM customers
WHERE country <> 'Germany';
```


#### >

Checks if the first expression is greater than the second expression.


##### Example:

Retrieve all customers with a score greater than 500:

```
SELECT *
FROM customers
WHERE score > 500;
```


#### >=

Checks if the first expression is greater than *or equal to* the second expression.


##### Example:

Retrieve all customers with a score of 500 or more:

```
SELECT *
FROM customers
WHERE score >= 500;
```


#### <

Checks if the first expression is less than the second expression.


##### Example

Retrieve all customers with a score of less than 500:

```
SELECT *
FROM customers
WHERE score < 500;
```


#### <=

Checks if the first expression is less than *or equal to* the second expression.

```
SELECT *
FROM customers
WHERE score <= 500;
```


### Logical Operators

Used to combine multiple operators.


#### AND Operator

*All* the conditions must be true.


##### Example

Retrieve all customers from the United States with a score greater than 500.

```
SELECT *
FROM customers
WHERE country = 'USA' AND score > 500;
```


#### OR Operator

At least *one* condition must be true.


##### Example

Retrieve all customers who are either from the United States or have a score greater than 500.

```
SELECT *
FROM customers
WHERE country = 'USA' OR score > 500;
```


#### NOT Operator

A reverse operator that *excludes* matching values.


##### Example

Retrieve all customers who are *not* in the United States.

```
SELECT *
FROM customers
WHERE NOT country = 'USA';
```


### Range Operator

#### BETWEEN Operator

Checks if a value is within a range.  You need to provide the lower and upper boundaries of the range.

The boundaries themselves are inclusive, meaning they are the equivalent of `>=` and `<=`.  (If you say "between 500 and 1000," values of 500 or 1000 will be included in the results.)


##### Example

Retrieve all customers with scores between 100 and 500:

```
SELECT *
FROM customers
WHERE score BETWEEN 100 AND 500;
```

NOTE: This is like a more concise version of:

```
SELECT *
FROM customers
WHERE score >= 100 AND score <= 500;
```


### Membership Operators

#### IN Operator

Checks if a value exists in a list.

First you make a list of values inside parentheses.  (It's like a JavaScript array, but the syntax uses parentheses rather than brackets.)  Then you check if these values are "in" the selected data.


##### Example

Retrieve all customers from either Germany or USA.

```
SELECT *
FROM customers
WHERE country IN ('Germany', 'USA');
```

This is like a more concise version of:

```
SELECT *
FROM customers
WHERE country = 'Germany' OR country = 'USA';
```


#### NOT IN

The opposite of the `IN` operator: excludes all the matches.

##### Example

Retrieve all customers who are *not* in Germany or USA:

```
SELECT *
FROM customers
WHERE country NOT IN ('Germany', 'USA');
```


### Search Operator

#### LIKE Operator

Searches for a pattern in text.  Conceptually similar to regex.

- `%` means "anything."  Could match 0 characters, 1 character, or many characters.
- `_` means exactly 1 character match.


##### Example 1

The first character of the text must be an "M" -- and after that there could be nothing, or there could be any number of characters:

```
M%
```

This would match the following:

- "Maria"
- "Ma"
- "M"

And it would *not* match:

- "Emma"

Full syntax for retrieving all customers whose first names start with an "M":

```
SELECT *
FROM customers
WHERE first_name LIKE 'M%';
```


##### Example 2

The text could start with anything, but it must end with "in":

```
%in
```

This would match the following:

- "Martin"
- "Vin"
- "in"

And it would *not* match the following:

- "Jasmine"

Full syntax for retrieving all customers whose first name ends with 'n':

```
SELECT *
FROM customers
WHERE first_name LIKE '%n';
```


##### Example 3

The text could start or end with anything, but it must contain an "r" somewhere:

```
%r%
```

This would match the following:

- "Maria"
- "Peter"
- "Ryan"
- "R"

And it would *not* match:

- "Alice"

Full syntax for retrieving all customers whose first name contains an "r":

```
SELECT *
FROM customers
WHERE first_name LIKE '%r%';
```


##### Example 4

The text must have exactly two characters, then a "b," and then zero or any number of characters after that:

```
__b%
```

This would match the following:

- "Albert"
- "Rob"

And it would *not* match:

- "Abel"
- "An"

Full syntax for retrieving all customers whose first name has an "r" in the third position:

```
SELECT *
FROM customers
WHERE first_name LIKE '__r%';
```


## Data Tranformation and Cleaning

SQL has built-in functions that can take in data, transform it, and return it.

- Single-Row Functions take in only one value and return only one value. (Example: `LOWER()` will take in a single string, convert it to lowercase, and return it.)
- Multi-Row Functions take in multiple values and return only one value.  (Example: `SUM()` will take in multiple numbers, add them together, and return the sum.)

Functions can be *nested*, allowing you to use one function inside of another so that you transform the data in multiple ways.  Use parentheses to control the order of operations (execution will move from inner parentheses to outer parentheses), like this (although this example does not actually run):

```
LEN(LOWER(LEFT('Maria', 2)))
```


### Single-Row Functions

Typically used by engineers more than analysts.


#### String Functions

##### Manipulation Functions

###### CONCAT

Short for "concatenation."  Combines multiple string values into one string value.


####### Example

Concatenate the first name and country into one column:

```
SELECT
  first_name,
  country,
  CONCAT(first_name, ' ', country) AS name_country
FROM customers;
```

This will output the `first_name` and `country` columns as they appear in the database, followed by a new column called `name_country` containing the concatenated values (with a space between) for each row.


###### UPPER

Converts all text to UPPERCASE.


####### Examples

```
UPPER('Maria')
UPPER('maria')
UPPER('MARIA')
```

Each of these will output `MARIA`.


```
SELECT
  first_name,
  country,
  CONCAT(first_name, ' ', country) AS name_country,
  UPPER(first_name) AS upper_name
FROM customers;
```

This will append one more column called `upper_name` containing the first name from each row in UPPERCASE format.


###### LOWER

Converts all text to lowercase.


####### Examples

```
LOWER('Maria')
LOWER('maria')
LOWER('MARIA')
```

Each of these will output `maria`.

```
SELECT
  first_name,
  country,
  CONCAT(first_name, ' ', country) AS name_country,
  LOWER(first_name) AS low_name
FROM customers;
```

This will append one more column called `low_name` containing the first name from each row in lowercase format.


###### TRIM

Removes leading and trailing spaces from a string.

####### Example 1

```
TRIM('John')
TRIM(' John')
TRIM('John ')
TRIM(' John ')
TRIM('  John   ')
```

Each of these will output `John`.


####### Example 2

Find customers whose first name contains leading or trailing spaces.

```
SELECT first_name
FROM customers
WHERE first_name != TRIM(first_name);
```

SEE ALSO: The examples in the `LEN` section.


###### REPLACE

Will replace a specific character with another specific character of your choice.  (Or an empty string if you want to replace it with nothing.)

Syntax: First argument is the input value, second argument is the original value, and the third argument is the new value you want to replace the original value with.

####### Example 1

Replace dashes in a phone number with slashes:

```
SELECT
  '123-456-7890' AS phone,
  REPLACE('123-456-7890', '-', '/') AS slash_phone;
```

`123-456-7890` will become `123/456/7890`.


####### Example 2

*Remove* the dashes from a phone number.  In this example, we are using a hardcoded value for the phone number.

```
SELECT
  '123-456-7890' AS phone,
  REPLACE('123-456-7890', '-', '');
```

`123-456-7890` will become `1234567890`.


####### Example 3

Change file type from `.txt` to `.csv`:

```
SELECT
  'report.txt' AS txt,
  REPLACE('report.txt', 'txt', 'csv') as csv;
```


##### Calculation Functions

###### LEN

Returns the number of characters in a value (length).

####### Example 1

```
SELECT
  first_name,
  LEN(first_name) AS len_name
FROM customers;
```

This will append a column called `len_name` containing the number of characters for the first name listed in that row.


####### Example 2

Adding on to the previous example, this query will also append a column called `len_trim_name` that contains the length of characters in the first name *after it has been trimmed* for that row.  Meaning that if the name contained any leading or trailing spaces, there will be a difference in the value for this column compared to the previous column.

```
SELECT
  first_name,
  LEN(first_name) AS len_name,
  LEN(TRIM(first_name)) AS len_trim_name
FROM customers;
```


####### Example 3

Adding on even more to the previous two examples, this query will also append a column called `` that contains the difference between the number of characters in the untrimmed versus the trimmed first names:

```
SELECT
  first_name,
  LEN(first_name) AS len_name,
  LEN(TRIM(first_name)) AS len_trim_name,
  LEN(first_name) - LEN(TRIM(first_name)) AS difference
FROM customers;
```


####### Example 4

In this variation on the previous example, we add similar logic to the `WHERE` clause so that the results display only the row with the difference:

```
SELECT
  first_name,
  LEN(first_name) AS len_name,
  LEN(TRIM(first_name)) len_trim_name,
  LEN(first_name) - LEN(TRIM(first_name)) AS difference
FROM customers
WHERE LEN(first_name) != LEN(TRIM(first_name));
```

In other words, we don't have to visually scan through all the rows with a `0` difference -- we can just see the rows that had a difference.


####### Example 5

LEN can count the characters (digits) of a number, too:

`LEN(350)` will return `3`.


##### String Extraction

Similar to "slicing" in JavaScript, where you can extract a specific portion of a string.


###### LEFT

Extracts a specific number of characters starting from the beginning (left side) of a string and moving forward.

Syntax: `LEFT(value, number_of_characters)`


####### Example

```
SELECT
  'Maria' AS full_first_name,
  LEFT('Maria', 2) AS first_two_characters_of_first_name;
```

`Maria` will return `Ma`.


##### RIGHT

Extracts a specific number of characters starting from the end (right side) of a string and moving backward.

Syntax: `RIGHT(value, number_of_characters)`


####### Example

```
SELECT
  'Maria' AS full_first_name,
  RIGHT('Maria', 2) AS last_two_characters_of_first_name;
```

`Maria` will return `ia`.


##### SUBSTRING

Extracts a specified number of characters from the middle of a string.

Similar to JavaScript "substring" -- except it does not count from "index 0" like JavaScript does.  Instead, it counts the position of the characters.

Syntax: `SUBSTRING(value, starting position, length)`


####### Example 1

If you want the "ri" from the middle of "Maria":

```
SELECT
  'Maria' AS first_name,
  SUBSTRING('Maria', 3, 2) AS portion_of_first_name;
```


####### Example 2

If you need to extract everything from a specified midpoint to the end of the string, and the strings could be different lengths, you can enter the "length" parameter dynamically.  (You cannot omit it.)

```
SELECT
  first_name,
  SUBSTRING(TRIM(first_name), 3, LEN(TRIM(first_name))) AS sub_name
FROM customers;
```

NOTE 1: In this example, `LEN` is going to return the full length of the first_name, meaning it will count past the end of the name.  And that's okay.  You don't need to calculate the precise end of the name.  If you overshoot, it will not throw an error.  It will just stop automatically.

NOTE 2: `TRIM` is being used to eliminate any leading or trailing spaces that might throw off the character counting.


#### Numeric Functions


##### ROUND

Rounds up or down based on how many decimal places you ask it to keep.

(It will turn the remaining digits to zeroes rather than dropping them, however.  For example, `3.516` will become `3.520` rather than just `3.52`.  The total number of digits remains the same.)

Syntax: `ROUND(input_value, number_of_decimal_places)`


###### Example 1: Rounding Up

```
SELECT
  3.516,
  ROUND(3.516, 2);
```

Will convert `3.516` to `3.520`.


###### Example 2: Rounding Down

```
SELECT
  3.514,
  ROUND(3.514, 2);
```

Will convert `3.514` to `3.510`.


##### ABS

Returns the "absolute" value of a number.  In other words, it converts a negative number to a positive (removes the negative sign).  If you pass a positive value into it, it will simply stay positive.


###### Example

```
SELECT
  ABS(-10);
```

Will return `10`.


#### Date & Time Functions

Date Format: `YYYY-MM-dd`
Time Format: `HH:mm:ss`
Datetime (a.k.a. timestamp): `YYYY-MM-dd HH:mm:ss.milliseconds`

Note that these formats are case-sensitive.  For example, the month is UPPERCASE `MM` to differentiate it from the minutes, which are lowercase `mm`.

International Standard (ISO 8601): `YYYY-MM-dd` (this is what SQL uses)
USA Standard: `MM-dd-YYYY`
European Standard: `dd-MM-YYYY`


##### Part Extraction

There are seven functions you can use to extract just the part of the date that you want:

1. DAY (integer)
2. MONTH (integer)
3. YEAR (integer)
4. DATEPART (integer)
5. DATENAME (string)
6. DATETRUNC (datetime)
7. EOMONTH (date)


###### DAY

Returns the day from a date:

```
SELECT
  DAY('2026-10-24')
```

This will return `24`.


###### MONTH

Returns the month from a date:

```
SELECT
  MONTH('2026-10-24')
```

This will return `10`.


###### YEAR

Returns the year from a date:

```
SELECT
  YEAR('2026-10-24')
```

This will return `2026`.


###### DATEPART

Returns a specific part of a date as an integer.  These can be spelled out in full, or abbreviated (such as MM instead of MONTH) -- although spelling out in full is a best practice because it translates between databases more reliably.  Examples of parts:

- DAY
- WEEK
- WEEKDAY
- MONTH
- QUARTER
- YEAR

Syntax is basically the same as DATENAME and DATETRUNC: `DATEPART(part, date)`


####### Example

```
SELECT
	OrderID,
	OrderDate,
	ShipDate,
	CreationTime,
	DATEPART(YEAR, CreationTime) AS year_dp,
	YEAR(CreationTime) AS Year,
	DATEPART(MONTH, CreationTime) AS month_dp,
	MONTH(CreationTime) AS Month,
	DATEPART(DAY, CreationTime) AS day_dp,
	DAY(CreationTime) AS Day,
	DATEPART(HOUR, CreationTime) AS hour_dp,
	DATEPART(QUARTER, CreationTime) AS quarter,
	DATEPART(WEEKDAY, CreationTime) AS weekday
FROM Sales.Orders;
```

This will add columns for the different dateparts, plus comparison columns for the year, month, and day so you can confirm that datepart extracted those same parts accurately.


###### DATENAME

Extracts the *name* of the datepart as a string rather than its numerical equivalent.  For example:

- `September` instead of `9`.
- `Wednesday` instead of `4`.
- `2026` (string) instead of `2026` (number).

Syntax is basically the same as DATEPART and DATETRUNC: `DATENAME(part, date)`

This is often more user-friendly for the people reading the data.


###### DATETRUNC

Short for "truncate."  Starting *after* the point you specify, will reset the remainder of the date information to zeroes (for the time portion) or ones (for the date portion).

Syntax is basically the same as DATEPART and DATENAME: `DATETRUNC(part, date)`.  The "part" argument is singular.


####### Example 1

If you want to truncate `2026-10-24 18:55:45` at the "minutes," it will reset the seconds (and everything after) to zeroes and return this: `2026-10-24 18:55:00.0000000`.  It will not round up or down.


####### Example 2

If you want to group orders together by the month they were created in, you don't need or want a detailed timestamp down to the millisecond -- you can wipe that information, then group it by the remaining commonalities:

```
SELECT
  DATETRUNC(MONTH, CreationTime) AS creation,
  COUNT(*)
FROM Sales.Orders
GROUP BY DATETRUNC(MONTH, CreationTime);
```


###### EOMONTH

"End of Month" (last day of the month).

Syntax: `EOMONTH(date)`


####### Examples

- `SELECT EOMONTH('2026-10-24')` will return `2026-10-31` because October has 31 days.
- `SELECT EOMONTH('2026-02-01')` will return `2026-02-28` because February has 28 days that year.
- `SELECT EOMONTH('2028-02-01')` will return `2028-02-29` because February has *29* days that year.


###### Use Cases for Date Part Extraction


####### Data aggregations and reporting.

Building a sales report for sales by year, or by quarter.


######## Example 1

How many orders were placed each year?

```
SELECT
	YEAR(OrderDate) AS OrderYear,
	COUNT(*) AS NrOfOrders
FROM Sales.Orders
GROUP BY YEAR(OrderDate);
```


######## Example 2

How many orders were placed each month?

If you want the months as integers:

```
SELECT
	MONTH(OrderDate) AS OrderMonth,
	COUNT(*) AS NrOfOrders
FROM Sales.Orders
GROUP BY MONTH(OrderDate);
```


If you want the months as string names for readability:

```
SELECT
	DATENAME(MONTH, OrderDate) AS OrderMonth,
	COUNT(*) AS NrOfOrders
FROM Sales.Orders
GROUP BY DATENAME(MONTH, OrderDate);
```


####### Data Filtering

Best Practice: If you are filtering data, it is better (faster) to use numbers than strings.  For example, filter for `Month(date) = 2` rather than `Month(date) = 'February'`.


######## Example 1

Show all orders that were placed in the month of February:

```
SELECT
	*
FROM Sales.Orders
WHERE MONTH(OrderDate) = 2;
```

Rather than aggregating, this query displays the entire row of data for each of these matches (meaning each order placed in February).


##### Format & Casting

There are three functions you can use for date format and casting:

1. FORMAT (Can format any data type (dates, times, and numbers), but output will always be a *string* data type.)
2. CONVERT (Changes any data type to any other data type.  Can change format, but only for date and time, not numbers.)
3. CAST (Changes any data type to any other data type.  Will not change format.)


###### FORMAT

Changes the format from one to another.  For example:

- Changing the date from USA Standard to International Standard format.
- You can also use preset format numbers:
  - N for "number" will give you a number with comma separation, such as `1,234,567.89`.
  - C for "currency" will add a dollar sign in front of the number, like this: `$1,234,567.89`.
  - P for "percentage" will give you a percent sign at the end: `123,456,789.00%`.

`FORMAT()` formats a date or time value.

Syntax: `FORMAT(value, format, culture)`

- `value` can be a date or number.
- `format` is the desired output you want.  Example: `'dd/MM/yyyy'`  (There are too many of these to list here -- just look up what you need when you need it.)
- `culture` is optional, and rarely used.  It means "show me this value in the style of a specific country or region."  Example: `'ja-JP'` (Japan).  Default culture (if you don't specify) is `'en-US'`.

Use Case: Data Aggregation: It is a best practice to format the date *before* doing any aggregations.  (In other words, run the date through the `FORMAT` function in the exact same way in both the `SELECT` and `GROUP BY` clauses.)

Use Case: Data Standardization: The data may be coming from a CSV file, an API, and a database, and you may be consolidating all of these into one central location.


####### Example

Show CreationTime using the following format: `Day Wed Jan Q1 2025 12:34:56 PM`

This will require a combination of hardcoded values, `FORMAT`, and `DATENAME`, all concatenated into one string:

```
SELECT
	OrderID,
	CreationTime,
	'Day ' + FORMAT(CreationTime, 'ddd MMM') +
	' Q' + DATENAME(quarter, CreationTime) + ' ' +
	FORMAT(CreationTime, 'yyyy hh:mm:ss tt') AS CustomFormat
FROM Sales.Orders
```

NOTE: You also have the option of using the `CONCAT()` function instead of manually concatenating with the `+` symbol.


###### CONVERT

Convert the data type from one to another.  (Offers some additional formatting options that `CAST` does not.  But `CONVERT` is SQL Server-specific, meaning it will not work across all other database systems.)

Syntax: `CONVERT(data_type, value, style)` (`style` is optional.  If you don't pass in a style value, it uses the default of `0`.  Additional note: `CAST` does not offer the style parameter.)

The optional "style number" will use a number from a list to tell SQL which format you want outputted.  For example:

- Style `6` would output the date format `20 Aug 25`.
- Style `112` would output `20250820`.


####### Examples

- `CONVERT(INT, '124')` will convert the `'124'` string into a `124` integer.
- `CONVERT(DATE, '2025-08-20')` will convert the `'2025-08-20'` string to `2025-08-20` as a date.
- `CONVERT(DATE, CreationTime)` will convert `CreationTime` from a datetime to just a date.
- `CONVERT(VARCHAR, CreationTime)` will convert a datetime to a variable-length string.


###### CAST

Similarly to `CONVERT`, this changes data type from one to another.  But it is part of the ANSI SQL standard, meaning it works across many database systems.  (`CONVERT` only works with SQL Server.)  Unlike `CONVERT`, it does not take in a style parameter.

- `'123'` (string) to `123` (integer).
- `2025-08-20` (date) to `'2025-08-20'` (string).
- `'2025-08-20'` (string) to `2025-08020` (date).

Syntax: `CAST(value, AS data_type)`  (Separated with keyworld `AS` rather than a comma.  You can think of its functionality as if it were a plain-English sentence.  You are "casting" a "value as" a specified "data type.")


####### Examples

- `CAST('123' AS INT)` will convert the `'123'` string into a `123` integer.
- `CAST(123 AS VARCHART)` will convert the `123` integer into a `'123'` string.
- `CAST('2025-08-20' AS DATE)` will convert the `'2025-08-20'` string into a `2025-08-20` date.
- `CAST('2025-08-20' AS DATETIME2)` will convert the `'2025-08-20'` string into a `2025-08-20 00:00:00.0000000` datetime.


##### Calculations

There are two functions you can use to do calculations with a date:

1. DATEADD (Adds or subtracts a specific time interval to or from a date.)
2. DATEDIFF (Finds the difference between two dates.)


###### DATEADD

Adds or subtracts a specific time interval to or from a date.

Syntax: `DATEADD(part, interval, date)`

- `part` = Year, month, day, etc.
- `interval` = Positive or negative number.
- `date` = Starting date that you want to manipulate.


####### Examples

- Add three years to `2025-08-20`: `DATEADD(year, 3, '2025-08-20')` will return `2028-08-20`.
- Add two months to `2025-08-20`: `DATEADD(month, 2, '2025-08-20')` will return `2025-10-20`.
- Add five days to `2025-08-20`: `DATEADD(day, 5, '2025-08-20')` will return `2025-08-25`.
- Add fifteen days to `2025-08-20`: `DATEADD(day, 15, '2025-08-20')` will return `2025-09-04` (month also increments).
- Subtract three years from `2025-08-20`: `DATEADD(year, -3, '2025-08-20')` will return `2022-08-20`.
- Subtract two months from `2025-08-20`: `DATEADD(month, -2, '2025-08-20')` will return `2025-08-20`.
- Subtract five days from `2025-08-20`: `DATEADD(day, -5, '2025-08-20')` will return `2025-08-20`.
- Subtract twenty-five days from `2025-08-20`: `DATEADD(day, -25, '2025-08-20')` will return `2025-07-26` (month also decrements).


###### DATEDIFF

Finds the difference between two dates.

Syntax: `DATEDIFF(part, start_date, end_date)`


####### Example 1

The order date is `2025-08-20`, and the shipping date is `2026-02-01`.

- How many years have passed between the order date and the shipping date?  `DATEDIFF` will subtract the order date's year from the shipping date's year and return `1` (even though a full year has not passed between the two dates).
- How many months?  `DATEDIFF` will return `6`.
- How many days?  `DATEDIFF` will return `165`.


####### Example 2

Calculate the age of employees:

```
SELECT
	*,
	DATEDIFF(year, BirthDate, GETDATE()) AS Age
FROM Sales.Employees
```

(`GETDATE()` fetches today's date.)

Note that this is only doing a rudimentary subtraction from year to year.  It is not taking into account which exact date somebody was born on within their birth year, or how far into the current year we are today.


##### Validation

1. ISDATE


###### ISDATE

This function will return `1` if your input value is a valid date, and `0` if it is not.

Syntax: `ISDATE(value)`

The input value can be a string or integer.

Some Use Cases:

- The input value can be a date *part*, such as just the year, and that will return `1`.  But it will only validate numbers from `1753` to `9999`.
- Full dates such as `'2025-08-20'` must be in standard format (YYYY-MM-DD).
- Trying to pass in just a day or month is too small a number (less than `1753`), so it will return `0`.

In order to prevent errors, you can run a `CASE` where `CAST` is only attempted if `ISDATE` is `1`:

```
SELECT
	OrderDate,
	ISDATE(OrderDate),
	CASE WHEN ISDATE(OrderDate) = 1 THEN CAST(OrderDate AS DATE)
	END NewOrderDate
FROM (
	SELECT '2025-08-20' AS OrderDate UNION
	SELECT '2025-08-21' UNION
	SELECT '2025-08-23' UNION
	SELECT '2025-08'
)t
```

This will only run `CAST` on the strings that are capable of being converted to dates, and the one that is not a full date (`'2025-08'`) will be `NULL` rather than throwing an error.

Then, if you want to find all the bad data so you can fix it, add this clause to the end:

```
WHERE ISDATE(OrderDate) = 0
```

One alternative, if you don't want any `NULL` values in your returned data is to use an `ELSE` case up top to set those values to something else.  In this example, it gets set to a dummy value of `'9999-01-01'`.:

```
SELECT
	OrderDate,
	ISDATE(OrderDate),
	CASE WHEN ISDATE(OrderDate) = 1 THEN CAST(OrderDate AS DATE)
    ELSE '9999-01-01'
	END NewOrderDate
FROM (
	SELECT '2025-08-20' AS OrderDate UNION
	SELECT '2025-08-21' UNION
	SELECT '2025-08-23' UNION
	SELECT '2025-08'
)t
```


#### NULL Functions

A `NULL` value is the equivalent of "nothing" or "unknown."  It is *not* `0`, an empty string, or a blank space.

- Certain SQL functions can be used to replace `NULL` with actual values, such as `ISNULL` (all one word) and `COALESCE`.
- And on the inverse side, `NULLIF` can be used to replace an actual value with a `NULL`.
- `IS NULL` (with a space between) is used to check whether or not a value is `NULL`.  (It does not change the value.)  Returns a Boolean `TRUE` (if `NULL`) or `FALSE` (if *not* `NULL`).


##### ISNULL (one word) | NVL | IFNULL

(Not to be confused with `IS NULL` (two words).)

`ISNULL` replaces a `NULL` with a specific value.  In plain English, this function says: "If this value is `NULL`, replace it with this other specified value.  If it is *not* `NULL`, leave it as-is."

Syntax: `ISNULL(value, replacement_value)`

NOTE: If the replacement value is also `NULL`, then the output will still be `NULL`.

Unlike `COALESCE`, `ISNULL` is limited to two values: The input value, and the replacement value.  However, its performance is faster than `COALESCE`.

`ISNULL` has different keywords for different databases:

- SQL Server: `ISNULL`
- Oracle: `NVL`
- MySQL: `IFNULL`

Therefore, if you want to future-proof your ability to migrate to other databases later, it is best to use `COALESCE` instead, unless it is causing too severe of a performance issue.


###### Example 1

If any shipping addresses are `NULL`, replace them with a static value of `'unknown'`:

```
ISNULL(Shipping_Address, 'unknown')
```


###### Example 2

If any shipping addresses are `NULL`, replace them with the billing address (dynamic value) instead:

```
ISNULL(Shipping_Address, Billing_Address)
```

To reiterate: In this example, if the Billing_Address is also `NULL`, then the output will still be `NULL`, also.


##### COALESCE

Returns the first non-`NULL` value from a list.  (Kind of like a JavaScript `find` loop.)

Syntax: `COALESCE(value1, value2, value3, ...)`

Enter your values in the `COALESCE` function in the hierarchy you want them to return a match.

Unlike `ISNULL`, `COALESCE` is not limited to two values -- you can enter an unlimited number of items in the list.  However, its performance is slower than `ISNULL`.


###### Example

If you don't have a valid shipping address, fall back to the billing address.  If you have neither, fall back to a static string of `'unknown'`:

```
COALESCE(Shipping_Address, Billing_Address, 'unknown')
```


##### NULL vs. Empty String vs. Blank Space

- `NULL` = "Nothing" or "unknown."  Data type = Special Marker.  Uses the least amount of storage of these three.  (Best performance.)
- `''` (empty string) = String value with zero characters.  Data type = String.  Occupies a little bit of storage space.  (Fast, but not as fast as using `NULL`.)
- `' '` (blank space(s)) = String consisting of only one or more space characters.  Data type = String.  Occupies a little bit more storage space per blank space.  (Least performant of these three options.)  Trying to run a comparison on this value would require you to match the exact amount of spaces in the string.


##### Handling NULLs

###### Handling NULLs: Data Aggregation

Best Practice: Use `ISNULL` or `COALESCE` to handle any `NULL` values prior to doing your data aggregations.  (For example, if you run `AVG`, it will ignore any `NULL` values, which could throw off the supposed average output value.  Instead, you may wish to convert any `NULL` values to `0` prior to running `AVG`.)

NOTE: `COUNT(*)` *will* include `NULL` values in its total.

####### Example

Find the average scores of the customers:

```
SELECT
	CustomerID,
	Score,
	AVG(COALESCE(Score,0)) OVER () AS [Average Scores]
FROM Sales.Customers;
```

Because one of the five scores is `NULL`, here is the difference between using `COALESCE` versus not using it:

- Using `COALESCE`: (350 + 900 + 750 + 500 + 0) / 5 = 500
- NOT using `COALESCE`: (350 + 900 + 750 + 500) / 4 = 625


###### Handling NULLs: Mathematical Operations

If you use `NULL` as part of a mathematical operation, the entire output will be `NULL`.

For example: `NULL + 5` = `NULL`

Same with string concatenations: `NULL + 'B'` = `NULL`


####### Example

1. Display the full name of customers in a single field by merging their first and last names.
2. Add 10 bonus points to each customer's score.

```
SELECT
	*,
	COALESCE(FirstName, '') + ' ' + COALESCE(LastName, '') AS [Full Name],
	COALESCE(Score, 0) + 10 AS [Score with Bonus]
FROM Sales.Customers;
```

Note that `COALESCE` is used to handle `NULL` values at each step.


###### Handling NULLs: Joining Data

Best Practice: Handle NULLs inside the keys prior to joining tables or else you may get some unexpected results.  SQL cannot compare the value of NULLs, even if the two values it is comparing are both `NULL`, so it will drop that data.  You can change any instances of `NULL` to an empty string (a good, performant choice) or any other default value, at the time of the `JOIN`.  Two empty strings will match when compared, and then SQL will actually populate that key with `NULL` in the output of the `JOIN`.

```
SELECT
  a.year, a.type, a.orders, b.sales
FROM Table1 a
JOIN Table2 b
ON a.year = b.year
AND ISNULL(a.type, '') = ISNULL(b.type, '');
```


###### Handling NULLs: Sorting Data

If you are sorting data by sales ascending or descending order, SQL will show any instances of `NULL` as if they are the lowest values, when in fact they have *no* value.  So if you have `25`, `NULL`, and `15`, SQL will order them:

Ascending:

1. `NULL`
2. `15`
3. `25`

Descending:

1. `25`
2. `15`
3. `NULL`

Which is bad, because now all your missing data is ranked as if it has the highest value.  What if you want to sort the customers from lowest to highest scores, but with `NULL` instances appearing *last*?

The lazy way would be to replace any instances of `NULL` with a very big number.  But this still runs the risk of a larger number -- or even the same number -- coming through dynamically.

The more professional way is to use a `CASE` in your `ORDER BY` clause to handle this scenario:

1. If the value is `NULL`, consider its order (sorting) value a `1`; if it has a valid value, consider its order (sorting) value a `0`.
2. Then append a fallback to the `Score` value.


```
SELECT
	CustomerID,
	Score
FROM Sales.Customers
ORDER BY CASE WHEN Score IS NULL THEN 1 ELSE 0 END, Score;
```

This way, the sorting will occur in this order:

1. All of the truthy values will be grouped together first because they have the lowest sort value (`0`).
2. Then all of those `0` sort values will get sorted in ascending order based on their actual `Score` values.
3. Then all of the `1` sort values will get placed at the end, because `1` is greater than `0`.
4. And all of their `Score` values are `NULL`, so there is no more sorting to be done on them.


###### Handling NULLs: Data Policies

A data policy is a set of rules that defines how you want your data to be handled.  Three options to consider for handling falsy values -- pick only one:

1. Only use `NULL` or empty strings (`''`).  Avoid using blank spaces (`' '`).  (If you are cleaning up your existing data, you can use `TRIM` to get rid of all leading and trailing blank spaces.)  This is probably a confusing policy, and not as good as options 2 and 3.
2. Even better, use only `NULL`.  Avoid using empty strings (`''`) or blank spaces (`' '`) altogether.  (If you are cleaning up your existing data, you can use the `TRIM` to get rid of all leading and trailing blank spaces, and `NULLIF` to convert empty strings to `NULL`.  For example: `NULLIF(TRIM(Category), '') AS [Nullified Values]`.)  This policy takes less storage and is more performant than policy 3.
3. Use the default value `'unknown'`, and avoid using `NULL`, empty strings (`''`), and blank spaces (`' '`) altogether.  (To convert all three to `'unknown'`: First trim, then standardize to `NULL`, then convert everything that is `NULL` to `'unknown'`: `COALESCE(NULLIF(TRIM(Category), ''), 'unknown')`.)  This has the most user-friendly output, but is less performant than policy 2, and uses a lot more memory to store the string `'unknown'` than it would to store `NULL`, especially the larger your database is.


##### NULLIF

Compares two values, and:

- If the two values are equal, returns `NULL`.
- If the two compared values are *not* equal, returns the first value.

Syntax: `NULLIF(value1, value2)`

In plain English, this syntax means, "Return `NULL` if `value1` matches `value2`."


Examples:

- `NULLIF(Shipping_Address, 'unknown')` (If the shipping address is `'unknown'`, will return `NULL`.  If the shipping address has any other value, will return the shipping address.)
- `NULLIF(Shipping_Address, Billing_Address)` (If they match, returns `NULL`.  If they are different, returns the shipping address.)
- `NULLIF(Price, -1)`  (If the Price is `-1`, change it to `NULL`, because `-1` is a nonsensical value for the Price.)


Use Case: Preventing the error of dividing by `0`:

"Find the sales price for each order by dividing the sales by the quantity."

If you have any quantities of `0`, SQL will throw an error when you try to divide it into its respective price.  So you can use `NULLIF` to change these to `NULL` in any of these use cases:

```
SELECT
	*,
	NULLIF(Sales, 0) / NULLIF(Quantity, 0) AS [Price per Item]
FROM Sales.Orders;
```

(And to be safe, I did the same thing on `Sales`.)


##### IS NULL (two words)

(Not to be confused with `ISNULL` (one word).)

- Returns Boolean `TRUE` if the value is `NULL`.
- Returns Boolean `FALSE` if the value is anything other than `NULL`.

Syntax: `value IS NULL`


###### Example 1

`Shipping_Address IS NULL`

- Will return `TRUE` if the shipping address is `NULL`.
- Will return `FALSE` if the shipping address is any other value besides `NULL`.


###### Example 2

Searching for *missing* information.  "Identify the customers who have no scores."

```
SELECT
	*
FROM Sales.Customers
WHERE Score IS NULL;
```


##### IS NOT NULL

- Returns Boolean `TRUE` if the value is *not* `NULL`.
- Returns Boolean `FALSE` if the value is `NULL`.

Syntax: `value IS NOT NULL`


###### Example

`Shipping_Address IS NOT NULL`

- Will return `TRUE` if the shipping address is any other value besides `NULL`.
- Will return `FALSE` if the shipping address is `NULL`.


###### Example 2

Searching for *valid* information.  "Identify the customers who have scores."

```
SELECT
	*
FROM Sales.Customers
WHERE Score IS NOT NULL;
```


### Multi-Row Functions

Typically used by analysts more than engineers.


#### Aggregate Functions (Basics)




#### Window Functions (Advanced)




## CASE Statements

Similar to a JavaScript `SWITCH` statement, `CASE` statements evaluate a list of conditions and return a value when the first condition is met.

Syntax:

```
CASE
  WHEN condition1 THEN result1
  WHEN condition2 THEN result2
  ELSE defaultResult
END
```

- SQL recognizes `CASE` as the beginning of the conditional logic block, and `END` as the closure of the conditional logic block.
- The condition begins with the keyword `WHEN`.
- The keyword `THEN` describes what to do if the `WHEN` condition is met.
- You can have multiple `WHEN`/`THEN` blocks, just like you can have multiple cases inside a JavaScript `SWITCH` statement.  SQL will evaluate them from top to bottom until it finds the first match.
- The `ELSE` comes at the end, and is the default value you want to return if none of the other `WHEN` conditions are met.  It is optional.
- If no conditions are met, and if there is no default `ELSE` value, the `CASE` statement will return `NULL`.

IMPORTANT NOTE: *The data types of the results must match.*

You can use `CASE` statements in any type of clause: `SELECT`, `JOIN`, `FROM`, `WHERE`, `GROUP BY`, `ORDER BY` -- everywhere.


### Use Case 1: Data Transformation

The main use case for `CASE` statements is to do data transformations.  Can be used to create new columns based on existing data.


#### Use Case 1a: Categorize Data

Group data into different categories based on certain conditions.  (This helps make the data easier to understand and track, and helps aggregate the data based on the categories.)


##### Example

Generate a report showing the total sales for each of the following categories:

- "High" if the sales are higher than 50.
- "Medium" if the sales are between 20 and 50 (including 50).
- "Low" if the sales are 20 or lower.
- Sort the results from the highest to lowest.

STEP 1 - Categorization Logic:

```
SELECT
	OrderID,
	Sales,
	CASE
		WHEN Sales > 50 THEN 'High'
		WHEN Sales > 20 THEN 'Medium'
		ELSE 'Low'
		END AS Category
FROM Sales.Orders;
```


STEP 2 - Use a subcategory to aggregate and sort the results:

```
SELECT
	Category,
	SUM(Sales) AS TotalSales
FROM(
	SELECT
		OrderID,
		Sales,
		CASE
			WHEN Sales > 50 THEN 'High'
			WHEN Sales > 20 THEN 'Medium'
			ELSE 'Low'
			END AS Category
	FROM Sales.Orders
)t
GROUP BY Category
ORDER BY TotalSales DESC;
```


### Use Case 2: Mapping Values

`CASE` statements can be used to transform values from one form to another, making it more readable and usable for analytics.

Maybe developers stored the data in the database as codes or flags.  For example, to optimize performance, the data may be stored as `0` and `1`, but you want it to display a more user-friendly value, such as `active` versus `inactive`.


#### Example 1

Retrieve employee details with gender displayed as full text (instead of just `M` or `F`).

```
SELECT
	EmployeeID,
	FirstName,
	LastName,
	Gender,
	CASE
		WHEN Gender = 'F' THEN 'Female'
		WHEN Gender = 'M' THEN 'Male'
		ELSE 'Not Available'
	END AS GenderFullText
FROM Sales.Employees;
```


#### Example 2

Retrieve customer details with abbreviated country code (rather than the full country name, such as `'United States'`).

TIP: You would have to write a `WHEN` condition for each individual country.  Since there will probably be a massive amount of results, you can start by using `SELECT DISTINCT Country` to see just the unique values you'll need to code for.

```
SELECT
	Country,
	CASE
		WHEN Country = 'Germany' THEN 'DE'
		WHEN Country = 'USA' THEN 'US'
		ELSE 'Not Available'
	END AS CountryCode
FROM Sales.Customers;
```


#### Full Form versus Quick Form

Maybe your `WHEN` conditions all start with the same thing, such as `WHEN Country =` in this "full form" example:

```
CASE
  WHEN Country = 'Germany' THEN 'DE'
  WHEN Country = 'India' THEN 'IN'
  WHEN Country = 'United States' THEN 'US'
  WHEN Country = 'France' THEN 'FR'
  WHEN Country = 'Italy' THEN 'IT'
  ELSE 'N/A'
END
```

To reduce repetition in these scenarios, you can streamline your syntax into a "quick form," like this:

```
CASE Country
  WHEN 'Germany' THEN 'DE'
  WHEN 'India' THEN 'IN'
  WHEN 'United States' THEN 'US'
  WHEN 'France' THEN 'FR'
  WHEN 'Italy' THEN 'IT'
  ELSE 'N/A'
END
```

In other words, move your column name (`Country`) up to the `CASE` line.  (NOTE: You can only put one column in the `CASE` line.)

BEST PRACTICE: Always use the "full form" format.  This future-proofs you, in case later you have a new condition that is different than the others, which would force you to rewrite your entire format at that time.


### Use Case 3: Handling NULLs in CASE Statements

Maybe you want to replace `NULL` with a more user-friendly value in your results.  Not to mention, `NULL` values can lead to inaccurate calculations, which can lead to incorrect decision-making.


#### Example

Find the average scores of customers, and treat `NULL` values as `0` -- and provide details such as CustomerID and LastName.

```
SELECT
	CustomerID,
	LastName,
	-- Calculations based on the raw data:
	Score,
	AVG(Score) Over() AS RawAvgScore,
	
	-- Calculations based on the clean data:
	CASE
		WHEN Score IS NULL THEN 0
		ELSE Score
	END AS CleanScore,
	AVG(CASE
			WHEN Score IS NULL THEN 0
			ELSE Score
		END) OVER() CleanAvgScore
FROM Sales.Customers;

```

Results:

- The "raw" average scores will be `625` because the `NULL` value won't be factored in.
- The "clean" average scores will be `500` because the `NULL` values will first be converted to `0`, and then included in the calculation to find the average.


### Use Case 4: Conditional Aggregation

You may need to apply aggregate functions *only* on subsets of data that fulfill certain conditions.

#### Example

Count how many times each unique customer has made an order with sales greater than 30:

```
SELECT
	CustomerID,
	SUM(CASE
		WHEN SALES > 30 THEN 1
		ELSE 0
	END) AS Over30,
	COUNT(*) AS TotalOrders
FROM Sales.Orders
GROUP BY CustomerID;
```

- This code sets a flag of `1` any time the sales value is higher than 30.
- Displays this flag in a new column called `Over30`.
- As an added bonus, the `COUNT(*) AS Total Orders` line displays the total number of orders for that customer.  This is simply to allow us to compare that customer's number of orders that were over 30 *out of* the total number of orders.
- We `GROUP BY` the CustomerID so that we can see the results distilled down to each unique customer.
