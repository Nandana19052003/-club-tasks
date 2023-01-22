// Import PapaParse library
import Papa from "papaparse";

// Get form data
const formData = new FormData(document.getElementById("login-form"));

// Convert form data to CSV
const csv = Papa.unparse(formData);

// Send CSV to server
fetch("/save-data", {
  method: "POST",
  body: csv,
  headers: {
    "Content-Type": "text/csv"
  }
})
  .then(response => response.json())
  .then(data => {
    // Handle success
    console.log("Data saved successfully");
  })
  .catch(error => {
    // Handle error
    console.error("Error saving data", error);
  });
