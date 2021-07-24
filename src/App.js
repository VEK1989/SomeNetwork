import './App.css';
import Header from './components/Header/Header';
import UsersContainer from './components/Users/UsersContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import LoginPage from './components/Login/LoginPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialise } from './redux/selectors';
import preloader from './assets/img/puff.svg';
import { initialiseApp } from './redux/app-reduser';

const App = () => {
  const initialise = useSelector(getInitialise)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialiseApp())
  }, [])

  if (!initialise) {
    return <img src={preloader} alt='preload' width='200px' height='200px' />
  }
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <div className="conteiner">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <MessagesContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
