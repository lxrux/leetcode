select d.name as Department,
    e.name as Employee,
    e.salary as Salary
from Employee e
    join Department d
    on e.departmentId = d.id
where e.salary in (select distinct top 3 t.salary from Employee t where t.departmentId = e.departmentId order by t.salary desc)
