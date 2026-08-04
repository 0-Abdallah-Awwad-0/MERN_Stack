// Select or create the database.
db = db.getSiblingDB("my_first_db");

// This allows us to run the assignment again without duplicate data.
db.students.drop();

// Create the students collection.
db.createCollection("students");

// 1. Create five students.
db.students.insertMany([
  {
    name: "Alice",
    home_state: "California",
    lucky_number: 7,
    birthday: {
      month: 3,
      day: 15,
      year: 1998,
    },
  },
  {
    name: "Bob",
    home_state: "Washington",
    lucky_number: 4,
    birthday: {
      month: 6,
      day: 20,
      year: 1997,
    },
  },
  {
    name: "Carol",
    home_state: "California",
    lucky_number: 2,
    birthday: {
      month: 9,
      day: 10,
      year: 1999,
    },
  },
  {
    name: "David",
    home_state: "Washington",
    lucky_number: 6,
    birthday: {
      month: 11,
      day: 5,
      year: 1996,
    },
  },
  {
    name: "Eve",
    home_state: "New York",
    lucky_number: 9,
    birthday: {
      month: 1,
      day: 25,
      year: 2000,
    },
  },
]);

// 2. Get all students.
print("\n--- All students ---");
printjson(db.students.find().toArray());

// 3. Get students from California or Washington.
print("\n--- Students from California or Washington ---");
printjson(
  db.students
    .find({
      home_state: {
        $in: ["California", "Washington"],
      },
    })
    .toArray(),
);

// 4. Get students whose lucky number is greater than 3.
print("\n--- Lucky number greater than 3 ---");
printjson(
  db.students
    .find({
      lucky_number: {
        $gt: 3,
      },
    })
    .toArray(),
);

// 5. Add the interests array to every student in one operation.
db.students.updateMany(
  {},
  {
    $set: {
      interests: ["coding", "brunch", "MongoDB"],
    },
  },
);

// 6. Add one unique interest to each student.
db.students.updateOne(
  { name: "Alice" },
  { $addToSet: { interests: "hiking" } },
);

db.students.updateOne({ name: "Bob" }, { $addToSet: { interests: "coffee" } });

db.students.updateOne(
  { name: "Carol" },
  { $addToSet: { interests: "painting" } },
);

db.students.updateOne(
  { name: "David" },
  { $addToSet: { interests: "gaming" } },
);

db.students.updateOne({ name: "Eve" }, { $addToSet: { interests: "reading" } });

// 7. Add taxes to Alice's interests.
db.students.updateOne({ name: "Alice" }, { $addToSet: { interests: "taxes" } });

// 8. Remove taxes from Alice's interests.
db.students.updateOne({ name: "Alice" }, { $pull: { interests: "taxes" } });

// 9. Remove all students from California.
db.students.deleteMany({
  home_state: "California",
});

// 10. Remove one student by name.
db.students.deleteOne({
  name: "Eve",
});

// 11. Remove only one student whose lucky number is greater than 5.
db.students.deleteOne({
  lucky_number: {
    $gt: 5,
  },
});

// 12. Add number_of_belts and set it to zero for all remaining students.
db.students.updateMany(
  {},
  {
    $set: {
      number_of_belts: 0,
    },
  },
);

// 13. Increment belts for all Washington students.
db.students.updateMany(
  { home_state: "Washington" },
  {
    $inc: {
      number_of_belts: 1,
    },
  },
);

// 14. Add updated_on using the current date.
db.students.updateMany(
  {},
  {
    $currentDate: {
      updated_on: true,
    },
  },
);

// Show the final remaining data.
print("\n--- Final students ---");
printjson(db.students.find().toArray());
