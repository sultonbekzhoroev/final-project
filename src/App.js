import "./App.css";
import { Route, Routes } from "react-router";
import House from "./pages/House";
import About from "./pages/About";
import News from "./pages/News";
import ErrorPage from "./pages/ErrorPage";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<House />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
