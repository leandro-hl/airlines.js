CREATE OR REPLACE FUNCTION fn_flights_update(
    p_id INT,
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
    UPDATE flights SET 
        departure = p_departure,
        departure_date = p_departureDate,
        arrival = p_arrival,
        arrival_date = p_arrivalDate,
        plane = p_plane,
        seats_offered = p_seatsOffered,
        airline = p_airline
    WHERE id = p_id
    RETURNING id INTO _id;
END
$$ LANGUAGE plpgsql;