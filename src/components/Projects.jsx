function Projects() {
  return (
    <section id="projects" className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <img
            src="assets/img/NoteRep.png"
            alt="NoteRep"
            className="mb-4 rounded-lg"
          />
          <a
            href="https://www.noterep.live"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white font-bold hover:underline"
          >
            Visit Website
          </a>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <img
            src="assets/img/Idea Rep system.png"
            alt="Idea Rep System"
            className="mb-4 rounded-lg"
          />
          <a
            href="https://idearepo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white font-bold hover:underline"
          >
            Visit Website
          </a>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <img
            src="assets/img/cse telegram.png"
            alt="CSE Telegram"
            className="mb-4 rounded-lg"
          />
          <a
            href="https://telegram.me/ComputerScienceStudentsClub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white font-bold hover:underline"
          >
            Check Channel
          </a>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mt-16 mb-8">
        Team Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <img
            src="assets/img/keygainer.png"
            alt="Keygainer"
            className="mb-4 rounded-lg"
          />
          <a
            href="https://myselfshravan.github.io/keygainer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white font-bold hover:underline"
          >
            Discover
          </a>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <img
            src="assets/img/calculla.png"
            alt="Calculla"
            className="mb-4 rounded-lg"
          />
          <a
            href="https://gpaestimator.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white font-bold hover:underline"
          >
            Check it out
          </a>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mt-16 mb-8">
        Pending Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <img
            src="assets/img/Make a Perfect Choice.png"
            alt="Make a Perfect Choice"
            className="mb-4 rounded-lg"
          />
          <a
            href="https://securechoice.github.io/securechoice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white font-bold hover:underline"
          >
            Visit Website
          </a>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <img
            src="assets/img/Assist Ideas.png"
            alt="Assist Ideas"
            className="mb-4 rounded-lg"
          />
          <a
            href="https://www.youtube.com/channel/UCyT4D-vxOvv7OIsVXv-V8kQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white font-bold hover:underline"
          >
            View details
          </a>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <img
            src="assets/img/Untitled design (3).png"
            alt="Untitled Project"
            className="mb-4 rounded-lg"
          />
          <a
            href="#"
            className="text-gray-800 dark:text-white font-bold hover:underline cursor-not-allowed"
          >
            Still Working
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
