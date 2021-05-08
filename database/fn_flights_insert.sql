CREATE OR REPLACE FUNCTION fn_flights_insert(
    p_departure INT,
    p_departureDate TIMESTAMP,
    p_arrival INT,
    p_arrivalDate TIMESTAMP,
    p_plane INT,
    p_seatsOffered INT,
    p_airline INT,
    out _id INT)
RETURNS INT AS
$$
BEGIN
    INSERT INTO flights (
        departure,
        departure_date,
        arrival,
        arrival_date,
        plane,
        seats_offered,
        airline
    )	 
    VALUES (
        p_departure,
        p_departureDate,
        p_arrival,
        p_arrivalDate,
        p_plane,
        p_seatsOffered,
        p_airline) 
    RETURNING id INTO _id;
END
$$ LANGUAGE plpgsql;