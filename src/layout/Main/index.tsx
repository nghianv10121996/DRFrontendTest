import React from 'react';
import Footer from "../../components/Footer";
import Header from "../../components/Header";

interface IMain {
  children?: React.ReactNode;
}

const Main: React.FC<IMain> = (props) => {
  return (
    <div className="page">
      <div className='page-container'>
        <Header />
        {props?.children}
        <Footer />
      </div>
    </div>
  )
}

export default Main;