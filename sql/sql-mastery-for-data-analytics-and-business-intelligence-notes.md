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

Date Format: `YYYY-MM-DD`
Time Format: `HH:MM:SS`
Datetime (a.k.a. timestamp): `YYYY-MM-DD HH:MM:SS.milliseconds`

##### Part Extraction

There are seven functions you can use to extract just the part of the date that you want:

1. DAY
2. MONTH
3. YEAR
4. DATEPART
5. DATENAME
6. DATETRUNC
7. EOMONTH


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


##### Format & Casting

There are three functions you can use for date format and casting:

1. FORMAT
2. CONVERT
3. CAST


##### Calculations

There are two functions you can use to do calculations with a date:

1. DATEADD
2. DATEDIFF


##### Validation

This function will confirm whether your data is a valid date:

1. ISDATE


#### NULL Functions




### Multi-Row Functions

Typically used by analysts more than engineers.


#### Aggregate Functions (Basics)




#### Window Functions (Advanced)

