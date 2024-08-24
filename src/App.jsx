import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Recommended from "./Components/Recommended";
import RestaurantList from "./Components/RestaurantList";
import Menu from "./Components/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="divider mb-8 mt-14 mx-4">RECOMMENDED</div>
              <Recommended />
              <div className="divider mb-8 mt-14 mx-4">Explore Restaurants</div>
              <RestaurantList />
            </>
          }
        />
        <Route path="/restaurant/:id" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
