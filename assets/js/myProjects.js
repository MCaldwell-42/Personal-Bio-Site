// import projects from '../../components/projects/projects';
import apiKeys from '../apiKeys.js';
console.log('hi');

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/projects.json`)
    .then((results) => {
      const projectResults = results.data;
      const projects = [];
      Object.keys(projectResults).forEach((projectId) => {
        projectResults[projectId].id = projectId;
        projects.push(projectResults[projectId]);
      });
      resolve(projects);
    })
    .catch(err => reject(err));
});


// projects.projectStringBuilder();
const projectStringBuilder = () => {
  getProjects().then((projectResp) => {
      let domString = '';
      // domString += '<div class="container">';        
      // domString += '<h2 class="section-title">My Projects</h2>';
      // domString += '<div class="row">';
      projectResp.forEach((project) => {
        domString += '<div id="portfolio" class="row">';
        domString += '<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">';
        // mix development print ----additional classes
        domString += ' <div class="portfolio-item">';
        domString += ' <div class="shot-item">';
        domString += `<a class="link" href="${project.projUrl}">`;
        domString += `<img class="projectPic" src=${project.screenshot} alt="project image" />`;
        domString += '</a>';
        domString += `<h3>${project.title}</h3>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
      });
      // domString += '</div>';
      // domString += '</div>';
      const selectedDiv = document.getElementById('portfolios');
      selectedDiv.innerHTML = domString;
      console.error(domString);
    }).catch(err => console.error('could not get projects', err));
  };
  projectStringBuilder();