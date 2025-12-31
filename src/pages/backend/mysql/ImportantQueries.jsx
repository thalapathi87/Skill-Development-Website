import React from 'react';
import { Terminal, Code, Star } from 'lucide-react';

const ImportantQueries = () => {
 const queries = [
  { title: "Find all records", sql: "SELECT * FROM employees;" },
  { title: "Select specific columns", sql: "SELECT name, salary FROM employees;" },
  { title: "Find distinct values", sql: "SELECT DISTINCT dept FROM employees;" },
  { title: "Count total rows", sql: "SELECT COUNT(*) FROM employees;" },
  { title: "Find max salary", sql: "SELECT MAX(salary) FROM employees;" },
  { title: "Find min salary", sql: "SELECT MIN(salary) FROM employees;" },
  { title: "Find average salary", sql: "SELECT AVG(salary) FROM employees;" },
  { title: "Find total salary", sql: "SELECT SUM(salary) FROM employees;" },
  { title: "Filter using WHERE", sql: "SELECT * FROM employees WHERE dept = 'IT';" },
  { title: "Salary greater than 50000", sql: "SELECT * FROM employees WHERE salary > 50000;" },

  { title: "Employees starting with A", sql: "SELECT * FROM employees WHERE name LIKE 'A%';" },
  { title: "Employees ending with n", sql: "SELECT * FROM employees WHERE name LIKE '%n';" },
  { title: "Employees containing a", sql: "SELECT * FROM employees WHERE name LIKE '%a%';" },
  { title: "Sort by salary ASC", sql: "SELECT * FROM employees ORDER BY salary ASC;" },
  { title: "Sort by salary DESC", sql: "SELECT * FROM employees ORDER BY salary DESC;" },
  { title: "Top 5 salaries", sql: "SELECT * FROM employees ORDER BY salary DESC LIMIT 5;" },
  { title: "Second highest salary", sql: "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);" },
  { title: "Nth highest salary", sql: "SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 2;" },
  { title: "Employees with NULL salary", sql: "SELECT * FROM employees WHERE salary IS NULL;" },
  { title: "Employees with NOT NULL salary", sql: "SELECT * FROM employees WHERE salary IS NOT NULL;" },

  { title: "Group by department", sql: "SELECT dept, COUNT(*) FROM employees GROUP BY dept;" },
  { title: "Department wise max salary", sql: "SELECT dept, MAX(salary) FROM employees GROUP BY dept;" },
  { title: "Department wise avg salary", sql: "SELECT dept, AVG(salary) FROM employees GROUP BY dept;" },
  { title: "Group by with HAVING", sql: "SELECT dept, COUNT(*) FROM employees GROUP BY dept HAVING COUNT(*) > 3;" },
  { title: "Find duplicate emails", sql: "SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;" },
  { title: "Delete duplicate rows", sql: "DELETE FROM users WHERE id NOT IN (SELECT MIN(id) FROM users GROUP BY email);" },
  { title: "Inner Join example", sql: "SELECT e.name, d.dept FROM employees e INNER JOIN department d ON e.dept_id = d.id;" },
  { title: "Left Join example", sql: "SELECT e.name, d.dept FROM employees e LEFT JOIN department d ON e.dept_id = d.id;" },
  { title: "Right Join example", sql: "SELECT e.name, d.dept FROM employees e RIGHT JOIN department d ON e.dept_id = d.id;" },
  { title: "Self Join example", sql: "SELECT e1.name, e2.name FROM employees e1, employees e2 WHERE e1.manager_id = e2.id;" },

  { title: "Create table", sql: "CREATE TABLE emp (id INT, name VARCHAR(50));" },
  { title: "Drop table", sql: "DROP TABLE emp;" },
  { title: "Truncate table", sql: "TRUNCATE TABLE emp;" },
  { title: "Alter add column", sql: "ALTER TABLE emp ADD salary INT;" },
  { title: "Alter drop column", sql: "ALTER TABLE emp DROP salary;" },
  { title: "Rename column", sql: "ALTER TABLE emp RENAME COLUMN name TO emp_name;" },
  { title: "Insert single row", sql: "INSERT INTO emp VALUES (1, 'Ram', 50000);" },
  { title: "Insert multiple rows", sql: "INSERT INTO emp VALUES (2,'Sam',60000),(3,'John',55000);" },
  { title: "Update salary", sql: "UPDATE emp SET salary = 70000 WHERE id = 1;" },
  { title: "Delete record", sql: "DELETE FROM emp WHERE id = 3;" },

  { title: "Between operator", sql: "SELECT * FROM emp WHERE salary BETWEEN 40000 AND 60000;" },
  { title: "IN operator", sql: "SELECT * FROM emp WHERE dept IN ('IT','HR');" },
  { title: "NOT IN operator", sql: "SELECT * FROM emp WHERE dept NOT IN ('IT');" },
  { title: "Exists example", sql: "SELECT * FROM emp e WHERE EXISTS (SELECT 1 FROM dept d WHERE d.id = e.dept_id);" },
  { title: "Subquery in WHERE", sql: "SELECT * FROM emp WHERE salary > (SELECT AVG(salary) FROM emp);" },
  { title: "Correlated subquery", sql: "SELECT * FROM emp e WHERE salary > (SELECT AVG(salary) FROM emp WHERE dept = e.dept);" },
  { title: "Create index", sql: "CREATE INDEX idx_salary ON emp(salary);" },
  { title: "Drop index", sql: "DROP INDEX idx_salary;" },
  { title: "View creation", sql: "CREATE VIEW emp_view AS SELECT name, salary FROM emp;" },
  { title: "Select from view", sql: "SELECT * FROM emp_view;" },

  { title: "Commit transaction", sql: "COMMIT;" },
  { title: "Rollback transaction", sql: "ROLLBACK;" },
  { title: "Savepoint example", sql: "SAVEPOINT sp1;" },
  { title: "Count with condition", sql: "SELECT COUNT(*) FROM emp WHERE dept='IT';" },
  { title: "Max salary per dept", sql: "SELECT dept, MAX(salary) FROM emp GROUP BY dept;" },
  { title: "Min salary per dept", sql: "SELECT dept, MIN(salary) FROM emp GROUP BY dept;" },
  { title: "Order by multiple columns", sql: "SELECT * FROM emp ORDER BY dept, salary DESC;" },
  { title: "Case statement", sql: "SELECT name, CASE WHEN salary>50000 THEN 'High' ELSE 'Low' END FROM emp;" },
  { title: "Union example", sql: "SELECT name FROM emp1 UNION SELECT name FROM emp2;" },
  { title: "Union all example", sql: "SELECT name FROM emp1 UNION ALL SELECT name FROM emp2;" },

  { title: "Find current date", sql: "SELECT CURRENT_DATE;" },
  { title: "Find current time", sql: "SELECT CURRENT_TIME;" },
  { title: "Find length of string", sql: "SELECT LENGTH(name) FROM emp;" },
  { title: "Convert to upper case", sql: "SELECT UPPER(name) FROM emp;" },
  { title: "Convert to lower case", sql: "SELECT LOWER(name) FROM emp;" },
  { title: "Substring example", sql: "SELECT SUBSTRING(name,1,3) FROM emp;" },
  { title: "Replace text", sql: "SELECT REPLACE(name,'a','@') FROM emp;" },
  { title: "Round salary", sql: "SELECT ROUND(salary, -3) FROM emp;" },
  { title: "Check table exists", sql: "SHOW TABLES;" },
  { title: "Describe table", sql: "DESC emp;" }
];


  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-black text-slate-800 border-l-8 border-emerald-500 pl-4">Important Queries</h2>
      <div className="grid gap-6">
        {queries.map((item, i) => (
          <div key={i} className="bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-800 group">
            <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2 italic">
              <Star size={16} className="fill-emerald-400"/> {item.title}
            </h4>
            <div className="bg-black/40 p-4 rounded-lg border border-slate-700/50">
              <code className="text-cyan-100 font-mono text-sm leading-relaxed block">
                {item.sql}
              </code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantQueries;