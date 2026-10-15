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


#### FROM

FROM is the clause in the query that tells which table you want to get the data from.

Example: `FROM customers`


#### GROUP BY


#### HAVING


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
  score DESC
```

NOTE: The order you list these in in the query is the order in which the logic will be nested.  If you were to list score first, the results will show all of the scores in descending order, and then the countries in alphabetical order *within* each of those scores.  (And if no countries have the exact same score, in this example adding the nested sorting of the countries would not accomplish anything, and it would be best to remove it from the query completely.)


#### SELECT

SELECT is the clause in the query that gets data from within the table.  Tells which columns to get, separated by commas.

Example 1 -- select just the `name` and `country` columns:

```
SELECT
  name,
  country
```

The order matters -- you will get the results in the same order you list the columns you want.


Example 2 -- the star selects ALL COLUMNS in the table:

```
SELECT *
FROM table_name
```

NOTE: Even if you only select certain columns, you can still run `WHERE` conditions on other columns that you did not select; those columns simply won't be shown in the results. For example, if you SELECT only the First Name and Country columns, you can still use `WHERE` to filter the results based on the Score column.  The results will only display the First Name and Country columns, but they will still filter out any rows that failed to meet your Score condition.


#### TOP


#### USE

Tells SQL which database you want your query to use.  Goes at the top of the file.

`USE MyDatabase`


#### WHERE

WHERE is the clause in the query that filters the data you "selected" "from" the table.

Example: `WHERE country = 'Italy'`

Example: Score must be higher than 500
`WHERE score > 500`


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
WHERE country = 'Italy'
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

## Query Syntax Order

1. SELECT
2. FROM
3. WHERE
4. GROUP BY
5. ORDER BY