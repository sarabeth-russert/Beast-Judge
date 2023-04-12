import { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import imageUrls from './image_urls.json';

function App() {
  return (
   <>
    <Header title='Beast Judge'/>
    <Main heading='Main Soon' imgUrls={imageUrls} />
    <Footer title='Your opinion counts!'/>
   </>
  );
}




export default App;
