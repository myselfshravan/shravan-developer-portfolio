import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import ProfileImg from "../assets/img/shravan.jpg";

function About() {
  const handleDownloadResume = () => {
    // Implement download resume functionality
    console.log("Download resume");
  };

  return (
    <section id="about" className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
        About
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3">
          <img
            src={ProfileImg}
            alt="Profile"
            className="rounded-full mx-auto mb-8 md:mb-0"
          />
        </div>
        <div className="md:w-2/3">
          <div className="mb-4">
            <p className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Hi, I&apos;m Shravan
            </p>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              <span className="text_1">Self taught Web Developer</span>
              <span className="text_2">Passionate about AI and ML</span>
            </h1>
          </div>
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Well here is my intro :<br />
              You already know my name, it&apos;s like right there
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently Inter at <b>Next Wealth</b> as Gen-AI Solution.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I worked at <b>Foodingo</b> Pvt. Ltd as Full Stack Developer.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              What have I created? Let me tell you, I&apos;ve built a bunch of
              websites, dashboards, and mobile apps 📱 that will blow your mind.
              Check them out,{" "}
              <a
                href="https://github.com/githubhosting?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                here.
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I have also developed a study material website called{" "}
              <a
                href="https://noterep.live"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline italic"
              >
                NoteRep.live
              </a>{" "}
              that everyone uses to prepare just days before exams.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Other than this, I&apos;ve also worked with tons of other
              technologies mentioned below
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Y&apos;all can find few projects but trust me some of the best
              projects are private (just like you, you sneaky sneaky)
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              My Goal is to Contribute to as many open source project as
              possible and also create something that can save time of people.
              PERIOD. <br />
              <i>mm idk what else to write, let&apos;s get to know you</i>
            </p>
          </div>
          <button
            onClick={handleDownloadResume}
            className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300 inline-flex items-center mb-2"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Resume</span>
          </button>
          <div className="mb-4">
            <span className="text-gray-600 dark:text-gray-300">
              Find my social here
            </span>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/shravanrevanna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/myselfshravan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/Shravan_revanna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://facebook.com/Shravan.3.07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
