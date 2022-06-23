import logo from "./logo.png";
import "./App.css";
import GitHubRepos from "./GitHubRepos";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="h2">GitHub Repositories</h2>
      </div>
      <div className="container">
        <GitHubRepos top={10} />
      </div>
    </div>
  );
}

export default App;
