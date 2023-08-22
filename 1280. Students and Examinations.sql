select s.student_id, s.student_name, sub.subject_name, count(e.student_id) as attended_exams 
from Students s
    cross join Subjects sub 
    left join Examinations e on e.student_id = s.student_id and e.subject_name = sub.subject_name
group by 1,2,3
order by 1,2,3
