import React from 'react';

const projects = [
  {
    name: "My portfolio",
    image: "/Portfolio.png",
    about: "This is current website",
    status: "completed",
    github: "https://github.com/pshundal/myportfolio",  // GitHub URL
    live: "https://myportfolio-15usqtcom-prabhdeep-singh-hundals-projects.vercel.app/"  // Live site URL
  },
  {
    name: "OBYS Agency Clone",
    image: "/OBYS.png",
    about: "This is clone of OBYS website with most all features",
    status: "completed",
    github: "https://github.com/pshundal/obys",  // GitHub URL
    live: "https://obys-rdq4kgbkt-prabhdeep-singh-hundals-projects.vercel.app/"  // Live site URL
  },
  {
    name: "TicTacToe",
    image: "/TTT.png",
    about: "TicTacToe Game",
    status: "completed",
    github: "https://github.com/pshundal/tictactoe",  // GitHub URL
    live: "https://tictactoe-two-murex.vercel.app/"  // Live site URL
  },
  {
    name: "ToDo App",
    image: "/ToDo.png",
    about: "TicTacToe Game",
    status: "completed",
    github: "https://github.com/pshundal//todo-app",  // GitHub URL
    live: "https://todo-app-omega-beige.vercel.app/"  // Live site URL
  },
  {
    name: "Youtube",
    image: "/Youtube.png",
    about: "Clone of YouTube",
    status: "ongoing",
    github: "",  // Leave empty for ongoing projects
    live: ""  // Leave empty for ongoing projects
  }
];

function Projects() {
  return (
    <div id="projects" className="space-y-8 p-4">
        <h2 className="text-3xl font-bold text-blue-600 text-center">My Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative flex flex-col md:flex-row items-center p-6 border rounded-lg shadow-md bg-white max-w-6xl mx-auto"
        >
          <div className={`flex w-full flex-col md:flex-row ${project.status === "ongoing" ? "filter blur-sm" : ""}`}>
            <div className="w-full h-[100px] md:h-[250px] md:w-1/2">
              <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-lg" />
            </div>

            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-700">{project.about}</p>
              
              {project.status === "completed" && (
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Live
                  </a>
                </div>
              )}
            </div>
          </div>

          {project.status === "ongoing" && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-700">{project.about}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;
