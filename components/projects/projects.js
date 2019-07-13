import projectsData from '../helpers/data/projectsData';
import util from '../helpers/util';

const projectStringBuilder = () => {
  projectsData.getProjects().then((projectResp) => {
    let domString = '';
    let domString = '<div id="portfolio" class="row wow fadeInDown" data-wow-delay="0.4s">'
    projectResp.forEach((project) => {
      domString += '<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print">';
      domString += ' <div class="portfolio-item">';
      domString += ' <div class="shot-item">';
      // domString += `<h3>${project.title}</h3>`;
      domString += `<a class="link" href="${project.projUrl}">`;
      domString += `<img class="projectPic" src=${project.screenshot} alt="project image" />`;
      domString += '</a>';
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    });
    domString += '</div>';
    util.printToDom('portfolio', domString);
    console.error(domString);
  }).catch(err => console.error('could not get projects', err));
};

export default { projectStringBuilder };