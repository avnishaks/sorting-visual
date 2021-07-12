import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with{' '}
        <span className="Footer__Heart">&hearts;</span> by{' '}
        <a
          href="https://www.linkedin.com/in/avnishaks/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Avnish Kumar
        </a>
        <section className="Footer__Items">
        <a
          href="https://github.com/avnishaks/sorting-visual"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Git-Hub
        </a>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
