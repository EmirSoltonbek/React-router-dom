import React, { useState } from "react";
import "./components/Style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddBlog from "./components/AddBlog";
import CardDetails from "./components/CardDetails";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import axios from "axios";

const App = () => {
  const cards = [
    {
      image:
        "https://nationaltoday.com/wp-content/uploads/2022/05/107-Johnny-Depp.jpg",
      name: "Johnny",
      lastName: "Depp",
      status: "actor",
      id: 1,
    },
    {
      image:
        "https://nationaltoday.com/wp-content/uploads/2022/05/107-Johnny-Depp.jpg",
      name: "Johnny",
      lastName: "Depp",
      status: "actor",
      id: 2,
    },
    {
      image:
        "https://nationaltoday.com/wp-content/uploads/2022/05/107-Johnny-Depp.jpg",
      name: "Johnny",
      lastName: "Depp",
      status: "actor",
      id: 3,
    },
    {
      image:
        "https://nationaltoday.com/wp-content/uploads/2022/05/107-Johnny-Depp.jpg",
      name: "Johnny",
      lastName: "Depp",
      status: "actor",
      id: 4,
    },
    {
      image:
        "https://nationaltoday.com/wp-content/uploads/2022/05/107-Johnny-Depp.jpg",
      name: "Johnny",
      lastName: "Depp",
      status: "actor",
      id: 5,
    },
    {
      image:
        "https://nationaltoday.com/wp-content/uploads/2022/05/107-Johnny-Depp.jpg",
      name: "Johnny",
      lastName: "Depp",
      status: "actor",
      id: 6,
    },
  ];
  const [oneCard, setOneCard] = useState(null);
  async function getOneCard(id) {
    let result = await axios(`${cards}/${id}`);
    setOneCard(result.data);
  }
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage cards={cards} />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/carddetails" element={<CardDetails />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="/details/:id"
            element={<CardDetails oneCard={oneCard} getOneCard={getOneCard} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
