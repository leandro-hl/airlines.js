// app.post("/statistics/airlines/:month/:year/busier", (req, res, next) => {
//   res.send(service.busierAirlineIn({ month: +req.params.month, year: +req.params.year }));
// });

// app.get("/statistics/airlines/:airline/flights/:flight/occupation", (req, res, next) => {
//   res.send(
//     service.flightOccupiedCapacity({
//       airlineId: +req.params.airline,
//       flightId: +req.params.flight
//     })
//   );
// });

// app.get("/statistics/airlines/:airline/flights/:flight/duration", (req, res, next) => {
//   res.send(
//     service.estimatedFlightDuration({
//       airlineId: +req.params.airline,
//       flightId: +req.params.flight
//     })
//   );
// });

// app.get("/statistics/airports/:airport/:date/movements-count", (req, res, next) => {
//   res.send(
//     service.movementsCountOnDay({
//       airPortId: +req.params.airport,
//       day: new Date(req.params.date)
//     })
//   );
// });
