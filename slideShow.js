"use strict";

const images = [
  { id: "1", url: "./img/1_ponte-luz.jpg" },
  { id: "2", url: "./img/2_morro-da-cruz.jpg" },
  { id: "3", url: "./img/3_mar.jpg" },
  { id: "4", url: "./img/4_lagoa-conceicao.jpg" },
  { id: "5", url: "./img/5_trilha.jpg" },
  { id: "6", url: "./img/6_mm.jpg" },
];

const containerItems = document.querySelector("#container-items");

const loadImages = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `
        <div class = 'item'>
            <img src = '${image.url}'>
        </div>
    `;
  });
};

loadImages(images, containerItems);
let items = document.querySelectorAll(".item");

const previous = () => {
  containerItems.appendChild(items[0]);
};

document.querySelector("#previous").addEventListener("click", previous);
