import { getApi, planetData } from "./data.js";

// const API info block (information about the planet)
const mass = document.getElementById("mass");
const volume = document.getElementById("volume");
const gravity = document.getElementById("gravity");
const radius = document.getElementById("radius");
const escapeSpeed = document.getElementById("escape-speed");
const headerApiBloc = document.getElementById("header-api-block");
const aphelion = document.getElementById('aphelion')
const siderealRotationPeriod= document.getElementById('sidereal_rotation_period')

//text block
const planetText = document.getElementById("planet-text");

// API request
const param = { url: "https://api.le-systeme-solaire.net/rest/bodies" };

// create an array with all the links (<a href planets name)
const allPlanet = document.querySelectorAll(".planet");

getPlanetInfo("Sun", false);

// loop through the array and hang the event on the clicked link
for (let i = 0; i < allPlanet.length; i++) {
  allPlanet[i].addEventListener("click", (event) => {
    const isPlanet = event.target.id == "Sun" ? false : true;
    getPlanetInfo(event.target.id, isPlanet);
  });
}

//a title with the name of the planet
const outputPlanetName = document.getElementById("planet-name");
const planetPhoto = document.getElementById("planet-photo");

// a function that creates a API-request and creates a API-block with information about the planet
async function getPlanetInfo(planet, isPlanet) {
  console.log(planet);
  fetch(`${param.url}/${planet}`)
    .then((resp) => resp.json())
    .then((data) => {
      headerApiBloc.textContent = "General information";

      // block info
      if (isPlanet) {
        volume.textContent = `Volume:    ${data.vol.volValue}E${data.vol.volExponent} km3`;
        mass.textContent = `Mass:    ${data.mass.massValue}E${data.mass.massExponent} kg`;
        gravity.innerHTML = `Gravity:    ${data.gravity} m/s&sup2;`;
        radius.textContent = `Radius:    ${data.meanRadius} km`;
        escapeSpeed.textContent = `Escape speed:    ${data.escape} m/s`;
        aphelion.textContent = `Aphelion:    ${data.aphelion} km`
        siderealRotationPeriod.textContent= `Sidereal rotation period:    ${data.sideralRotation} h`
        getMoons(planet, moons.textContent);
        outputPlanetName.textContent = `${data.englishName}`;
        
      } else {
        volume.textContent = `- The Solar System is roughly 4.5 billion years old`;
        mass.textContent = `- A day is longer than a year on Venus`;
        gravity.innerHTML = `- It would take 100 times longer to travel around the Sun than the
        Earth`;
        radius.textContent = `- Saturn's rings are 90% water`;
        escapeSpeed.textContent = `- The whole of Mars is as cold as the South Pole`;
        
        moons.textContent = "";
        outputPlanetName.textContent = "Solar System";
      }

      let paragraphHtml = "";

      // add photo and text
      for (let i = 0; i < planetData.length; i++) {
        if (planetData[i].name == data.englishName) {
          planetPhoto.src = planetData[i].img;
          for (let j = 0; j < planetData[i].paragraphs.length; j++) {
            // add paragraphs to the HTML
            paragraphHtml += createParagraphHtml(planetData[i].paragraphs[j]);
          }
        }
      }
      planetText.innerHTML = paragraphHtml;
    })
    .catch(function () {
      // catch any errors
    });
}

function createParagraphHtml(paragraph) {
  return `<p>${paragraph}</p>`;
}

const contactUsBtn = document.getElementById("contact-us");
const closeBtn = document.getElementById("closeBtn");
const contactModal = document.getElementById("contact-modal");

//change display to block to show the modal
contactUsBtn.addEventListener("click", () => {
  contactModal.style.display = "block";
});
//change display to none to close it
closeBtn.addEventListener("click", () => {
  contactModal.style.display = "none";
});

// add names of each planet's moons to the HTML using the API
async function getMoons(planetName) {
  const planet = await getApi(
    `https://api.le-systeme-solaire.net/rest/bodies/${planetName}`
  );
  let moonsString = "";
  if (planet.moons) {
    for (const moon of planet.moons) {
      moonsString += `${moon.moon}, `;
    }
    console.log(moonsString);
    document.getElementById("moons").textContent = `Moons: ${moonsString.slice(
      0,
      -2
    )}`;
  } else {
    document.getElementById("moons").textContent = "Moons: n/a";
  }
}
