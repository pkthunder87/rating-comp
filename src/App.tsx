import { BrowserRouter, Route, Navigate, Routes } from "react-router";

import AppLayout from "./components/AppLayout";
import "./sass/main.scss";
import Attribution from "./components/Attribution";
import Rating from "./components/Rating";
import Thanks from "./components/Thanks";
import { useState } from "react";

function App() {
  const [userRating, setUserRating] = useState(0);

  return (
    <div className="wrapper">
      <AppLayout>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="/rating" />} />
            <Route
              path="rating"
              element={
                <Rating setRating={setUserRating} userRating={userRating} />
              }
            />
            <Route path="thanks" element={<Thanks />} />
            <Route
              path="*"
              element={
                <Rating setRating={setUserRating} userRating={userRating} />
              }
            />
          </Routes>
        </BrowserRouter>
      </AppLayout>
      <Attribution />
    </div>
  );
}

export default App;
