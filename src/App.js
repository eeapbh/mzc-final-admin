import "./App.css";
import RedirectButton from "./components/RedirectButton";

function App() {
  return (
    <div className="App">
      <RedirectButton url="http://argo-cd.woobuntu.shop" btnName="argocd" />
      <RedirectButton
        url="http://prometheus.woobuntu.shop"
        btnName="prometheus"
      />
      <RedirectButton url="http://grafana.woobuntu.shop" btnName="grafana" />
      <a href="http://argo-cd.woobuntu.shop">argocd</a>
    </div>
  );
}

export default App;
