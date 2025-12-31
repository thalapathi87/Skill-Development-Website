import React from 'react';
import { HelpCircle, CheckCircle2, MessageSquareText } from 'lucide-react';

const SqlInterviewQA = () => {
 const faqs = [
{
  q: "What is SQL?",
  a: "1. SQL stands for Structured Query Language.\n2. It is used to work with databases.\n3. SQL helps to store data.\n4. SQL helps to retrieve data.\n5. SQL helps to update data.\n6. SQL works with relational databases.\n7. Database kitta pesara language dhaan SQL."
},
{
  q: "What is a Database?",
  a: "1. A database is a collection of data.\n2. Data is stored in an organized way.\n3. Databases allow fast data access.\n4. Databases store large amounts of data.\n5. Data can be updated easily.\n6. Databases are used in applications.\n7. Data store pannra place dhaan database."
},
{
  q: "What is DBMS?",
  a: "1. DBMS stands for Database Management System.\n2. It manages databases.\n3. It controls data access.\n4. It provides security.\n5. It handles backup and recovery.\n6. It manages multiple users.\n7. Database manage pannradhu DBMS."
},
{
  q: "What is RDBMS?",
  a: "1. RDBMS stands for Relational DBMS.\n2. Data is stored in tables.\n3. Tables have rows and columns.\n4. Tables are related using keys.\n5. It follows relational model.\n6. It is more secure than DBMS.\n7. Table base panna DB dhaan RDBMS."
},
{
  q: "Difference between DBMS and RDBMS?",
  a: "1. DBMS stores data as files.\n2. RDBMS stores data as tables.\n3. DBMS has no relations.\n4. RDBMS supports relations.\n5. DBMS is less secure.\n6. RDBMS is more secure.\n7. Relation irundha RDBMS."
},

{
  q: "What is a table?",
  a: "1. Table stores data in rows and columns.\n2. It represents an entity.\n3. Rows store records.\n4. Columns store attributes.\n5. Tables are part of database.\n6. Tables are easy to query.\n7. Row–column format dhaan table."
},
{
  q: "What is a row?",
  a: "1. Row is a single record.\n2. It represents one entry.\n3. Row contains column values.\n4. Each row is unique.\n5. Rows are horizontal.\n6. Rows store actual data.\n7. Single record dhaan row."
},
{
  q: "What is a column?",
  a: "1. Column represents an attribute.\n2. Column stores same type of data.\n3. Columns are vertical.\n4. Columns have data types.\n5. Columns define structure.\n6. Columns can have constraints.\n7. Attribute dhaan column."
},
{
  q: "What is a schema?",
  a: "1. Schema defines database structure.\n2. It organizes tables.\n3. It helps manage objects.\n4. It improves security.\n5. Schema is logical.\n6. One database can have many schemas.\n7. Database structure dhaan schema."
},
{
  q: "What is a SQL query?",
  a: "1. SQL query is a command.\n2. It is sent to database.\n3. It fetches data.\n4. It modifies data.\n5. It follows SQL syntax.\n6. Query returns result.\n7. Database kitta kekra question."
},

{
  q: "What are SQL command types?",
  a: "1. SQL has different command types.\n2. DDL defines structure.\n3. DML manipulates data.\n4. DQL fetches data.\n5. DCL controls access.\n6. TCL manages transactions.\n7. SQL commands type irukku."
},
{
  q: "What is DDL?",
  a: "1. DDL means Data Definition Language.\n2. It defines database structure.\n3. CREATE is a DDL command.\n4. ALTER is a DDL command.\n5. DROP is a DDL command.\n6. It changes schema.\n7. Structure create panna DDL."
},
{
  q: "What is DML?",
  a: "1. DML means Data Manipulation Language.\n2. It inserts data.\n3. It updates data.\n4. It deletes data.\n5. It works on rows.\n6. It needs commit.\n7. Data change panna DML."
},
{
  q: "What is DQL?",
  a: "1. DQL means Data Query Language.\n2. It is used to fetch data.\n3. SELECT is DQL command.\n4. It does not change data.\n5. It is read-only.\n6. It returns result set.\n7. Data fetch panna DQL."
},
{
  q: "What is DCL?",
  a: "1. DCL means Data Control Language.\n2. It controls permissions.\n3. GRANT is a DCL command.\n4. REVOKE is a DCL command.\n5. It manages users.\n6. It improves security.\n7. Permission control panna DCL."
},

{
  q: "What is TCL?",
  a: "1. TCL means Transaction Control Language.\n2. It manages transactions.\n3. COMMIT saves changes.\n4. ROLLBACK cancels changes.\n5. SAVEPOINT creates checkpoint.\n6. Used with DML.\n7. Transaction control panna TCL."
},
{
  q: "What is CREATE command?",
  a: "1. CREATE creates objects.\n2. It creates tables.\n3. It creates databases.\n4. It defines columns.\n5. It defines data types.\n6. It is DDL command.\n7. New object create panna."
},
{
  q: "What is ALTER command?",
  a: "1. ALTER modifies table structure.\n2. It adds columns.\n3. It removes columns.\n4. It changes data types.\n5. It does not delete data.\n6. It is DDL command.\n7. Structure change panna."
},
{
  q: "What is DROP command?",
  a: "1. DROP deletes objects.\n2. It deletes tables.\n3. It deletes databases.\n4. Data is removed permanently.\n5. Structure is removed.\n6. It is DDL command.\n7. Full delete pannradhu."
},

{
  q: "What is TRUNCATE?",
  a: "1. TRUNCATE removes all rows from a table.\n2. It keeps the table structure.\n3. It is faster than DELETE.\n4. It does not support WHERE clause.\n5. It cannot be rolled back normally.\n6. It is a DDL command.\n7. Full table clean pannradhu TRUNCATE."
},
{
  q: "What is DELETE?",
  a: "1. DELETE removes rows from a table.\n2. It supports WHERE condition.\n3. It can remove selected rows.\n4. It can be rolled back.\n5. It is a DML command.\n6. Table structure remains.\n7. Condition base panni delete pannradhu."
},
{
  q: "Difference between DELETE and TRUNCATE?",
  a: "1. DELETE removes selected rows.\n2. TRUNCATE removes all rows.\n3. DELETE supports WHERE.\n4. TRUNCATE does not support WHERE.\n5. DELETE is slower.\n6. TRUNCATE is faster.\n7. Selective vs full delete dhaan difference."
},
{
  q: "What is Primary Key?",
  a: "1. Primary key uniquely identifies a row.\n2. It cannot have NULL values.\n3. Only one primary key per table.\n4. Ensures data uniqueness.\n5. Automatically indexed.\n6. Improves performance.\n7. Unique row identify panna primary key."
},
{
  q: "What is Foreign Key?",
  a: "1. Foreign key links two tables.\n2. It refers to primary key.\n3. Maintains relationship.\n4. Can have duplicate values.\n5. Can have NULL values.\n6. Ensures referential integrity.\n7. Table connect panna foreign key."
},
{
  q: "What is Unique Key?",
  a: "1. Unique key ensures uniqueness.\n2. It allows one NULL value.\n3. Multiple unique keys allowed.\n4. Prevents duplicate data.\n5. Used for validation.\n6. Automatically indexed.\n7. Duplicate avoid panna unique key."
},
{
  q: "What is NOT NULL constraint?",
  a: "1. Prevents NULL values.\n2. Ensures data presence.\n3. Applied on columns.\n4. Improves data quality.\n5. Mandatory value required.\n6. Column level constraint.\n7. Empty value allow pannadhu illa."
},
{
  q: "What is CHECK constraint?",
  a: "1. CHECK validates column values.\n2. It enforces conditions.\n3. Prevents invalid data.\n4. Used in table definition.\n5. Improves accuracy.\n6. Works on logical rules.\n7. Condition base panni restrict pannradhu."
},
{
  q: "What is DEFAULT constraint?",
  a: "1. DEFAULT gives default value.\n2. Used when no value provided.\n3. Applied to columns.\n4. Improves consistency.\n5. Reduces NULL values.\n6. Automatic assignment.\n7. Value kudukkala na auto set pannum."
},
{
  q: "What is Index?",
  a: "1. Index improves query speed.\n2. Works like book index.\n3. Created on columns.\n4. Speeds up SELECT queries.\n5. Uses extra memory.\n6. Slows INSERT slightly.\n7. Search fast panna index."
},
{
  q: "What is View?",
  a: "1. View is a virtual table.\n2. It is based on SELECT query.\n3. It does not store data.\n4. Simplifies complex queries.\n5. Improves security.\n6. Used in reporting.\n7. Temporary table maadhiri view."
},
{
  q: "What is Join?",
  a: "1. Join combines data from tables.\n2. Uses related columns.\n3. Works with SELECT.\n4. Used in multi-table queries.\n5. Improves data analysis.\n6. Core SQL concept.\n7. Table connect pannradhu join."
},
{
  q: "What is INNER JOIN?",
  a: "1. INNER JOIN returns matching rows.\n2. Common data only returned.\n3. Non-matching rows ignored.\n4. Most commonly used join.\n5. Uses ON condition.\n6. Efficient join.\n7. Match aana data mattum."
},
{
  q: "What is LEFT JOIN?",
  a: "1. LEFT JOIN returns all left rows.\n2. Matching right rows included.\n3. Unmatched rows show NULL.\n4. Order matters.\n5. Used for optional data.\n6. Outer join.\n7. Left table full varum."
},
{
  q: "What is RIGHT JOIN?",
  a: "1. RIGHT JOIN returns all right rows.\n2. Matching left rows included.\n3. Unmatched left rows show NULL.\n4. Similar to LEFT JOIN.\n5. Less commonly used.\n6. Outer join.\n7. Right table full varum."
},
{
  q: "What is FULL JOIN?",
  a: "1. FULL JOIN returns all rows.\n2. Includes matching and non-matching.\n3. Combines LEFT and RIGHT join.\n4. NULLs for missing data.\n5. Not supported in MySQL directly.\n6. Used in analysis.\n7. Rendu table full varum."
},
{
  q: "What is GROUP BY?",
  a: "1. GROUP BY groups rows.\n2. Used with aggregate functions.\n3. Groups based on column.\n4. Reduces result rows.\n5. Used in reports.\n6. Comes before HAVING.\n7. Group pannradhu GROUP BY."
},
{
  q: "What is HAVING clause?",
  a: "1. HAVING filters grouped data.\n2. Used after GROUP BY.\n3. Works on aggregates.\n4. Similar to WHERE.\n5. Used in summary reports.\n6. Mandatory with GROUP BY.\n7. Group result filter pannradhu."
},
{
  q: "Difference between WHERE and HAVING?",
  a: "1. WHERE filters rows.\n2. HAVING filters groups.\n3. WHERE used before GROUP BY.\n4. HAVING used after GROUP BY.\n5. WHERE cannot use aggregates.\n6. HAVING uses aggregates.\n7. Row vs group difference."
},
{
  q: "What are Aggregate Functions?",
  a: "1. Aggregate functions work on multiple rows.\n2. COUNT counts rows.\n3. SUM adds values.\n4. AVG gives average.\n5. MIN finds minimum.\n6. MAX finds maximum.\n7. Group calculation panna functions."
},
{
  q: "What is Subquery?",
  a: "1. Subquery is query inside query.\n2. Executed first.\n3. Used in WHERE clause.\n4. Returns value to main query.\n5. Improves logic.\n6. Can be nested.\n7. Query kulla query."
},
{
  q: "What is Transaction?",
  a: "1. Transaction is group of operations.\n2. All operations succeed or fail.\n3. Ensures data consistency.\n4. Uses COMMIT.\n5. Uses ROLLBACK.\n6. Important in banking.\n7. All or nothing concept."
},
{
  q: "What is COMMIT?",
  a: "1. COMMIT saves changes.\n2. Makes transaction permanent.\n3. Ends transaction.\n4. Used after success.\n5. Data cannot be rolled back.\n6. Transaction control.\n7. Change fix pannradhu."
},
{
  q: "What is ROLLBACK?",
  a: "1. ROLLBACK cancels changes.\n2. Used on failure.\n3. Restores old data.\n4. Ends transaction.\n5. Ensures safety.\n6. Transaction control.\n7. Fail aana thirumba po."
},
{
  q: "What are ACID properties?",
  a: "1. Atomicity ensures all or none.\n2. Consistency maintains rules.\n3. Isolation handles concurrency.\n4. Durability saves data.\n5. Ensures transaction safety.\n6. Core DB principle.\n7. Transaction rules dhaan ACID."
},
{
  q: "What is Normalization?",
  a: "1. Normalization organizes data.\n2. Removes duplication.\n3. Improves integrity.\n4. Splits tables.\n5. Uses normal forms.\n6. Improves design.\n7. Duplicate remove panna normalization."
},
{
  q: "What is Denormalization?",
  a: "1. Denormalization adds redundancy.\n2. Improves read performance.\n3. Reduces joins.\n4. Used in reporting.\n5. Opposite of normalization.\n6. Design choice.\n7. Speed kaaga duplicate allow pannradhu."
},
{
  q: "What is SQL Injection?",
  a: "1. SQL Injection is security attack.\n2. Malicious SQL inserted.\n3. Can access data illegally.\n4. Dangerous vulnerability.\n5. Avoid using PreparedStatement.\n6. Validate inputs.\n7. SQL hack attempt."
},
{
  q: "Real-time use of SQL?",
  a: "1. Used in login systems.\n2. Used in banking apps.\n3. Used in e-commerce.\n4. Used in reports.\n5. Used in backend APIs.\n6. Used in data analysis.\n7. Real project la SQL full use."
}

];


 return (
    /* Responsive container with padding for mobile */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-in fade-in duration-500 pb-10">
      
      {/* HEADER SECTION */}
      <div className="border-b border-slate-200 pb-5 pt-6">
        <h1 className="text-2xl md:text-4xl font-black text-slate-800 flex items-center gap-3 tracking-tighter italic">
          <MessageSquareText className="text-cyan-500 shrink-0" size={32} />
          SQL Interview <span className="text-cyan-500">Q&A</span>
        </h1>
        <p className="text-slate-500 mt-2 text-sm md:text-base font-medium italic">
          Top 8 questions you must know for your technical round.
        </p>
      </div>

      {/* QUESTIONS GRID - Stacks on mobile */}
      <div className="grid gap-4 md:gap-6">
        {faqs.map((item, i) => (
          <div key={i} className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-cyan-500 hover:shadow-md transition-all group">
            
            {/* Question Line */}
            <h4 className="flex items-start gap-3 font-bold text-slate-900 mb-4 leading-relaxed text-sm md:text-base">
              <HelpCircle className="text-cyan-500 shrink-0 mt-1" size={20} />
              {item.q}
            </h4>
            
            {/* Answer Line - 1 line per answer as requested */}
            <div className="bg-slate-50 p-4 md:p-5 rounded-xl border-l-4 border-emerald-500 text-slate-600 text-[12px] md:text-sm leading-relaxed">
              <div className="flex gap-2 font-medium">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                <span>{item.a}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* FOOTER TIP */}
      <div className="mt-6 p-4 bg-cyan-50 rounded-xl border border-cyan-100 text-center">
        <p className="text-[11px] md:text-xs text-cyan-800 font-bold uppercase tracking-widest">
           Master these 8 lines to crack any SQL interview.
        </p>
      </div>

    </div>
  );
};
export default SqlInterviewQA;