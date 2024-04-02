// const requestUrl = "https://api.github.com/users/Samarth0606";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", requestUrl);
// xhr.onreadystatechange = function () {
//   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     const data = JSON.parse(this.responseText);
//     const name=data.name;
//     const image=data.avatar_url;
//     document.querySelector("#name").innerHTML=`<h3> ${data.name}</h3>`;
//     document.querySelector("#photo").setAttribute("src", image);
//     document.querySelector("#role").innerHTML=`<h3> Bio: ${data.bio}</h3>`
//     document.querySelector("#githubfollowers").innerHTML=`<h3> Followers ${data.followers}</h3>`;
//     document.querySelector("#githubfollowing").innerHTML=`<h3> Following ${data.following}</h3>`;
//     document.querySelector("#company").innerHTML=`<h3> Company: ${data.company}</h3>`;
//     document.querySelector("#location").innerHTML=`<h3> Location:  ${data.location}</h3>`;
//   }
// }; 
// xhr.send();
fetch("https://api.github.com/users/Samarth0606")
.then(function(response) {
    // Check if response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Return the JSON parsed data
    return response.json();
  })
  .then(function(data) {
    // Now 'user' contains the parsed JSON data
    const image = data.avatar_url; // Define 'image' variable
    document.querySelector("#name").innerHTML=`<h3> ${data.name}</h3>`;
    document.querySelector("#photo").setAttribute("src", image);
    document.querySelector("#role").innerHTML=`<h3> Bio: ${data.bio}</h3>`
    document.querySelector("#githubfollowers").innerHTML=`<h3> Followers ${data.followers}</h3>`;
    document.querySelector("#githubfollowing").innerHTML=`<h3> Following ${data.following}</h3>`;
    document.querySelector("#company").innerHTML=`<h3> Company: ${data.company}</h3>`;
    document.querySelector("#location").innerHTML=`<h3> Location:  ${data.location}</h3>`;
  })
  .catch(function(error) {
    // Catch and handle any errors that occurred during fetch
    console.error("There was a problem with the fetch operation:", error);
  });