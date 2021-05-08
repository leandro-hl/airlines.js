CREATE OR REPLACE FUNCTION fn_airlines_insert(p_name VARCHAR(50), out _id INT)
RETURNS INT AS
$$
BEGIN
    INSERT INTO airlines (name)	 VALUES (p_name) RETURNING id INTO _id;
END
$$ LANGUAGE plpgsql;