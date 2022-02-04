import logo from './logo.svg';
import profileImage from './img/sneha.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        My React App
      </h1>
      <h3>
        Author: Sneha Gathani
      </h3>
      <img src={profileImage} alt="profile image" />
    </div>
  );
}

export default App;
