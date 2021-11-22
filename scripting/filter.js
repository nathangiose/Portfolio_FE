let projects = [
    {
      imgURL: "https://res.cloudinary.com/dn4ec3kh6/image/upload/v1631483612/Portfolio%20Images/2021-09-12_2_gmvmwv.png",
      imgALT: "Contact Form",
      title: "Contact Form",
      techStack: "HTML/CSS",
      description: "This Contact form allows you to contact me directly",
      githubURL: "https://github.com/nathangiose/Contact-Form",
      liveProjectURL: "https://upbeat-morse-a16446.netlify.app"
    },
    {
      imgURL: "https://media.giphy.com/media/61Zbol76ws06AHpecl/giphy.gif",
      imgALT: "Speedster",
      title: "Speedster Console",
      techStack: "Python",
      description: "A demerit console created as per South Africa's new regulations",
      githubURL: "https://github.com/nathangiose/speedster/blob/main/speedster.py",
      liveProjectURL: "https://replit.com/@nathangiose/Speedster#main.py"
    },
    {
      imgURL: "https://res.cloudinary.com/dn4ec3kh6/image/upload/v1630933090/Realm17/il_794xN.2979587818_5f4d-1_qefumv.png",
      imgALT: "Code Wednesday Image",
      title: "Realm17clothing",
      techStack: "JavaScript",
      description: "A JS store intergrated with my own API I created",
      githubURL: "https://github.com/nathangiose/REALM17clothes",
      liveProjectURL: "https://realm17clothing.netlify.app"
    },
    {
      imgURL: "https://media.giphy.com/media/WYoomW2ecA6tYRXSGp/giphy.gif",
      imgALT: "Webcam",
      title: "Webcam",
      techStack: "JavaScript",
      description: "A Webcam I developed",
      githubURL: "https://github.com/nathangiose/Webcam-JS",
      liveProjectURL: "https://goofy-northcutt-9dd0f2.netlify.app"
    },
    {
      imgURL: "https://media.giphy.com/media/4hcrQ71c9djAah7GZu/giphy.gif",
      imgALT: "Testimonial Request",
      title: "Slider",
      techStack: "JavaScript",
      description: "A testimonial slider template",
      githubURL: "https://github.com/nathangiose/Testimonial",
      liveProjectURL: "https://clever-aryabhata-0a9a04.netlify.app/"
    },
    {
      imgURL: "https://media.giphy.com/media/l0Iyo78NhvUrzbEqs/giphy.gif",
      imgALT: "My Timeline GIF",
      title: "My Timeline Template",
      techStack: "HTML/CSS",
      description: "A template for my past work experience",
      githubURL: "https://github.com/nathangiose/Timeline_CV",
      liveProjectURL: "https://priceless-tesla-ce5734.netlify.app/"
    },
    {
      imgURL: "https://media.giphy.com/media/nnuYT3uWUsPivMkP9h/giphy.gif",
      imgALT: "Snake Game GIF",
      title: "Snake Game",
      techStack: "Python",
      description: "This is dynamic game",
      githubURL: "https://github.com/nathangiose/SnakeGame.py",
      liveProjectURL: "https://replit.com/@nathangiose/Snake#main.py"
    },
    {
      imgURL: "https://res.cloudinary.com/dn4ec3kh6/image/upload/v1631490607/Portfolio%20Images/2021-09-13_2_qqbcaq.png",
      imgALT: "Sneaker store image",
      title: "Sneaker store",
      techStack: "HTML/CSS",
      description: "This is my first store design",
      githubURL: "https://github.com/nathangiose/sneaker_shop-main",
      liveProjectURL: "https://thirsty-hopper-2dd85d.netlify.app"
    },
    {
      imgURL: "https://media.giphy.com/media/gaaPHa9SAYnrW/giphy.gif",
      imgALT: "Scale",
      title: "Body Mass Index",
      techStack: "Python",
      description: "Weighs men and women",
      githubURL: "https://github.com/nathangiose/BMI/blob/main/Bmi.py",
      liveProjectURL: "https://replit.com/@nathangiose/BMI-2#main.py"
    },
    {
      imgURL: "https://media.giphy.com/media/za5xikuRr0OzK/giphy.gif",
      imgALT: "Weather by Batman",
      title: "Temperature Converter",
      techStack: "Python",
      description: "Degrees Celsius to Fahrenheit converter",
      githubURL: "https://github.com/nathangiose/temperature_converter/blob/main/temperature_converter.py",
      liveProjectURL: "https://replit.com/@nathangiose/Temperature-Converter#main.py"
    },
    {
      imgURL: "https://media.giphy.com/media/vsyKKf1t22nmw/giphy.gif",
      imgALT: "Drake Pokeball",
      title: "Personalized Pokedex",
      techStack: "JavaScript",
      description: "Pokedex",
      githubURL: "https://github.com/nathangiose/Pokedex-js",
      liveProjectURL: "https://agitated-leavitt-d0d026.netlify.app/"
    },
    {
      imgURL: "https://media.giphy.com/media/L3JsXA0dO77ZUswick/giphy.gif",
      imgALT: "Motion Detector",
      title: "Motion Detector",
      techStack: "JavaScript",
      description: "This allows the your camera to detect hands and faces",
      githubURL: "https://github.com/nathangiose/HandMotion_Face_Detector",
      liveProjectURL: "https://nathandetection.netlify.app/"
    }
  ];
  
  function createCard(card) {
    let createdCard = `<div class="project-card" techStack=${card.techStack} >
        <img src="${card.imgURL}" alt="${card.imgALT}">
        <h4>${card.title}</h4>
        <h6>${card.techStack}</h6>
        <p>${card.description}</p>
        <a href="${card.githubURL}">Github</a>
        <a href="${card.liveProjectURL}">Live</a>
      </div>
    `;
    return createdCard;
  }
  
  function renderCards() {
    let projectContainer = document.querySelector(".project-container");
    for (project of projects) {
      let card = createCard(project);
      projectContainer.innerHTML += card;
    }
  }
  
  renderCards();
  
  function filterCards(category) {
    let cards = document.getElementsByClassName("project-card");
  
    for (card of cards) {
      console.log(card);
      card.style.display = "none";
    }
  
    let selectedCards = document.querySelectorAll(`[techStack='${category}']`);
  
    for (card of selectedCards) {
      card.style.display = "block";
    }
  }
  