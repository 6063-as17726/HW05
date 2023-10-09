let dataObject;
let data;
let latitudeMin; 
let latitudeMax; 
let longitudeMin; 
let longitudeMax; 

function preload() {
  let url = "https://dm-gy-6063-2023f-d.github.io/assets/homework/05/Tree-Census-2015/Tree-Census-2015.json"; 
  dataObject = loadJSON(url);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  data = Object.values(dataObject);
  for (let i = 0; i < data.length; i++) {
    let latitude = data[i].latitude;
    let longitude = data[i].longitude;

    latitudeMin = min(latitudeMin, latitude);
    latitudeMax = max(latitudeMax, latitude);
    longitudeMin = min(longitudeMin, longitude);
    longitudeMax = max(longitudeMax, longitude);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < data.length; i++) {
    let latitude = data[i].latitude; 
    let longitude = data[i].longitude; 
    let x = map(latitude,latitudeMin,latitudeMax,0, width); 
    let y = map(longitude,longitudeMin,longitudeMax,0, height); 
    if (data[i].health == "good") {
      fill("ForestGreen"); 
    }
  else if (data[i].health == "fair") {
    fill("YellowGreen"); 
    }
  else if (data[i].health == "poor") {
    fill("Sienna"); 
    }
  ellipse(x,y,10,10);
  //if (data[i].borough == "Brooklyn") {
  //}
  }
}
