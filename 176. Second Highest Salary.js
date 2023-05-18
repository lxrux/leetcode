declare @sal int
select top 1 @sal = max(e.salary) 
from Employee e
where e.salary < (select max(t.salary) from Employee t)
group by e.salary
order by salary desc

select @sal as SecondHighestSalary
