import AppLayout from "./components/AppLayout";
import "./sass/main.scss";
import Attribution from "./components/Attribution";
import Rating from "./components/Rating";
import Thanks from "./components/Thanks";

function App() {
  return (
    <div className="wrapper">
      <AppLayout>
        <Thanks />
      </AppLayout>
      <Attribution />
    </div>
  );
}

export default App;
