import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white p-6 mt-[620px] bottom-0">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="mb-6">
          <h2 className="text-xl lg:text-4xl font-semibold mb-4">Find Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30767694.118830837!2d60.92944751922805!3d19.720199483373122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1739865934354!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            className="md:w-[600px] w-full"
          ></iframe>
        </div>

        {/* Social-Media*/}
        <div className="flex flex-col justify-center space-x-6 mt-10 relative lg:right-10 gap-6">
         <h1 className='text-2xl relative lg:right-40 '>Connect with us:
         </h1>
         <div className='flex flex-row lg:flex-col gap-6 lg:right-30'>
          <a
            href="https://facebook.com"
            className="text-xl w-12 h-12 flex items-center justify-center
             text-gray-800 rounded-full p-3 bg-gray-50 hover:text-gray-500"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-xl w-12 h-12 flex items-center justify-center text-gray-800 rounded-full p-3 bg-gray-50 hover:text-gray-500"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-xl w-12 h-12 flex text-gray-800 items-center justify-center rounded-full p-3 bg-gray-50 hover:text-gray-500"
          >
            <i className="fab fa-instagram"></i>
          </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
