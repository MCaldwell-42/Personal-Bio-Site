 
const bioPage = document.getElementById('bioPage');
const techPage = document.getElementById('technologiesPage');
const projectsPage = document.getElementById('projectsPage');
const navItems = document.getElementsByClassName('navItem');

const Navigate = (e) => {
  const navId = e.target.id;
  console.log(navId);
  if (navId === 'navToBio') {
    bioPage.classList.remove('d-none');
    technologiesPage.classList.add('d-none');
    projectsPage.classList.add('d-none');
  } else if (navId === 'navToTechnologies') {
    bioPage.classList.add('d-none');
    technologiesPage.classList.remove('d-none');
    projectsPage.classList.add('d-none');
  } else if (navId === 'navToProjects') {
    bioPage.classList.add('d-none');
    technologiesPage.classList.add('d-none');
    projectsPage.classList.remove('d-none');
  };
};

const eventListeners = () => {
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', Navigate);
  };
};

const pageLoad = () => {
    techPage.classList.add('d-none');
    projectsPage.classList.add('d-none');
  };

projects = [
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      }

 ];


 const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;
 };

const createProjectsCards = () => {
    let domString = '';
    for (let i = 0; i < projects.length; i++) {

        if (projects[i].available === true) {
        domString += `<div class='projects'>`
        domString += `<p><strong>${projects[i].title}</strong></p>`
        domString += `<img src=${projects[i].screenshot}></img>`
        domString += `<p>${projects[i].description}</p>`
        domString += `<p>${projects[i].technologiesUsed}</p>`
        domString += `<p>${projects[i].available}</p>`
        domString += `<p>Project <a href='${projects[i].url}'> LINK </a></p>`
        domString += `<p>GitHub link <a href='${projects[i].githubUrl}'> HERE </a></p>`
        domString += `</div>`;
    }}
    
    printToDom('projectsPage',domString);
  
};

const init = () => {
createProjectsCards();
eventListeners();
pageLoad();
};

init();
