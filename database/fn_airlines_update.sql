CREATE OR REPLACE FUNCTION fn_airlines_update(p_id INT, p_name VARCHAR(50), out _id INT)
RETURNS INT AS
$$
BEGIN
    UPDATE airlines SET name = p_name WHERE id = p_id RETURNING id INTO _id;
END
$$ LANGUAGE plpgsql;