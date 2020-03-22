import utils from '../helpers/utils';
import projectData from '../helpers/data/projectData';

const printProjectCards = () => {
  let domString = '';
  const projects = projectData.getProjects();
  projects.forEach((item) => {
    if (item.available) {
      domString += '<div class="card project-card" style="width: 20rem">';
      domString += `  <h5 class='card-header'>${item.title}</h5>`;
      domString += `  <div class="img-container"><img src='${item.screenshot}' class='card-img-top' alt='project screenshot'></div>`;
      domString += '  <div class="card-body">';
      domString += `    <p class='card-text'>${item.description}</p>`;
      domString += `    <p class='card-text'>Technologies Used: <br> ${item.technologiesUsed}</p>`;
      domString += `    <a href='${item.githubUrl}' class='project-gh-btn'><i class="fab fa-github-square"></i></a>`;
      domString += '  </div>';
      domString += '</div>';
    }
  });
  utils.printToDom('projects-container', domString);
};

export default { printProjectCards };
