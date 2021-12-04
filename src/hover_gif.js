const sphere = document.querySelector(".sphere");
const terrain = document.querySelector(".terrain");
const origami = document.querySelector(".origami");
const sphereGIF = document.querySelector(".sphere-gif");
const terrainGIF = document.querySelector(".terrain-gif");
const origamiGIF = document.querySelector(".origami-gif");


// Sphere GIF
sphere.addEventListener("mouseover", () => {
	sphereGIF.style.display = "block";
      window.addEventListener("mousemove", (e) => {
        let x = e.offsetX,
          y = e.offsetY;
          sphereGIF.style.left = `${x-200}px`;
          sphereGIF.style.top = `${y-450}px`;
      })
});

sphere.addEventListener("mouseleave", () => {
	sphereGIF.style.display = "";
});


// Terrain GIF
terrain.addEventListener("mouseover", () => {
	terrainGIF.style.display = "block";
      window.addEventListener("mousemove", (e) => {
        let x = e.offsetX,
          y = e.offsetY;
          terrainGIF.style.left = `${x-400}px`;
          terrainGIF.style.top = `${y-550}px`;
      })
});

terrain.addEventListener("mouseleave", () => {
	terrainGIF.style.display = "";
});


// Origami GIF
origami.addEventListener("mouseover", () => {
	origamiGIF.style.display = "block";
      window.addEventListener("mousemove", (e) => {
        let x = e.offsetX,
          y = e.offsetY;
          origamiGIF.style.left = `${x-450}px`;
          origamiGIF.style.top = `${y-375}px`;
      })
});

origami.addEventListener("mouseleave", () => {
	origamiGIF.style.display = "";
});