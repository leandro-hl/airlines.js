CREATE TABLE IF NOT EXISTS airports	(
	id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
	name VARCHAR(50) NOT NULL); 

CREATE TABLE IF NOT EXISTS planes (
	id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
	model VARCHAR(50) NOT NULL,
    seats INT NOT NULL); 

CREATE TABLE IF NOT EXISTS airlines (
	id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
	name VARCHAR(50) NOT NULL); 

CREATE TABLE IF NOT EXISTS passengers (
	id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    id_card VARCHAR(50) NOT NULL,
	name VARCHAR(100)); 

CREATE TABLE IF NOT EXISTS flights (
	id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    departure INT NOT NULL,
    departure_date TIMESTAMP,
	arrival INT NOT NULL,
    arrival_date TIMESTAMP,
    plane INT,
    seats_offered INT,
    airline INT NOT NULL); 

CREATE TABLE IF NOT EXISTS flight_scales (
	id_flight INT NOT NULL, 
    id_airport INT NOT NULL); 

CREATE TABLE IF NOT EXISTS flight_passengers (
	id_flight INT NOT NULL, 
    id_passenger INT NOT NULL); 


ALTER TABLE flights ADD CONSTRAINT FK_departure FOREIGN KEY(departure) REFERENCES airports(id);
ALTER TABLE flights ADD CONSTRAINT FK_arrival FOREIGN KEY(arrival) REFERENCES airports(id);
ALTER TABLE flights ADD CONSTRAINT FK_plane FOREIGN KEY(plane) REFERENCES planes(id);
ALTER TABLE flights ADD CONSTRAINT FK_airline FOREIGN KEY(airline) REFERENCES airlines(id);

ALTER TABLE flight_scales ADD CONSTRAINT PK_flightScales PRIMARY KEY(id_flight, id_airport);
ALTER TABLE flight_scales ADD CONSTRAINT FK_flights FOREIGN KEY(id_flight) REFERENCES flights(id);
ALTER TABLE flight_scales ADD CONSTRAINT FK_airports FOREIGN KEY(id_airport) REFERENCES airports(id);

ALTER TABLE flight_passengers ADD CONSTRAINT PK_flightPassengers PRIMARY KEY(id_flight, id_passenger);
ALTER TABLE flight_passengers ADD CONSTRAINT FK_flights FOREIGN KEY(id_flight) REFERENCES flights(id);
ALTER TABLE flight_passengers ADD CONSTRAINT FK_passengers FOREIGN KEY(id_passenger) REFERENCES passengers(id);