const nav = document.querySelector(".nav");
const aboutUs = document.querySelector("#about-us");
const contact = document.querySelector("#contact");
const offer = document.querySelector("#offer");

fetch("./partials/header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    nav.innerHTML = data;
  });

fetch("./partials/about-us.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    aboutUs.innerHTML = data;
  });

fetch("./partials/contact.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    contact.innerHTML = data;
  });

fetch("./partials/offer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    offer.innerHTML = data;
  });

fetch("./partials/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });
