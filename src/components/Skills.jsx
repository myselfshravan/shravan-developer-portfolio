function Skills() {
  return (
    <section id="skills" className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Languages and Frameworks
          </h3>
          <div className="flex flex-wrap">
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full mr-2 mb-2 flex items-center">
              <i className="devicon-nextjs-original mr-2"></i>
              NextJS
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full mr-2 mb-2 flex items-center">
              <i className="devicon-react-original mr-2"></i>
              React
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full mr-2 mb-2 flex items-center">
              <i className="devicon-nodejs-plain mr-2"></i>
              Node.js
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full mr-2 mb-2 flex items-center">
              <i className="devicon-python-plain mr-2"></i>
              Python
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full mr-2 mb-2 flex items-center">
              <i className="devicon-javascript-plain mr-2"></i>
              Javascript
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full mr-2 mb-2 flex items-center">
              <i className="devicon-firebase-plain mr-2"></i>
              Firebase
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full mr-2 mb-2 flex items-center">
              <i className="devicon-tailwindcss-plain mr-2"></i>
              Tailwind
            </span>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
            Tools I Use
          </h3>
          <div className="flex flex-wrap">
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full mr-2 mb-2 flex items-center">
              <i className="devicon-github-original mr-2"></i>
              Github
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full mr-2 mb-2 flex items-center">
              <i className="devicon-git-plain mr-2"></i>
              Git
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full mr-2 mb-2 flex items-center">
              <i className="devicon-visualstudio-plain mr-2"></i>
              VS Code
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full mr-2 mb-2 flex items-center">
              <i className="devicon-figma-plain mr-2"></i>
              Figma
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full mr-2 mb-2 flex items-center">
              <i className="devicon-canva-original mr-2"></i>
              Canva
            </span>
          </div>
        </div>
        <div>
          <img src="assets/img/skill.jpg" alt="Skills" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
