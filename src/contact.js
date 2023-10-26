import { contactData } from "./arrayobject";

export function contact() {
  const container = document.getElementById("content");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact");
  container.appendChild(contactContainer);

  const contactContainerHeading = document.createElement("h2");
  contactContainerHeading.textContent = "Order Now or Dine In! - your choice";
  contactContainerHeading.classList.add("contactHeading");
  contactContainer.appendChild(contactContainerHeading);

  function location(city, address, email) {
    const outlet = document.createElement("div");
    outlet.classList.add("outlet");

    const cityName = document.createElement("h2");
    cityName.textContent = city;
    outlet.appendChild(cityName);

    const outletAddress = document.createElement("p");
    outletAddress.textContent = address;
    outlet.appendChild(outletAddress);

    const outletEmail = document.createElement("p");
    outletEmail.textContent = email;
    outlet.appendChild(outletEmail);

    return outlet;
  }

  for (const loc of contactData) {
    const locations = location(loc.cityName, loc.address, loc.email);
    contactContainer.appendChild(locations);
  }
}
