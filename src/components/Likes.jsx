function Likes(){
    return(
        <section id="likes" className="container mx-auto py-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Hobbies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex items-center">
              <i className="fas fa-headphones text-gray-600 dark:text-gray-400 mr-4"></i>
              <p className="text-gray-800 dark:text-white">
                Listening to Podcasts and Music
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex items-center">
              <i className="fas fa-laptop-code text-gray-600 dark:text-gray-400 mr-4"></i>
              <p className="text-gray-800 dark:text-white">
                Building Websites and Apps
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex items-center">
              <i className="fas fa-book-open text-gray-600 dark:text-gray-400 mr-4"></i>
              <p className="text-gray-800 dark:text-white">
                Writing Blogs &amp; Reading Books
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex items-center">
              <i className="fas fa-gamepad text-gray-600 dark:text-gray-400 mr-4"></i>
              <p className="text-gray-800 dark:text-white">
                Playing Video Games
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex items-center">
              <i className="fas fa-palette text-gray-600 dark:text-gray-400 mr-4"></i>
              <p className="text-gray-800 dark:text-white">
                UX &amp; UI Designing
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex items-center">
              <i className="fas fa-route text-gray-600 dark:text-gray-400 mr-4"></i>
              <p className="text-gray-800 dark:text-white">
                Travelling &amp; Exploring Nature
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex items-center">
              <i className="devicon-canva-original text-gray-600 dark:text-gray-400 mr-4"></i>
              <p className="text-gray-800 dark:text-white">
                Designing Templets, Logos &amp; Posts
              </p>
            </div>
          </div>
        </section>
    );
}

export default Likes;