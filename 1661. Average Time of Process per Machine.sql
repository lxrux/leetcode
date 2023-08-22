# Write your MySQL query statement below
select a.machine_id, round(avg(a.timestamp - aj.timestamp),3) as processing_time
from Activity a
  inner join Activity aj on a.machine_id = aj.machine_id and a.process_id = aj.process_id and aj.activity_type = 'start' where a.activity_type = 'end'
group by a.machine_id
