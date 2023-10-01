import './App.css';
import { Fragment, useState } from 'react';
import Header from './components/Header/Header'
import Home from './Home/Home';
import Courses from './Home/Courses';
import Footer from './components/footer/Footer'
import SignIn from './components/Authentification.js/SignIn';
import SignUp from './components/Authentification.js/SignUp';
import About from './Home/About';
import Contact from './Home/Contact';


function App() {
  const [signInIsShown, setSignInIsShown] = useState(false);
  const [signUpIsShown, setSignUpIsShown] = useState(false);

  const showSignInHandler = () => {
    setSignInIsShown(true)
  }

  const hideSignInHandler = () => {
    setSignInIsShown(false)
  }

  const showSignUpHandler = () => {
    setSignUpIsShown(true)
  }

  const hideSignUpHandler = () => {
    setSignUpIsShown(false)
  }

  return (
    <Fragment>
      <Header onShowSignIn={showSignInHandler} onShowSignUp={showSignUpHandler} />
      <Home onShowSignIn={showSignInHandler} />
      <Courses />
      {signInIsShown && <SignIn onHideSignIn={hideSignInHandler} />}
      {signUpIsShown && <SignUp onHideSignUp={hideSignUpHandler} />}
      <About />
      <Contact />
      <Footer />
    </Fragment>

  );
}

export default App;
