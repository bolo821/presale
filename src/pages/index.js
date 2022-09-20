import React, { useState } from 'react';

import Sidebar from '../layouts/Sidebar';
import Navbar from '../layouts/nav';
import Footer from '../layouts/footer';


function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <h1>
        Welcome
      </h1>
      <Footer />
    </>
  );
}

export default Home;
