const sphere = document.querySelector(".sphere"),
  terrain = document.querySelector(".terrain"),
  sphereGIF = document.querySelector(".sphere-gif"),
  terrainGIF = document.querySelector(".terrain-gif");

  

sphere.addEventListener("mouseover", () => {
  
  sphere.addEventListener("mousemove",()=>{
   sphereGIF.style.display = "block";
  
      window.addEventListener("mousemove", (e) => {
        let x = e.offsetX,
          y = e.offsetY;
          sphereGIF.style.left = `${x}px`;
          sphereGIF.style.top = `${y}px`;
      })
    })
});


sphere.addEventListener("mouseleave", () => {
	sphereGIF.style.display = "";
});

terrain.addEventListener("mouseover", () => {
	terrainGIF.style.display = "block";
      window.addEventListener("mousemove", (e) => {
        let x = e.offsetX,
          y = e.offsetY;
          terrainGIF.style.left = `${x}px`;
          terrainGIF.style.top = `${y}px`;
      })
});

terrain.addEventListener("mouseleave", () => {
	terrainGIF.style.display = "";
});

