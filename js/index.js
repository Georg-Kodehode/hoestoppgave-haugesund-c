// array of photos
const infoEveryPlanet = [
  {
    name: "Earth",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/EpicEarth-Globespin-tilt-23.4.gif/1024px-EpicEarth-Globespin-tilt-23.4.gif",
  },
  {
    name: "Mars",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Mars_Valles_Marineris.jpeg/1024px-Mars_Valles_Marineris.jpeg",
  },
  {
    name: "Mercury",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/1024px-Mercury_in_true_color.jpg",
  },
  {
    name: "Venus",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Venus_-_December_23_2016.png",
  },
  {
    name: "Jupiter",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Jupiter_and_Europa_2020.tiff/lossy-page1-1024px-Jupiter_and_Europa_2020.tiff.jpg",
  },
  {
    name: "Saturn",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1920px-Saturn_during_Equinox.jpg",
  },
  {
    name: "Uranus",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg/1024px-Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg",
  },
  {
    name: "Neptune",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
  },
];

const textAboutPlanet = [
  {
    name: "Earth",
    description: `<h2>GFFGG</h2><p>Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system,<h1>GFFGG</h1> <br> it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.</p> <h1>GFFGG</h1>`,
  },

  {
    name: "Mars",
    description:
      "Mars is no place for the faint-hearted. It’s dry, rocky, and bitter cold. The fourth planet from the Sun, Mars is one of Earth's two closest planetary neighbors (Venus is the other). Mars is one of the easiest planets to spot in the night sky – it looks like a bright red point of light.Despite being inhospitable to humans, robotic explorers – like NASA's new Perseverance rover – are serving as pathfinders to eventually get humans to the surface of the Red Planet.",
  },

  {
    name: "Mercury",
    description:
      "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter.Mercury's surface temperatures are both extremely hot and cold. Because the planet is so close to the Sun, day temperatures can reach highs of 800°F (430°C). Without an atmosphere to retain that heat at night, temperatures can dip as low as -290°F (-180°C).Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
  },

  {
    name: "Venus",
    description:
      "It's a cloud-swaddled planet named for a love goddess, often called Earth’s twin. But pull up a bit closer, and Venus turns hellish. Our nearest planetary neighbor, the second planet from the Sun, has a surface hot enough to melt lead. The atmosphere is so thick that, from the surface, the Sun is just a smear of light.In some ways it is more an opposite of Earth than a twin: Venus spins backward, has a day longer than its year, and lacks any semblance of seasons. It might once have been a habitable ocean world, like Earth, but that was at least a billion years ago. A runaway greenhouse effect turned all surface water into vapor, which then leaked slowly into space. The present-day surface of volcanic rock is blasted by high temperatures and pressures. Asked if the surface of Venus is likely to be life-bearing today, we can give a quick answer: a hard “no.”Further, Venus may hold lessons about what it takes for life to get its start ­– on Earth, in our solar system, or across the galaxy. The ingredients are all there, or at least, they used to be. By studying why our neighbor world went in such a different direction with regard to habitability, we could find out what could make other worlds right. And while it might sound absurd, we can’t rule out life on Venus entirely. Temperature, air pressure, and chemistry are much more congenial up high, in those thick, yellow clouds.",
  },

  {
    name: "Jupiter",
    description:
      "Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.Jupiter is surrounded by dozens of moons. Jupiter also has several rings, but unlike the famous rings of Saturn, Jupiter’s rings are very faint and made of dust, not ice.",
  },

  {
    name: "Saturn",
    description:
      "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Saturn is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Saturn also has dozens of moons.From the jets of water that spray from Saturn's moon Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries.",
  },

  {
    name: "Uranus",
    description:
      "Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead, the scientific community accepted Bode's suggestion to name it Uranus, the Greek god of the sky, as suggested by Bode.​",
  },

  {
    name: "Neptune",
    description:
      "Neptune is the eighth planet from the Sun and the farthest known solar planet. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than UrDark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.Neptune is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us. The warm light we see here on our home planet is roughly 900 times as bright as sunlight on Neptune.",
  },
];
console.log(infoEveryPlanet);

// const API info bloc (information about the planet)//
const mass = document.getElementById("mass");
const volum = document.getElementById("volum");
const gravity = document.getElementById("gravity");
const radius = document.getElementById("radius");
const escapeSpeed = document.getElementById("escape_speed");
const headerApiBloc = document.getElementById("header_api_bloc");

//text block
const descriptionPlanet = document.getElementById("planet-text");

// API request
const param = { url: "https://api.le-systeme-solaire.net/rest/bodies" };

// create an array with all the links (<a href planets name)
const allPlanet = document.querySelectorAll(".planet");
console.log(allPlanet);

// loop through the array and hang the event on the clicked link
for (let i = 0; i < allPlanet.length; i++) {
  console.log(allPlanet[i]);
  allPlanet[i].addEventListener("click", (event) => {
    getPlanetInfo(event.target.id);
    console.log(event.target.id);
  });
}

//a title with the name of the planet
const outputPlanetName = document.getElementById("planet_name");
const planetPhoto = document.getElementById("planet-photo");
console.log(planetPhoto);

// a function that creates a API-request and creates a API-block with information about the planet
function getPlanetInfo() {
  fetch(`${param.url}/${event.target.id}`)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);

      headerApiBloc.textContent = "General information";

      // bloc info
      volum.textContent = `Volum: ${data.vol.volValue}E${data.vol.volExponent}`;
      mass.textContent = `Mass: ${data.mass.massValue}E${data.mass.massExponent}kg`;
      gravity.textContent = `Gravity: ${data.gravity}`;
      radius.textContent = `Radius: ${data.meanRadius}`;
      escapeSpeed.textContent = `Escape speed: ${data.escape}`;
      outputPlanetName.textContent = `${data.englishName}`;

      // photo
      for (let i = 0; i < infoEveryPlanet.length; i++) {
        console.log(infoEveryPlanet[i].name);
        console.log(data.englishName);
        if (infoEveryPlanet[i].name == data.englishName) {
          planetPhoto.src = infoEveryPlanet[i].url;
        }
      }

      // text
      for (let i = 0; i < textAboutPlanet.length; i++) {
        console.log(textAboutPlanet[i].name);
        console.log(data.englishName);
        if (textAboutPlanet[i].name == data.englishName) {
          descriptionPlanet.innerHTML = textAboutPlanet[i].description;
        }
      }
    })
    .catch(function () {
      // catch any errors
    });
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

// get data from the API
async function getApi(url) {
  const request = await fetch(url);
  const data = await request.json();
  return data;
}

// add names of each planet's moons to the HTML using the API
async function getMoons(planetName) {
  // let moons = fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`)
  //   .then((response) => response.json())
  //   .then((data) => data);
  const planet = await getApi(
    `https://api.le-systeme-solaire.net/rest/bodies/${planetName}`
  );

  if (planet.moons) {
    for (const moon of planet.moons) {
      console.log(moon.moon);
    }
  } else {
    console.log("no moons");
  }
}
getMoons("venus");
