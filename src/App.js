import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Landscaping from './pages/Landscaping'
import Gutter from './pages/Gutter'
import Lighting from './pages/Lighting'
import Painting from './pages/Painting'
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="landscaping" element={<Landscaping />} />
            <Route path="gutter" element={<Gutter />} />
            <Route path="lighting" element={<Lighting />} />
            <Route path="painting" element={<Painting />} />
            <Route path="contact" element={<Contact />} />

          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  )
}

export default App
