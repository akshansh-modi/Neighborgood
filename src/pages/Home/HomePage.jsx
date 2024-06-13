
import { About, Footer, Home, Navbar, Services ,Postcard} from "../../components/exports";

import {useEffect, useState} from 'react';

// import Blogs from "./components/Blogs";
// import withSplashScreen from './components/withSplashScreen';

const HomePage = () => {
  const currentTheme = localStorage.getItem('currentTheme') 
  const [theme, setTheme] = useState(currentTheme?currentTheme:'light');
  useEffect(() => {
    localStorage.setItem('currentTheme', theme);
if(theme==='dark'){
  document.documentElement.classList.add('dark');

}
else{
  document.documentElement.classList.remove('dark');
}
  }, [theme]);
  return (
    <div className="darkbg dark-text">
      <Navbar theme={theme} setTheme={setTheme}/>

      <main>
        <div id="home" >
          <Home />
        </div>

        <div id="about" >
          <About />
        </div>

        <div id="services" >
          <Services />
        </div>
        <div id="postcard" >
          <Postcard />
        </div>

        

      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
