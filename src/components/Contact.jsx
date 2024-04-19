function Contact() {
  return (
    <section id="contact" className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
        Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            EMAIL
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            <a
              href="mailto:shravanrevanna158@gmail.com"
              className="hover:underline"
            >
              shravanrevanna@gmail.com
            </a>
          </p>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            PHONE
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            <a href="tel:9945332995" className="hover:underline">
              +91 9945-332995
            </a>
          </p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Submission not initialized, to Contact me get social link bellow
          </p>
          {/* Add your contact form or other contact information here */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
