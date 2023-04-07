const video = document.getElementById("video");
const audio = document.getElementById("audio");
const counter = document.getElementById("counter");
const count = document.getElementById("count");
const stats = document.getElementById("stats");
const users = document.getElementById("users");
const plays = document.getElementById("plays");
const channels = document.getElementById("channels");
const servers = document.getElementById("servers");
const close = document.getElementById("close");

video.addEventListener("click", (ev) => {
  ev.target.currentTime = 0;
  audio.currentTime = 0;
  ev.target.play();
  audio.play();
});

counter.addEventListener("click", () => {
  if (stats.className === "show") {
    stats.className = "hide";
  } else {
    stats.className = "show";
  }
});

close.addEventListener("click", () => {
  stats.className = "hide";
});

let total = 1664342;
let unique_users = 67092;
let unique_channels = 51199;
let unique_servers = 31099;

let eventSource = new EventSource("https://airhorn.solutions/api/events");
eventSource.onmessage = (e) => {
  console.log(e.data);
  const data = JSON.parse(e.data);
  count.innerText = Number(data.total).toLocaleString("en-US");
  plays.innerText = Number(data.total).toLocaleString("en-US");
  users.innerText = Number(data.unique_users).toLocaleString("en-US");
  channels.innerText = Number(data.unique_channels).toLocaleString("en-US");
  servers.innerText = Number(data.unique_guilds).toLocaleString("en-US");
};
