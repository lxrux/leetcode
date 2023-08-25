select us.product_id, round(sum(us.units*p.price)/sum(us.units),2) as average_price
from UnitsSold us
  inner join Prices p on us.product_id = p.product_id and us.purchase_date between p.start_date and p.end_date
group by us.product_id
