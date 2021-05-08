CREATE OR REPLACE FUNCTION fn_flights_getby_id(p_id INT)
RETURNS TABLE (
    id INT, 
    departure_id INT,
    departure_name VARCHAR,
    departure_date TIMESTAMP,
    arrival_id INT,
    arrival_name VARCHAR,
    arrival_date TIMESTAMP,
    seats_offered INT,
    airline_id INT,
    airline_name VARCHAR
) AS
$$
BEGIN
	RETURN QUERY
    SELECT 
        f.id, 
        f.departure_id,
        f.departure_name,
        f.departure_date,
        f.arrival_id,
        f.arrival_name,
        f.arrival_date,
        f.seats_offered,
        f.airline_id,
        f.airline_name
    FROM flights_view f 
    WHERE f.id = p_id;
END
$$ LANGUAGE plpgsql;