select 
    firstName = p.firstName,
    lastName = p.lastName,
    city = a.city,
    state = a.state
from Person p
    left join Address a
    on p.personId = a.personId
