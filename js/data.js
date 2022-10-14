// get data from the API
export async function getApi(url) {
  const request = await fetch(url);
  const data = await request.json();
  return data;
}

export const planetData = [
  {
    name: "Sun",
    img: "images/sun.jpg",
    paragraphs: [
      `The Solar System is the gravitationally bound system of the Sun and
    the objects that orbit it. It formed 4.6 billion years ago from the
    gravitational collapse of a giant interstellar molecular cloud. The
    vast majority (99.86%) of the system's mass is in the Sun, with most
    of the remaining mass contained in the planet Jupiter. The four
    inner system planets—Mercury, Venus, Earth and Mars—are terrestrial
    planets, being composed primarily of rock and metal. The four giant
    planets of the outer system are substantially larger and more
    massive than the terrestrials. The two largest, Jupiter and Saturn,
    are gas giants, being composed mainly of hydrogen and helium; the
    next two, Uranus and Neptune, are ice giants, being composed mostly
    of volatile substances with relatively high melting points compared
    with hydrogen and helium, such as water, ammonia, and methane. All
    eight planets have nearly circular orbits that lie near the plane of
    Earth's orbit, called the ecliptic.`,
      `There are an unknown number of smaller dwarf planets and innumerable
    small Solar System bodies orbiting the Sun. Six of the major
    planets, the six largest possible dwarf planets, and many of the
    smaller bodies are orbited by natural satellites, commonly called
    "moons" after Earth's Moon. Two natural satellites, Jupiter's moon
    Ganymede and Saturn's moon Titan, are larger but not more massive
    than Mercury, the smallest terrestrial planet, and Jupiter's moon
    Callisto is nearly as large. Each of the giant planets and some
    smaller bodies are encircled by planetary rings of ice, dust and
    moonlets. The asteroid belt, which lies between the orbits of Mars
    and Jupiter, contains objects composed of rock, metal and ice.
    Beyond Neptune's orbit lie the Kuiper belt and scattered disc, which
    are populations of objects composed mostly of ice and rock.`,
      `In the outer reaches of the Solar System lies a class of minor
    planets called detached objects. There is considerable debate as to
    how many such objects there will prove to be. Some of these objects
    are large enough to have rounded under their own gravity and thus to
    be categorized as dwarf planets. Astronomers generally accept about
    nine objects as dwarf planets: the asteroid Ceres, the Kuiper-belt
    objects Pluto, Orcus, Haumea, Quaoar and Makemake, the
    scattered-disk objects Gonggong and Eris, and Sedna. Various
    small-body populations, including comets, centaurs and
    interplanetary dust clouds, freely travel between the regions of the
    Solar System.`,
      `The solar wind, a stream of charged particles flowing outwards from
    the Sun, creates a bubble-like region of interplanetary medium in
    the interstellar medium known as the heliosphere. The heliopause is
    the point at which pressure from the solar wind is equal to the
    opposing pressure of the interstellar medium; it extends out to the
    edge of the scattered disc. The Oort cloud, which is thought to be
    the source for long-period comets, may also exist at a distance
    roughly a thousand times further than the heliosphere. The Solar
    System is located 26,000 light-years from the center of the Milky
    Way galaxy in the Orion Arm, which contains most of the visible
    stars in the night sky. The nearest stars are within the so-called
    Local Bubble, with the closest, Proxima Centauri, at 4.2441
    light-years.`,
    ],
  },
  {
    name: "Mercury",
    img: "images/mercury.jpg",
    paragraphs: [
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes (Ἑρμῆς). Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°. This proximity to the Sun means the planet can only be seen near the western horizon after sunset or the eastern horizon before sunrise, usually in twilight. At this time, it may appear as a bright star-like object, but is more difficult to observe than Venus. From Earth, the planet telescopically displays the complete range of phases, similar to Venus and the Moon, which recurs over its synodic period of approximately 116 days.",
      "Mercury rotates in a way that is unique in the Solar System. It is tidally locked with the Sun in a 3:2 spin–orbit resonance, meaning that relative to the fixed stars, it rotates on its axis exactly three times for every two revolutions it makes around the Sun. As seen from the Sun, in a frame of reference that rotates with the orbital motion, it appears to rotate only once every two Mercurian years. An observer on Mercury would therefore see only one day every two Mercurian years.",
      "Mercury's axis has the smallest tilt of any of the Solar System's planets (about 1⁄30 degree). Its orbital eccentricity is the largest of all known planets in the Solar System; at perihelion, Mercury's distance from the Sun is only about two-thirds (or 66%) of its distance at aphelion. Mercury's surface appears heavily cratered and is similar in appearance to the Moon's, indicating that it has been geologically inactive for billions of years. Having almost no atmosphere to retain heat, it has surface temperatures that vary diurnally more than on any other planet in the Solar System, ranging from 100 K (−173 °C; −280 °F) at night to 700 K (427 °C; 800 °F) during the day across the equatorial regions. The polar regions are constantly below 180 K (−93 °C; −136 °F). The planet has no natural satellites.",
      "Two spacecraft have visited Mercury: Mariner 10 flew by in 1974 and 1975; and MESSENGER, launched in 2004, orbited Mercury over 4,000 times in four years before exhausting its fuel and crashing into the planet's surface on April 30, 2015. The BepiColombo spacecraft is planned to arrive at Mercury in 2025.",
    ],
  },
  {
    name: "Venus",
    img: "images/venus.jpg",
    paragraphs: [
      `Venus is the second planet from the Sun, orbiting it the closest to Earth. It is sometimes called Earth's "sister" or "twin" planet as it is almost as large and has a similar composition. Venus, like Mercury, appears in Earth's sky never far from the Sun, either as morning star or evening star with a synodic period of 1.6 years. It is, after the Moon, the brightest natural object in Earth's sky, capable of casting visible shadows on Earth at dark conditions and being visible to the naked eye in broad sunlight.`,
      `Venus is the second largest terrestrial object of the Solar System, with a surface gravity minimally lower than on Earth, but having only an induced magnetosphere. The carbon dioxide atmosphere of Venus is the densest of the four terrestrial planets. The atmospheric pressure at the planet's surface is about 92 times the sea level pressure of Earth, or roughly the pressure at 900 m (3,000 ft) underwater on Earth. Even though Mercury is closer to the Sun, Venus has the hottest surface of any planet in the Solar System, with a mean temperature of 737 K (464 °C; 867 °F). Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, preventing its surface from being seen from Earth in light. It may have had water oceans in the past, but after these evaporated the temperature rose under a runaway greenhouse effect. The water has probably photodissociated, and the free hydrogen has been swept into interplanetary space by the solar wind because of the lack of an internally induced magnetic field. At roughly 50 km above the surface atmospheric conditions reach Earth-like temperatures and levels of pressure.`,
      `Venus orbits the Sun every 224.7 Earth days, but rotates around its axis in 243 Earth days. Consequently, it takes longer to rotate about its axis than any other planet in the Solar System, and does so in the opposite direction to all but Uranus. This means that the Sun rises from its western horizon and sets in its east. This retrograde rotation creates a synodic day of only 117 Earth days. Venus does not have any moons, a distinction it shares only with Mercury among the planets in the Solar System.`,
      `As one of the brightest objects in the sky, Venus has been a major fixture in human culture for as long as records have existed. It has been made sacred to gods of many cultures, gaining its mainly used name from the Roman goddess of love and beauty which it is associated with. Furthermore it has been a prime inspiration for writers, poets and scholars. Venus was the first planet to have its motions plotted across the sky, as early as the second millennium BCE.`,
      `Its proximity to Earth has made Venus a prime target for early interplanetary exploration. It was the first planet beyond Earth spacecrafts were sent towards (Venera 1 in 1961) and the first to be reached, impacted and successfully landed on (by Venera 7 in 1970). The planet's thick clouds render observation of its surface impossible in the visible spectrum, and the first detailed maps did not emerge until the arrival of the Magellan orbiter in 1991. Plans have been proposed for rovers or more complex missions, such as crewed atmospheric missions at levels with almost Earth-like conditions. The possibility of life on Venus has long been a topic of speculation; in recent years, the topic has received active research with possible signs of life having been found.`,
    ],
  },
  {
    name: "Earth",
    img: "images/terre.jpg",
    paragraphs: [
      `Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes, and rivers. The remaining 29% of Earth's surface is land, consisting of continents and islands. Earth's surface layer is formed of several slowly moving tectonic plates, interacting to produce mountain ranges, volcanoes, and earthquakes. Earth's liquid outer core generates the magnetic field that shapes Earth's magnetosphere, deflecting destructive solar winds.`,
      `Earth's atmosphere consists mostly of nitrogen and oxygen. Greenhouse gases in the atmosphere like carbon dioxide (CO2) trap a part of the energy from the Sun close to the surface. Water vapor is widely present in the atmosphere and forms clouds that cover most of the planet. More solar energy is received by tropical regions than polar regions and is redistributed by atmospheric and ocean circulation. A region's climate is governed by latitude, but also by elevation and proximity to moderating oceans. In most areas severe weather, such as tropical cyclones, thunderstorms, and heatwaves, occurs and greatly impacts life.`,
      `Earth is an ellipsoid with a circumference of about 40,000 km. It is the densest planet in the Solar System. Of the four rocky planets, it is the largest and most massive. Earth is about eight light minutes away from the Sun and orbits it, taking a year (about 365.25 days) to complete one revolution. Earth rotates around its own axis in slightly less than a day (in about 23 hours and 56 minutes). Earth's axis of rotation is tilted with respect to the perpendicular to its orbital plane around the Sun, producing seasons. Earth is orbited by one permanent natural satellite, the Moon, which orbits Earth at 380,000 km (1.3 light seconds) and is roughly a quarter as wide as Earth. The Moon always faces the Earth with the same side through tidal locking and causes tides, stabilizes Earth's axis, and gradually slows its rotation.`,
      `Earth, like most other Solar System bodies formed 4.5 billion years ago from gas of the early Solar System. During the first billion years of Earth's history the ocean formed and then life developed within it. Life spread globally and began to affect Earth's atmosphere and surface, leading to the Great Oxidation Event two billion years ago. Humans emerged 300,000 years ago, and have reached a population of almost 8 billion today. Humans depend on Earth's biosphere and natural resources for their survival, but have increasingly impacted Earth's environment. Today, humanity's impact on Earth's climate, soils, waters, and ecosystems is unsustainable, threatening people's lives and causing widespread extinction of other life.`,
    ],
  },
  {
    name: "Mars",
    img: "images/mars.jpg",
    paragraphs: [
      `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In the English language, Mars is named for the Roman god of war. Mars is a terrestrial planet with a thin atmosphere (less than 1% that of Earth's), and has a crust primarily composed of elements similar to Earth's crust, as well as a core made of iron and nickel. Mars has surface features such as impact craters, valleys, dunes, and polar ice caps. It has two small and irregularly shaped moons: Phobos and Deimos.`,
      `Some of the most notable surface features on Mars include Olympus Mons, the largest volcano and highest known mountain on any planet in the Solar System, and Valles Marineris, one of the largest canyons in the Solar System. The Borealis basin in the Northern Hemisphere covers approximately 40% of the planet and may be a large impact feature. Days and seasons on Mars are comparable to those of Earth, as the planets have a similar rotation period and tilt of the rotational axis relative to the ecliptic plane. Liquid water on the surface of Mars cannot exist due to low atmospheric pressure, which is less than 1% of the atmospheric pressure on Earth. Both of Mars's polar ice caps appear to be made largely of water. In the distant past, Mars was likely wetter, and thus possibly more suited for life. However, it is unknown whether life has ever existed on Mars.`,
      `Mars has been explored by several uncrewed spacecraft, beginning with Mariner 4 in 1965. NASA's Viking 1 lander transmitted in 1976 the first images from the Martian surface. Two countries have successfully deployed rovers on Mars, the United States first doing so with Sojourner in 1997 and China with Zhurong in 2021. There are also planned future missions to Mars, such as a Mars sample-return mission set to happen in 2026, and the Rosalind Franklin rover mission, which was intended to launch in 2018 but was delayed to 2024 at the earliest, with a more likely launch date at 2028.`,
      `Mars can be viewed from Earth with the naked eye, as can its reddish coloring. This appearance, due to the iron oxide prevalent on its surface, has led to Mars often being called the Red Planet. It is among the brightest objects in Earth's sky, with an apparent magnitude that reaches −2.94, comparable to that of Jupiter and surpassed only by Venus, the Moon and the Sun. Historically, Mars has been observed since ancient times, and over the millennia, has been featured in culture and the arts in ways that have reflected humanity's growing knowledge of it.`,
    ],
  },
  {
    name: "Jupiter",
    img: "images/jupiter.jpg",
    paragraphs: [
      `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus, and it has been observed since prehistoric times. It was named after the Roman god Jupiter, the king of the gods.`,
      `Jupiter is primarily composed of hydrogen, but helium constitutes one-quarter of its mass and one-tenth of its volume. It probably has a rocky core of heavier elements, but, like the other giant planets in the Solar System, it lacks a well-defined solid surface. The ongoing contraction of Jupiter's interior generates more heat than it receives from the Sun. Because of its rapid rotation, the planet's shape is an oblate spheroid: it has a slight but noticeable bulge around the equator. The outer atmosphere is divided into a series of latitudinal bands, with turbulence and storms along their interacting boundaries. A prominent result of this is the Great Red Spot, a giant storm which has been observed since at least 1831.`,
      `Jupiter is surrounded by a faint planetary ring system and a powerful magnetosphere. Jupiter's magnetic tail is nearly 800 million km (5.3 AU; 500 million mi) long, covering nearly the entire distance to Saturn's orbit. Jupiter has 80 known moons and possibly many more, including the four large moons discovered by Galileo Galilei in 1610: Io, Europa, Ganymede, and Callisto. Io and Europa are about the size of Earth's Moon; Callisto is almost the size of the planet Mercury, and Ganymede is larger.`,
      `Pioneer 10 was the first spacecraft to visit Jupiter, making its closest approach to the planet in December 1973. Jupiter has since been explored by multiple robotic spacecraft, beginning with the Pioneer and Voyager flyby missions from 1973 to 1979, and later with the Galileo orbiter in 1995. In 2007, the New Horizons visited Jupiter using its gravity to increase its speed, bending its trajectory en route to Pluto. The latest probe to visit the planet, Juno, entered orbit around Jupiter in July 2016. Future targets for exploration in the Jupiter system include the probable ice-covered liquid ocean of Europa.`,
    ],
  },
  {
    name: "Saturn",
    img: "images/saturn.jpg",
    paragraphs: [
      `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.`,
      `Saturn's interior is most likely composed of a core of iron–nickel and rock (silicon and oxygen compounds). Its core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally, a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere. An electrical current within the metallic hydrogen layer is thought to give rise to Saturn's planetary magnetic field, which is weaker than Earth's, but which has a magnetic moment 580 times that of Earth due to Saturn's larger size. Saturn's magnetic field strength is around one-twentieth of Jupiter's. The outer atmosphere is generally bland and lacking in contrast, although long-lived features can appear. Wind speeds on Saturn can reach 1,800 km/h (1,100 mph; 500 m/s), higher than on Jupiter but not as high as on Neptune.`,
      `The planet's most notable feature is its prominent ring system, which is composed mainly of ice particles, with a smaller amount of rocky debris and dust. At least 83 moons are known to orbit Saturn, of which 53 are officially named; this does not include the hundreds of moonlets in its rings. Titan, Saturn's largest moon and the second largest in the Solar System, is larger than the planet Mercury, although less massive, and is the only moon in the Solar System to have a substantial atmosphere.`,
    ],
  },
  {
    name: "Uranus",
    img: "images/uranus.jpg",
    paragraphs: [
      `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus (Caelus), who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as "ice giants" to distinguish them from the other giant planets. `,
      `As with gas giants, ice giants also lack a well defined "solid surface." Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more "ices" such as water, ammonia, and methane, along with traces of other hydrocarbons. It has the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock.`,
      `Like the other giant planets, Uranus has a ring system, a magnetosphere, and numerous moons. The Uranian system has a unique configuration because its axis of rotation is tilted sideways, nearly into the plane of its solar orbit. Its north and south poles, therefore, lie where most other planets have their equators. In 1986, images from Voyager 2 showed Uranus as an almost featureless planet in visible light, without the cloud bands or storms associated with the other giant planets. Voyager 2 remains the only spacecraft to visit the planet. Observations from Earth have shown seasonal change and increased weather activity as Uranus approached its equinox in 2007. Wind speeds can reach 250 metres per second (900 km/h; 560 mph).`,
    ],
  },
  {
    name: "Neptune",
    img: "images/neptune.jpg",
    paragraphs: [
      `Neptune is the eighth planet from the Sun and the farthest known solar planet. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. It is referred to as one of the solar system's two ice giant planets (the other one being Uranus). Being composed primarily of gases and liquids, it has no well-defined "solid surface". The planet orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km; 2.8 billion mi). It is named after the Roman god of the sea and has the astronomical symbol ♆, representing Neptune's trident.`,
      `Neptune is not visible to the unaided eye and is the only planet in the Solar System found by mathematical prediction rather than by empirical observation. Unexpected changes in the orbit of Uranus led Alexis Bouvard to hypothesise that its orbit was subject to gravitational perturbation by an unknown planet. After Bouvard's death, the position of Neptune was predicted from his observations, independently, by John Couch Adams and Urbain Le Verrier. Neptune was subsequently observed with a telescope on 23 September 1846 by Johann Galle within a degree of the position predicted by Le Verrier. Its largest moon, Triton, was discovered shortly thereafter, though none of the planet's remaining 13 known moons were located telescopically until the 20th century. The planet's distance from Earth gives it a very small apparent size, making it challenging to study with Earth-based telescopes. Neptune was visited by Voyager 2, when it flew by the planet on 25 August 1989; Voyager 2 remains the only spacecraft to have visited Neptune. The advent of the Hubble Space Telescope and large ground-based telescopes with adaptive optics has recently allowed for additional detailed observations from afar.`,
      `Like Jupiter and Saturn, Neptune's atmosphere is composed primarily of hydrogen and helium, along with traces of hydrocarbons and possibly nitrogen, though it contains a higher proportion of ices such as water, ammonia and methane. However, similar to Uranus, its interior is primarily composed of ices and rock; Uranus and Neptune are normally considered "ice giants" to emphasise this distinction. Along with Rayleigh scattering, traces of methane in the outermost regions in part account for the planet's blue appearance. Newest data from the Gemini observatory shows the blue color is more saturated than the one present on Uranus due to thinner haze of Neptune's more active atmosphere.`,
      `In contrast to the hazy, relatively featureless atmosphere of Uranus, Neptune's atmosphere has active and visible weather patterns. For example, at the time of the Voyager 2 flyby in 1989, the planet's southern hemisphere had a Great Dark Spot comparable to the Great Red Spot on Jupiter. More recently, in 2018, a newer main dark spot and smaller dark spot were identified and studied. In addition, these weather patterns are driven by the strongest sustained winds of any planet in the Solar System, with recorded wind speeds as high as 2,100 km/h (580 m/s; 1,300 mph). Because of its great distance from the Sun, Neptune's outer atmosphere is one of the coldest places in the Solar System, with temperatures at its cloud tops approaching 55 K (−218 °C; −361 °F). Temperatures at the planet's centre are approximately 5,400 K (5,100 °C; 9,300 °F). Neptune has a faint and fragmented ring system (labelled "arcs"), which was discovered in 1984, then later confirmed by Voyager 2.`,
    ],
  },
];
