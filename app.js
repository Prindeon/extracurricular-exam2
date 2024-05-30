"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  const projects = await getProjects()
  console.log(projects)
  showProjectsContainer(projects)
}

async function getProjects() {
  const response = await fetch("https://shop.mjkieldsen.com/wp-json/wp/v2/projects?acf_format=standard")
  const data = await response.json()
  return data
}

function showProjectsContainer(projects) {
  const projectsContainer = document.querySelector("#projects-container")

  for (const project of projects) {
    console.log(project);
    projectsContainer.insertAdjacentHTML (
      "beforeend",
      // square brackets on "solution-link" are necessary because I found out js can't read hyphens directly
      /*html*/
      `
      <article class="project-card">
        <img src="${project.acf.image}"/>
        <p class="client">Client: <i>${project.acf.client}</i></p>
        <h2>${project.title.rendered}</h2>
        <p>${project.acf.description}</p>
        <p><b>Type:</b> ${project.acf.type}</p>
        <a href="${project.acf["solution-link"]}">View prototype</a>
      </article> 
      `
    )
  }
}