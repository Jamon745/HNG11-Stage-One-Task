
//navbar scroll effect
let initialScroll = 0;
const navbar = document.getElementById("navbar");
let navbarHeight = navbar.clientHeight;

navbar.classList.add("hidden");

window.addEventListener('scroll', () => {
  let scrollTop = document.documentElement.scrollTop || window.scrollY;

  if (scrollTop > initialScroll + navbarHeight) {
      navbar.classList.add("fixed");
      navbar.classList.remove("hidden");
    } else {
      navbar.classList.remove("fixed");
      navbar.classList.add("hidden");
    }
  
  initialScroll = scrollTop;
});


// Current Day of the Week and Time in UTC
const now = new Date();

const utcYear = now.getUTCFullYear();
const utcMonth = now.getUTCMonth() + 1; 
const utcDay = now.getUTCDate();
const utcHours = now.getUTCHours();
const utcMinutes = now.getUTCMinutes();
const utcSeconds = now.getUTCSeconds();

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const utcDayOfWeek = daysOfWeek[now.getUTCDay()]; 

// Formatting UTC time
const utcTimeString = `${utcHours.toString().padStart(2, '0')}:${utcMinutes.toString().padStart(2, '0')}:${utcSeconds.toString().padStart(2, '0')}`;

// Display elements in the HTML
const utcTimeEl = document.getElementById('currentTimeUTC');
const utcDayEl = document.getElementById('currentDay');

// Display the Date and Time in UTC
utcTimeEl.textContent = `Current Time in UTC: ${utcTimeString}`;
utcDayEl.textContent = `Current Day in UTC: ${utcDayOfWeek}`;


