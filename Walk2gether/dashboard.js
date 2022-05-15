let bg = ["#5680E9", "#84CEEB", "#5AB9EA", "#C1C8E4", "#8860D0", "#8860D0"];
let title = ["Home", "Filters", "Location Information", "Invite Friends", "Emergency Reach Out"];
let desc = [
  "A solution to a critical problem that addresses the issue of feeling unsafe when venturing out alone and fundamentally alters the way we travel.",
  "When navigating, select the offence you want to avoid by clicking on checkboxes.",
  "Provides the possibility to adjust settings to warn the user of specific situations and incorporates heat map technology that displays red alert zones in real-time, allowing the user to chart their route comfortably.",
  "You can connect to follow your friends route, Invite them to accmpany you in your travel.",
  "Urgently call people for your help!",
];
let link = ["signup.html", "filters.html", "googlemap.html", "friends.html", "call.html"];
let onclick = ["home", "filter", "googlemap", "invite", "reach"];
let button = ["Go", "Filter", "Locate", "Invite", "Reach out"];

let str = [];
for (let i = 0; i < 5; i++) {
  str[i] = `
<div class="w-1/3 p-6 max-w-sm bg-[${bg[i]}] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
<a href="${link[i]}">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${title[i]}</h5>
</a>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
${desc[i]}
</p>
<a href="${link[i]}" onclick="nav('${onclick[i]}')" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
	${button[i]}
	<svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a>
</div>
`;
}

document.getElementById("row1").innerHTML = str[0] + str[1] + str[2];
document.getElementById("row2").innerHTML = str[3] + str[4];

/** ----------------------------------------------- */

function toggleMenu() {
  let navigation = document.querySelector(".navigation");
  let toggle = document.querySelector(".toggle");
  let navbar = document.querySelector(".navbar");
  navigation.classList.toggle("active");
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
}

/** ----------------------------------------------- */

function dash() {
  document.getElementById("dashboard").classList.toggle("hidden");
}

function nav(name) {
  if (name === "filter") {
    dash();
    document.getElementById("filter").classList.toggle("hidden");
  } else if (name === "locate") {
    dash();
    document.getElementById("googlemap").classList.toggle("hidden");
  } else if (name === "reach") {
    dash();
    document.getElementById("reach-out").classList.toggle("hidden");
  }
}

/** ----------------------------------------------- */

function nex(a, x, y, z) {
  if (a.classList.contains("hidden")) {
    a.classList.toggle("hidden");
    if (!x.classList.contains("hidden")) x.classList.toggle("hidden");
    if (!y.classList.contains("hidden")) y.classList.toggle("hidden");
    if (!z.classList.contains("hidden")) z.classList.toggle("hidden");
  }
}

function hideOther(name) {
  let f = document.getElementById("filters");
  let c = document.getElementById("googlemap");
  let r = document.getElementById("reach-out");
  let d = document.getElementById("dashboard");

  if (name === "dash") {
    nex(d, c, f, r);
  } else if (name === "filter") {
    nex(f, d, c, r);
  } else if (name === "googlemap") {
    nex(c, d, f, r);
  } else if(name === "reach") {
    nex(r, d, f, c);
  }
}

document.getElementById("googlemap").onclick = () => hideOther("googlemap");
document.getElementById("filter").onclick = () => hideOther("filter");
document.getElementById("dash").onclick = () => hideOther("dash");
document.getElementById("reach").onclick = () => hideOther("reach");