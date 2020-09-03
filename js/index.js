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

// Adding the nav bar
  // make anchor tags array like variable
    const navBar = document.getElementsByTagName('a');

  // adding text content to the anchor tags
    navBar[0].textContent = siteContent.nav["nav-item-1"];
    navBar[1].textContent = siteContent.nav["nav-item-2"];
    navBar[2].textContent = siteContent.nav["nav-item-3"];
    navBar[3].textContent = siteContent.nav["nav-item-4"];
    navBar[4].textContent = siteContent.nav["nav-item-5"];
    navBar[5].textContent = siteContent.nav["nav-item-6"];

 // adding new buttons to nav
    //prepend button 
      const newNav1 = document.createElement('a');
      newNav1.textContent = 'New Nav 1';
      const nav = document.querySelector('nav');
      nav.prepend(newNav1);

    // append button
      const newNav2 = document.createElement('a');
      newNav2.textContent = 'New Nav 2';
      nav.appendChild(newNav2);
      
  // Changing text to green
    const navTextColor = document.querySelectorAll('a');
    navTextColor.forEach(element => {
      element.style.color = 'green';
    });

  

  // adding logo to nav
    // logo img var
      const logoImg = document.querySelector('#logo-img');
      
    // adding src
      logoImg.src = siteContent.nav["img-src"];

// cta section
  // cta h1
    const ctaH1 = document.querySelector('.cta-text h1');
    ctaH1.textContent = siteContent.cta.h1;
  
  // cta button
    const ctaButton = document.querySelector('.cta-text button');
    ctaButton.textContent = siteContent.cta.button;

  // cta img
    const ctaImg = document.querySelector('#cta-img');
    ctaImg.src = siteContent.cta["img-src"];

// main content
  // making the h4 and p tags into array like variable
    const mainContentH4 = document.getElementsByTagName('h4');
    const mainContentP = document.getElementsByTagName('p');
    
  // top content
    // left side
      // h4
        mainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
      // p
        mainContentP[0].textContent = siteContent["main-content"]["features-content"];
    // right side
      // h4
        mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
      // p
        mainContentP[1].textContent = siteContent["main-content"]["about-content"];
    // img
      const middleImg = document.querySelector('#middle-img');
      middleImg.src = siteContent["main-content"]["middle-img-src"];

  // bottom content
    // left side
      // h4
        mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
      // p
        mainContentP[2].textContent = siteContent["main-content"]["services-content"];
    // middle
      // h4
        mainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
      // p
        mainContentP[3].textContent = siteContent["main-content"]["product-content"];
    // right side
      // h4
        mainContentH4[4].textContent = siteContent["main-content"]["services-h4"];
      // p
        mainContentP[4].textContent = siteContent["main-content"]["services-content"];

// contact section
  // h4
    mainContentH4[5].textContent = siteContent.contact["contact-h4"];
  // p
    mainContentP[5].textContent = siteContent.contact.address;
    mainContentP[6].textContent = siteContent.contact.phone;
    mainContentP[7].textContent = siteContent.contact.email;

// footer
  // p
    mainContentP[8].textContent = siteContent.footer.copyright;
