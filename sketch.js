let dataObject;
let data;
let latitudeMin; 
let latitudeMax; 
let longitudeMin; 
let longitudeMax; 

function preload() {
  dataObject = loadJSON("./Tree-Census-2015.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  data = Object.values(dataObject);
  for (let i = 0; i < data.length; i++) {
    let latitude = data[i].latitude;
    let longitude = data[i].longitude;

    latitudeMin = min(latitudeMin, price);
    latitudeMax = max(latitudeMax, price);
    longitudeMin = min(longitudeMin, points);
    longitudeMax = max(longitudeMax, points);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < data.length; i++) {
    
  }
}
