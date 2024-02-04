document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    var formData = new FormData(this);
    var object = {};
    formData.forEach((value, key) => (object[key] = value));
    var json = JSON.stringify(object);
    console.log("Form data object:", object); // Log the final object
    console.log("JSON string:", json); // Log the JSON string

    // Use Axios to send the data to payments/charge endpoint
    axios
      .post("http://localhost:3000/payments/charge", json, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log("Success:", response.data);
        // Handle success here
      })
      .catch(function (error) {
        console.error("Error:", error);
        // Handle errors here
      });
  });
