const SQL_DATA = [
  {
    "num": "1",
    "category": "1. SQL & Database Basics (1–10)",
    "question_hi": "SQL kya hai?",
    "answer_hi": "SQL ka full form Structured Query Language hai. Ye relational databases se baat karne ki standard language hai, jisse hum data create, read, update, delete karte hain aur table structure manage karte hain.\nSQL declarative hai, yani hum sirf batate hain kya data chahiye, kaise nikalna hai wo database engine khud decide karta hai.\n\n```sql\n-- Structure: SELECT columns FROM table WHERE condition;\nSELECT name, age FROM students WHERE age > 18;\n```",
    "question_en": "What is SQL?",
    "answer_en": "SQL stands for Structured Query Language. It's the standard language used to communicate with relational databases — we use it to create, read, update, and delete data. SQL is declarative, meaning you just describe what data you want and the database figures out how to get it. It covers four areas: DDL for structure, DML for data, DCL for permissions, and TCL for transactions.\n\n```sql\n-- Structure: SELECT columns FROM table WHERE condition;\nSELECT name, age FROM students WHERE age > 18;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "2",
    "category": "1. SQL & Database Basics (1–10)",
    "question_hi": "Database kya hota hai?",
    "answer_hi": "Database data ka ek organized collection hai jo computer mein electronically store hota hai. Isse data ko fast store, search, update aur manage kar sakte hain.\nRelational database mein data tables ke rows aur columns mein rakha jata hai. Example: school ka student record, bank ke accounts.\n\n```sql\nCREATE DATABASE school;\nUSE school;\nSHOW DATABASES;\n```",
    "question_en": "What is a Database?",
    "answer_en": "A database is an organized collection of data stored electronically so it can be easily accessed, managed, and updated. In a relational database, data is stored in tables made of rows and columns. For example, a school might have a Students table and a Courses table — both linked together. Without a database, managing large amounts of data reliably would be nearly impossible.\n\n```sql\nCREATE DATABASE school;\nUSE school;\nSHOW DATABASES;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "3",
    "category": "1. SQL & Database Basics (1–10)",
    "question_hi": "DBMS kya hai?",
    "answer_hi": "DBMS matlab Database Management System. Ye ek software hai jo users, applications aur database ke beech kaam karta hai, aur data ko store, retrieve, update aur secure karta hai.\nHum seedhe file mein data nahi likhte, DBMS ke through likhte hain. Examples: MySQL, Oracle, PostgreSQL, SQL Server, MongoDB.\n\n```sql\n-- We talk to the DBMS using commands\nSHOW DATABASES;\nSELECT VERSION();\n```",
    "question_en": "What is DBMS?",
    "answer_en": "A DBMS, or Database Management System, is software that sits between the user and the actual database. It handles storing, retrieving, and securing data. Instead of writing directly to files, we use the DBMS through SQL commands. Popular examples are MySQL, PostgreSQL, Oracle, and SQL Server.\n\n```sql\n-- We talk to the DBMS using commands\nSHOW DATABASES;\nSELECT VERSION();\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "4",
    "category": "1. SQL & Database Basics (1–10)",
    "question_hi": "RDBMS kya hai aur DBMS se kaise alag hai?",
    "answer_hi": "RDBMS mein data tables (rows/columns) mein hota hai aur tables ke beech relation keys se bante hain.\nFarak: DBMS mein data files jaisa hota hai, relation nahi hota, normalization nahi hota. RDBMS mein foreign key relation, normalization aur strong multi-user support milta hai. Example: MySQL, PostgreSQL, Oracle.\n\n```sql\n-- Two tables linked by a key = relational\nCREATE TABLE departments (dept_id INT PRIMARY KEY, name VARCHAR(50));\nCREATE TABLE employees (\n  emp_id INT PRIMARY KEY,\n  name VARCHAR(50),\n  dept_id INT,\n  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)\n);\n```",
    "question_en": "What is RDBMS and how is it different from DBMS?",
    "answer_en": "An RDBMS is a type of DBMS that stores data in structured tables and allows those tables to be related to each other through keys. The key difference from a basic DBMS is that an RDBMS supports foreign keys, normalization, JOIN queries, and ACID transactions. Examples include MySQL, PostgreSQL, and Oracle.\n\n```sql\n-- Two tables linked by a key = relational\nCREATE TABLE departments (dept_id INT PRIMARY KEY, name VARCHAR(50));\nCREATE TABLE employees (\n  emp_id INT PRIMARY KEY,\n  name VARCHAR(50),\n  dept_id INT,\n  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)\n);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "5",
    "category": "1. SQL & Database Basics (1–10)",
    "question_hi": "MySQL kya hai?",
    "answer_hi": "MySQL ek open-source RDBMS hai jise Oracle Corporation maintain karta hai. Ye SQL use karke tables mein data manage karta hai.\nFeatures: free, cross-platform, bade databases handle karta hai, achhi security, high performance, aur multiple storage engines (InnoDB default). Web apps mein bahut use hota hai, jaise LAMP stack mein.\n\n```sql\nSELECT VERSION();          -- MySQL version\nSHOW ENGINES;              -- available storage engines\n```",
    "question_en": "What is MySQL?",
    "answer_en": "MySQL is the world's most popular open-source relational database. It uses SQL to manage data stored in tables and is known for being fast, reliable, and easy to use. It's the database behind a huge portion of the web — the M in the LAMP stack. It supports transactions through InnoDB and works with almost every programming language.\n\n```sql\nSELECT VERSION();          -- MySQL version\nSHOW ENGINES;              -- available storage engines\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "6",
    "category": "1. SQL & Database Basics (1–10)",
    "question_hi": "Relational database kya hota hai?",
    "answer_hi": "Relational database data ko tables (relations) mein rows aur columns ke form mein store karta hai, aur har row ka ek unique key hota hai.\nTables ke beech relation foreign key se banta hai, jo doosri table ki primary key ko refer karti hai. Isse data consistent rehta hai aur redundancy kam hoti hai.\n\n```sql\n-- One customer -> many orders (relation via FK)\nCREATE TABLE orders (\n  order_id INT PRIMARY KEY,\n  customer_id INT,\n  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)\n);\n```",
    "question_en": "What is a Relational Database?",
    "answer_en": "A relational database stores data in tables of rows and columns, where every table represents one entity like Customers or Orders. Tables are linked to each other through foreign keys, so we can avoid storing the same data twice. This design keeps data consistent and makes it easy to query across related tables using JOINs.\n\n```sql\n-- One customer -> many orders (relation via FK)\nCREATE TABLE orders (\n  order_id INT PRIMARY KEY,\n  customer_id INT,\n  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)\n);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "7",
    "category": "1. SQL & Database Basics (1–10)",
    "question_hi": "Database aur Table mein kya difference hai?",
    "answer_hi": "Database ek container hai jisme kai tables, views, indexes, stored procedures jaise objects hote hain.\nTable database ke andar ek specific structure hai jisme data rows aur columns mein store hota hai. Ek database mein kai tables ho sakti hain, lekin table kabhi database ko contain nahi karti.\n\n```sql\nCREATE DATABASE company;   -- container\nUSE company;\nCREATE TABLE employees (id INT, name VARCHAR(50));  -- structure inside it\nSHOW TABLES;\n```",
    "question_en": "What is the difference between a Database and a Table?",
    "answer_en": "A database is the top-level container that holds all the tables, views, and other objects for an application. A table is a structure inside that database that actually stores data in rows and columns. Think of a database like a folder and a table like a spreadsheet inside that folder. One database can have many tables.\n\n```sql\nCREATE DATABASE company;   -- container\nUSE company;\nCREATE TABLE employees (id INT, name VARCHAR(50));  -- structure inside it\nSHOW TABLES;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "8",
    "category": "1. SQL & Database Basics (1–10)",
    "question_hi": "SQL mein Table kya hai?",
    "answer_hi": "Table related data ka ek structured collection hai jo database ke andar rows (records) aur columns (fields) mein hota hai.\nHar column ka ek fixed datatype hota hai, jaise INT ya VARCHAR. Har row ek complete record hoti hai, jaise ek student ka poora data.\n\n```sql\nCREATE TABLE students (\n  id INT PRIMARY KEY,     -- column: id (INT)\n  name VARCHAR(50),       -- column: name (VARCHAR)\n  age INT\n);\nDESC students;            -- shows table structure\n```",
    "question_en": "What is a Table in SQL?",
    "answer_en": "A table is the core storage unit in a relational database. It's made up of columns (which define the structure and data type) and rows (which hold the actual records). Every table should have a Primary Key — a column that uniquely identifies each row. Tables can be linked to other tables through Foreign Keys.\n\n```sql\nCREATE TABLE students (\n  id INT PRIMARY KEY,     -- column: id (INT)\n  name VARCHAR(50),       -- column: name (VARCHAR)\n  age INT\n);\nDESC students;            -- shows table structure\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "9",
    "category": "1. SQL & Database Basics (1–10)",
    "question_hi": "SQL ke applications kya hain?",
    "answer_hi": "SQL ka use database structure banane aur manage karne (DDL), data insert, update, delete aur query karne (DML), access control (DCL) aur transactions (TCL) mein hota hai.\nIske alawa data analysis, reporting, BI dashboards aur web/mobile apps ke backend data storage mein bhi SQL use hota hai.\n\n```sql\nCREATE TABLE sales (id INT, amount DECIMAL(10,2));  -- structure\nINSERT INTO sales VALUES (1, 500);                   -- data\nSELECT SUM(amount) FROM sales;                       -- reporting\n```",
    "question_en": "What are the applications of SQL?",
    "answer_en": "SQL is used for everything related to managing structured data — creating database structures, inserting and querying data, managing user permissions, and controlling transactions. Web apps use it to store users and orders. Analysts use it to generate reports. Admins use it for backups and security. It's the universal language for working with relational data.\n\n```sql\nCREATE TABLE sales (id INT, amount DECIMAL(10,2));  -- structure\nINSERT INTO sales VALUES (1, 500);                   -- data\nSELECT SUM(amount) FROM sales;                       -- reporting\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "10",
    "category": "1. SQL & Database Basics (1–10)",
    "question_hi": "SQL mein Query kya hoti hai?",
    "answer_hi": "Query database ko diya gaya ek request ya command hai jo data nikalne ya data par koi action karne ke liye hota hai.\nSabse common query SELECT hai. Lekin INSERT, UPDATE, DELETE aur CREATE, ALTER, DROP bhi SQL statements hi hain jo database ko instruction dete hain.\n\n```sql\nSELECT * FROM students WHERE marks > 80;   -- read query\nUPDATE students SET marks = 90 WHERE id = 1; -- modify query\n```",
    "question_en": "What is a Query in SQL?",
    "answer_en": "A query is a command we send to the database to either retrieve or modify data. The most common is SELECT, which reads data from tables. We also use INSERT to add, UPDATE to modify, and DELETE to remove data. Queries can be simple or complex — joining multiple tables, filtering, grouping, and sorting results.\n\n```sql\nSELECT * FROM students WHERE marks > 80;   -- read query\nUPDATE students SET marks = 90 WHERE id = 1; -- modify query\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "11",
    "category": "2. DDL, DML, DCL, TCL (11–18)",
    "question_hi": "SQL commands ke kitne types hote hain?",
    "answer_hi": "SQL commands mostly 4 categories mein baante jaate hain.\nDDL structure define karta hai: CREATE, ALTER, DROP, TRUNCATE.\nDML data manipulate karta hai: INSERT, UPDATE, DELETE (SELECT ko kai log alag DQL bolte hain).\nDCL permissions deta hai: GRANT, REVOKE.\nTCL transactions handle karta hai: COMMIT, ROLLBACK, SAVEPOINT.\n\n```sql\nCREATE TABLE t (id INT);                        -- DDL\nINSERT INTO t VALUES (1);                       -- DML\nGRANT SELECT ON mydb.* TO 'ravi'@'localhost';   -- DCL\nCOMMIT;                                         -- TCL\n```",
    "question_en": "What are the different types of SQL commands?",
    "answer_en": "SQL commands are grouped into four categories. DDL (Data Definition Language) manages structure — CREATE, ALTER, DROP. DML (Data Manipulation Language) works on data — SELECT, INSERT, UPDATE, DELETE. DCL (Data Control Language) manages permissions — GRANT and REVOKE. TCL (Transaction Control Language) manages transactions — COMMIT, ROLLBACK, SAVEPOINT.\n\n```sql\nCREATE TABLE t (id INT);                        -- DDL\nINSERT INTO t VALUES (1);                       -- DML\nGRANT SELECT ON mydb.* TO 'ravi'@'localhost';   -- DCL\nCOMMIT;                                         -- TCL\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "12",
    "category": "2. DDL, DML, DCL, TCL (11–18)",
    "question_hi": "DDL kya hai? Examples do.",
    "answer_hi": "DDL (Data Definition Language) database objects ka structure define ya modify karti hai, data ko nahi.\nCREATE naya table banata hai, ALTER existing table badalta hai, DROP poori table hata deta hai, aur TRUNCATE table ki saari rows hata deta hai. DDL commands auto-commit hoti hain.\n\n```sql\nCREATE TABLE emp (id INT, name VARCHAR(50));\nALTER TABLE emp ADD salary INT;\nTRUNCATE TABLE emp;\nDROP TABLE emp;\n```",
    "question_en": "What is DDL? Give examples.",
    "answer_en": "DDL stands for Data Definition Language. It's used to define and modify database structures like tables, indexes, and views. The main DDL commands are CREATE, ALTER, DROP, and TRUNCATE. An important thing to know is that DDL commands auto-commit in MySQL — they can't be rolled back.\n\n```sql\nCREATE TABLE emp (id INT, name VARCHAR(50));\nALTER TABLE emp ADD salary INT;\nTRUNCATE TABLE emp;\nDROP TABLE emp;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "13",
    "category": "2. DDL, DML, DCL, TCL (11–18)",
    "question_hi": "DML kya hai? Examples do.",
    "answer_hi": "DML (Data Manipulation Language) table ke andar ke data ko handle karti hai.\nINSERT nayi row daalta hai, UPDATE existing row badalta hai, DELETE rows hata deta hai, aur SELECT data retrieve karta hai. DML transaction mein rollback ho sakti hai.\n\n```sql\nINSERT INTO emp (id, name) VALUES (1, 'Rahul');\nUPDATE emp SET name = 'Rohit' WHERE id = 1;\nDELETE FROM emp WHERE id = 1;\nSELECT * FROM emp;\n```",
    "question_en": "What is DML? Give examples.",
    "answer_en": "DML stands for Data Manipulation Language. It's used to work with the actual data inside tables. The four main commands are SELECT (read), INSERT (add), UPDATE (modify), and DELETE (remove). Unlike DDL, DML statements are transactional — they can be rolled back if something goes wrong.\n\n```sql\nINSERT INTO emp (id, name) VALUES (1, 'Rahul');\nUPDATE emp SET name = 'Rohit' WHERE id = 1;\nDELETE FROM emp WHERE id = 1;\nSELECT * FROM emp;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "14",
    "category": "2. DDL, DML, DCL, TCL (11–18)",
    "question_hi": "DCL kya hai? Examples do.",
    "answer_hi": "DCL (Data Control Language) database mein access aur permissions control karti hai.\nGRANT kisi user ko permission deta hai, REVOKE wo permission wapas le leta hai. Isse hum decide karte hain kaun sa user kya kar sakta hai, jaise sirf padhna ya insert bhi karna.\n\n```sql\nGRANT SELECT, INSERT ON school.students TO 'ravi'@'localhost';\nREVOKE INSERT ON school.students FROM 'ravi'@'localhost';\n```",
    "question_en": "What is DCL? Give examples.",
    "answer_en": "DCL stands for Data Control Language. It controls who can access what in the database. The two commands are GRANT, which gives privileges to a user, and REVOKE, which takes them away. Privileges can be as specific as a single column on a single table — following the principle of least privilege.\n\n```sql\nGRANT SELECT, INSERT ON school.students TO 'ravi'@'localhost';\nREVOKE INSERT ON school.students FROM 'ravi'@'localhost';\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "15",
    "category": "2. DDL, DML, DCL, TCL (11–18)",
    "question_hi": "TCL kya hai? Examples do.",
    "answer_hi": "TCL (Transaction Control Language) transactions ko manage karti hai.\nCOMMIT ab tak ke changes permanent save karta hai, ROLLBACK changes undo karta hai, aur SAVEPOINT transaction ke beech ek checkpoint banata hai jahan tak partial rollback ho sakta hai.\n\n```sql\nSTART TRANSACTION;\nUPDATE accounts SET balance = balance - 500 WHERE id = 1;\nSAVEPOINT sp1;\nROLLBACK TO sp1;   -- undo only after savepoint\nCOMMIT;\n```",
    "question_en": "What is TCL? Give examples.",
    "answer_en": "TCL stands for Transaction Control Language. It manages transactions — groups of SQL operations that must succeed or fail together. The commands are COMMIT (save changes permanently), ROLLBACK (undo all changes), and SAVEPOINT (create a checkpoint to partially rollback to). By default, MySQL auto-commits every statement unless you explicitly start a transaction.\n\n```sql\nSTART TRANSACTION;\nUPDATE accounts SET balance = balance - 500 WHERE id = 1;\nSAVEPOINT sp1;\nROLLBACK TO sp1;   -- undo only after savepoint\nCOMMIT;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "16",
    "category": "2. DDL, DML, DCL, TCL (11–18)",
    "question_hi": "CREATE TABLE ka syntax likho.",
    "answer_hi": "CREATE TABLE mein table ka naam, phir bracket ke andar har column ka naam, datatype aur optional constraints likhte hain, columns comma se alag hote hain.\nTable banane se pehle USE database karna zaroori hai. Structure dekhne ke liye DESC table_name use hota hai.\n\n```sql\n-- Syntax:\n-- CREATE TABLE table_name (column datatype constraint, ...);\nCREATE TABLE Employees (\n  EmpID INT PRIMARY KEY,\n  EmpName VARCHAR(100) NOT NULL,\n  Salary DECIMAL(10,2),\n  Department VARCHAR(50)\n);\n```",
    "question_en": "Write the syntax for CREATE TABLE.",
    "answer_en": "CREATE TABLE defines a new table by specifying column names, data types, and constraints. For example, you list each column with its type like INT or VARCHAR, and add constraints like NOT NULL, UNIQUE, or PRIMARY KEY. You can also add FOREIGN KEY references to link to other tables. Use DESC tablename to see the structure after creation.\n\n```sql\n-- Syntax:\n-- CREATE TABLE table_name (column datatype constraint, ...);\nCREATE TABLE Employees (\n  EmpID INT PRIMARY KEY,\n  EmpName VARCHAR(100) NOT NULL,\n  Salary DECIMAL(10,2),\n  Department VARCHAR(50)\n);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "17",
    "category": "2. DDL, DML, DCL, TCL (11–18)",
    "question_hi": "Existing table mein column kaise add karte hain?",
    "answer_hi": "ALTER TABLE ke saath ADD COLUMN use karte hain, column ka naam aur datatype dete hain.\nPurani rows mein naye column ki value NULL hoti hai, jab tak DEFAULT na do. Ek saath kai columns bhi add kar sakte ho.\n\n```sql\n-- Syntax: ALTER TABLE table_name ADD COLUMN col datatype;\nALTER TABLE Employees ADD COLUMN Email VARCHAR(100);\nALTER TABLE Employees ADD COLUMN Status VARCHAR(10) DEFAULT 'active';\n```",
    "question_en": "How do you add a column to an existing table?",
    "answer_en": "To add a new column to an existing table, use ALTER TABLE with ADD COLUMN, specifying the name, data type, and any constraints. If the table already has data, existing rows will get NULL in the new column unless you set a DEFAULT value. You can also specify the position of the new column using AFTER column_name.\n\n```sql\n-- Syntax: ALTER TABLE table_name ADD COLUMN col datatype;\nALTER TABLE Employees ADD COLUMN Email VARCHAR(100);\nALTER TABLE Employees ADD COLUMN Status VARCHAR(10) DEFAULT 'active';\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "18",
    "category": "2. DDL, DML, DCL, TCL (11–18)",
    "question_hi": "Table se column kaise delete karte hain?",
    "answer_hi": "ALTER TABLE ke saath DROP COLUMN use karte hain. Column aur uska poora data hamesha ke liye hat jata hai, ye undo nahi hota.\nAgar column kisi index ya foreign key mein use ho raha ho to pehle wo constraint hatana padta hai.\n\n```sql\n-- Syntax: ALTER TABLE table_name DROP COLUMN col;\nALTER TABLE Employees DROP COLUMN Email;\n```",
    "question_en": "How do you delete a column from a table?",
    "answer_en": "To remove a column, use ALTER TABLE with DROP COLUMN. This permanently deletes the column and all its data — there's no undo without a backup. If the column is part of an index or foreign key, those constraints must be dropped first. Like all DDL, this auto-commits and cannot be rolled back.\n\n```sql\n-- Syntax: ALTER TABLE table_name DROP COLUMN col;\nALTER TABLE Employees DROP COLUMN Email;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "19",
    "category": "3. Keys & Constraints (19–26)",
    "question_hi": "Primary Key kya hai? Uski characteristics batao.",
    "answer_hi": "Primary Key wo column (ya columns) hai jo table ki har row ko uniquely identify karta hai.\nCharacteristics: value unique honi chahiye, NULL nahi ho sakta, ek table mein sirf ek primary key hoti hai, aur wo single ya composite (kai columns ki) ho sakti hai.\n\n```sql\nCREATE TABLE Employees (\n  EmpID INT PRIMARY KEY,   -- unique + NOT NULL\n  EmpName VARCHAR(100)\n);\n```",
    "question_en": "What is a Primary Key? Explain its characteristics.",
    "answer_en": "A Primary Key is a column (or combination of columns) that uniquely identifies each row in a table. It cannot be NULL and cannot have duplicate values. Every table should have exactly one primary key. In InnoDB, the primary key is also the clustered index, meaning the table's data is physically stored in primary key order.\n\n```sql\nCREATE TABLE Employees (\n  EmpID INT PRIMARY KEY,   -- unique + NOT NULL\n  EmpName VARCHAR(100)\n);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "20",
    "category": "3. Keys & Constraints (19–26)",
    "question_hi": "Foreign Key kya hai? Ye referential integrity kaise enforce karti hai?",
    "answer_hi": "Foreign Key ek table ka wo column hai jo doosri table ki Primary Key ko refer karta hai. Isse do tables ke beech relation banta hai.\nReferential integrity ka matlab: child table mein wahi value aa sakti hai jo parent table mein pehle se exist karti ho. Isse orphan records nahi bante.\n\n```sql\nCREATE TABLE Orders (\n  OrderID INT PRIMARY KEY,\n  EmpID INT,\n  FOREIGN KEY (EmpID) REFERENCES Employees(EmpID)\n    ON DELETE CASCADE      -- optional: delete child rows with parent\n);\n```",
    "question_en": "What is a Foreign Key? How does it enforce referential integrity?",
    "answer_en": "A Foreign Key is a column in one table that references the Primary Key of another table, creating a relationship between them. It enforces referential integrity — you can't insert a foreign key value that doesn't exist in the parent table. You can control what happens when a parent row is deleted using ON DELETE CASCADE, SET NULL, or RESTRICT.\n\n```sql\nCREATE TABLE Orders (\n  OrderID INT PRIMARY KEY,\n  EmpID INT,\n  FOREIGN KEY (EmpID) REFERENCES Employees(EmpID)\n    ON DELETE CASCADE      -- optional: delete child rows with parent\n);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "21",
    "category": "3. Keys & Constraints (19–26)",
    "question_hi": "Primary Key aur Unique Key mein kya difference hai?",
    "answer_hi": "Dono uniqueness enforce karte hain. Farak ye hai:\nPrimary key mein NULL allowed nahi hota, aur ek table mein sirf ek hoti hai.\nUnique key mein MySQL mein NULL allowed hai (multiple NULL bhi chalte hain), aur ek table mein kai unique keys ho sakti hain.\nPrimary key row ki main pehchaan hai, unique key kisi column ko duplicate se bachati hai, jaise email.\n\n```sql\nCREATE TABLE users (\n  id INT PRIMARY KEY,           -- one per table, no NULL\n  email VARCHAR(100) UNIQUE,    -- many allowed, NULL allowed\n  phone VARCHAR(15) UNIQUE\n);\n```",
    "question_en": "What is the difference between Primary Key and Unique Key?",
    "answer_en": "Both Primary Key and Unique Key prevent duplicate values, but they differ in a few ways. A Primary Key cannot be NULL — a Unique Key allows NULL (and even multiple NULLs in MySQL). A table can have only one Primary Key but many Unique constraints. In InnoDB, the Primary Key is the clustered index, giving it a performance advantage.\n\n```sql\nCREATE TABLE users (\n  id INT PRIMARY KEY,           -- one per table, no NULL\n  email VARCHAR(100) UNIQUE,    -- many allowed, NULL allowed\n  phone VARCHAR(15) UNIQUE\n);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "22",
    "category": "3. Keys & Constraints (19–26)",
    "question_hi": "Composite Primary Key kya hai?",
    "answer_hi": "Composite Primary Key mein do ya zyada columns milkar row ko uniquely identify karte hain. Ek column akela unique nahi hota, lekin unka combination unique hota hai.\nYe aksar many-to-many relationship ki junction table mein use hota hai, jaise StudentID aur CourseID.\n\n```sql\nCREATE TABLE StudentCourses (\n  StudentID INT,\n  CourseID INT,\n  PRIMARY KEY (StudentID, CourseID)\n);\n```",
    "question_en": "What is a Composite Primary Key?",
    "answer_en": "A Composite Primary Key is a primary key that spans two or more columns, where the combination of those columns is unique. It's commonly used in junction tables that represent many-to-many relationships. For example, a StudentCourses table might have a composite key of (StudentID, CourseID) — each student-course pair must be unique, but a student or course can appear multiple times alone.\n\n```sql\nCREATE TABLE StudentCourses (\n  StudentID INT,\n  CourseID INT,\n  PRIMARY KEY (StudentID, CourseID)\n);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "23",
    "category": "3. Keys & Constraints (19–26)",
    "question_hi": "SQL Constraints kya hain? Common types batao.",
    "answer_hi": "Constraints columns par lagaye gaye rules hain jo data integrity maintain karte hain, yani galat data table mein nahi jaane dete.\nCommon: NOT NULL (khaali nahi), UNIQUE (duplicate nahi), PRIMARY KEY, FOREIGN KEY, CHECK (condition), DEFAULT (default value), aur MySQL mein AUTO_INCREMENT (khud badhne wala number).\n\n```sql\nCREATE TABLE emp (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  name VARCHAR(50) NOT NULL,\n  email VARCHAR(100) UNIQUE,\n  age INT CHECK (age >= 18),\n  city VARCHAR(30) DEFAULT 'Lucknow'\n);\n```",
    "question_en": "What are SQL Constraints? List the common types.",
    "answer_en": "Constraints are rules applied to columns to ensure only valid data is stored. The main ones are: NOT NULL (column can't be empty), UNIQUE (no duplicates), PRIMARY KEY (unique identifier per row), FOREIGN KEY (references another table), CHECK (custom condition the value must satisfy), and DEFAULT (fallback value when none is provided). They enforce data integrity at the database level.\n\n```sql\nCREATE TABLE emp (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  name VARCHAR(50) NOT NULL,\n  email VARCHAR(100) UNIQUE,\n  age INT CHECK (age >= 18),\n  city VARCHAR(30) DEFAULT 'Lucknow'\n);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "24",
    "category": "3. Keys & Constraints (19–26)",
    "question_hi": "NOT NULL constraint kya hai?",
    "answer_hi": "NOT NULL constraint ye ensure karta hai ki column mein NULL yaani khaali value store nahi ho sakti. INSERT ya UPDATE ke time value dena compulsory hota hai.\nYe naam, email jaise zaroori fields par lagta hai. NULL ka matlab \"value maujood nahi\", ye 0 ya empty string se alag hai.\n\n```sql\nCREATE TABLE Employees (\n  EmpID INT,\n  EmpName VARCHAR(100) NOT NULL\n);\nINSERT INTO Employees (EmpID) VALUES (1);  -- Error: EmpName needs a value\n```",
    "question_en": "What is the NOT NULL constraint?",
    "answer_en": "The NOT NULL constraint means a column must always have a value — it cannot be left empty. NULL in SQL means the absence of any value, which is different from zero or an empty string. Critical columns like names, emails, or amounts should always be NOT NULL to prevent incomplete records from being stored.\n\n```sql\nCREATE TABLE Employees (\n  EmpID INT,\n  EmpName VARCHAR(100) NOT NULL\n);\nINSERT INTO Employees (EmpID) VALUES (1);  -- Error: EmpName needs a value\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "25",
    "category": "3. Keys & Constraints (19–26)",
    "question_hi": "DEFAULT constraint kya hai?",
    "answer_hi": "DEFAULT constraint kisi column ki default value set karta hai. INSERT ke time us column ki value na do to MySQL wahi default value khud daal deta hai.\nStatus jaise 'pending', salary 0 ya current date ke liye useful hai. MySQL mein date/expression default ko bracket mein likhna padta hai (8.0.13+).\n\n```sql\nCREATE TABLE Employees (\n  Salary DECIMAL(10,2) DEFAULT 0.00,\n  Status VARCHAR(20) DEFAULT 'active',\n  JoinDate DATE DEFAULT (CURRENT_DATE)   -- brackets needed for expressions\n);\n```",
    "question_en": "What is the DEFAULT constraint?",
    "answer_en": "The DEFAULT constraint provides an automatic value for a column when no value is explicitly given in an INSERT statement. For example, a status column might default to 'active', or a created_at column to CURRENT_TIMESTAMP. It's especially important when adding a new column to a table with existing data — without a default, those rows would get NULL.\n\n```sql\nCREATE TABLE Employees (\n  Salary DECIMAL(10,2) DEFAULT 0.00,\n  Status VARCHAR(20) DEFAULT 'active',\n  JoinDate DATE DEFAULT (CURRENT_DATE)   -- brackets needed for expressions\n);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "26",
    "category": "3. Keys & Constraints (19–26)",
    "question_hi": "CHECK constraint kya hai?",
    "answer_hi": "CHECK constraint column mein ek condition lagata hai. Sirf wahi values allow hoti hain jo condition satisfy karti hain, warna INSERT ya UPDATE error deta hai.\nJaise age >= 18 ya salary > 0. MySQL 8.0.16 se CHECK properly enforce hota hai, usse purane versions mein ise ignore kar dete the.\n\n```sql\nCREATE TABLE Employees (\n  Age INT CHECK (Age >= 18),\n  Salary DECIMAL(10,2) CHECK (Salary > 0)\n);\nINSERT INTO Employees VALUES (16, 5000);  -- Error: check violated\n```",
    "question_en": "What is the CHECK constraint?",
    "answer_en": "The CHECK constraint enforces a custom condition on column values. For example, CHECK (age >= 18) ensures no underage values can be inserted. CHECK can also compare multiple columns in the same row, like ensuring an end date is always after a start date. Note: In MySQL, CHECK constraints were only properly enforced from version 8.0.16 onwards.\n\n```sql\nCREATE TABLE Employees (\n  Age INT CHECK (Age >= 18),\n  Salary DECIMAL(10,2) CHECK (Salary > 0)\n);\nINSERT INTO Employees VALUES (16, 5000);  -- Error: check violated\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "27",
    "category": "4. Joins (27–33)",
    "question_hi": "JOIN kya hai aur kyun use hota hai?",
    "answer_hi": "JOIN do ya zyada tables ki rows ko ek related column (aam taur par foreign key) ke basis par combine karta hai.\nData normalization ki wajah se alag alag tables mein bata hota hai, isliye ek result mein poori information laane ke liye JOIN zaroori hai, jaise employee ka naam aur uska department.\n\n```sql\n-- Structure: SELECT cols FROM A JOIN B ON A.key = B.key;\nSELECT e.EmpName, d.DeptName\nFROM Employees e\nJOIN Departments d ON e.DeptID = d.DeptID;\n```",
    "question_en": "What is a JOIN in SQL? Why is it used?",
    "answer_en": "A JOIN combines rows from two or more tables into one result set based on a related column between them. It's how we reassemble data that normalization has split across multiple tables. The JOIN condition goes in the ON clause, usually matching a foreign key to a primary key. SQL has several JOIN types — INNER, LEFT, RIGHT, CROSS, and SELF.\n\n```sql\n-- Structure: SELECT cols FROM A JOIN B ON A.key = B.key;\nSELECT e.EmpName, d.DeptName\nFROM Employees e\nJOIN Departments d ON e.DeptID = d.DeptID;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "28",
    "category": "4. Joins (27–33)",
    "question_hi": "SQL mein JOINs ke types kaun se hain?",
    "answer_hi": "INNER JOIN sirf matching rows deta hai. LEFT JOIN left table ki saari rows aur right ki matching rows. RIGHT JOIN uska ulta. FULL OUTER JOIN dono ki saari rows.\nCROSS JOIN har row ko har row se jodta hai (Cartesian product). SELF JOIN table ko khud se join karta hai.\nDhyan rakho: MySQL mein FULL JOIN directly nahi hai, LEFT aur RIGHT ko UNION karke banate hain.\n\n```sql\n-- INNER / LEFT / RIGHT / CROSS\nSELECT * FROM A INNER JOIN B ON A.id = B.id;\nSELECT * FROM A LEFT JOIN B ON A.id = B.id;\n-- FULL JOIN in MySQL\nSELECT * FROM A LEFT JOIN B ON A.id = B.id\nUNION\nSELECT * FROM A RIGHT JOIN B ON A.id = B.id;\n```",
    "question_en": "What are the different types of JOINs?",
    "answer_en": "INNER JOIN returns only rows that have a match in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right — unmatched right columns are NULL. RIGHT JOIN is the opposite. CROSS JOIN returns every possible combination of rows. SELF JOIN is when a table is joined to itself using two aliases — useful for hierarchical data.\n\n```sql\n-- INNER / LEFT / RIGHT / CROSS\nSELECT * FROM A INNER JOIN B ON A.id = B.id;\nSELECT * FROM A LEFT JOIN B ON A.id = B.id;\n-- FULL JOIN in MySQL\nSELECT * FROM A LEFT JOIN B ON A.id = B.id\nUNION\nSELECT * FROM A RIGHT JOIN B ON A.id = B.id;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "29",
    "category": "4. Joins (27–33)",
    "question_hi": "INNER JOIN ko example ke saath samjhao.",
    "answer_hi": "INNER JOIN sirf wahi rows deta hai jinke liye ON condition dono tables mein match ho jaye. Jo row kisi ek table mein match nahi karti wo result se bahar ho jati hai.\nExample: employees aur departments ko join karein to sirf wahi employees aayenge jinka department valid hai.\n\n```sql\nSELECT e.EmpName, d.DepartmentName\nFROM Employees e\nINNER JOIN Departments d ON e.DeptID = d.DeptID;\n```",
    "question_en": "Explain INNER JOIN with an example.",
    "answer_en": "INNER JOIN returns only the rows where the ON condition finds a match in both tables. Rows with no match on either side are excluded. It's the most common join type and is what you get when you write just JOIN without specifying a type. Use it when you only want data that has complete information across all joined tables.\n\n```sql\nSELECT e.EmpName, d.DepartmentName\nFROM Employees e\nINNER JOIN Departments d ON e.DeptID = d.DeptID;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "30",
    "category": "4. Joins (27–33)",
    "question_hi": "LEFT JOIN ko example ke saath samjhao.",
    "answer_hi": "LEFT JOIN left table ki saari rows deta hai, aur right table ki sirf matching rows. Match na mile to right ke columns NULL aate hain.\nIsse \"kaun missing hai\" pata chalta hai. Trap: right table ke column par WHERE lagane se (jaise d.DeptID IS NOT NULL) LEFT JOIN silently INNER JOIN ban jata hai. Condition ON mein likho.\n\n```sql\nSELECT e.EmpName, d.DepartmentName\nFROM Employees e\nLEFT JOIN Departments d ON e.DeptID = d.DeptID;\n-- employees without a department show NULL\n```",
    "question_en": "Explain LEFT JOIN with an example.",
    "answer_en": "LEFT JOIN returns all rows from the left table plus matching rows from the right table. Where there's no match, the right-side columns appear as NULL. It's useful for finding records that may or may not have related data — for example, all customers even if they haven't placed an order yet. A WHERE filter on the right-side column can accidentally turn it into an INNER JOIN.\n\n```sql\nSELECT e.EmpName, d.DepartmentName\nFROM Employees e\nLEFT JOIN Departments d ON e.DeptID = d.DeptID;\n-- employees without a department show NULL\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "31",
    "category": "4. Joins (27–33)",
    "question_hi": "LEFT JOIN aur RIGHT JOIN mein kya difference hai?",
    "answer_hi": "LEFT JOIN left table ki saari rows deta hai aur right se sirf matching, non-match par right side NULL.\nRIGHT JOIN right table ki saari rows deta hai aur left se matching, non-match par left side NULL.\nDono mirror image hain: A LEFT JOIN B ka result B RIGHT JOIN A jaisa hi hota hai. Practice mein log zyada LEFT JOIN likhte hain.\n\n```sql\nSELECT * FROM A LEFT JOIN B ON A.id = B.id;\n-- same result as:\nSELECT * FROM B RIGHT JOIN A ON A.id = B.id;\n```",
    "question_en": "What is the difference between LEFT JOIN and RIGHT JOIN?",
    "answer_en": "LEFT JOIN keeps all rows from the left table; RIGHT JOIN keeps all rows from the right table. Any RIGHT JOIN can be rewritten as a LEFT JOIN by just swapping the table order. In practice, most developers stick to LEFT JOINs for consistency and readability. Both are called OUTER JOINs because they preserve unmatched rows.\n\n```sql\nSELECT * FROM A LEFT JOIN B ON A.id = B.id;\n-- same result as:\nSELECT * FROM B RIGHT JOIN A ON A.id = B.id;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "32",
    "category": "4. Joins (27–33)",
    "question_hi": "SELF JOIN kya hai? Example do.",
    "answer_hi": "SELF JOIN mein ek table ko khud se hi join karte hain, isliye alag alag alias dene padte hain. Ye hierarchical data ke liye use hota hai.\nClassic example: employee aur uska manager, jo dono ek hi Employees table mein hote hain. Manager na ho (CEO) to LEFT JOIN use karte hain taaki wo bhi dikhe.\n\n```sql\nSELECT e.EmpName AS Employee, m.EmpName AS Manager\nFROM Employees e\nLEFT JOIN Employees m ON e.ManagerID = m.EmpID;\n```",
    "question_en": "What is a SELF JOIN? Give an example.",
    "answer_en": "A SELF JOIN is when you join a table to itself by giving it two different aliases. It's used when a table has a relationship within its own rows — like an Employees table where each employee has a ManagerID that points to another row in the same table. Using two aliases (e for employee, m for manager), you can retrieve each employee with their manager's name.\n\n```sql\nSELECT e.EmpName AS Employee, m.EmpName AS Manager\nFROM Employees e\nLEFT JOIN Employees m ON e.ManagerID = m.EmpID;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "33",
    "category": "4. Joins (27–33)",
    "question_hi": "CROSS JOIN kya hai?",
    "answer_hi": "CROSS JOIN pehli table ki har row ko doosri table ki har row se jodta hai, ise Cartesian product kehte hain. Isme ON condition nahi hoti.\nAgar A mein 5 aur B mein 3 rows hain to result 15 rows ka hoga. Ye kam use hota hai, combinations banane ke liye, jaise size aur colour ke saare pairs.\n\n```sql\nSELECT s.size, c.colour\nFROM sizes s\nCROSS JOIN colours c;   -- 3 sizes x 2 colours = 6 rows\n```",
    "question_en": "What is a CROSS JOIN?",
    "answer_en": "A CROSS JOIN produces a Cartesian product — every row from the first table is paired with every row from the second table. There's no ON condition because all combinations are returned. If Table A has 5 rows and Table B has 4, the result has 20 rows. It's used for generating combinations, like pairing all products with all sizes.\n\n```sql\nSELECT s.size, c.colour\nFROM sizes s\nCROSS JOIN colours c;   -- 3 sizes x 2 colours = 6 rows\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "34",
    "category": "5. Filtering, Sorting & Grouping (34–40)",
    "question_hi": "WHERE clause kya hai aur kaise kaam karti hai?",
    "answer_hi": "WHERE clause rows ko filter karti hai, grouping ya aggregation se pehle. Sirf wahi rows result mein aati hain jinke liye condition TRUE ho.\nOperators: =, !=, <, >, BETWEEN, IN, LIKE, IS NULL, AND, OR, NOT. WHERE mein aggregate function nahi use kar sakte, uske liye HAVING hota hai.\n\n```sql\nSELECT * FROM Employees\nWHERE Salary > 50000 AND Department = 'IT';\n```",
    "question_en": "What is the WHERE clause? How does it work?",
    "answer_en": "The WHERE clause filters rows from the query result. Only rows where the condition is TRUE are included — rows where it's FALSE or NULL are excluded. It runs before GROUP BY, so you can't use aggregate functions like COUNT() or SUM() in WHERE. For aggregate filtering, use HAVING instead.\n\n```sql\nSELECT * FROM Employees\nWHERE Salary > 50000 AND Department = 'IT';\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "35",
    "category": "5. Filtering, Sorting & Grouping (34–40)",
    "question_hi": "ORDER BY clause kya hai?",
    "answer_hi": "ORDER BY result ko ek ya zyada columns ke hisaab se sort karta hai. Default ascending (ASC) hota hai, bade se chhota ke liye DESC likhte hain.\nMultiple columns de sakte ho: pehle column se sort, tie hone par agle column se. ORDER BY hamesha query ke end mein, LIMIT se pehle aata hai.\n\n```sql\nSELECT * FROM Employees ORDER BY Salary DESC;\nSELECT * FROM Employees ORDER BY Department ASC, Salary DESC;\n```",
    "question_en": "What is the ORDER BY clause?",
    "answer_en": "ORDER BY sorts the result set. By default it sorts ascending (ASC); add DESC for largest-first. You can sort by multiple columns — the result is sorted by the first column, then ties are broken by the second. ORDER BY runs after SELECT, so you can use column aliases defined in SELECT. Always use ORDER BY with LIMIT for consistent pagination.\n\n```sql\nSELECT * FROM Employees ORDER BY Salary DESC;\nSELECT * FROM Employees ORDER BY Department ASC, Salary DESC;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "36",
    "category": "5. Filtering, Sorting & Grouping (34–40)",
    "question_hi": "GROUP BY clause kya hai?",
    "answer_hi": "GROUP BY same value wali rows ko ek group mein rakh kar summary row banata hai. Iske saath aggregate functions (COUNT, SUM, AVG, MAX, MIN) use hote hain.\nJaise har department mein kitne employees hain aur average salary kya hai. SELECT ka non-aggregate column GROUP BY mein hona chahiye.\n\n```sql\nSELECT Department, COUNT(*) AS EmpCount, AVG(Salary) AS AvgSalary\nFROM Employees\nGROUP BY Department;\n```",
    "question_en": "What is the GROUP BY clause?",
    "answer_en": "GROUP BY groups rows with the same column values into summary rows so we can apply aggregate functions to each group. For example, GROUP BY Department with COUNT(*) tells us how many employees are in each department. Any column in SELECT that's not inside an aggregate function must appear in the GROUP BY clause — otherwise MySQL raises an error in strict mode.\n\n```sql\nSELECT Department, COUNT(*) AS EmpCount, AVG(Salary) AS AvgSalary\nFROM Employees\nGROUP BY Department;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "37",
    "category": "5. Filtering, Sorting & Grouping (34–40)",
    "question_hi": "WHERE aur HAVING mein kya difference hai?",
    "answer_hi": "WHERE grouping se pehle individual rows ko filter karta hai aur usme aggregate functions use nahi hote.\nHAVING grouping ke baad groups ko filter karta hai aur usme COUNT, SUM, AVG jaise aggregate functions use ho sakte hain.\nOrder: pehle WHERE rows chhanta hai, phir GROUP BY, phir HAVING groups chhanta hai.\n\n```sql\nSELECT Department, COUNT(*)\nFROM Employees\nWHERE Salary > 30000        -- row filter\nGROUP BY Department\nHAVING COUNT(*) > 5;        -- group filter\n```",
    "question_en": "What is the difference between WHERE and HAVING?",
    "answer_en": "WHERE and HAVING both filter results but at different stages. WHERE filters rows before grouping — it can't use aggregate functions. HAVING filters groups after GROUP BY runs — it's specifically for aggregate conditions like HAVING COUNT(*) > 5 or HAVING SUM(Salary) > 100000. Simple rule: non-aggregate filters go in WHERE, aggregate filters go in HAVING.\n\n```sql\nSELECT Department, COUNT(*)\nFROM Employees\nWHERE Salary > 30000        -- row filter\nGROUP BY Department\nHAVING COUNT(*) > 5;        -- group filter\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "38",
    "category": "5. Filtering, Sorting & Grouping (34–40)",
    "question_hi": "SQL query execution ka logical order kya hai?",
    "answer_hi": "Query jis order mein likhte hain us order mein execute nahi hoti. Actual order hai: FROM, JOIN, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT.\nIsi wajah se WHERE mein SELECT ka alias use nahi kar sakte (abhi bana hi nahi), lekin ORDER BY mein kar sakte hain.\n\n```sql\n-- Execution order:\n-- FROM -> JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT\nSELECT salary * 12 AS yearly FROM Employees\n-- WHERE yearly > 500000    -- Error\nORDER BY yearly;            -- OK\n```",
    "question_en": "What is the logical order of SQL query execution?",
    "answer_en": "SQL doesn't execute in the order you write it. The logical execution order is: FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT. This explains why you can't use a SELECT alias in WHERE (alias doesn't exist yet), but you can use it in ORDER BY (which runs after SELECT). Aggregate functions can't be in WHERE because GROUP BY hasn't run yet.\n\n```sql\n-- Execution order:\n-- FROM -> JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT\nSELECT salary * 12 AS yearly FROM Employees\n-- WHERE yearly > 500000    -- Error\nORDER BY yearly;            -- OK\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "39",
    "category": "5. Filtering, Sorting & Grouping (34–40)",
    "question_hi": "LIMIT clause kya hai?",
    "answer_hi": "LIMIT result mein aane wali rows ki sankhya limit karta hai. Top-N queries aur pagination ke liye use hota hai.\nLIMIT 10 pehli 10 rows deta hai. LIMIT 5, 10 ka matlab 5 rows skip karke 10 rows. LIMIT 10 OFFSET 20 se page 3 milta hai (10 rows per page).\n\n```sql\nSELECT * FROM Employees ORDER BY id LIMIT 10;\nSELECT * FROM Employees ORDER BY id LIMIT 5, 10;        -- skip 5, take 10\nSELECT * FROM Employees ORDER BY id LIMIT 10 OFFSET 20; -- page 3\n```",
    "question_en": "What is the LIMIT clause?",
    "answer_en": "LIMIT restricts how many rows a query returns. LIMIT 10 returns the first 10 rows. For pagination, use LIMIT 10 OFFSET 20 to skip 20 rows and get the next 10. Always combine LIMIT with ORDER BY — without it, the rows returned are in no guaranteed order and results will be inconsistent across runs.\n\n```sql\nSELECT * FROM Employees ORDER BY id LIMIT 10;\nSELECT * FROM Employees ORDER BY id LIMIT 5, 10;        -- skip 5, take 10\nSELECT * FROM Employees ORDER BY id LIMIT 10 OFFSET 20; -- page 3\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "40",
    "category": "5. Filtering, Sorting & Grouping (34–40)",
    "question_hi": "DISTINCT keyword kya hai?",
    "answer_hi": "DISTINCT result se duplicate rows hata deta hai, yani sirf unique values milti hain. Default behaviour ALL hai jo duplicates ke saath sab deta hai.\nMultiple columns par lagao to poori combination unique dekhi jati hai. COUNT(DISTINCT col) se unique values ki ginti nikalte hain.\n\n```sql\nSELECT DISTINCT Department FROM Employees;\nSELECT COUNT(DISTINCT Department) FROM Employees;\n```",
    "question_en": "What is the DISTINCT keyword?",
    "answer_en": "DISTINCT removes duplicate rows from query results, returning each unique combination of values once. SELECT DISTINCT Department gives each department name exactly once. When used inside an aggregate — like COUNT(DISTINCT column) — it counts only unique values. DISTINCT requires an extra sort or hash step, so there's a small performance cost on large result sets.\n\n```sql\nSELECT DISTINCT Department FROM Employees;\nSELECT COUNT(DISTINCT Department) FROM Employees;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "41",
    "category": "6. Functions & NULL Handling (41–47)",
    "question_hi": "Aggregate functions kya hote hain? Examples do.",
    "answer_hi": "Aggregate functions bahut saari rows par calculation karke ek single value return karte hain.\nCOUNT rows ginta hai, SUM total, AVG average, MIN sabse chhoti aur MAX sabse badi value. Ye aksar GROUP BY ke saath use hote hain aur NULL values ko ignore karte hain (COUNT(*) ke alawa).\n\n```sql\nSELECT COUNT(*), SUM(Salary), AVG(Salary), MIN(Salary), MAX(Salary)\nFROM Employees;\n```",
    "question_en": "What are Aggregate Functions? Give examples.",
    "answer_en": "Aggregate functions calculate a single summary value from a group of rows. The main ones are COUNT (count rows), SUM (add values), AVG (calculate average), MIN (smallest value), and MAX (largest value). They're used with GROUP BY to compute summaries per group. All aggregate functions except COUNT(*) ignore NULL values automatically.\n\n```sql\nSELECT COUNT(*), SUM(Salary), AVG(Salary), MIN(Salary), MAX(Salary)\nFROM Employees;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "42",
    "category": "6. Functions & NULL Handling (41–47)",
    "question_hi": "COUNT(*), COUNT(column) aur COUNT(DISTINCT column) mein kya difference hai?",
    "answer_hi": "COUNT(*) saari rows ginta hai, NULL wali bhi.\nCOUNT(column) sirf un rows ko ginta hai jinme us column ki value NULL nahi hai.\nCOUNT(DISTINCT column) unique non-NULL values ginta hai.\nExample: 100 rows, 5 mein salary NULL hai to COUNT(*) = 100 aur COUNT(Salary) = 95.\n\n```sql\nSELECT COUNT(*)               AS all_rows,\n       COUNT(Salary)          AS non_null_salary,\n       COUNT(DISTINCT Salary) AS unique_salary\nFROM Employees;\n```",
    "question_en": "What is the difference between COUNT(*), COUNT(column) and COUNT(DISTINCT column)?",
    "answer_en": "COUNT(*) counts all rows including NULLs. COUNT(column) counts only non-NULL values in that column. COUNT(DISTINCT column) counts only unique non-NULL values. For example, if 100 rows exist but 10 have NULL salary, COUNT(*) returns 100, COUNT(Salary) returns 90, and COUNT(DISTINCT Salary) might return 20 if only 20 unique salaries exist.\n\n```sql\nSELECT COUNT(*)               AS all_rows,\n       COUNT(Salary)          AS non_null_salary,\n       COUNT(DISTINCT Salary) AS unique_salary\nFROM Employees;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "43",
    "category": "6. Functions & NULL Handling (41–47)",
    "question_hi": "Aggregate functions mein NULL values kaise behave karti hain?",
    "answer_hi": "SUM, AVG, MIN, MAX aur COUNT(column) NULL values ko ignore karte hain, error nahi dete.\nExample: 10 rows mein 2 salary NULL hain to AVG 8 values ka average nikalta hai, 10 se divide nahi karta. COUNT(*) phir bhi saari 10 rows ginta hai.\nAgar NULL ko 0 maanna ho to AVG(COALESCE(Salary, 0)) likhte hain.\n\n```sql\nSELECT AVG(Salary)               AS avg_ignoring_null,\n       AVG(COALESCE(Salary, 0))  AS avg_null_as_zero\nFROM Employees;\n```",
    "question_en": "How do NULL values behave in aggregate functions?",
    "answer_en": "Aggregate functions like SUM, AVG, MIN, MAX, and COUNT(column) all silently ignore NULL values. This is by design — NULL means unknown, so including it in a calculation would make the result unknown too. If you want NULLs treated as zero, use COALESCE: SUM(COALESCE(Bonus, 0)) treats a NULL bonus as 0 instead of ignoring it.\n\n```sql\nSELECT AVG(Salary)               AS avg_ignoring_null,\n       AVG(COALESCE(Salary, 0))  AS avg_null_as_zero\nFROM Employees;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "44",
    "category": "6. Functions & NULL Handling (41–47)",
    "question_hi": "Scalar functions kya hain? Examples do.",
    "answer_hi": "Scalar functions ek value par kaam karke ek value return karte hain, har row ke liye alag.\nString: UPPER, LOWER, SUBSTRING, LENGTH. Number: ROUND. Date: NOW. NULL handling: COALESCE, IFNULL. Aggregate se farak ye hai ki ye rows ko collapse nahi karte.\n\n```sql\nSELECT UPPER(EmpName), SUBSTRING(EmpName, 1, 3),\n       LENGTH(EmpName), ROUND(Salary, 0), NOW()\nFROM Employees;\n```",
    "question_en": "What are Scalar Functions? Give examples.",
    "answer_en": "Scalar functions operate on one value and return one value per row — unlike aggregates which summarize many rows into one. String functions: UPPER(), LOWER(), SUBSTRING(), CONCAT(), LENGTH(), TRIM(). Numeric: ROUND(), FLOOR(), ABS(). Date: NOW(), CURDATE(), DATE_FORMAT(), DATEDIFF(). NULL handling: COALESCE(), IFNULL(), NULLIF(). They can be used in SELECT, WHERE, and ORDER BY.\n\n```sql\nSELECT UPPER(EmpName), SUBSTRING(EmpName, 1, 3),\n       LENGTH(EmpName), ROUND(Salary, 0), NOW()\nFROM Employees;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "45",
    "category": "6. Functions & NULL Handling (41–47)",
    "question_hi": "COALESCE function kya hai?",
    "answer_hi": "COALESCE list ki pehli non-NULL value return karta hai. Sab NULL ho to NULL milta hai.\nNULL ko safely handle karne ke liye use hota hai, kyunki NULL ke saath calculation ka result bhi NULL aata hai. Ye IFNULL se zyada flexible hai kyunki kai fallback values de sakte ho.\n\n```sql\nSELECT EmpName, COALESCE(Mobile, Phone, 'N/A') AS Contact\nFROM Employees;\n```",
    "question_en": "What is the COALESCE function?",
    "answer_en": "COALESCE takes any number of arguments and returns the first one that isn't NULL. It's the standard way to handle NULLs in SQL. For example, COALESCE(Phone, Email, 'N/A') returns the first non-NULL contact, falling back to 'N/A' if both are NULL. It's more flexible than IFNULL because it accepts more than two arguments.\n\n```sql\nSELECT EmpName, COALESCE(Mobile, Phone, 'N/A') AS Contact\nFROM Employees;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "46",
    "category": "6. Functions & NULL Handling (41–47)",
    "question_hi": "SQL mein NULL values ko kaise handle karte hain?",
    "answer_hi": "NULL check karne ke liye IS NULL ya IS NOT NULL use karte hain, = NULL kabhi kaam nahi karta.\nNULL ko default value se badalne ke liye COALESCE ya IFNULL use karte hain. NULLIF(a, b) a aur b barabar hon to NULL return karta hai, jaise divide-by-zero se bachne ke liye.\n\n```sql\nSELECT * FROM Employees WHERE Email IS NULL;\nSELECT EmpName, COALESCE(Salary, 0) FROM Employees;\nSELECT total / NULLIF(count, 0) FROM stats;  -- avoids divide by zero\n```",
    "question_en": "How do you handle NULL values in SQL queries?",
    "answer_en": "NULL means the absence of any value — it's not zero, not an empty string. Any comparison with NULL returns UNKNOWN, not TRUE or FALSE, which is why = NULL never works — you must use IS NULL or IS NOT NULL. To replace NULL with a default, use COALESCE(column, default). NULLIF(a, b) returns NULL when a equals b, useful for avoiding divide-by-zero errors.\n\n```sql\nSELECT * FROM Employees WHERE Email IS NULL;\nSELECT EmpName, COALESCE(Salary, 0) FROM Employees;\nSELECT total / NULLIF(count, 0) FROM stats;  -- avoids divide by zero\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "47",
    "category": "6. Functions & NULL Handling (41–47)",
    "question_hi": "UNION aur UNION ALL mein kya difference hai?",
    "answer_hi": "UNION dono queries ke results jodta hai aur duplicate rows hata deta hai, isliye thoda slow hota hai kyunki deduplicate karna padta hai.\nUNION ALL saari rows duplicates ke saath rakhta hai, isliye fast hota hai.\nJab duplicates chalte hon ya pata ho ki hain hi nahi, tab UNION ALL prefer karo.\n\n```sql\nSELECT City FROM Customers\nUNION            -- unique cities only\nSELECT City FROM Vendors;\n\nSELECT City FROM Customers\nUNION ALL        -- all cities, with duplicates\nSELECT City FROM Vendors;\n```",
    "question_en": "What is the difference between UNION and UNION ALL?",
    "answer_en": "UNION combines results from two SELECT queries into one result set and removes duplicates. UNION ALL does the same but keeps all rows including duplicates — it's faster because it skips the deduplication step. Rules: both queries must have the same number of columns with compatible types. Column names come from the first query. ORDER BY goes at the very end, once.\n\n```sql\nSELECT City FROM Customers\nUNION            -- unique cities only\nSELECT City FROM Vendors;\n\nSELECT City FROM Customers\nUNION ALL        -- all cities, with duplicates\nSELECT City FROM Vendors;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "48",
    "category": "7. Data Types (48–52)",
    "question_hi": "SQL/MySQL ke common data types kaun se hain?",
    "answer_hi": "Numeric: INT (whole number), DECIMAL(p,s) (exact, paise ke liye), FLOAT/DOUBLE (approximate).\nString: CHAR (fixed), VARCHAR (variable), TEXT (lamba text).\nDate/Time: DATE, TIME, DATETIME, TIMESTAMP.\nOther: BOOLEAN (andar se TINYINT(1)), ENUM, BLOB (binary data).\n\n```sql\nCREATE TABLE demo (\n  id INT,\n  price DECIMAL(10,2),\n  name VARCHAR(50),\n  code CHAR(2),\n  notes TEXT,\n  dob DATE,\n  created_at DATETIME,\n  is_active BOOLEAN\n);\n```",
    "question_en": "What are the common data types in SQL/MySQL?",
    "answer_en": "MySQL data types fall into three categories. Numeric: INT (whole numbers), DECIMAL(p,s) (exact decimals for money), FLOAT/DOUBLE (approximate). String: CHAR(n) (fixed length), VARCHAR(n) (variable length, most common), TEXT (large content). Date/Time: DATE, TIME, DATETIME (no timezone), TIMESTAMP (stores UTC, converts to session timezone). Choosing the right type saves space and improves performance.\n\n```sql\nCREATE TABLE demo (\n  id INT,\n  price DECIMAL(10,2),\n  name VARCHAR(50),\n  code CHAR(2),\n  notes TEXT,\n  dob DATE,\n  created_at DATETIME,\n  is_active BOOLEAN\n);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "49",
    "category": "7. Data Types (48–52)",
    "question_hi": "CHAR aur VARCHAR mein kya difference hai?",
    "answer_hi": "CHAR fixed length hota hai: CHAR(10) mein hamesha 10 characters ki jagah leta hai, kam text ho to space se pad hota hai. Country code, state code jaise fixed data ke liye.\nVARCHAR variable length hota hai: sirf actual text jitni jagah leta hai. Naam, email, address ke liye best hai.\n\n```sql\nCREATE TABLE country (\n  code CHAR(2),       -- 'IN' always 2 chars\n  name VARCHAR(100)   -- length varies\n);\n```",
    "question_en": "What is the difference between CHAR and VARCHAR?",
    "answer_en": "CHAR(n) is fixed-length — it always uses exactly n characters, padding with spaces if shorter. VARCHAR(n) is variable-length — it uses only as much space as the actual value plus 1–2 bytes overhead. Use CHAR for fixed-length data like country codes or gender flags. Use VARCHAR for names, emails, and any text that varies in length. VARCHAR is far more storage-efficient for variable data.\n\n```sql\nCREATE TABLE country (\n  code CHAR(2),       -- 'IN' always 2 chars\n  name VARCHAR(100)   -- length varies\n);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "50",
    "category": "7. Data Types (48–52)",
    "question_hi": "INT aur DECIMAL mein kya difference hai?",
    "answer_hi": "INT sirf whole numbers store karta hai, decimal nahi. Signed range lagbhag -2.1 arab se +2.1 arab.\nDECIMAL(p,s) exact fixed-point number store karta hai, p total digits aur s decimal ke baad ke digits. Paise ke liye DECIMAL use karo kyunki FLOAT mein rounding errors aate hain. INT counts aur IDs ke liye.\n\n```sql\nCREATE TABLE payments (\n  id INT,\n  amount DECIMAL(10,2)   -- up to 99,999,999.99 exactly\n);\nINSERT INTO payments VALUES (1, 199.99);\n```",
    "question_en": "What is the difference between INT and DECIMAL?",
    "answer_en": "INT stores whole numbers only — no decimals. DECIMAL(p,s) stores exact fixed-point numbers, where p is total digits and s is digits after the decimal. For financial data like prices or balances, always use DECIMAL — FLOAT and DOUBLE have tiny rounding errors that add up. Use INT for IDs, counts, and any whole-number column.\n\n```sql\nCREATE TABLE payments (\n  id INT,\n  amount DECIMAL(10,2)   -- up to 99,999,999.99 exactly\n);\nINSERT INTO payments VALUES (1, 199.99);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "51",
    "category": "7. Data Types (48–52)",
    "question_hi": "MySQL mein DATE, DATETIME aur TIMESTAMP mein kya difference hai?",
    "answer_hi": "DATE sirf tarikh (YYYY-MM-DD) store karta hai. DATETIME tarikh aur samay dono, bina timezone conversion ke.\nTIMESTAMP bhi tarikh aur samay hai lekin UTC mein store hota hai aur timezone ke hisaab se convert hota hai, aur iski range chhoti hai (2038 tak). Auto-update tabhi hota hai jab ON UPDATE CURRENT_TIMESTAMP define kiya ho.\n\n```sql\nCREATE TABLE events (\n  d DATE,                          -- '2026-09-24'\n  dt DATETIME,                     -- '2026-09-24 14:30:00'\n  updated_at TIMESTAMP\n    DEFAULT CURRENT_TIMESTAMP\n    ON UPDATE CURRENT_TIMESTAMP    -- auto-update on row change\n);\n```",
    "question_en": "What is the difference between DATE, DATETIME and TIMESTAMP in MySQL?",
    "answer_en": "DATE stores only the calendar date (YYYY-MM-DD). DATETIME stores date and time with no timezone conversion — what you insert is what you get. TIMESTAMP also stores date and time but converts values to UTC internally and back to the session timezone on retrieval — great for tracking created_at or updated_at. TIMESTAMP also supports ON UPDATE CURRENT_TIMESTAMP to auto-update.\n\n```sql\nCREATE TABLE events (\n  d DATE,                          -- '2026-09-24'\n  dt DATETIME,                     -- '2026-09-24 14:30:00'\n  updated_at TIMESTAMP\n    DEFAULT CURRENT_TIMESTAMP\n    ON UPDATE CURRENT_TIMESTAMP    -- auto-update on row change\n);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "52",
    "category": "7. Data Types (48–52)",
    "question_hi": "AUTO_INCREMENT kya hai?",
    "answer_hi": "AUTO_INCREMENT ek column ke liye har nayi row par unique sequential number khud generate karta hai (1, 2, 3...). Aam taur par primary key ke saath use hota hai.\nINSERT mein us column ki value dena zaroori nahi. Row delete hone par uska number dobara use nahi hota. Ye sirf integer columns par lagta hai.\n\n```sql\nCREATE TABLE Employees (\n  EmpID INT AUTO_INCREMENT PRIMARY KEY,\n  EmpName VARCHAR(100)\n);\nINSERT INTO Employees (EmpName) VALUES ('Rahul'), ('Priya');  -- ids 1, 2\n```",
    "question_en": "What is AUTO_INCREMENT?",
    "answer_en": "AUTO_INCREMENT automatically generates a unique, incrementing integer value for each new row — you don't need to supply it. It's almost always applied to the primary key column. Deleted values are never reused — the counter only moves forward. Only works on integer columns that are part of a key. You can reset it with ALTER TABLE tablename AUTO_INCREMENT = value.\n\n```sql\nCREATE TABLE Employees (\n  EmpID INT AUTO_INCREMENT PRIMARY KEY,\n  EmpName VARCHAR(100)\n);\nINSERT INTO Employees (EmpName) VALUES ('Rahul'), ('Priya');  -- ids 1, 2\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "53",
    "category": "8. DELETE vs TRUNCATE vs DROP (53–55)",
    "question_hi": "DELETE aur TRUNCATE mein kya difference hai?",
    "answer_hi": "DELETE DML hai, WHERE ke saath selected rows hata sakta hai, row-by-row log karta hai isliye slow hai, triggers fire karta hai, aur transaction mein rollback ho sakta hai.\nTRUNCATE DDL hai, WHERE nahi lagta, saari rows ek saath hata deta hai, fast hai, triggers fire nahi karta, AUTO_INCREMENT reset karta hai, aur MySQL mein rollback nahi hota.\n\n```sql\nDELETE FROM Employees WHERE DeptID = 3;   -- selected rows\nTRUNCATE TABLE Employees;                 -- all rows, fast, no rollback\n```",
    "question_en": "What is the difference between DELETE and TRUNCATE?",
    "answer_en": "DELETE removes specific rows using a WHERE clause, logs each deletion, and can be rolled back inside a transaction. It also fires triggers. TRUNCATE removes all rows at once by deallocating data pages — much faster on large tables — but it can't be rolled back, doesn't support WHERE, doesn't fire triggers, and resets the AUTO_INCREMENT counter. Use DELETE for selective removal; TRUNCATE to empty a whole table fast.\n\n```sql\nDELETE FROM Employees WHERE DeptID = 3;   -- selected rows\nTRUNCATE TABLE Employees;                 -- all rows, fast, no rollback\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "54",
    "category": "8. DELETE vs TRUNCATE vs DROP (53–55)",
    "question_hi": "DELETE aur DROP mein kya difference hai?",
    "answer_hi": "DELETE sirf rows (data) hataata hai, table ka structure, indexes aur constraints bache rehte hain. Ye DML hai aur WHERE lag sakta hai.\nDROP poori table ko structure, data, indexes, constraints aur triggers samet hamesha ke liye hata deta hai. Ye DDL hai, isliye backup ke bina recovery nahi hoti.\n\n```sql\nDELETE FROM Employees WHERE EmpID = 5;   -- row gone, table stays\nDROP TABLE Employees;                    -- table gone completely\n```",
    "question_en": "What is the difference between DELETE and DROP?",
    "answer_en": "DELETE removes rows from inside a table — the table itself still exists with its structure, indexes, and remaining rows. DROP TABLE removes the entire table permanently — structure, data, indexes, everything gone. DROP can't be rolled back. Summary: DELETE affects rows and the table lives on; DROP kills the table entirely. Always back up before running DROP in production.\n\n```sql\nDELETE FROM Employees WHERE EmpID = 5;   -- row gone, table stays\nDROP TABLE Employees;                    -- table gone completely\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "55",
    "category": "8. DELETE vs TRUNCATE vs DROP (53–55)",
    "question_hi": "TRUNCATE aur DROP mein kya difference hai?",
    "answer_hi": "TRUNCATE table ki saari rows hata deta hai lekin table structure, indexes aur constraints rakhta hai, aur AUTO_INCREMENT counter reset ho jata hai.\nDROP poori table hi hata deta hai. Jab table khaali karke dobara use karna ho to TRUNCATE, aur jab table ki zaroorat hi khatam ho to DROP.\n\n```sql\nTRUNCATE TABLE logs;        -- empty, structure kept\nDROP TABLE IF EXISTS logs;  -- table removed\n```",
    "question_en": "What is the difference between TRUNCATE and DROP?",
    "answer_en": "TRUNCATE removes all rows but keeps the table structure intact — columns, indexes, and constraints remain. It also resets the AUTO_INCREMENT counter. DROP removes the entire table object — structure, data, and everything else — and the table no longer exists in the schema. Use TRUNCATE to empty and reuse a table; use DROP when the table is no longer needed at all.\n\n```sql\nTRUNCATE TABLE logs;        -- empty, structure kept\nDROP TABLE IF EXISTS logs;  -- table removed\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "56",
    "category": "9. Subqueries (56–59)",
    "question_hi": "Subquery kya hai?",
    "answer_hi": "Subquery ek query ke andar likhi doosri query hai, jise nested ya inner query kehte hain. Inner query pehle chalti hai aur uska result outer query use karti hai.\nYe WHERE, FROM ya SELECT mein likhi ja sakti hai. Bracket ke andar likhna zaroori hai.\n\n```sql\nSELECT EmpName FROM Employees\nWHERE DeptID = (SELECT DeptID FROM Departments WHERE DeptName = 'IT');\n```",
    "question_en": "What is a Subquery in SQL?",
    "answer_en": "A subquery is a SELECT statement nested inside another SQL statement, enclosed in parentheses. The inner query runs first and its result is used by the outer query. Subqueries can appear in WHERE (to filter dynamically), FROM (as a derived table), or SELECT (as a scalar value per row). They're useful for filtering based on aggregated data without needing temporary tables.\n\n```sql\nSELECT EmpName FROM Employees\nWHERE DeptID = (SELECT DeptID FROM Departments WHERE DeptName = 'IT');\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "57",
    "category": "9. Subqueries (56–59)",
    "question_hi": "Subqueries ke types kaun se hain?",
    "answer_hi": "Scalar subquery ek value return karti hai. Row subquery ek row (kai columns). Table subquery kai rows aur columns, IN ya EXISTS ke saath.\nCorrelated subquery outer query ke column ko refer karti hai aur outer ki har row ke liye ek baar chalti hai.\nDhyan: kai rows return hon to = nahi, IN use karna padta hai.\n\n```sql\n-- Scalar\nSELECT * FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);\n-- Row (top earner of each dept)\nSELECT * FROM Employees\nWHERE (DeptID, Salary) IN (SELECT DeptID, MAX(Salary) FROM Employees GROUP BY DeptID);\n-- Table\nSELECT * FROM Employees WHERE DeptID IN (SELECT DeptID FROM Departments WHERE Location = 'Mumbai');\n-- Correlated\nSELECT e.EmpName FROM Employees e\nWHERE e.Salary > (SELECT AVG(Salary) FROM Employees WHERE DeptID = e.DeptID);\n```",
    "question_en": "What are the types of subqueries?",
    "answer_en": "Subqueries are classified by result shape and dependency. By shape: scalar (returns one value), column (returns one column, many rows — used with IN), table (multiple rows and columns — used in FROM or EXISTS). By dependency: non-correlated (runs once, result reused) and correlated (references the outer query, re-runs for every outer row — slower but sometimes necessary).\n\n```sql\n-- Scalar\nSELECT * FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);\n-- Row (top earner of each dept)\nSELECT * FROM Employees\nWHERE (DeptID, Salary) IN (SELECT DeptID, MAX(Salary) FROM Employees GROUP BY DeptID);\n-- Table\nSELECT * FROM Employees WHERE DeptID IN (SELECT DeptID FROM Departments WHERE Location = 'Mumbai');\n-- Correlated\nSELECT e.EmpName FROM Employees e\nWHERE e.Salary > (SELECT AVG(Salary) FROM Employees WHERE DeptID = e.DeptID);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "58",
    "category": "9. Subqueries (56–59)",
    "question_hi": "Correlated aur Non-Correlated subquery mein kya difference hai?",
    "answer_hi": "Non-correlated subquery outer query se independent hoti hai, ek hi baar chalti hai aur result reuse hota hai, isliye generally fast hoti hai.\nCorrelated subquery outer query ke columns par depend karti hai, outer ki har row ke liye ek baar chalti hai, isliye bade data par slow ho sakti hai. Aise cases mein JOIN ya window function se optimize karte hain.\n\n```sql\n-- Non-correlated: runs once\nSELECT * FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);\n-- Correlated: runs per row\nSELECT * FROM Employees e\nWHERE Salary > (SELECT AVG(Salary) FROM Employees WHERE DeptID = e.DeptID);\n```",
    "question_en": "What is the difference between Correlated and Non-Correlated subqueries?",
    "answer_en": "A non-correlated subquery is independent of the outer query — it runs once and the result is reused for all outer rows. A correlated subquery references a column from the outer query, so it re-executes once for each row the outer query processes. Correlated subqueries can be slow on large tables and are often replaced with JOINs or window functions for better performance.\n\n```sql\n-- Non-correlated: runs once\nSELECT * FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);\n-- Correlated: runs per row\nSELECT * FROM Employees e\nWHERE Salary > (SELECT AVG(Salary) FROM Employees WHERE DeptID = e.DeptID);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "59",
    "category": "9. Subqueries (56–59)",
    "question_hi": "EXISTS operator kya hai aur subquery ke saath kaise use hota hai?",
    "answer_hi": "EXISTS check karta hai ki subquery kam se kam ek row return karti hai ya nahi. Row mile to TRUE, nahi to FALSE.\nYe pehli match milte hi ruk jata hai, isliye bade data par IN se aksar fast hota hai. Subquery mein SELECT 1 likhte hain kyunki sirf existence dekhni hoti hai. NOT EXISTS ulta karta hai.\n\n```sql\nSELECT e.EmpName FROM Employees e\nWHERE EXISTS (SELECT 1 FROM Orders o WHERE o.EmpID = e.EmpID);\n```",
    "question_en": "What is the EXISTS operator and how is it used with subqueries?",
    "answer_en": "EXISTS checks whether a subquery returns at least one row — if yes, TRUE; if no, FALSE. It short-circuits: as soon as one matching row is found, it stops searching. That's why we write SELECT 1 inside EXISTS — we only care about existence, not the values. NOT EXISTS is useful for finding rows in one table with no match in another, and it handles NULLs more safely than NOT IN.\n\n```sql\nSELECT e.EmpName FROM Employees e\nWHERE EXISTS (SELECT 1 FROM Orders o WHERE o.EmpID = e.EmpID);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "60",
    "category": "10. Indexes (60–63)",
    "question_hi": "Index kya hai aur kyun use hota hai?",
    "answer_hi": "Index ek data structure (aam taur par B-tree) hai jo column ki values ko sorted rakhta hai taaki search fast ho, bilkul kitaab ke index ki tarah. Bina index ke poori table scan karni padti hai.\nYe WHERE, JOIN, ORDER BY aur GROUP BY ko fast karta hai. Trade-off: INSERT, UPDATE, DELETE thode slow ho jate hain aur extra disk space lagti hai.\n\n```sql\nCREATE INDEX idx_lastname ON Employees(LastName);\n-- now this lookup avoids a full table scan\nSELECT * FROM Employees WHERE LastName = 'Sharma';\n```",
    "question_en": "What is an Index and why is it used?",
    "answer_en": "An index is a data structure (usually a B-tree) that allows the database to find rows quickly without scanning the entire table. Without an index, every query with a WHERE condition requires a full table scan. With an index, the database jumps directly to matching rows in O(log n) time. The trade-off: indexes speed up reads but slow down writes because they must be updated on every INSERT, UPDATE, or DELETE.\n\n```sql\nCREATE INDEX idx_lastname ON Employees(LastName);\n-- now this lookup avoids a full table scan\nSELECT * FROM Employees WHERE LastName = 'Sharma';\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "61",
    "category": "10. Indexes (60–63)",
    "question_hi": "Indexes ke different types kaun se hain?",
    "answer_hi": "Primary key index PK par khud banta hai. Unique index duplicate rokta hai. Composite index kai columns par hota hai, jisme column ka order matter karta hai.\nClustered index data ka physical order tay karta hai, ek table mein ek hi; InnoDB mein primary key hi clustered index hoti hai. Non-clustered alag structure hai jo row ko point karta hai. Full-text index text search ke liye.\n\n```sql\nCREATE UNIQUE INDEX idx_email ON Employees(Email);          -- unique\nCREATE INDEX idx_name ON Employees(LastName, FirstName);    -- composite\nCREATE FULLTEXT INDEX idx_bio ON Employees(Bio);            -- full-text\n```",
    "question_en": "What are the different types of Indexes?",
    "answer_en": "MySQL supports several index types. Primary Key Index: auto-created on the PK, is the clustered index in InnoDB. Unique Index: prevents duplicates, allows NULL. Composite Index: covers multiple columns — column order matters. Full-Text Index: for keyword search with MATCH() AGAINST(). In InnoDB, all non-PK indexes are secondary — they store indexed values plus the primary key, requiring a second lookup for full row data.\n\n```sql\nCREATE UNIQUE INDEX idx_email ON Employees(Email);          -- unique\nCREATE INDEX idx_name ON Employees(LastName, FirstName);    -- composite\nCREATE FULLTEXT INDEX idx_bio ON Employees(Bio);            -- full-text\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "62",
    "category": "10. Indexes (60–63)",
    "question_hi": "MySQL mein index kaise banate hain?",
    "answer_hi": "CREATE INDEX index_name ON table(column) se banate hain. Unique ke liye CREATE UNIQUE INDEX, kai columns ke liye composite index.\nTable banate waqt bhi INDEX likh sakte ho. SHOW INDEX se indexes dekhte hain aur DROP INDEX se hataate hain.\n\n```sql\nCREATE INDEX idx_lastname ON Employees(LastName);\nCREATE UNIQUE INDEX idx_email ON Employees(Email);\nCREATE TABLE T (id INT PRIMARY KEY, Email VARCHAR(100), INDEX idx_email (Email));\nSHOW INDEX FROM Employees;\nDROP INDEX idx_lastname ON Employees;\n```",
    "question_en": "How do you create an index in MySQL?",
    "answer_en": "Create a basic index with CREATE INDEX idx_name ON tablename(column). For uniqueness: CREATE UNIQUE INDEX. For multiple columns: CREATE INDEX idx ON tablename(col1, col2). You can also define indexes inline inside CREATE TABLE. Use SHOW INDEX FROM tablename to inspect existing indexes, and DROP INDEX idx_name ON tablename to remove one that's no longer needed.\n\n```sql\nCREATE INDEX idx_lastname ON Employees(LastName);\nCREATE UNIQUE INDEX idx_email ON Employees(Email);\nCREATE TABLE T (id INT PRIMARY KEY, Email VARCHAR(100), INDEX idx_email (Email));\nSHOW INDEX FROM Employees;\nDROP INDEX idx_lastname ON Employees;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "63",
    "category": "10. Indexes (60–63)",
    "question_hi": "Query optimizer index kyun use nahi karta?",
    "answer_hi": "Index tab use nahi hota jab column par function lagaya ho, jaise WHERE UPPER(Name) = 'JOHN', ya expression ho jaise Salary * 2 > 100000.\nLIKE '%son' (leading wildcard) par bhi nahi. Table bahut chhoti ho, ya query table ki bahut badi percentage rows laye, ya column low cardinality (gender jaisa) ho to full scan hi sasta padta hai. EXPLAIN se check karte hain.\n\n```sql\n-- Index NOT used\nSELECT * FROM Employees WHERE UPPER(Name) = 'JOHN';\nSELECT * FROM Employees WHERE Name LIKE '%son';\n-- Index used\nSELECT * FROM Employees WHERE Name = 'John';\nSELECT * FROM Employees WHERE Name LIKE 'Jo%';\nEXPLAIN SELECT * FROM Employees WHERE Name = 'John';\n```",
    "question_en": "Why might an index NOT be used by the optimizer?",
    "answer_en": "Even when an index exists, MySQL may skip it if: a function wraps the column (WHERE UPPER(name) = 'JOHN'), an expression transforms it (WHERE salary * 2 > 100000), a leading wildcard is used (LIKE '%son'), the table is tiny, or the query would return a large percentage of rows anyway. Use EXPLAIN before a SELECT to check whether MySQL is actually using your index.\n\n```sql\n-- Index NOT used\nSELECT * FROM Employees WHERE UPPER(Name) = 'JOHN';\nSELECT * FROM Employees WHERE Name LIKE '%son';\n-- Index used\nSELECT * FROM Employees WHERE Name = 'John';\nSELECT * FROM Employees WHERE Name LIKE 'Jo%';\nEXPLAIN SELECT * FROM Employees WHERE Name = 'John';\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "64",
    "category": "11. Transactions & ACID (64–68)",
    "question_hi": "SQL mein Transaction kya hai?",
    "answer_hi": "Transaction ek ya zyada SQL operations ka group hai jo ek single logical unit ki tarah kaam karta hai. Ya to saare operations succeed hote hain (COMMIT) ya sab undo ho jate hain (ROLLBACK).\nClassic example bank transfer: ek account se paisa kate aur doosre mein jude, dono ek saath hone chahiye. MySQL mein InnoDB engine transactions support karta hai.\n\n```sql\nSTART TRANSACTION;\nUPDATE Accounts SET Balance = Balance - 1000 WHERE AccountID = 1;\nUPDATE Accounts SET Balance = Balance + 1000 WHERE AccountID = 2;\nCOMMIT;      -- or ROLLBACK on error\n```",
    "question_en": "What is a Transaction in SQL?",
    "answer_en": "A transaction is a group of SQL operations that must all succeed or all fail together as one unit. If any operation fails, all changes are rolled back as if nothing happened. The classic example is a bank transfer — deducting from one account and crediting another must happen together, never partially. In MySQL, transactions are started with START TRANSACTION and ended with COMMIT or ROLLBACK.\n\n```sql\nSTART TRANSACTION;\nUPDATE Accounts SET Balance = Balance - 1000 WHERE AccountID = 1;\nUPDATE Accounts SET Balance = Balance + 1000 WHERE AccountID = 2;\nCOMMIT;      -- or ROLLBACK on error\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "65",
    "category": "11. Transactions & ACID (64–68)",
    "question_hi": "ACID properties kya hain?",
    "answer_hi": "Atomicity: transaction poora hoga ya bilkul nahi, beech ka kuch nahi.\nConsistency: transaction ke baad database ek valid state se doosri valid state mein jata hai, constraints nahi tootte.\nIsolation: ek saath chalte transactions ek doosre ko disturb nahi karte.\nDurability: commit ke baad data crash ya power cut mein bhi safe rehta hai.\n\n```sql\nSTART TRANSACTION;\nUPDATE Accounts SET Balance = Balance - 1000 WHERE AccountID = 1;\nUPDATE Accounts SET Balance = Balance + 1000 WHERE AccountID = 2;\nCOMMIT;     -- Atomic (both or none) + Durable (saved permanently)\n```",
    "question_en": "What are the ACID properties?",
    "answer_en": "ACID stands for Atomicity, Consistency, Isolation, and Durability. Atomicity: all operations in a transaction succeed or all fail. Consistency: the database moves from one valid state to another — no constraint is broken. Isolation: concurrent transactions don't interfere with each other. Durability: once committed, data is permanent and survives crashes. These four properties make databases trustworthy for critical data.\n\n```sql\nSTART TRANSACTION;\nUPDATE Accounts SET Balance = Balance - 1000 WHERE AccountID = 1;\nUPDATE Accounts SET Balance = Balance + 1000 WHERE AccountID = 2;\nCOMMIT;     -- Atomic (both or none) + Durable (saved permanently)\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "66",
    "category": "11. Transactions & ACID (64–68)",
    "question_hi": "MySQL mein transactions kaise manage karte hain?",
    "answer_hi": "START TRANSACTION ya BEGIN se shuru karte hain, phir queries chalate hain. Sab theek ho to COMMIT se permanent save, gadbad ho to ROLLBACK se sab undo.\nSAVEPOINT beech mein checkpoint banata hai aur ROLLBACK TO se sirf wahan tak wapas jaate hain. Dhyan: MySQL mein autocommit default ON hota hai, isliye transaction ke bahar har query khud commit hoti hai.\n\n```sql\nSTART TRANSACTION;\nINSERT INTO Orders (id, item) VALUES (1, 'Pen');\nSAVEPOINT sp1;\nUPDATE Inventory SET Qty = Qty - 1 WHERE ProductID = 10;\nROLLBACK TO sp1;    -- undo only the UPDATE\nCOMMIT;\n```",
    "question_en": "How do you manage transactions in MySQL?",
    "answer_en": "Start a transaction with START TRANSACTION or BEGIN. Run your SQL statements. Use COMMIT to save all changes permanently, or ROLLBACK to undo everything. SAVEPOINT name creates a checkpoint inside a transaction, and ROLLBACK TO SAVEPOINT returns to that point without canceling the whole transaction. MySQL uses autocommit by default — every statement auto-commits unless you explicitly start a transaction.\n\n```sql\nSTART TRANSACTION;\nINSERT INTO Orders (id, item) VALUES (1, 'Pen');\nSAVEPOINT sp1;\nUPDATE Inventory SET Qty = Qty - 1 WHERE ProductID = 10;\nROLLBACK TO sp1;    -- undo only the UPDATE\nCOMMIT;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "67",
    "category": "11. Transactions & ACID (64–68)",
    "question_hi": "Agar transactions use na karein to kya hoga?",
    "answer_hi": "Partial updates se data inconsistent ho sakta hai. Beech mein error aaye to pehle ke changes apne aap undo nahi hote.\nConcurrent users ke operations ek doosre ko disturb kar sakte hain, jaise dirty reads aur lost updates. Yaani atomicity aur consistency ki guarantee nahi rehti. Bank ya order system mein ye bahut risky hai.\n\n```sql\n-- Without a transaction: if the 2nd UPDATE fails, money is lost\nUPDATE Accounts SET Balance = Balance - 1000 WHERE AccountID = 1;\n-- crash / error here\nUPDATE Accounts SET Balance = Balance + 1000 WHERE AccountID = 2;\n```",
    "question_en": "What happens if you don't use transactions?",
    "answer_en": "Without transactions, partial execution becomes a real risk. If two related UPDATE statements run and the system crashes between them, the first is committed but the second never happens — data is now corrupted. Without isolation, concurrent users can interfere with each other through dirty reads, non-repeatable reads, and lost updates. Transactions with ACID guarantees are essential for any system where data accuracy matters.\n\n```sql\n-- Without a transaction: if the 2nd UPDATE fails, money is lost\nUPDATE Accounts SET Balance = Balance - 1000 WHERE AccountID = 1;\n-- crash / error here\nUPDATE Accounts SET Balance = Balance + 1000 WHERE AccountID = 2;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "68",
    "category": "11. Transactions & ACID (64–68)",
    "question_hi": "InnoDB mein concurrent transactions kaise handle hote hain?",
    "answer_hi": "InnoDB MVCC (Multi-Version Concurrency Control) use karta hai. Har transaction ko shuru hone ke time ka consistent snapshot dikhta hai, isliye readers writers ko aur writers readers ko mostly block nahi karte.\nSame row par conflict rokne ke liye row-level locking hoti hai. Isolation levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ (default), SERIALIZABLE.\n\n```sql\nSELECT @@transaction_isolation;   -- REPEATABLE-READ by default\nSET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;\n```",
    "question_en": "How are concurrent transactions handled in InnoDB?",
    "answer_en": "InnoDB handles concurrent transactions using MVCC — Multi-Version Concurrency Control. Instead of locking rows for reads, it maintains multiple versions of each row, so readers see a consistent snapshot from when their transaction started — reads never block writes and writes never block reads. For conflicting writes on the same row, row-level locking is used. InnoDB supports four isolation levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ (default), and SERIALIZABLE.\n\n```sql\nSELECT @@transaction_isolation;   -- REPEATABLE-READ by default\nSET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "69",
    "category": "12. Views, Procedures & Triggers (69–72)",
    "question_hi": "SQL mein View kya hai?",
    "answer_hi": "View ek virtual table hai jo ek saved SELECT query par based hoti hai. Isme data alag se store nahi hota, query chalane par underlying tables se aata hai.\nFayde: complex query ko simple naam milta hai, security milti hai (users ko sirf kuch rows ya columns dikhana), aur code reuse hota hai.\n\n```sql\nCREATE VIEW IT_Employees AS\nSELECT EmpID, EmpName, Salary FROM Employees WHERE Department = 'IT';\n\nSELECT * FROM IT_Employees;\nDROP VIEW IT_Employees;\n```",
    "question_en": "What is a View in SQL?",
    "answer_en": "A view is a virtual table based on a saved SELECT query. It doesn't store data itself — every time you query it, the underlying SELECT runs on the real tables. Views simplify complex queries by giving them a reusable name, improve security by exposing only specific columns or rows, and provide a stable interface if the underlying table structure changes. Created with CREATE VIEW name AS SELECT ...\n\n```sql\nCREATE VIEW IT_Employees AS\nSELECT EmpID, EmpName, Salary FROM Employees WHERE Department = 'IT';\n\nSELECT * FROM IT_Employees;\nDROP VIEW IT_Employees;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "70",
    "category": "12. Views, Procedures & Triggers (69–72)",
    "question_hi": "Stored Procedure kya hai?",
    "answer_hi": "Stored procedure SQL statements ka ek precompiled, named block hai jo database mein save rehta hai aur CALL se chalta hai.\nFayde: network traffic kam (ek call mein kai queries), business logic ek jagah, reusable, aur input/output parameters support. DELIMITER isliye badalte hain ki body ke andar ; aata hai.\n\n```sql\nDELIMITER //\nCREATE PROCEDURE GetHighSalaryEmployees(IN minSal DECIMAL(10,2))\nBEGIN\n  SELECT * FROM Employees WHERE Salary > minSal;\nEND //\nDELIMITER ;\n\nCALL GetHighSalaryEmployees(50000);\n```",
    "question_en": "What is a Stored Procedure?",
    "answer_en": "A stored procedure is a named, precompiled block of SQL code saved in the database and executed with CALL. It can have IF/ELSE logic, loops, and input/output parameters. Benefits: runs faster (compiled once), reduces network trips (one CALL replaces multiple queries), centralizes business logic, and improves security (users can EXECUTE a procedure without direct table access). Use DELIMITER // when creating one because the body contains semicolons.\n\n```sql\nDELIMITER //\nCREATE PROCEDURE GetHighSalaryEmployees(IN minSal DECIMAL(10,2))\nBEGIN\n  SELECT * FROM Employees WHERE Salary > minSal;\nEND //\nDELIMITER ;\n\nCALL GetHighSalaryEmployees(50000);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "71",
    "category": "12. Views, Procedures & Triggers (69–72)",
    "question_hi": "MySQL mein Trigger kya hai?",
    "answer_hi": "Trigger ek special stored program hai jo table par INSERT, UPDATE ya DELETE hone par BEFORE ya AFTER khud-ba-khud chal jata hai.\nUse: audit log, validation, related data auto-update. Andar OLD purani aur NEW nayi row ki value deta hai. Zyada triggers debugging mushkil bana dete hain.\n\n```sql\nDELIMITER //\nCREATE TRIGGER log_salary_change\nAFTER UPDATE ON Employees\nFOR EACH ROW\nBEGIN\n  IF OLD.Salary <> NEW.Salary THEN\n    INSERT INTO SalaryAudit (EmpID, OldSalary, NewSalary, ChangedAt)\n    VALUES (OLD.EmpID, OLD.Salary, NEW.Salary, NOW());\n  END IF;\nEND //\nDELIMITER ;\n```",
    "question_en": "What is a Trigger in MySQL?",
    "answer_en": "A trigger is a stored program that automatically runs before or after an INSERT, UPDATE, or DELETE on a table — you can't call it directly. Inside a trigger, OLD holds the row's previous values and NEW holds the incoming values. Common uses: audit logging, data validation, and auto-updating related tables. The downside is that triggers run invisibly, making systems harder to debug.\n\n```sql\nDELIMITER //\nCREATE TRIGGER log_salary_change\nAFTER UPDATE ON Employees\nFOR EACH ROW\nBEGIN\n  IF OLD.Salary <> NEW.Salary THEN\n    INSERT INTO SalaryAudit (EmpID, OldSalary, NewSalary, ChangedAt)\n    VALUES (OLD.EmpID, OLD.Salary, NEW.Salary, NOW());\n  END IF;\nEND //\nDELIMITER ;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "72",
    "category": "12. Views, Procedures & Triggers (69–72)",
    "question_hi": "Trigger aur Stored Procedure mein kya difference hai?",
    "answer_hi": "Stored procedure manually CALL karke chalate hain, aur usme input/output parameters ho sakte hain. Complex reusable logic aur batch kaam ke liye.\nTrigger table event par khud chalta hai, koi parameter nahi leta, sirf OLD aur NEW rows par kaam karta hai. Audit aur validation ke liye. Trigger ko hum CALL nahi kar sakte.\n\n```sql\nCALL GetHighSalaryEmployees(50000);   -- procedure: manual\nUPDATE Employees SET Salary = 60000 WHERE EmpID = 1;  -- trigger fires by itself\n```",
    "question_en": "What is the difference between a Trigger and a Stored Procedure?",
    "answer_en": "A stored procedure is called explicitly using CALL and can accept parameters and return results. A trigger fires automatically on a table event (INSERT, UPDATE, DELETE) and takes no parameters — it only works with OLD and NEW row values. Use stored procedures for reusable business logic called on demand; use triggers for automated auditing or validation that should always happen on data changes.\n\n```sql\nCALL GetHighSalaryEmployees(50000);   -- procedure: manual\nUPDATE Employees SET Salary = 60000 WHERE EmpID = 1;  -- trigger fires by itself\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "73",
    "category": "13. Set Operations & DISTINCT (73–75)",
    "question_hi": "UNION use karne ke rules kya hain?",
    "answer_hi": "UNION ya UNION ALL mein har SELECT ke columns ki sankhya barabar honi chahiye, aur unke datatypes compatible hone chahiye.\nColumn ke naam pehli query se liye jate hain. ORDER BY sirf poore result ke end mein ek baar lagta hai. Rules todne par error aata hai.\n\n```sql\nSELECT name, city FROM students\nUNION\nSELECT name, city FROM teachers\nORDER BY name;       -- once, at the end\n```",
    "question_en": "What are the rules for using UNION?",
    "answer_en": "UNION requires both SELECT statements to have the same number of columns with compatible types. Column names come from the first SELECT. ORDER BY can only appear once at the very end of the entire UNION. UNION removes duplicates; UNION ALL keeps all rows and is faster. Mismatched column counts or types cause an error.\n\n```sql\nSELECT name, city FROM students\nUNION\nSELECT name, city FROM teachers\nORDER BY name;       -- once, at the end\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "74",
    "category": "13. Set Operations & DISTINCT (73–75)",
    "question_hi": "Do tables ke common records kaise dhoondhte hain?",
    "answer_hi": "MySQL 8.0.31 se INTERSECT supported hai, jo dono results ki common rows deta hai.\nPurane versions mein INNER JOIN ya IN subquery se same kaam karte hain. INNER JOIN mein match column par join karte hain, IN mein ek table ke values doosri ke andar check karte hain.\n\n```sql\n-- Method 1: INNER JOIN\nSELECT e.EmpID FROM Employees e\nINNER JOIN Contractors c ON e.EmpID = c.ContractorID;\n-- Method 2: IN\nSELECT EmpID FROM Employees WHERE EmpID IN (SELECT ContractorID FROM Contractors);\n-- Method 3 (8.0.31+)\nSELECT EmpID FROM Employees INTERSECT SELECT ContractorID FROM Contractors;\n```",
    "question_en": "How do you find common records between two tables?",
    "answer_en": "To find common records between two tables, use an INNER JOIN on the matching column — only rows with a match in both tables appear. Alternatively, use an IN subquery: SELECT id FROM TableA WHERE id IN (SELECT id FROM TableB). MySQL 8.0.31+ also supports INTERSECT directly. For finding records in one table but NOT the other, use NOT EXISTS or a LEFT JOIN with IS NULL.\n\n```sql\n-- Method 1: INNER JOIN\nSELECT e.EmpID FROM Employees e\nINNER JOIN Contractors c ON e.EmpID = c.ContractorID;\n-- Method 2: IN\nSELECT EmpID FROM Employees WHERE EmpID IN (SELECT ContractorID FROM Contractors);\n-- Method 3 (8.0.31+)\nSELECT EmpID FROM Employees INTERSECT SELECT ContractorID FROM Contractors;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "75",
    "category": "13. Set Operations & DISTINCT (73–75)",
    "question_hi": "Table se unique records kaise fetch karte hain?",
    "answer_hi": "Do tarike hain: SELECT DISTINCT, ya GROUP BY. Dono duplicates hata kar unique values dete hain.\nSimple cases mein DISTINCT zyada readable hai. Agar saath mein aggregate (COUNT jaise) chahiye to GROUP BY use karte hain.\n\n```sql\nSELECT DISTINCT Department FROM Employees;\nSELECT Department FROM Employees GROUP BY Department;\nSELECT Department, COUNT(*) FROM Employees GROUP BY Department;\n```",
    "question_en": "How do you fetch unique records from a table?",
    "answer_en": "To get unique records, use SELECT DISTINCT or GROUP BY. DISTINCT is simpler and more readable for just deduplication. GROUP BY is better when you also need aggregation — like counting rows per unique value. Both work similarly in terms of performance on indexed columns. DISTINCT is the cleaner choice when you only need unique values with no summary calculations.\n\n```sql\nSELECT DISTINCT Department FROM Employees;\nSELECT Department FROM Employees GROUP BY Department;\nSELECT Department, COUNT(*) FROM Employees GROUP BY Department;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "76",
    "category": "14. Practical Query Writing (76–83)",
    "question_hi": "Second highest salary nikalne ki query likho.",
    "answer_hi": "Sabse simple tarika: max salary se chhoti salaries mein se max lo, subquery se.\nNth highest ke liye DENSE_RANK window function best hai (MySQL 8+), ye ties sahi handle karta hai. LIMIT 1 OFFSET 1 tab galat ho sakta hai jab top salary ke duplicates hon, kyunki wo values nahi rows ko rank karta hai.\nEdge case: sab salary same ho ya ek hi employee ho to subquery wala NULL deta hai.\n\n```sql\n-- 1) Subquery\nSELECT MAX(Salary) FROM Employees\nWHERE Salary < (SELECT MAX(Salary) FROM Employees);\n-- 2) Window function\nSELECT DISTINCT Salary FROM (\n  SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS rnk FROM Employees\n) t WHERE rnk = 2;\n-- 3) LIMIT/OFFSET (fails on ties)\nSELECT Salary FROM Employees ORDER BY Salary DESC LIMIT 1 OFFSET 1;\n```",
    "question_en": "Write a query to find the second highest salary.",
    "answer_en": "The simplest approach: SELECT MAX(Salary) FROM Employees WHERE Salary < (SELECT MAX(Salary) FROM Employees). The best approach for interviews uses DENSE_RANK: assign DENSE_RANK() OVER (ORDER BY Salary DESC) to each row, then filter for rank = 2. Use DENSE_RANK, not ROW_NUMBER, because it handles ties correctly — multiple employees sharing the top salary all get rank 1, so rank 2 is the actual second-highest value.\n\n```sql\n-- 1) Subquery\nSELECT MAX(Salary) FROM Employees\nWHERE Salary < (SELECT MAX(Salary) FROM Employees);\n-- 2) Window function\nSELECT DISTINCT Salary FROM (\n  SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS rnk FROM Employees\n) t WHERE rnk = 2;\n-- 3) LIMIT/OFFSET (fails on ties)\nSELECT Salary FROM Employees ORDER BY Salary DESC LIMIT 1 OFFSET 1;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "77",
    "category": "14. Practical Query Writing (76–83)",
    "question_hi": "Duplicate records dhoondhne ki query likho.",
    "answer_hi": "Jis column mein duplicate dekhna hai us par GROUP BY lagao aur HAVING COUNT(*) > 1 lagao, isse duplicate values aur unki ginti milti hai.\nPoori duplicate rows dekhni ho to EXISTS ke saath self-comparison karte hain, jisme same email ho lekin id alag ho.\n\n```sql\nSELECT Email, COUNT(*) AS DuplicateCount\nFROM Employees\nGROUP BY Email\nHAVING COUNT(*) > 1;\n\n-- full duplicate rows\nSELECT e1.* FROM Employees e1\nWHERE EXISTS (\n  SELECT 1 FROM Employees e2\n  WHERE e1.Email = e2.Email AND e1.EmpID <> e2.EmpID\n);\n```",
    "question_en": "Write a query to find duplicate records.",
    "answer_en": "GROUP BY the duplicate column and add HAVING COUNT(*) > 1 to find which values appear more than once. To see the full duplicate rows, use EXISTS with a self-comparison: find rows where another row exists with the same email but a different ID. In MySQL 8+, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) is the cleanest approach — select rows where the row number is greater than 1.\n\n```sql\nSELECT Email, COUNT(*) AS DuplicateCount\nFROM Employees\nGROUP BY Email\nHAVING COUNT(*) > 1;\n\n-- full duplicate rows\nSELECT e1.* FROM Employees e1\nWHERE EXISTS (\n  SELECT 1 FROM Employees e2\n  WHERE e1.Email = e2.Email AND e1.EmpID <> e2.EmpID\n);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "78",
    "category": "14. Practical Query Writing (76–83)",
    "question_hi": "Department ki average se zyada salary wale employees ki query likho.",
    "answer_hi": "Ye correlated subquery ka classic sawal hai. Inner query har employee ke department ki average salary nikalti hai, aur outer query check karti hai ki employee ki salary usse zyada hai ya nahi.\nBade data par same kaam window function AVG() OVER (PARTITION BY DeptID) se bhi kar sakte hain, jo aksar fast hota hai.\n\n```sql\nSELECT e.EmpName, e.Salary, e.DeptID\nFROM Employees e\nWHERE e.Salary > (SELECT AVG(Salary) FROM Employees WHERE DeptID = e.DeptID);\n```",
    "question_en": "Write a query to find employees earning more than their department average.",
    "answer_en": "Use a correlated subquery: for each employee, the inner query finds the average salary of employees in that same department, and the outer WHERE checks if the current employee earns more. It's correlated because the inner query references the outer query's department. On large tables, a window function is faster: AVG(Salary) OVER (PARTITION BY DeptID) computes all department averages in one pass.\n\n```sql\nSELECT e.EmpName, e.Salary, e.DeptID\nFROM Employees e\nWHERE e.Salary > (SELECT AVG(Salary) FROM Employees WHERE DeptID = e.DeptID);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "79",
    "category": "14. Practical Query Writing (76–83)",
    "question_hi": "Har department ka top earner nikalne ki query likho.",
    "answer_hi": "MySQL 8 mein ROW_NUMBER() OVER (PARTITION BY DeptID ORDER BY Salary DESC) lagate hain, jisse har department mein rank 1 wala employee milta hai.\nAgar top salary par ties bhi chahiye to ROW_NUMBER ki jagah RANK ya DENSE_RANK use karo. Bina window function ke, MAX salary wala correlated subquery bhi chalta hai.\n\n```sql\nSELECT EmpName, DeptID, Salary FROM (\n  SELECT EmpName, DeptID, Salary,\n         ROW_NUMBER() OVER (PARTITION BY DeptID ORDER BY Salary DESC) AS rn\n  FROM Employees\n) t WHERE rn = 1;\n```",
    "question_en": "Write a query to find the top earner per department.",
    "answer_en": "Use ROW_NUMBER() OVER (PARTITION BY DeptID ORDER BY Salary DESC) to rank employees within each department by salary. Filter for rn = 1 to get the top earner per department. If multiple employees share the top salary and you want all of them, use RANK() or DENSE_RANK() instead of ROW_NUMBER — those assign the same rank number to ties.\n\n```sql\nSELECT EmpName, DeptID, Salary FROM (\n  SELECT EmpName, DeptID, Salary,\n         ROW_NUMBER() OVER (PARTITION BY DeptID ORDER BY Salary DESC) AS rn\n  FROM Employees\n) t WHERE rn = 1;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "80",
    "category": "14. Practical Query Writing (76–83)",
    "question_hi": "Total order amount ke hisaab se top 5 customers ki query likho.",
    "answer_hi": "Customers aur Orders ko JOIN karo, customer ke hisaab se GROUP BY karke SUM(OrderAmount) nikalo, total ko DESC sort karo aur LIMIT 5 lagao.\nGROUP BY mein CustomerID ke saath name bhi rakho. Jinhone order nahi kiya unhe bhi dekhna ho to LEFT JOIN use karo.\n\n```sql\nSELECT c.CustomerID, c.CustomerName, SUM(o.OrderAmount) AS TotalAmount\nFROM Customers c\nJOIN Orders o ON c.CustomerID = o.CustomerID\nGROUP BY c.CustomerID, c.CustomerName\nORDER BY TotalAmount DESC\nLIMIT 5;\n```",
    "question_en": "Write a query to find the top 5 customers by total order amount.",
    "answer_en": "JOIN Customers and Orders on CustomerID, GROUP BY each customer, compute SUM(OrderAmount) as total, sort by total DESC, and apply LIMIT 5. Include CustomerName in the GROUP BY to avoid strict mode errors. Use LEFT JOIN instead of INNER JOIN if you want to include customers who have placed no orders — they'll show with a NULL total.\n\n```sql\nSELECT c.CustomerID, c.CustomerName, SUM(o.OrderAmount) AS TotalAmount\nFROM Customers c\nJOIN Orders o ON c.CustomerID = o.CustomerID\nGROUP BY c.CustomerID, c.CustomerName\nORDER BY TotalAmount DESC\nLIMIT 5;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "81",
    "category": "14. Practical Query Writing (76–83)",
    "question_hi": "Jinhone koi order nahi diya ya jinka department nahi hai, unki query likho.",
    "answer_hi": "LEFT JOIN lagao aur WHERE mein doosri table ka key IS NULL check karo. LEFT JOIN non-matching rows ke liye right side NULL deta hai, wahi rows hume chahiye.\nSame kaam NOT EXISTS ya NOT IN se bhi ho sakta hai. NOT IN mein NULL values ho to result galat aa sakta hai, isliye NOT EXISTS safer hai.\n\n```sql\n-- No orders\nSELECT e.EmpName FROM Employees e\nLEFT JOIN Orders o ON e.EmpID = o.EmpID\nWHERE o.OrderID IS NULL;\n-- No department\nSELECT e.EmpName FROM Employees e\nLEFT JOIN Departments d ON e.DeptID = d.DeptID\nWHERE d.DeptID IS NULL;\n-- Safer alternative\nSELECT e.EmpName FROM Employees e\nWHERE NOT EXISTS (SELECT 1 FROM Orders o WHERE o.EmpID = e.EmpID);\n```",
    "question_en": "Write a query to find employees with no orders (or no department).",
    "answer_en": "Use a LEFT JOIN and filter WHERE the right table's key IS NULL — those NULLs identify unmatched rows. Alternatively, use NOT EXISTS with a correlated subquery. Avoid NOT IN if the subquery might return NULLs — when NULL is in the list, NOT IN returns UNKNOWN for all rows, producing an empty result. NOT EXISTS handles NULLs safely and is generally preferred.\n\n```sql\n-- No orders\nSELECT e.EmpName FROM Employees e\nLEFT JOIN Orders o ON e.EmpID = o.EmpID\nWHERE o.OrderID IS NULL;\n-- No department\nSELECT e.EmpName FROM Employees e\nLEFT JOIN Departments d ON e.DeptID = d.DeptID\nWHERE d.DeptID IS NULL;\n-- Safer alternative\nSELECT e.EmpName FROM Employees e\nWHERE NOT EXISTS (SELECT 1 FROM Orders o WHERE o.EmpID = e.EmpID);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "82",
    "category": "14. Practical Query Writing (76–83)",
    "question_hi": "Date ke hisaab se sales ka running total (cumulative sum) kaise nikalte hain?",
    "answer_hi": "MySQL 8 mein SUM(SalesAmount) OVER (ORDER BY SalesDate) se aasani se nikalta hai. Ye har row tak ka cumulative jod deta hai.\nPurane versions mein correlated subquery use hoti hai jo har row ke liye us date tak ka SUM nikalti hai, lekin wo slow hoti hai. Window function ka tarika recommended hai.\n\n```sql\n-- Window function (8.0+)\nSELECT SalesDate, SalesAmount,\n       SUM(SalesAmount) OVER (ORDER BY SalesDate) AS RunningTotal\nFROM Sales ORDER BY SalesDate;\n-- Correlated subquery (older versions)\nSELECT s1.SalesDate, s1.SalesAmount,\n       (SELECT SUM(SalesAmount) FROM Sales s2 WHERE s2.SalesDate <= s1.SalesDate) AS RunningTotal\nFROM Sales s1 ORDER BY s1.SalesDate;\n```",
    "question_en": "Write a query to calculate a running total of sales by date.",
    "answer_en": "In MySQL 8+, use SUM(SalesAmount) OVER (ORDER BY SalesDate) to compute a cumulative total up to each row. Add PARTITION BY if you want the total to reset per group (like per month). In older MySQL, you'd need a correlated subquery that sums all sales up to each date — correct but much slower. Always use the window function approach on MySQL 8+.\n\n```sql\n-- Window function (8.0+)\nSELECT SalesDate, SalesAmount,\n       SUM(SalesAmount) OVER (ORDER BY SalesDate) AS RunningTotal\nFROM Sales ORDER BY SalesDate;\n-- Correlated subquery (older versions)\nSELECT s1.SalesDate, s1.SalesAmount,\n       (SELECT SUM(SalesAmount) FROM Sales s2 WHERE s2.SalesDate <= s1.SalesDate) AS RunningTotal\nFROM Sales s1 ORDER BY s1.SalesDate;\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "83",
    "category": "14. Practical Query Writing (76–83)",
    "question_hi": "Consecutive months mein purchase karne wale customers ki query likho.",
    "answer_hi": "Pehle har customer ke distinct purchase months nikalo (month ki pehli tarikh ke roop mein). Phir LAG() se pichla month lo. Agar pichla month current month se theek 1 mahina pehle hai to customer consecutive hai.\nWindow function ka alias same level ki WHERE mein use nahi hota, isliye ise CTE ya subquery mein daalke filter karte hain.\n\n```sql\nWITH m AS (\n  SELECT DISTINCT CustomerID,\n         CAST(DATE_FORMAT(PurchaseDate, '%Y-%m-01') AS DATE) AS month_start\n  FROM Orders\n),\nx AS (\n  SELECT CustomerID, month_start,\n         LAG(month_start) OVER (PARTITION BY CustomerID ORDER BY month_start) AS prev_month\n  FROM m\n)\nSELECT DISTINCT CustomerID\nFROM x\nWHERE prev_month = DATE_SUB(month_start, INTERVAL 1 MONTH);\n```",
    "question_en": "Write a query to find customers who purchased in consecutive months.",
    "answer_en": "Normalize purchase dates to the first of each month, then use LAG(month_start) OVER (PARTITION BY CustomerID ORDER BY month_start) to get each customer's previous purchase month. If the previous month is exactly one month earlier (DATE_SUB(month_start, INTERVAL 1 MONTH)), those two months are consecutive. Wrap the LAG computation in a CTE because window function aliases can't be used in the same level's WHERE clause.\n\n```sql\nWITH m AS (\n  SELECT DISTINCT CustomerID,\n         CAST(DATE_FORMAT(PurchaseDate, '%Y-%m-01') AS DATE) AS month_start\n  FROM Orders\n),\nx AS (\n  SELECT CustomerID, month_start,\n         LAG(month_start) OVER (PARTITION BY CustomerID ORDER BY month_start) AS prev_month\n  FROM m\n)\nSELECT DISTINCT CustomerID\nFROM x\nWHERE prev_month = DATE_SUB(month_start, INTERVAL 1 MONTH);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "84",
    "category": "15. MySQL-Specific (84–90)",
    "question_hi": "MySQL ke key features kaun se hain?",
    "answer_hi": "MySQL open-source hai (free, paid enterprise edition bhi), cross-platform hai (Windows, Linux, macOS), aur terabytes tak ke bade databases handle karta hai.\nMultiple storage engines deta hai, InnoDB default hai. Security (users, privileges, SSL), replication, aur PHP, Python, Java, Node.js ke saath easy integration bhi milta hai.\n\n```sql\nSHOW ENGINES;                    -- multiple storage engines\nSHOW VARIABLES LIKE 'version';   -- server version\n```",
    "question_en": "What are the key features of MySQL?",
    "answer_en": "MySQL is the world's most popular open-source relational database. Key features: multiple storage engines with InnoDB as default (supports transactions, foreign keys, row-level locking), user privilege system for security, replication for high availability, and easy integration with every major language. It's free under GPL and is used by many of the world's largest web platforms.\n\n```sql\nSHOW ENGINES;                    -- multiple storage engines\nSHOW VARIABLES LIKE 'version';   -- server version\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "85",
    "category": "15. MySQL-Specific (84–90)",
    "question_hi": "Command line se MySQL se connect kaise karte hain?",
    "answer_hi": "Terminal mein mysql -u username -p likhte hain, phir password puchhta hai wo daalte hain. Root user ke liye mysql -u root -p.\nRemote server ke liye -h ke saath host dete hain, aur port alag ho to -P. Connect hone ke baad prompt mysql> dikhta hai jahan SQL commands likhte hain.\n\n```sql\nbash\nmysql -u root -p\nmysql -u username -p -h hostname\nmysql -u username -p -h hostname -P 3306 dbname\n```",
    "question_en": "How do you connect to MySQL from the command line?",
    "answer_en": "Connect using: mysql -u username -p. The -p flag prompts for your password securely. For root: mysql -u root -p. For a remote server: add -h hostname. For a non-default port: add -P port_number. You can also specify the database name as the last argument. Once connected, the mysql> prompt appears where you enter SQL statements ending with a semicolon.\n\n```sql\nbash\nmysql -u root -p\nmysql -u username -p -h hostname\nmysql -u username -p -h hostname -P 3306 dbname\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "86",
    "category": "15. MySQL-Specific (84–90)",
    "question_hi": "MySQL root user kya hota hai?",
    "answer_hi": "Root MySQL ka default superuser ya administrator account hai. Iske paas saare databases, tables aur admin commands par unlimited privileges hote hain.\nBest practice: root ko daily application connections ke liye use mat karo. Application ke liye alag user banao jisko sirf zaroori permissions mile (least privilege).\n\n```sql\nSELECT user, host FROM mysql.user;             -- list users\nSHOW GRANTS FOR 'root'@'localhost';            -- root has all privileges\n```",
    "question_en": "What is the MySQL root user?",
    "answer_en": "Root is MySQL's built-in superuser — it has complete, unrestricted access to all databases, users, and admin operations. Best practice: never use root for application database connections. Create a separate user with only the permissions the application actually needs — this is the principle of least privilege. If that account is compromised, the damage is limited.\n\n```sql\nSELECT user, host FROM mysql.user;             -- list users\nSHOW GRANTS FOR 'root'@'localhost';            -- root has all privileges\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "87",
    "category": "15. MySQL-Specific (84–90)",
    "question_hi": "InnoDB aur MyISAM storage engines mein kya difference hai?",
    "answer_hi": "InnoDB default engine hai, transactions (COMMIT/ROLLBACK), foreign keys, row-level locking aur crash recovery support karta hai, ACID compliant hai. Zyadatar applications ke liye yahi use hota hai.\nMyISAM mein transactions aur foreign keys nahi hote, table-level locking hoti hai, crash mein corrupt ho sakta hai. Ye purana hai aur mainly read-heavy legacy kaam mein dikhta hai.\n\n```sql\nCREATE TABLE t1 (id INT) ENGINE = InnoDB;\nCREATE TABLE t2 (id INT) ENGINE = MyISAM;\nSHOW TABLE STATUS WHERE Name = 't1';   -- shows the engine\n```",
    "question_en": "What is the difference between InnoDB and MyISAM?",
    "answer_en": "InnoDB is MySQL's default engine and is ACID-compliant — it supports transactions, foreign keys, row-level locking, and crash recovery. MyISAM is the older engine with no transaction support, no foreign keys, table-level locking (blocks all concurrent access during a write), and no crash recovery. In any modern application that needs data integrity or concurrency, InnoDB is the correct choice.\n\n```sql\nCREATE TABLE t1 (id INT) ENGINE = InnoDB;\nCREATE TABLE t2 (id INT) ENGINE = MyISAM;\nSHOW TABLE STATUS WHERE Name = 't1';   -- shows the engine\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "88",
    "category": "15. MySQL-Specific (84–90)",
    "question_hi": "MySQL mein privileges ke types kaun se hain?",
    "answer_hi": "Privileges ke levels hote hain: Global (poora server), Database (ek database), Table (ek table), Column (ek column) aur Routine (procedure ya function).\nCommon privileges: SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, DROP, INDEX, GRANT aur ALL PRIVILEGES. Jitni zaroorat utni hi permission deni chahiye.\n\n```sql\nGRANT ALL ON *.* TO 'admin'@'localhost';                       -- global\nGRANT ALL ON mydb.* TO 'dev'@'localhost';                      -- database\nGRANT SELECT ON mydb.employees TO 'rep'@'localhost';           -- table\nGRANT UPDATE (salary) ON mydb.employees TO 'hr'@'localhost';   -- column\nGRANT EXECUTE ON PROCEDURE mydb.proc1 TO 'app'@'localhost';    -- routine\n```",
    "question_en": "What are the types of privileges in MySQL?",
    "answer_en": "MySQL privileges are hierarchical. Global (ON *.*) applies to the whole server. Database-level (ON dbname.*) applies to one database. Table-level applies to one table. Column-level restricts to specific columns. Routine-level (EXECUTE) allows calling stored procedures without direct table access. Common privileges include SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, DROP, and GRANT OPTION.\n\n```sql\nGRANT ALL ON *.* TO 'admin'@'localhost';                       -- global\nGRANT ALL ON mydb.* TO 'dev'@'localhost';                      -- database\nGRANT SELECT ON mydb.employees TO 'rep'@'localhost';           -- table\nGRANT UPDATE (salary) ON mydb.employees TO 'hr'@'localhost';   -- column\nGRANT EXECUTE ON PROCEDURE mydb.proc1 TO 'app'@'localhost';    -- routine\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "89",
    "category": "15. MySQL-Specific (84–90)",
    "question_hi": "MySQL mein naya user kaise banate hain aur privileges kaise dete hain?",
    "answer_hi": "Pehle CREATE USER se user banate hain password ke saath, phir GRANT se privileges dete hain. FLUSH PRIVILEGES optional hai, GRANT ke baad aksar zaroori nahi hota.\nPrivileges wapas lene ke liye REVOKE aur user hataane ke liye DROP USER. Hamesha specific database ya table par limited permission do.\n\n```sql\nCREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password123';\nGRANT SELECT, INSERT, UPDATE ON mydb.employees TO 'newuser'@'localhost';\nFLUSH PRIVILEGES;\nREVOKE DELETE ON mydb.employees FROM 'newuser'@'localhost';\nDROP USER 'newuser'@'localhost';\n```",
    "question_en": "How do you create a new user and grant privileges in MySQL?",
    "answer_en": "First create the account: CREATE USER 'username'@'localhost' IDENTIFIED BY 'password'. Use @'%' to allow connections from any host. Then assign permissions: GRANT SELECT, INSERT ON mydb.employees TO 'username'@'localhost'. To remove permissions: REVOKE. To delete the account: DROP USER. Always follow least privilege — only grant what the user actually needs.\n\n```sql\nCREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password123';\nGRANT SELECT, INSERT, UPDATE ON mydb.employees TO 'newuser'@'localhost';\nFLUSH PRIVILEGES;\nREVOKE DELETE ON mydb.employees FROM 'newuser'@'localhost';\nDROP USER 'newuser'@'localhost';\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "90",
    "category": "15. MySQL-Specific (84–90)",
    "question_hi": "MySQL mein user ka password kaise badalte hain?",
    "answer_hi": "MySQL 5.7.6+ aur 8.0 mein ALTER USER ... IDENTIFIED BY use karte hain, ye recommended tarika hai.\nPurana SET PASSWORD = PASSWORD('...') MySQL 8.0 mein hata diya gaya hai, isliye ab kaam nahi karta. Current user ka password badalne ke liye ALTER USER USER() likh sakte ho.\n\n```sql\nALTER USER 'username'@'localhost' IDENTIFIED BY 'newpassword';\nALTER USER USER() IDENTIFIED BY 'newpassword';   -- current user\n```",
    "question_en": "How do you change a user's password in MySQL?",
    "answer_en": "Change a user's password with: ALTER USER 'username'@'localhost' IDENTIFIED BY 'newpassword'. To change your own current session's password: ALTER USER USER() IDENTIFIED BY 'newpassword'. The old SET PASSWORD = PASSWORD('...') syntax was removed in MySQL 8.0, so don't use it. After changing, existing sessions still work — the new password applies only to new connections.\n\n```sql\nALTER USER 'username'@'localhost' IDENTIFIED BY 'newpassword';\nALTER USER USER() IDENTIFIED BY 'newpassword';   -- current user\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "91",
    "category": "16. Advanced / Scenario-Based (91–95)",
    "question_hi": "SQL Injection kya hai aur isse kaise bachein?",
    "answer_hi": "SQL Injection ek attack hai jisme hacker input field mein SQL code daal kar query badal deta hai, jisse wo data padh, badal ya delete kar sakta hai, ya login bypass kar sakta hai.\nSabse achha bachav: prepared statements (parameterized queries), jo input ko code nahi sirf data maante hain. Saath mein input validation, least-privilege DB user aur ORM use karo. Kabhi user input ko query string mein jodo mat.\n\n```sql\npython\n# BAD: user_input = \"' OR '1'='1\" breaks the query\nquery = \"SELECT * FROM Users WHERE Name = '\" + user_input + \"'\"\n\n# GOOD: parameterized query\ncursor.execute(\"SELECT * FROM Users WHERE Username = %s\", (user_input,))\n```",
    "question_en": "What is SQL Injection and how can you prevent it?",
    "answer_en": "SQL Injection is when user input is inserted directly into a SQL query string, allowing an attacker to modify the query's logic — potentially bypassing login, stealing all data, or deleting tables. The fix is parameterized queries (prepared statements), which treat user input as data, never as executable SQL code. Also use least-privilege DB accounts, input validation, and avoid concatenating user input into query strings.\n\n```sql\npython\n# BAD: user_input = \"' OR '1'='1\" breaks the query\nquery = \"SELECT * FROM Users WHERE Name = '\" + user_input + \"'\"\n\n# GOOD: parameterized query\ncursor.execute(\"SELECT * FROM Users WHERE Username = %s\", (user_input,))\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "92",
    "category": "16. Advanced / Scenario-Based (91–95)",
    "question_hi": "Normalization kya hai? Normal forms samjhao.",
    "answer_hi": "Normalization data ko chhoti related tables mein todne ka process hai taaki redundancy kam ho aur data integrity badhe.\n1NF: har cell mein ek hi value, koi repeating group nahi.\n2NF: 1NF ho aur koi non-key column composite key ke sirf ek hisse par depend na kare (partial dependency nahi).\n3NF: 2NF ho aur non-key column doosre non-key column par depend na kare (transitive dependency nahi).\n\n```sql\n-- Before (violates 1NF): courses = 'Maths,Science'\n-- After 1NF: one row per student-course\n-- After 3NF: department details moved to their own table\nCREATE TABLE departments (dept_id INT PRIMARY KEY, dept_name VARCHAR(50));\nCREATE TABLE employees (\n  emp_id INT PRIMARY KEY,\n  name VARCHAR(50),\n  dept_id INT,\n  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)\n);\n```",
    "question_en": "What is Normalization? Explain the normal forms.",
    "answer_en": "Normalization is the process of organizing a database to reduce redundancy and prevent data inconsistencies. 1NF: each column holds one atomic value, no repeating groups. 2NF: no partial dependency — every non-key column depends on the full primary key (relevant with composite keys). 3NF: no transitive dependency — non-key columns depend only on the primary key, not on other non-key columns. Most databases target 3NF.\n\n```sql\n-- Before (violates 1NF): courses = 'Maths,Science'\n-- After 1NF: one row per student-course\n-- After 3NF: department details moved to their own table\nCREATE TABLE departments (dept_id INT PRIMARY KEY, dept_name VARCHAR(50));\nCREATE TABLE employees (\n  emp_id INT PRIMARY KEY,\n  name VARCHAR(50),\n  dept_id INT,\n  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)\n);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "93",
    "category": "16. Advanced / Scenario-Based (91–95)",
    "question_hi": "Denormalization kya hai? Kab use karte hain?",
    "answer_hi": "Denormalization jaan-boojhkar normalized database mein redundancy wapas jodna hai, taaki read queries fast hon aur complex JOINs kam ho.\nYe read-heavy systems mein use hota hai, jaise reporting, analytics aur data warehouses. Trade-off: reads fast, lekin zyada storage aur data inconsistency ka risk, kyunki update kai jagah karna padta hai.\n\n```sql\n-- customer_name copied into the report table to avoid a JOIN\nCREATE TABLE order_report (\n  order_id INT,\n  customer_name VARCHAR(50),\n  total DECIMAL(10,2)\n);\n```",
    "question_en": "What is Denormalization? When would you use it?",
    "answer_en": "Denormalization is intentionally adding redundancy to a database to improve read performance. Where normalization splits data to avoid duplication, denormalization merges data to avoid expensive JOINs. It makes sense for read-heavy analytical systems and data warehouses. The trade-off: faster reads but more storage, and updates must be made in multiple places — risking inconsistency if not managed carefully.\n\n```sql\n-- customer_name copied into the report table to avoid a JOIN\nCREATE TABLE order_report (\n  order_id INT,\n  customer_name VARCHAR(50),\n  total DECIMAL(10,2)\n);\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "94",
    "category": "16. Advanced / Scenario-Based (91–95)",
    "question_hi": "MySQL mein EXPLAIN command kya hai aur kaise use hoti hai?",
    "answer_hi": "EXPLAIN query se pehle likhne par batata hai ki MySQL use kaise execute karega: kaunsa index use hoga, kitni rows scan hongi aur tables kis order mein join honge.\nDekhne wali cheezein: type (ALL matlab full table scan, kharab), key (kaunsa index use hua), rows, aur Extra (Using filesort ya Using temporary matlab optimization ki gunjaish).\n\n```sql\nEXPLAIN SELECT * FROM Employees WHERE LastName = 'Smith';\n-- type = ALL  -> full scan, add an index\nCREATE INDEX idx_lastname ON Employees(LastName);\nEXPLAIN SELECT * FROM Employees WHERE LastName = 'Smith';   -- type = ref\n```",
    "question_en": "What is the EXPLAIN command in MySQL and how is it used?",
    "answer_en": "EXPLAIN shows MySQL's execution plan for a query without running it. The key columns to check: type (ALL = full scan, bad; ref/range/const = good), key (which index is used — NULL means none), and rows (estimated rows scanned — lower is better). Extra shows things like 'Using filesort' or 'Using temporary', which indicate extra operations. Run EXPLAIN on any slow query to diagnose performance issues.\n\n```sql\nEXPLAIN SELECT * FROM Employees WHERE LastName = 'Smith';\n-- type = ALL  -> full scan, add an index\nCREATE INDEX idx_lastname ON Employees(LastName);\nEXPLAIN SELECT * FROM Employees WHERE LastName = 'Smith';   -- type = ref\n```",
    "source": "doc",
    "topic": "sql"
  },
  {
    "num": "95",
    "category": "16. Advanced / Scenario-Based (91–95)",
    "question_hi": "Nth highest salary kaise nikalte hain?",
    "answer_hi": "Sabse best tarika DENSE_RANK window function hai (MySQL 8+): salary ko descending order mein rank do aur rnk = N wali distinct salary lo. Ye ties sahi handle karta hai.\nLIMIT 1 OFFSET N-1 bhi chalta hai lekin duplicate salaries par galat ho sakta hai. Purane versions mein correlated subquery se ye kaam hota hai.\n\n```sql\n-- DENSE_RANK (best), here N = 3\nSELECT DISTINCT Salary FROM (\n  SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS rnk FROM Employees\n) t WHERE rnk = 3;\n-- LIMIT/OFFSET (fails with ties)\nSELECT DISTINCT Salary FROM Employees ORDER BY Salary DESC LIMIT 1 OFFSET 2;\n-- Correlated subquery (works everywhere), Nth = 3\nSELECT DISTINCT e1.Salary FROM Employees e1\nWHERE 2 = (SELECT COUNT(DISTINCT e2.Salary) FROM Employees e2 WHERE e2.Salary > e1.Salary);\n```",
    "question_en": "How do you find the Nth highest salary?",
    "answer_en": "Use DENSE_RANK() OVER (ORDER BY Salary DESC) to rank salaries, then filter WHERE rank = N. DENSE_RANK correctly handles ties — employees sharing the same salary get the same rank, so the Nth distinct salary value always gets rank N. ROW_NUMBER and LIMIT/OFFSET fail with duplicate values at the boundaries. Edge case: if fewer than N distinct salary values exist, the query should return NULL.\n\n```sql\n-- DENSE_RANK (best), here N = 3\nSELECT DISTINCT Salary FROM (\n  SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS rnk FROM Employees\n) t WHERE rnk = 3;\n-- LIMIT/OFFSET (fails with ties)\nSELECT DISTINCT Salary FROM Employees ORDER BY Salary DESC LIMIT 1 OFFSET 2;\n-- Correlated subquery (works everywhere), Nth = 3\nSELECT DISTINCT e1.Salary FROM Employees e1\nWHERE 2 = (SELECT COUNT(DISTINCT e2.Salary) FROM Employees e2 WHERE e2.Salary > e1.Salary);\n```",
    "source": "doc",
    "topic": "sql"
  }
];
