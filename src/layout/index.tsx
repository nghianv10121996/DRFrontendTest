import React, { Children } from 'react';
import Sidebar from '../components/Sidebar';
import Main from './Main';

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = (props) => {
  return (
    <main className='app-container'>
      <Sidebar />
      <Main>
        {props?.children}
      </Main>
    </main>
  )
}

export default Layout;