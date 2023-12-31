$("body").fireworks();

// old year & new year

const oldYear = document.querySelector(".old_year");
const newYears = document.querySelectorAll(".new_year");
const currentYear = new Date().getFullYear();

oldYear.textContent = currentYear;
newYears.forEach((newYear) => (newYear.textContent = currentYear + 1));
