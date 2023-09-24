import React from 'react';
import Routes from './routes/Routes';
import './styles/font.css';
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const doScroll = () => {
    window.scrollTo(0, 920);
  };
  return (
    <Layout>
      <Navbar doScroll={doScroll} />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
