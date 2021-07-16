import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import LoginPage from './components/Login/LoginPage';

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
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
