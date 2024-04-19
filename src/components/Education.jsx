function Education() {
  return (
    <section id="education" className="container mx-auto py-16">
    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
      Education
    </h2>
    <p className="text-gray-600 dark:text-gray-300 italic mb-8">
      Education is not the learning of facts, but the training of the mind
      to think.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <div className="mb-4">
          <a
            href="http://www.msrit.edu/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="assets/img/ramaiah-institute-of-technology.jpg"
              alt="M S Ramaiah Institute of Technology"
              className="rounded-lg"
            />
          </a>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          M S Ramaiah Institute of Technology
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          Bachelor of Engineering in Computer Science and Engineering (AI
          & ML)
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          2021 - 25 | Pursuing
        </p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <div className="mb-4">
          <a
            href="http://www.fiitjeehyderabad.com/Contact_Us.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="assets/img/fiitjeecollege.jpg"
              alt="FIITJEE Miyapur, Hyderabad"
              className="rounded-lg"
            />
          </a>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          FIITJEE Miyapur, Hyderabad
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          Junior College | PCM
        </p>
        <p className="text-gray-600 dark:text-gray-300">2019 - 21</p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <div className="mb-4">
          <a
            href="https://www.virstumkur.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="assets/img/varinschool.jpg"
              alt="Varin International Residential School"
              className="rounded-lg"
            />
          </a>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Varin International Residential School
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          High School | ICSE
        </p>
        <p className="text-gray-600 dark:text-gray-300">2016 - 19</p>
      </div>
    </div>
  </section>
  );
}

export default Education;