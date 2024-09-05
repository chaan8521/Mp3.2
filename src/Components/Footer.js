import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 p-4 mt-auto">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="https://flowbite.com/" className="hover:underline">PlaNado™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li className="me-4 md:me-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="me-4 md:me-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="me-4 md:me-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
