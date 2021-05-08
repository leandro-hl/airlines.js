CREATE OR REPLACE VIEW flights_view AS
SELECT 
	f.id, 
	dep.id as departure_id,
	dep."name" as departure_name,
	f.departure_date,
	arr.id as arrival_id,
	arr."name" as arrival_name,
	f.arrival_date,
	f.seats_offered,
	al.id as airline_id,
	al.name as airline_name
FROM flights f
INNER JOIN airlines al ON al.id = f.airline
INNER JOIN airports dep ON dep.id = f.departure
INNER JOIN airports arr ON arr.id = f.arrival