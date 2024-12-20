import AppLayout from "./components/AppLayout";
import "./sass/main.scss";
import Attribution from "./components/Attribution";

function App() {
  return (
    <div>
      <AppLayout props="">
        <p className="text">
          How did we do? Please let us know how we did with your support
          request. All feedback is appreciated to help us improve our offering!
          1 2 3 4 5 Submit You selected Thank you! We appreciate you taking the
          time to give a rating. If you ever need more support, don’t hesitate
          to get in touch!
        </p>
      </AppLayout>
      <Attribution />
    </div>
  );
}

export default App;
