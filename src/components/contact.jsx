import React from "react";
import { FaInstagram,FaFacebook,FaGithub,FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
function Contact() {
  return (
    <div>
      <div className="border-b-2 border-gray-800" id="contact">
        <div>
          <div className="align-middle text-center my-10">
            <h1 className="text-5xl font-bold capitalize p-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Contact Me</h1>
          </div>
        </div>
        <div>
          <div className="border-black bg-slate-700 border-2 rounded-3xl align-middle text-center mx-52 mb-10">
            <p className="text-xl p-28">
              Hi, i am Jhon Jader Lopez , i am a software developer....
            </p>
          </div>
        </div>
        <div className="mb-10">
          <div className="text-center">
            <button className=" bg-cyan-500 font-bold py-2 px-10 rounded-lg hover:bg-cyan-600 animate-jump-in animate-delay-300 animate-once">
              Send me a message
            </button>
          </div>
        </div>
        <div className="mb-10">
          <div className="w-1/5 mx-auto p-1 bg-slate-700 rounded-lg ">
            <ul className="flex gap-1 justify-between ">
              <li>
                <div className="rounded-full bg-cyan-400 p-4 mx-4 my-1">
                <a href="https://www.linkedin.com/in/jhon-lopez-blandon-5751a6236/" target="_blank">
                <FaLinkedin className="text-3xl text-black"/>
                </a>
                </div>
              </li>
              <li>
                <div className="rounded-full bg-cyan-400 p-4 mx-4 my-1">
                 <a href="https://github.com/JADER124" target="_blank">
                 <FaGithub className="text-3xl text-black"/>
                 </a>
                </div>
              </li>
              <li>
                <div className="rounded-full bg-cyan-400 p-4 mx-4 my-1">
                  <MdMarkEmailRead className="text-3xl text-black"/>
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
