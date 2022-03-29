import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Menu from "./component/Menu";
import About from "./component/About";
import Order from "./component/Order";
function App() {
  return (
    <div>
      <Header />
      <Body />
      <Menu />
      <Order />
      <About />
    </div>
  );
}

export default App;
