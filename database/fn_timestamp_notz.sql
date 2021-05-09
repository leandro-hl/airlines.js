CREATE OR REPLACE FUNCTION fn_timestamp_notz(p_time VARCHAR)
RETURNS TIMESTAMP AS 
$$
BEGIN
    RETURN to_timestamp(p_time, 'YYYY/MM/DD hh24:mi:ss')::timestamp;
END
$$ LANGUAGE plpgsql;