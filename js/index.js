const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const headerImg = document.getElementById('cta-img')
headerImg.src = "img/header-img.png"

const midImg = document.getElementById('middle-img')
midImg.src = "img/mid-page-accent.jpg"

let nav = document.querySelector('nav');

let navItem = document.querySelectorAll('a');

navItem[0].textContent = siteContent["nav"]["nav-item-1"];
navItem[1].textContent = siteContent["nav"]["nav-item-2"];
navItem[2].textContent = siteContent["nav"]["nav-item-3"];
navItem[3].textContent = siteContent["nav"]["nav-item-4"];
navItem[4].textContent = siteContent["nav"]["nav-item-5"];
navItem[5].textContent = siteContent["nav"]["nav-item-6"];

navItem[0].style.color = 'green';
navItem[1].style.color = 'green';
navItem[2].style.color = 'green';
navItem[3].style.color = 'green';
navItem[4].style.color = 'green';
navItem[5].style.color = 'green';

const welcome = document.createElement("a");
welcome.textContent = "Welcome"
welcome.href = '#';
welcome.style.color = 'green';

const blog = document.createElement("a");
blog.textContent = "Blog";
blog.href='#';
blog.style.color = 'green';

nav.prepend(welcome);
nav.appendChild(blog);

const mainHeading = document.querySelector('.cta h1');
mainHeading.textContent = siteContent["cta"]["h1"];

mainHeading.style.fontFamily = 'Arial Black';
mainHeading.style.color = 'green';

const start = document.querySelector('.cta button');
start.textContent = siteContent["cta"]["button"];

start.style.fontFamily = 'Arial Black';
start.style.color = 'green';

const headingMainContent = document.querySelectorAll('div.text-content > h4')
headingMainContent[0].textContent = siteContent["main-content"]["features-h4"];
headingMainContent[1].textContent = siteContent["main-content"]["about-h4"];
headingMainContent[2].textContent = siteContent["main-content"]["services-h4"];
headingMainContent[3].textContent = siteContent["main-content"]["product-h4"];
headingMainContent[4].textContent = siteContent["main-content"]["vision-h4"];


const paragraphContent = document.querySelectorAll('div.text-content > p')
paragraphContent[0].textContent = siteContent["main-content"]["features-content"];
paragraphContent[1].textContent = siteContent["main-content"]["about-content"];
paragraphContent[2].textContent = siteContent["main-content"]["services-content"];
paragraphContent[3].textContent = siteContent["main-content"]["product-content"];
paragraphContent[4].textContent = siteContent["main-content"]["vision-content"];

const contactTitle = document.querySelector('section.contact h4');
contactTitle.textContent = siteContent.contact['contact-h4'];

const contactInfo = document.querySelectorAll('section.contact > p');
contactInfo[0].innerHTML = siteContent.contact.address;
contactInfo[1].innerHTML = siteContent.contact.phone;
contactInfo[2].innerHTML = siteContent.contact.email;


const footerSelector = document.querySelector('footer p');
footerSelector.textContent = siteContent["footer"]["copyright"];

