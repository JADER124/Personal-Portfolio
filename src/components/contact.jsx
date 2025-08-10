import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import CV from "../assets/pdfs/CV.pdf";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div data-aos="fade-up">
      <div className="bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Título */}
          <div className="text-center pt-10 mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold capitalize bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Contact Me
            </h1>
          </div>

          {/* Formulario */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu Nombre"
                    required
                    className="w-full p-3 md:p-4 bg-gray-700/80 border border-gray-600 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu Email"
                    required
                    className="w-full p-3 md:p-4 bg-gray-700/80 border border-gray-600 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tu Mensaje"
                    required
                    rows={4}
                    className="w-full p-3 md:p-4 bg-gray-700/80 border border-gray-600 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full p-3 md:p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          {/* Botón CV */}
          <div className="text-center mb-10 ">
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_Jhon_Lopez.pdf"
              className="inline-flex items-center px-6 md:px-10 py-3 bg-gray-900 font-bold rounded-lg hover:bg-gray-900 text-blue-600 hover:text-blue-300 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
            >
              <FaDownload className="w-4 h-4 mr-2 " />
              Download My CV
            </a>
          </div>

          {/* Redes sociales */}
          <div className="pb-10">
            <div className="max-w-sm mx-auto">
              <div className="flex justify-center space-x-4 md:space-x-6">
                <a
                  href="https://www.linkedin.com/in/jhon-lopez-blandon-5751a6236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 md:w-16 md:h-16 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-900 text-blue-600 hover:text-blue-300 transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />
                </a>

                <a
                  href="https://github.com/JADER124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 md:w-16 md:h-16 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-900 text-blue-600 hover:text-blue-300 transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <FaGithub className="w-6 h-6 md:w-7 md:h-7 " />
                </a>

                <button className="w-14 h-14 md:w-16 md:h-16 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-900 text-blue-600 hover:text-blue-300 transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 shadow-lg">
                  <MdMarkEmailRead className="w-6 h-6 md:w-7 md:h-7 " />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;