use bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    first_name: "Lemon",
    last_name: "Custard",
    email: "cust@cust.cust",
    number_of_people: 2,
    check_in_date: "2017-06-01",
    check_out_date: "2017-06-01",
    check_in_status: true,
    check_out_status: true
  },
  {
    first_name: "Gyros",
    last_name: "Athens",
    email: "gy@athens.cus",
    number_of_people: 4,
    check_in_date: "2017-06-02",
    check_out_date: "2017-06-02",
    check_in_status: true,
    check_out_status: true
  },
{
    first_name: "Sunshine",
    last_name: "Dynamite",
    email: "sun@dy.cust",
    number_of_people: 3,
    check_in_date: "2017-06-05",
    check_in_status: true,
    check_out_status: true
  },
  
]);
