import React from "react";
import Sketch from "react-p5";

import "./Simulation.css";

export default class Simulation extends React.Component {
  SimulationSketch() {
    // Image variables
    var earth;
    var moon;

    // Input variables
    var inputMassEarth;
    var inputMassMoon;
    var inputRadius;

    // Input processing variables
    var radius;
    var massMoon;
    var massEarth;

    // Vector calculation variables
    var canvasCenter;
    var cmV;
    var earthV;
    var moonV;

    // Vector display variables
    var cmDV;
    var earthDV;
    var moonDV;

    // Rotation variables
    var angle = 0;
    var speed = 0.01;

    function preload(p5) {
      earth = p5.loadImage(
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/Kawaii_earth_clipart.svg"
      );
      moon = p5.loadImage(
        "https://upload.wikimedia.org/wikipedia/commons/e/ee/Weather_icon_-_full_moon.svg"
      );
    }
    function setup(p5, parent) {
      inputMassEarth = 5.97;
      inputMassMoon = 7.3;
      inputRadius = 384400;

      p5.createCanvas(850, 850).parent(parent);
      canvasCenter = p5.createVector(p5.width / 2, p5.height / 2);
    }
    function draw(p5) {
      p5.background(220);
      p5.imageMode(p5.CENTER);

      massEarth = inputMassEarth * Math.pow(10, 21);
      massMoon = inputMassMoon * Math.pow(10, 19);
      radius = inputRadius * Math.pow(10, -3);

      earthV = p5.createVector(
        canvasCenter.x - p5.cos(angle),
        canvasCenter.y - p5.sin(angle)
      );

      moonV = p5.createVector(
        canvasCenter.x + radius * p5.cos(angle),
        canvasCenter.y + radius * p5.sin(angle)
      );

      cmV = p5.createVector(
        (massEarth * earthV.x + massMoon * moonV.x) / (massEarth + massMoon),
        (massEarth * earthV.y + massMoon * moonV.y) / (massEarth + massMoon)
      );

      earthDV = p5.createVector(
        earthV.x + (canvasCenter.x - cmV.x),
        earthV.y + (canvasCenter.y - cmV.y)
      );

      moonDV = p5.createVector(
        moonV.x + (canvasCenter.x - cmV.x),
        moonV.y + (canvasCenter.y - cmV.y)
      );

      cmDV = p5.createVector(
        (massEarth * earthDV.x + massMoon * moonDV.x) / (massEarth + massMoon),
        (massEarth * earthDV.y + massMoon * moonDV.y) / (massEarth + massMoon)
      );

      // Draw earth
      p5.fill("#9cd3db");
      p5.stroke("black");
      p5.strokeWeight(1);
      p5.image(earth, earthDV.x, earthDV.y, 100, 100);

      // Draw moon
      p5.fill("#c2c5cc");
      p5.stroke("black");
      p5.strokeWeight(1);
      p5.image(moon, moonDV.x, moonDV.y, 50, 50);

      // Draw center of mass
      p5.stroke("red");
      p5.strokeWeight(2);
      cross(p5, cmDV.x, cmDV.y, 5);

      angle += speed;
    }
    function cross(p5, x, y, length) {
      p5.line(x - length, y + length, x + length, y - length);
      p5.line(x - length, y - length, x + length, y + length);
    }
    function arrow(p5, point1, point2, vertexRadius) {
      p5.line(point1.x, point1.y, point2.x, point2.y);
      p5.translate(point2.x, point2.y);
      p5.rotate(p5.atan2(point1.y - point2.y, point1.x - point2.x) - p5.HALF_PI);
      p5.triangle(
        -vertexRadius * 0.5,
        vertexRadius,
        vertexRadius * 0.5,
        vertexRadius,
        0,
        -vertexRadius / 2
      );
      p5.rotate(-(p5.atan2(point1.y - point2.y, point1.x - point2.x) - p5.HALF_PI));
      p5.translate(-point2.x, -point2.y);
    }
    return (
      <>
        <Sketch preload={preload} setup={setup} draw={draw} />
        <div className="values">
          <label htmlFor="massEarth">
            Masse Erde (10<sup>24</sup> kg)
          </label>
          <input
            type="number"
            id="massEarth"
            defaultValue="5.97"
            value={inputMassEarth}
            onChange={(e) => (inputMassEarth = e.target.value)}
          />
          {/* <input
            type="range"
            id="massEarth"
            min="0"
            max="100"
            defaultValue="5.97"
            value={inputMassEarth}
            onChange={(e) => (inputMassEarth = e.target.value)}
          /> */}
          <label htmlFor="massEarth">
            Masse Mond (10<sup>22</sup> kg)
          </label>
          <input
            type="number"
            id="massMoon"
            defaultValue="7.3"
            value={inputMassMoon}
            onChange={(e) => (inputMassMoon = e.target.value)}
          />
          {/* <input
            type="range"
            id="massMoon"
            min="0"
            max="100"
            defaultValue="0.079"
            value={inputMassMoon}
            onChange={(e) => (inputMassMoon = e.target.value)}
          /> */}
          <label htmlFor="distanceEarthMoon">Entfernung Erde-Mond (km)</label>
          <input
            type="number"
            id="distanceEarthMoon"
            defaultValue="384400"
            value={inputRadius}
            onChange={(e) => (inputRadius = e.target.value)}
          />
          {/* <input
            type="range"
            id="distanceEarthMoon"
            min="1"
            max="768800"
            defaultValue="384400"
            value={inputRadius}
            onChange={(e) => this.setState(inputRadius, e.target.value)}
          /> */}
        </div>
      </>
    );
  }

  render() {
    return (
      <div className="Simulation">
        <this.SimulationSketch />
      </div>
    );
  }
}
