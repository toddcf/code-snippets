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

NOTE: You *cannot* use a space in the label.  It will require an underscore or some other character instead of a space.

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
