// Practice fetching data from a free online test API
async function getRandomUser() {
  try {
    console.log("Sending GET request to API...");
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    
    console.log(`Response Status: ${response.status} ${response.statusText}`);
    
    const data = await response.json();
    console.log("Data Received from Server:", data.name, "-", data.email);
  } catch (error) {
    console.error("API Request Failed:", error);
  }
}

getRandomUser();