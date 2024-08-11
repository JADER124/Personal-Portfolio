import React from "react";


const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <div>
      <footer className="relative bg-black pt-8 pb-6">
        <div className="container mx-auto px-4">
          
          <hr className="my-6 border-gray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-gray-500 hover:text-gray-800"
                  target="_blank"
                />{" "}
                Notus JS by
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  className="text-gray-500 hover:text-gray-800"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
