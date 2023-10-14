const db = require("../database/db.connection");

const userTable = `
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    dob DATE
)
`;

// Assuming that your db.connection exports a promise-based connection
db.connect()
  .then((client) => {
    // Successfully connected to the database
    client
      .query(userTable)
      .then((result) => {
        console.log("Table created successfully");
        // You can perform more database operations here
      })
      .catch((error) => {
        console.error("Error creating the table:", error);
      })
      .finally(() => {
        client.release(); // Release the client back to the pool
      });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
