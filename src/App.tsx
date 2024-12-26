import AppLayout from "./components/AppLayout";
import "./sass/main.scss";
import Attribution from "./components/Attribution";
import Rating from "./components/Rating";

function App() {
  return (
    <div className="wrapper">
      <AppLayout>
        <Rating />
      </AppLayout>
      <Attribution />
    </div>
  );
}

export default App;
