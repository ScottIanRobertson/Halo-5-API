let searchBtn = document.getElementById("search-btn");
let gamerInp = document.getElementById("gamer-inp");
gamerInp.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    searchBtn.click();
  }
});
require ('dotenv').config();

searchBtn.addEventListener("click", () => {
  new KeyboardEvent("keydown", { key: "Enter"});
  let player = gamerInp.value;
  let finalURL = `https://www.haloapi.com/profile/h5/profiles/${player}/appearance`;
  console.log(finalURL);
  console.log(process.env);
  fetch(finalURL, {
    method: "GET",
    headers: {
      "Ocp-Apim-Subscription-Key": "your key here"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      servicetagresult.innerHTML = `

        <h2>${data.Gamertag}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>ServiceTag:</h4>
                <span>${data.ServiceTag}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Company:</h4>
                <span>${data.Company.Name}</span>
            </div>
        </div> `

    })
    .catch(() => {
      if (player.length == 0) {
        servicetagresult.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        servicetagresult.innerHTML = `<h3>Please enter a valid Halo 5 gamertag.</h3>`;
      }
    });
});

