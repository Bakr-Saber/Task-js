let photos = [
  "https://th.bing.com/th/id/R.255fcae0b35e5a128ebf2dcbeb25b913?rik=saF0Dc9dF%2f1Nvw&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.VJQMtnjQd0cfPRKDWsXR4QHaEc?w=636&h=382&rs=1&pid=ImgDetMain",
  "https://cdn.vox-cdn.com/thumbor/GtztxlgUm4Sed5XiSIhoTDh9F4s=/0x0:1997x3000/1200x800/filters:focal(755x962:1073x1280)/cdn.vox-cdn.com/uploads/chorus_image/image/53831405/655306300.0.jpg",
  "https://u83y9h.c2.acecdn.net/wp-content/uploads/2017/07/60174686-768x435.jpg",
  "https://i.dailymail.co.uk/i/pix/2017/04/15/21/3F4902B400000578-0-image-a-48_1492287973279.jpg",
  "https://th.bing.com/th/id/OIP.dnYqHlIOLO-97fd27bLArwHaE8?rs=1&pid=ImgDetMain",
  "https://cdn.mos.cms.futurecdn.net/t4hjBHoPTKiuLvxJsMJQm9-1200-80.jpg",
  "https://th.bing.com/th/id/OIP.K1tWYby_rS2OKCPhbAgEIQAAAA?rs=1&pid=ImgDetMain",
  "https://wsvn.com/wp-content/uploads/sites/2/2017/07/messi.jpg",
  "https://miro.medium.com/max/1200/1*-ZY3Yxm5xCrrbVqm95YwTA.jpeg",
  "https://i.pinimg.com/originals/91/8d/a7/918da7f712b4aac3dfbded0316b53c84.jpg",
  "https://cdn.vox-cdn.com/thumbor/WS2VIqozjQ10C1PNpFiyrl6aD10=/0x0:2105x3162/1200x800/filters:focal(833x449:1169x785)/cdn.vox-cdn.com/uploads/chorus_image/image/53498873/643276992.0.jpg",
];

const container = document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);

for (let index in photos) {
  // const imgecontainer = document.createElement("div");
  // imgecontainer.setAttribute("class", "imge-container");
  const imge = document.createElement("img");
  imge.setAttribute("src", photos[index]);
  // const button = document.createElement("button");
  // button.textContent = "Delete!";
  // button.addEventListener("click", deleteing);
  imge.addEventListener("click", toggleVisiability);
  // imgecontainer.appendChild(imge);
  // imgecontainer.appendChild(button);
  container.appendChild(imge);
}

function toggleVisiability(event) {
  console.log(event.target);
  event.target.classList.toggle("hidden");
  // event.target.classList.toggle("hidden");
}
