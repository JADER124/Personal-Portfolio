import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import CV from "../utils/files/CV.pdf"
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };
  return (
    <div>
      <div className="border-b-2 border-gray-800 " id="contact">
        <div>
          <div className="align-middle text-center mt-10 mb-2">
            <h1 className="text-5xl font-bold capitalize p-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Contact Me
            </h1>
          </div>
        </div>
        <div>
          <section className="pb-10 pt-3 px-4">
            <div className="max-w-xl mx-auto">
              <div className=" p-8 rounded-xl shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu Nombre"
                      required
                      className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Tu Email"
                      required
                      className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tu Mensaje"
                      required
                      rows={4}
                      className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg 
                         hover:opacity-90 transition-opacity"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
        <div className="mb-10">
          <div className="text-center">
            <button className=" bg-cyan-500 font-bold py-2 px-10 rounded-lg hover:bg-cyan-600 animate-jump-in animate-delay-300 animate-once">
              Send me a message
            </button>
          </div>
        </div>
        <div className="mb-10">
          <div className="text-center">
            <button className=" bg-cyan-500 font-bold py-2 px-10 rounded-lg hover:bg-cyan-600 animate-jump-in animate-delay-300 animate-once">
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                download="nombre_pretendido_del archivo.pdf"
              >
                Dowload My CV
              </a>
            </button>
          </div>
        </div>
        <div className="mb-10">
          <div className="w-1/5 mx-auto p-1  rounded-lg ">
            <ul className="flex gap-1 justify-between ">
              <li>
                <div className="rounded-full bg-cyan-400 p-4 mx-4 my-1">
                  <a
                    href="https://www.linkedin.com/in/jhon-lopez-blandon-5751a6236/"
                    target="_blank"
                  >
                    <FaLinkedin className="text-3xl text-black" />
                  </a>
                </div>
              </li>
              <li>
                <div className="rounded-full bg-cyan-400 p-4 mx-4 my-1">
                  <a href="https://github.com/JADER124" target="_blank">
                    <FaGithub className="text-3xl text-black" />
                  </a>
                </div>
              </li>
              <li>
                <div className="rounded-full bg-cyan-400 p-4 mx-4 my-1">
                  <MdMarkEmailRead className="text-3xl text-black" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
