select m.name
from Employee m 
  inner join Employee e on m.id = e.managerId
group by e.managerId
having count(e.id) >= 5
