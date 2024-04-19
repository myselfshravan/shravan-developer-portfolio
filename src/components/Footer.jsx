import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">- SHRAVAN</h2>
        <p className="text-gray-400 mb-4">
          Thanks for checking my portfolio website. Connect with me over
          socials. Feel free to drop a message. I will be glad to help. Hit
          me up on insta orrrrr if you&apos;re classic type, mail me at{" "}
          <a
            href="mailto:shravanrevanna158@gmail.com"
            className="text-white hover:underline"
          >
            shravanrevanna@gmail.com
          </a>
        </p>
        <p className="text-gray-400 mb-4">
          Soon other projects will be listed. It&apos;s a work in progress
          so check back often!
        </p>
        <p className="text-gray-400">
          This is inspired by &quot;bedimcode&quot; and &quot;inbio&quot;
          websites, Thanks to them. <br />
          Do Check out <span className="likes-count"> 7 </span>th blog on{" "}
          <a
            href="https://shravanrevanna.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            Hashnode
          </a>
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">EXPLORE</h2>
        <ul className="text-gray-400">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="hover:underline">
              Education
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a
              href="whatsapp://send?text=https://myselfshravan.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Share
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">FOLLOW ME</h2>
        <div className="flex space-x-4">
          <a
            href="https://github.com/myselfshravan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/shravan_revanna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://m.facebook.com/Shravan.3.07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC5NNBFQqhbuU2f5wprDVaVg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-youtube text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shravanrevanna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://telegram.me/siddharth_channel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-telegram text-xl"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-8 flex justify-between items-center">
      <a href="#" className="text-gray-400 hover:text-white">
        <i className="fas fa-arrow-up"></i> Back to top
      </a>
      <p className="text-gray-400">
        Made with passion by{" "}
        <a href="#" className="text-white hover:underline">
          Shravan
        </a>
      </p>
      <p className="text-gray-400">Last Updated on 7th March</p>
    </div>
  </footer>
  );
}

export default Footer;
