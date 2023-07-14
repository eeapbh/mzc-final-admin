import "./App.css";
import RedirectButton from "./components/RedirectButton";

function App() {
  return (
    <div className="App">
      <RedirectButton url="http://argo-cd.woobuntu.shop" />
      <RedirectButton url="http://prometheus.woobuntu.shop" />
      <RedirectButton url="http://grafana.woobuntu.shop" />
    </div>
  );
}

export default App;
