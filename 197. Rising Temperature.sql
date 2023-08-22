select w.id
from Weather w 
where exists(select id from Weather ww where w.temperature > ww.temperature and adddate(w.recordDate, interval -1 day) = ww.recordDate)
