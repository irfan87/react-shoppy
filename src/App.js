import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header />
    <div className="container">
      <Main />
    </div>
    <Footer />
  </div>
);

export default App;
