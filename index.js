

const peopleBtn = document.getElementById("people");
const filmsBtn = document.getElementById("films");
const planetsBtn = document.getElementById("planets");
const speciesBtn = document.getElementById("species");
const starshipsBtn = document.getElementById("starships");
const vehiclesBtn = document.getElementById("vehicles");

const root = document.getElementById("root");

const fetchAndRender = (query, myClass) => {
  fetch(`http://swapi.dev/api/${query}`)
    .then((response) => response.json(response.body))
    .then((data) => data.results.map((el) => new myClass(el).createLine()))
    .then((names) => (root.innerHTML = names.join("")))
    .catch((error) => console.log(error));
};

peopleBtn.addEventListener("click", () => fetchAndRender("people", Persone));
filmsBtn.addEventListener("click", () => fetchAndRender("films", Film));
planetsBtn.addEventListener("click", () => fetchAndRender("planets", Planet));
speciesBtn.addEventListener("click", () => fetchAndRender("species", Species));
starshipsBtn.addEventListener("click", () =>
  fetchAndRender("starships", Starship)
);
vehiclesBtn.addEventListener("click", () =>
  fetchAndRender("vehicles", Vehicle)
);

class Persone {
  constructor({ name, gender, height, mass }) {
    this.name = name;
    this.gender = gender;
    this.height = height;
    this.mass = mass;
  }
  createLine() {
    return `<li><span>Name: ${this.name}</span> <span>Gender: ${this.gender}</span> <span>Height: ${this.height}</span> <span>Mass: ${this.mass}</span></li>`;
  }
}

class Film {
  constructor({ title, director, producer }) {
    this.title = title;
    this.director = director;
    this.producer = producer;
  }
  createLine() {
    return `<li><span>Title: ${this.title}</span> <span>Director: ${this.director}</span> <span>Producer: ${this.producer}</span></li>`;
  }
}

class Planet {
  constructor({
    name,
    climate,
    diameter,
    population,
    terrain,
    rotation_period,
  }) {
    this.name = name;
    this.climate = climate;
    this.diameter = diameter;
    this.population = population;
    this.terrain = terrain;
    this.rotation_period = rotation_period;
  }
  createLine() {
    return `<li>Name: ${this.name} Climate: ${this.climate} Diameter: ${this.diameter} Population: ${this.population} Terrain: ${this.terrain} Rotation_period: ${this.rotation_period} </li>`;
  }
}

class Species {
  constructor({
    name,
    language,
    average_lifespan,
    average_height,
    designation,
  }) {
    this.name = name;
    this.language = language;
    this.average_lifespan = average_lifespan;
    this.average_height = average_height;
    this.designation = designation;
  }
  createLine() {
    return `<li>Name: ${this.name} Language: ${this.language} Average_lifespan: ${this.average_lifespan} Average_height: ${this.average_height} Designation: ${this.designation}</li>`;
  }
}

class Starship {
  constructor({
    name,
    MGLT,
    cargo_capacity,
    crew,
    hyperdrive_rating,
    length,
    manufacturer,
    max_atmosphering_speed,
    model,
    passengers,
  }) {
    this.name = name;
    this.MGLT = MGLT;
    this.cargo_capacity = cargo_capacity;
    this.crew = crew;
    this.hyperdrive_rating = hyperdrive_rating;
    this.length = length;
    this.manufacturer = manufacturer;
    this.max_atmosphering_speed = max_atmosphering_speed;
    this.model = model;
    this.passengers = passengers;
  }
  createLine() {
    return `<li>Name: ${this.name} MGLT: ${this.MGLT} Cargo_capacity: ${this.cargo_capacity} Crew: ${this.crew} Hyperdrive_rating: ${this.hyperdrive_rating} Length: ${this.length} Mnufacturer: ${this.manufacturer} Max_atmosphering_speed: ${this.max_atmosphering_speed} Model: ${this.model} Passengers: ${this.passengers}</li>`;
  }
}

class Vehicle {
  constructor({
    name,
    model,
    manufacturer,
    length,
    crew,
    passengers,
    max_atmosphering_speed,
    cargo_capacity,
    vehicle_class,
  }) {
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    this.length = length;
    this.crew = crew;
    this.passengers = passengers;
    this.max_atmosphering_speed = max_atmosphering_speed;
    this.cargo_capacity = cargo_capacity;
    this.vehicle_class = vehicle_class;
  }
  createLine() {
    return `<li>Name: ${this.name} Model: ${this.model} Length: ${this.length} Manufacturer: ${this.manufacturer} Crew: ${this.crew} Passengers: ${this.passengers} Max_atmosphering_speed: ${this.max_atmosphering_speed} Cargo_capacity: ${this.cargo_capacity} vehicle_class: ${this.vehicle_class}</li>`;
  }
}
