import Gapp, { Mapbox } from "./controller.js";
import { enforceFormat, formatToPhone } from "./contactVal.js";
import { operationalTime, fieldData } from "./formValues.js";
import { tripLeg, roundTripOpt, commentsIns } from "./components.js";

const componentProps = [];

const inputElement = document.querySelectorAll(".phoneNum");
for (const contact of inputElement) {
  contact.addEventListener("keydown", enforceFormat);
  contact.addEventListener("keyup", formatToPhone);
}

const timeElement = document.querySelectorAll(".op-time");
for (const opTime of timeElement) {
  operationalTime.forEach((time) => {
    opTime.add(new Option(time));
  });
}

const addtlLegs = document.querySelector("#addtl_stop");
addtlLegs.addEventListener("click", () => {
  const legs = document.querySelectorAll(".legs");
  let legscount = legs.length;
  const addTrip = tripLeg(legscount + 1);
  const li = document.createElement("li");
  li.className = `list-group-item pb-3 legs`;
  li.innerHTML = addTrip["component"];
  componentProps.push(...addTrip["property"]);
  const insertEl =
    addtlLegs.parentElement.parentNode.parentElement.children[legscount];
  insertEl.after(li);
  document.querySelector("#search-js").dispatchEvent(new Event("load"));
});

const roundTrip = document.querySelector("#rt");
roundTrip.addEventListener("change", (e) => {
  if (!e.target.checked) {
    document.querySelector(".rt").remove();
  } else {
    const divEl = document.createElement("div");
    divEl.className = `form-floating col-md-3 pt-2 pb-2 rt`;
    divEl.innerHTML = roundTripOpt;
    e.target.parentElement.after(divEl);
    operationalTime.forEach((time) => {
      document.querySelector("#rt_t").add(new Option(time));
    });
  }
});

const specialIns = document.querySelector("#si");
specialIns.addEventListener("change", (e) => {
  if (e.target.checked) {
    const divEl = document.createElement("div");
    divEl.className = `form-floating pt-2 inst`;
    divEl.innerHTML = commentsIns;
    e.target.parentElement.after(divEl);
  } else {
    document.querySelector(".inst").remove();
  }
});

const generatedPU = document.querySelector("#gen-pu");
const puOpt = document.querySelector("#pu_t");
generatedPU.addEventListener("change", (e) => {
  const el = e.target.checked;
  if (!el) {
    puOpt.removeAttribute("disabled");
  } else {
    puOpt.setAttribute("disabled", "");
  }
});

const form = document.querySelector("#nemt-req");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = fieldData(componentProps);
  const send = Gapp.connect.send(formData);
  console.log(send);
});

document.addEventListener("DOMContentLoaded", () => {
  const collection = mapboxsearch.autofill({
    accessToken: Mapbox().ACCESS_TOKEN,
    options: { country: "us" },
  });
});
