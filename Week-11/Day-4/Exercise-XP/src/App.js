import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import {fetchData} from './utils';

import ErrorBoundary from './Components/ErrorBoundary';
import Navbar from './Components/Navbar';
import PostList from './Components/PostList';
import Example1 from './Components/Example1';
import Example2 from './Components/Example2';
import Example3 from './Components/Example3';

import "bootstrap/dist/css/bootstrap.min.css";

const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
  isMarried: false,
};

const handleFetchData = async () => {
  try {
    await fetchData();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const Home = () => (
  <div>
    <ErrorBoundary>
      <h1>HomePage</h1>
      <button onClick={handleFetchData}> Click for response</button>
      <PostList />
      <Example1 />
      <Example2 />
      <Example3 />
    </ErrorBoundary>
  </div>
);

const Profile = () => (
  <div>
    <ErrorBoundary>
      <h1>Profile</h1>
    </ErrorBoundary>
  </div>
);

const ShopScreen = () => (
  <div>
    <ErrorBoundary>
      <h1>{person}</h1>
    </ErrorBoundary>
  </div>
);

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/profile"
        element={
            <Profile />
        }
      />
      <Route
        path="/shop"
        element={
            <ShopScreen />
        }
      />
    </Routes>
  </div>
);

export default App;
