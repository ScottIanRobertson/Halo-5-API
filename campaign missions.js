var key = config.SECRET_API_KEY;
window.addEventListener("load", function() {
  let finalURL2 = `https://www.haloapi.com/metadata/h5/metadata/campaign-missions`;
  console.log(finalURL2);
  fetch(finalURL2, {
    method: "GET",
    headers: {
      "Ocp-Apim-Subscription-Key": "SECRET_API_KEY"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      campaignresult.innerHTML = `
      <h2>${data[0].missionNumber}. ${data[0].name}</h2>
      <img src="${data[0].imageUrl}" class="mission-img">
        <div class="wrapper">
            <div class="data-wrapper">
                <span>${data[0].description}</span>
            </div>
        </div>

        <h2>${data[1].missionNumber}. ${data[1].name}</h2>
      <img src="${data[1].imageUrl}" class="mission-img">
        <div class="wrapper">
            <div class="data-wrapper">
                <span>${data[1].description}</span>
            </div>
        </div>

        <h2>${data[2].missionNumber}. ${data[2].name}</h2>
      <img src="${data[2].imageUrl}" class="mission-img">
        <div class="wrapper">
            <div class="data-wrapper">
                <span>${data[2].description}</span>
            </div>
        </div>

        <h2>${data[3].missionNumber}. ${data[3].name}</h2>
      <img src="${data[3].imageUrl}" class="mission-img">
        <div class="wrapper">
            <div class="data-wrapper">
                <span>${data[3].description}</span>
            </div>
        </div>

        <h2>${data[4].missionNumber}. ${data[4].name}</h2>
      <img src="${data[4].imageUrl}" class="mission-img">
        <div class="wrapper">
            <div class="data-wrapper">
                <span>${data[4].description}</span>
            </div>
        </div>

        <h2>${data[5].missionNumber}. ${data[5].name}</h2>
      <img src="${data[5].imageUrl}" class="mission-img">
        <div class="wrapper">
            <div class="data-wrapper">
                <span>${data[5].description}</span>
            </div>
        </div>

        <h2>${data[6].missionNumber}. ${data[6].name}</h2>
      <img src="${data[6].imageUrl}" class="mission-img">
        <div class="wrapper">
            <div class="data-wrapper">
                <span>${data[6].description}</span>
            </div>
        </div>

        <h2>${data[7].missionNumber}, ${data[7].name}</h2>
      <img src="${data[7].imageUrl}" class="mission-img">
        <div class="wrapper">
            <div class="data-wrapper">
                <span>${data[7].description}</span>
            </div>
        </div>

        <h2>${data[8].missionNumber}. ${data[8].name}</h2>
      <img src="${data[8].imageUrl}" class="mission-img">
        <div class="wrapper">
            <div class="data-wrapper">
                <span>${data[8].description}</span>
            </div>
        </div>

        <h2>${data[9].missionNumber}. ${data[9].name}</h2>
      <img src="${data[9].imageUrl}" class="mission-img">
        <div class="wrapper">
            <div class="data-wrapper">
                <span>${data[9].description}</span>
            </div>
        </div>

        <h2>${data[10].missionNumber}. ${data[10].name}</h2>
      <img src="${data[10].imageUrl}" class="mission-img">
        <div class="wrapper">
            <div class="data-wrapper">
                <span>${data[10].description}</span>
            </div>
        </div>

        <h2>${data[11].missionNumber}. ${data[11].name}</h2>
      <img src="${data[11].imageUrl}" class="mission-img">
        <div class="wrapper">
            <div class="data-wrapper">
                <span>${data[11].description}</span>
            </div>
        </div>

        <h2>${data[12].missionNumber}. ${data[12].name}</h2>
      <img src="${data[12].imageUrl}" class="mission-img">
        <div class="wrapper">
            <div class="data-wrapper">
                <span>${data[12].description}</span>
            </div>
        </div>

        <h2>${data[13].missionNumber}. ${data[13].name}</h2>
      <img src="${data[13].imageUrl}" class="mission-img">
        <div class="wrapper">
            <div class="data-wrapper">
                <span>${data[13].description}</span>
            </div>
        </div>

        <h2>${data[14].missionNumber}. ${data[14].name}</h2>
      <img src="${data[14].imageUrl}" class="mission-img">
        <div class="wrapper">
            <div class="data-wrapper">
                <span>${data[14].description}</span>
            </div>
        </div>
        `

    })
    .catch(() => {
        campaignresult.innerHTML = `<h3>Catch</h3>`;
    });
});