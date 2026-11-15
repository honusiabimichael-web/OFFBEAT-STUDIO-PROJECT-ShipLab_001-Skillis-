import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './styles/global.css';
export default function App(){return <BrowserRouter><Routes><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="services" element={<Services/>}/><Route path="gallery" element={<Gallery/>}/><Route path="contact" element={<Contact/>}/><Route path="*" element={<main className="container not-found"><h1>That page wandered off.</h1><a href="/">Back home</a></main>}/></Route></Routes></BrowserRouter>}
