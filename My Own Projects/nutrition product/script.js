const sideArray = [
  {
    h3: "All Natural Peanut Butter",
    img: "https://pintola.in/cdn/shop/files/All_Natural_Creamy_350gm_600x600_9d3cc337-ace9-4fed-bc7f-1cbfd070ecfe_800x.jpg?v=1742190418",
  },
  {
    h3: "All Natural Almond Butter",
    img: "https://pintola.in/cdn/shop/files/Almond_Butter_Crunchy_200gm_600x600_4e4b6074-e517-4ed8-b42c-24288ef68a8e_800x.jpg?v=1742190289",
  },
  {
    h3: "All Natural Cashew Butter",
    img: "https://pintola.in/cdn/shop/files/All_Natural_Cashew_200gm_600x600_39ab525c-9d83-469a-af7d-6d620e792aff_800x.jpg?v=1732016667",
  },
  {
    h3: "Dark Chocolate Peanut Butter",
    img: "https://pintola.in/cdn/shop/files/Dark_Chocolate_Crunchy_350gm_600x600_176e9fb8-6918-4953-91e4-363ecf187952_800x.jpg?v=1732089246",
  },
];

let sidecount = 0;

const sideBtn = document.querySelectorAll(".sidebtn");
const side = document.querySelectorAll(".side");

sideBtn[1].addEventListener("click", (e) => {
  e.preventDefault();
  sidecount++;
  console.log(sidecount, " next is clicked");

  if (sidecount > 1) {
    return;
  }
  side[0].innerHTML = ` <h1 class="fw-semibold mt-4" style="color: rgba(39, 39, 39, 0.701);">Fuel your body, feed your soul.</h1>
            <h1 class="mt-3 fw-bold" style="font-size: 50px;">Nutrition Lovers</h1>
            <p class="fw-medium mt-3 fs-5">
              Nutrition: the ultimate performance booster.
            </p>
            <h3 class="mt-4 fs-2" style="color: #264fd4">
             ${sideArray[sidecount].h3}
            </h3>
            <div class="mt-5 pt-3" style="width: 150px;">
              <button
                class="btn text-light fw-semibold mt-3"
                type="button"
                style="height: 50px; width: 150px; background-color: rgba(136, 136, 136, 0.958);"
                
              >
                Buy Now
              </button>
            </div> `;

  side[1].innerHTML = ` <img
              class="img-fluid"
              style="object-fit: cover"
              src="${sideArray[sidecount].img}"
              alt=""
              srcset=""
            />  `;
});

sideBtn[0].addEventListener("click", () => {
  sidecount--;
  console.log(sidecount, " next is clicked");

  if (sidecount < 0) {
    return;
  }
  side[0].innerHTML = ` <h1 class="fw-semibold mt-4" style="color: rgba(39, 39, 39, 0.701);">Fuel your body, feed your soul.</h1>
            <h1 class="mt-3 fw-bold" style="font-size: 50px;">Nutrition Lovers</h1>
            <p class="fw-medium mt-3 fs-5">
              Nutrition: the ultimate performance booster.
            </p>
            <h3 class="mt-4 fs-2" style="color: #264fd4">
             ${sideArray[sidecount].h3}
            </h3>
            <div class="mt-5 pt-3" style="width: 150px;">
              <button
                class="btn text-light fw-semibold mt-3"
                type="button"
                style="height: 50px; width: 150px; background-color: rgba(136, 136, 136, 0.958);"
                
              >
                Buy Now
              </button>
            </div> `;

  side[1].innerHTML = ` <img
              class="img-fluid"
              style="object-fit: cover"
              src="${sideArray[sidecount].img}"
              alt=""
              srcset=""
            />`;
});

document.querySelectorAll("ul li a").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    const topPos = target.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: topPos - 100, // 👈 offset of 100px
      behavior: "smooth",
    });
  });
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (this.checkValidity()) {
    alert("Form submitted successfully");
  } else {
    this.reportValidity();
  }
});
