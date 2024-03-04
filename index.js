/**
Challenge: 

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser
*/

const activityContainer = document.getElementById("activity-container");

fetch("https://apis.scrimba.com/bored/api/activity")
  .then((res) => res.json())
  .then((data) => (activityContainer.innerHTML = `<p> ${data.activity} </p>`));
