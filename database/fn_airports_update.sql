CREATE OR REPLACE FUNCTION fn_airports_update(p_id INT, p_name VARCHAR(50), out _id INT)
RETURNS INT AS
$$
BEGIN
    UPDATE airports SET name = p_name WHERE id = p_id RETURNING id INTO _id;
END
$$ LANGUAGE plpgsql;