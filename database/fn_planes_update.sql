CREATE OR REPLACE FUNCTION fn_planes_update(p_id INT, p_model VARCHAR(50), p_seats INT, out _id INT)
RETURNS INT AS
$$
BEGIN
    UPDATE planes SET model = p_model, seats = p_seats WHERE id = p_id RETURNING id INTO _id;
END
$$ LANGUAGE plpgsql;