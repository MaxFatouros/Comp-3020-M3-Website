const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}



const address = document.getElementById("address");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");


form.addEventListener("submit", (e) => {
  let messages = [];
  if (address.value === "" || address.value == null) {
    messages.push("Address cannot be empty");
  }

  if ( !/\d/.test(address.value) ) {
    messages.push("Address must contain street number");
  }

  if ( !/[a-zA-Z]/.test(address.value) ) {
    messages.push("Address must contain street name");
  }

  if ( !/(dr|drive|bay|avenue|ave|bend|boulevard|blvd|street|st|end|route|rte)/i.test(address.value) ) {
    messages.push("Address must contain suffix eg. drive");
  }

  if (messages.length > 0) {
    e.preventDefault();
    window.alert(messages[0]);
  }
})
