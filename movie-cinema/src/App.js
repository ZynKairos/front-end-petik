import { Component } from "react";

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hello World</h1>      
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum totam iusto praesentium quam quis maiores ipsa ut sit. Porro sit magnam at eum voluptates, iusto itaque soluta. Praesentium, eum vel.</p>
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyright &copy;2024 Developed by Zyn Kairos</h3>
        <span>Make with &#10084</span>
      </footer>
    )
  }
}

export default App;
