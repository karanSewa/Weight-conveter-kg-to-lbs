"use strict";
document.querySelector("button").addEventListener("click", () => {
  let kg = document.querySelector("#weightNum").value;
  kg = Number(kg);
  let lb = Math.trunc(kg * 2.20462);
  document.querySelector(".output").textContent = `Your are ${lb} in pounds`;
});
