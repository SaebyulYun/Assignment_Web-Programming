//Saebyul Yun
//041091398
//Assignment 01

// Navigetor button events
// This event in order to handle the event every time the toggle button is clicked
const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

// Called this fuction that we are specifying whenever a click is made
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});

// An array of project objects  
const projects = [
    {
      title: 'Project 1',
      src: './picture/project1.png',
      description: 'Made form using html with table syntax that takes information from the user and linked page 1 when user click "here"',
      date: 'September 21, 2023'
    },
    {
      title: 'Project 2',
      src: './picture/project2.png' ,
      description: 'This is first time to styling using CSS in web page.',
      date: 'October 4, 2023'
    },
    {
      title: 'Project 3',
      src: './picture/project3.png',
      description: 'Used the arry in JS in order to user to get random joks and used eventlistener to button to be acitive.',
      date: 'October 28, 2023'
    },
    {
      title: 'Project 4',
      src: './picture/project4.png',
      description: 'Tried some of the SQL Server grouping features using ROLLUP and CUBE in Database assitnment',
      date: 'October 5, 2023'
    },
    {
      title: 'Project 5',
      src: './picture/project5.png',
      description: 'When put the patiens information, it showed theire Electronic Health Recrds (EHR).',
      date: 'October 10, 2023'
    }
  ];
 
// curruntProject index to 0 in order to initialize   
  let currentProject = 0;

// In order to show the project imformations from the curruntProject 
  function showProject(projectNum) {
    const project = projects[projectNum];
    document.getElementById('project-title').textContent = `Title: ${project.title}`;
    document.getElementById('project-description').textContent = `Description: ${project.description}`;
    document.getElementById('project-date').textContent = `Date Completed: ${project.date}`;
    document.getElementById('image').src = project.src;
  }

// Shows the previous project
  function prevProject() {
    if (currentProject > 0) {
      currentProject--;
      showProject(currentProject);
    }
  }

// Shows the next project  
  function nextProject() {
    if (currentProject < projects.length - 1) {
      currentProject++;
      showProject(currentProject);
    }
  }

// Added event listeners to the "Previous" and "Next" buttons when user click them
  document.getElementById('previous').addEventListener('click', prevProject);
  document.getElementById('next').addEventListener('click', nextProject);

// In order to Show the initial project (at index 0)
  showProject(currentProject);