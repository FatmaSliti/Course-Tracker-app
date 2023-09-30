// import './App.css';
// import { Fragment, useState } from 'react';
// import Header from './components/Home/Header/Header'
// import Home from './Home/Home';
// import About from './Home/About';
// import Footer from './components/footer/Footer'
// import SignIn from './components/Authentification.js/SignIn';
// import SignUp from './components/Authentification.js/SignUp';

// function App() {
//   const [signInIsShown, setSignInIsShown] = useState(false);
//   const [signUpIsShown, setSignUpIsShown] = useState(false);

//   const showSignInHandler = () => {
//     setSignInIsShown(true)
//   }

//   const hideSignInHandler = () => {
//     setSignInIsShown(false)
//   }

//   const showSignUpHandler = () => {
//     setSignUpIsShown(true)
//   }

//   const hideSignUpHandler = () => {
//     setSignUpIsShown(false)
//   }

//   return (
//     <Fragment>
//       <Header onShowSignIn={showSignInHandler} onShowSignUp={showSignUpHandler} />
//       <Home onShowSignIn={showSignInHandler} />
//       <About />
//       <Footer />
//       {signInIsShown && <SignIn onHideSignIn={hideSignInHandler} />}
//       {signUpIsShown && <SignUp onHideSignUp={hideSignUpHandler} />}
//     </Fragment>
//   );
// }

// export default App;

import './App.css';
import { Fragment, useState } from 'react';
import Header from './components/Home/Header/Header'
import Home from './Home/Home';
import About from './Home/About';
import Footer from './components/footer/Footer'
import SignIn from './components/Authentification.js/SignIn';
import SignUp from './components/Authentification.js/SignUp';

function App() {
  const [pageIsShown, setPageIsShown] = useState(false);

  const showPageHandler = () => {
    setPageIsShown(true)
  }

  const hidePageHandler = () => {
    setPageIsShown(false)
  }

  return (
    <Fragment>
      <Header onShowPage={showPageHandler} />
      <Home onShowPage={showPageHandler} />
      <About />
      <Footer />
      {pageIsShown && <SignIn onHidePage={hidePageHandler} />}
      {pageIsShown && <SignUp onHidePage={hidePageHandler} />}
    </Fragment>
  );
}

export default App;
