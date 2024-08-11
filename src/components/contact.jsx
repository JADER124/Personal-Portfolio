import React from "react";
import { FaInstagram,FaFacebook,FaGithub} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Contact() {
  return (
    <div>
      <div className="border-b-2 border-gray-800" id="contact">
        <div>
          <div className="align-middle text-center my-10">
            <h1 className="text-5xl font-bold capitalize p-10">Contact Me</h1>
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
          <div className="mx-[575px] p-1 bg-orange-400 rounded-lg ">
            <ul className="flex gap-1 justify-between ">
              <li>
                <div className="rounded-full bg-green-400 p-6">
                <FaXTwitter className="w-10"/>
                </div>
              </li>
              <li>
                <div className="rounded-full bg-green-400 p-6"></div>
              </li>
              <li>
                <div className="rounded-full bg-green-400 p-6"></div>
              </li>
              <li>
                <div className="rounded-full bg-green-400 p-6"></div>
              </li>
              <li>
                <div className="rounded-full bg-green-400 p-6"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
