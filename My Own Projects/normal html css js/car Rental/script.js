const harmburger = document.querySelector(".hamburgerMenu");
const sideBar = document.querySelector(".sidebar");

harmburger.addEventListener("click", () => {
  console.log("clicked");

  if (sideBar.classList.contains("sidebar-active")) {
    closeSideBar();
  } else {
    sideBar.style.width = `${100 / 4}%`;
    sideBar.parentElement.style.zIndex = "5";
    sideBar.classList.add("sidebar-active");
    setTimeout(() => {
      sideBar.nextElementSibling.classList.remove("d-none");
    }, 100);
  }
});

sideBar.nextElementSibling.addEventListener("click", closeSideBar);

function closeSideBar() {
  sideBar.nextElementSibling.classList.add("d-none");
  sideBar.classList.add("d-none");
  setTimeout(() => {
    sideBar.classList.remove("d-none");
  }, 100);
  sideBar.style.width = `0%`;
  sideBar.classList.remove("sidebar-active");
}



const diplayItems = document.querySelector(".diplay-items");

const oneWayClick = document.querySelector("#oneWayClick");
oneWayClick.addEventListener("click", () => {
  diplayItems.innerHTML = ` <div class="">
                  <label for="from-oneWay" class="form-label fw-semibold"
                    >From</label
                  >
                  <input
                    type="text"
                    class="form-control greeninp fs-6"
                    id="from-oneWay"
                    placeholder="Enter Pickup Location"
                  />
                </div>
                <div class="">
                  <label for="to-oneWay" class="form-label fw-semibold"
                    >To</label
                  >
                  <input
                    type="text"
                    class="form-control greeninp fs-6"
                    id="to-oneWay"
                    placeholder="Enter Drop Location"
                  />
                </div>
                <div class="">
                  <label for="pickupDate-oneWay" class="form-label fw-semibold"
                    >Pickup Date</label
                  >
                  <input
                    type="date"
                    class="form-control greeninp fs-6"
                    id="pickupDate-oneWay"
                    placeholder="Enter Drop Location"
                  />
                </div>
                <div class="">
                  <label for="pickupDate-oneWay" class="form-label fw-semibold"
                    >Pickup Time</label
                  >
                  <div class="dropdown" style="width: 300px">
                    <!-- Input-like button -->
                    <button
                      class="form-control text-start"
                      id="timeDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select Time
                    </button>

                    <!-- Dropdown menu with scroll -->
                    <ul
                      class="dropdown-menu"
                      style="height: 400px; overflow-y: auto; width: 100%"
                      aria-labelledby="timeDropdown"
                      id="timeList"
                    >
                      <!-- Times will be injected here -->
                    </ul>
                  </div>
                </div>`;
});

const RoundTripClick = document.querySelector("#RoundTripClick");
RoundTripClick.addEventListener("click", () => {
  diplayItems.innerHTML = `  <div class="" style="min-width: 17%">
                <label for="from-RoundTrip" class="form-label fw-semibold"
                  >From</label
                >
                <input
                  type="text"
                  class="form-control greeninp fs-6"
                  id="from-RoundTrip"
                  placeholder="Enter Pickup Location"
                />
              </div>
              <div class="" style="min-width: 17%">
                <label for="to-RoundTrip" class="form-label fw-semibold">To</label>
                <input
                  type="text"
                  class="form-control greeninp fs-6"
                  id="to-RoundTrip"
                  placeholder="Enter Drop Location"
                />
              </div>
              <div class="" style="min-width: 17%">
                <label for="pickupDate-RoundTrip" class="form-label fw-semibold"
                  >Pickup Date</label
                >
                <input
                  type="date"
                  class="form-control greeninp fs-6"
                  id="pickupDate-RoundTrip"
                  placeholder="Enter Drop Location"
                />
              </div>
              <div class="" style="min-width: 17%">
                <label for="pickupDate-RoundTrip" class="form-label fw-semibold"
                  >Return Date</label
                >
                <input
                  type="date"
                  class="form-control greeninp fs-6"
                  id="pickupDate-RoundTrip"
                  placeholder="Enter Drop Location"
                />
              </div>
              <div class="" style="min-width: 17%">
                <label for="pickupDate-RoundTrip" class="form-label fw-semibold"
                  >Pickup Time</label
                >
                <div class="dropdown" style="width: 100%">
                  <!-- Input-like button -->
                  <button
                    class="form-control text-start"
                    id="timeDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style="width: 100%"
                  >
                    Select Time
                  </button>

                  <!-- Dropdown menu with scroll -->
                  <ul
                    class="dropdown-menu"
                    style="height: 400px; overflow-y: auto; width: 100%"
                    aria-labelledby="timeDropdown"
                    id="timeList"
                  >
                    <!-- Times will be injected here -->
                  </ul>
                </div>
              </div>`;
});

const LocalClick = document.querySelector("#LocalClick");
LocalClick.addEventListener("click", () => {
  diplayItems.innerHTML = ` <div
                class="d-flex flex-row justify-content-center"
                style="gap: 3%"
              >
                <div class="">
                  <label for="city-Local" class="form-label fw-semibold"
                    >City</label
                  >
                  <input
                    type="text"
                    class="form-control greeninp fs-6"
                    id="city-Local"
                    placeholder="Enter Drop Location"
                  />
                </div>
                <div class="">
                  <label for="pickupDate-Local" class="form-label fw-semibold"
                    >Pickup Date</label
                  >
                  <input
                    type="date"
                    class="form-control greeninp fs-6"
                    id="pickupDate-Local"
                    placeholder="Enter Drop Location"
                  />
                </div>
                <div class="">
                  <label for="pickupDate-Local" class="form-label fw-semibold"
                    >Pickup Time</label
                  >
                  <div class="dropdown" style="width: 300px">
                    <!-- Input-like button -->
                    <button
                      class="form-control text-start"
                      id="timeDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select Time
                    </button>

                    <!-- Dropdown menu with scroll -->
                    <ul
                      class="dropdown-menu"
                      style="height: 400px; overflow-y: auto; width: 100%"
                      aria-labelledby="timeDropdown"
                      id="timeList"
                    >
                      <!-- Times will be injected here -->
                    </ul>
                  </div>
                </div>
              </div>`;
});

const AirportClick = document.querySelector("#AirportClick");
AirportClick.addEventListener("click", () => {
  diplayItems.innerHTML = `    <div class="" style="min-width: 17%">
                  <label for="from-Airport" class="form-label fw-semibold"
                    >Pickup Address</label
                  >
                  <input
                    type="text"
                    class="form-control greeninp fs-6"
                    id="from-Airport"
                    placeholder="Enter Pickup Location"
                  />
                </div>
                <div class="" style="min-width: 17%">
                  <label for="to-Airport" class="form-label fw-semibold"
                    >Drop Address</label
                  >
                  <input
                    type="text"
                    class="form-control greeninp fs-6"
                    id="to-Airport"
                    placeholder="Enter Drop Location"
                  />
                </div>
                <div class="" style="min-width: 17%">
                  <label for="pickupDate-oneWay" class="form-label fw-semibold"
                    >Pickup Date</label
                  >
                  <input
                    type="date"
                    class="form-control greeninp fs-6"
                    id="pickupDate-oneWay-oneWay"
                    placeholder="Enter Drop Location"
                  />
                </div>               
                <div class="" style="min-width: 17%">
                  <label for="pickupDate-oneWay" class="form-label fw-semibold"
                    >Pickup Time</label
                  >
                  <div class="dropdown" style="width: 300px">
                    <!-- Input-like button -->
                    <button
                      class="form-control text-start"
                      id="timeDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style="width: 100%"
                    >
                      Select Time
                    </button>

                    <!-- Dropdown menu with scroll -->
                    <ul
                      class="dropdown-menu"
                      style="height: 400px; overflow-y: auto; width: 100%"
                      aria-labelledby="timeDropdown"
                      id="timeList"
                    >
                      <!-- Times will be injected here -->
                    </ul>
                  </div>
                </div>`;
});


