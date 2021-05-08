CREATE OR REPLACE FUNCTION fn_planes_insert(p_model VARCHAR(50), p_seats INT, out _id INT)
RETURNS INT AS
$$
BEGIN
    INSERT INTO planes (model, seats) VALUES (p_model, p_seats) RETURNING id INTO _id;
END
$$ LANGUAGE plpgsql;