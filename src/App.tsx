import "./App.scss";
import ErrorTop from "./components/Error/ErrorTop";
import Header from "./components/header/Header";
import Stats from "./components/statistics/Stats";

function App() {
  return (
    <div className="container">
      <Header />
      <ErrorTop />
      <Stats />
    </div>
  );
}

export default App;
