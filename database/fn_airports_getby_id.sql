CREATE OR REPLACE FUNCTION fn_airports_getby_id(p_id INT)
RETURNS TABLE (id INT, name VARCHAR) AS
$$
BEGIN
	RETURN QUERY
    SELECT a.id, a.name FROM airports as a WHERE a.id = p_id;
END
$$ LANGUAGE plpgsql;