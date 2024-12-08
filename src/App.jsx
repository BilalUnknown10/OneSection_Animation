// import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import './App.css'
import { useEffect } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);
function App() {
  //  let words = document.getElementById('heading');
  //  let innerText = words.innerText;
  //  let allWords = "";
   
   useEffect( () => {
    let heading = document.getElementById('heading');
    let headingText = heading.innerText;
    let splitText = headingText.split('');
    let spanTag = "";

    splitText.forEach( (elem) => {
      spanTag += ` <span>${elem}</span>`;
    })
    heading.innerHTML = spanTag;
    
    gsap.to("h1 span", {
      opacity:0,
      duration:1,
      // delay:1,
      color:"green",
      stagger:1,
      scrollTrigger : {
        trigger:"h1 span",
        scroll:"body",
        scrub : true,
         start:"top 50%",
         end:"bottom 40%",
      }
    })
    });
   
   
  return (
    <div>
      <h1  id='heading'>Define Your Goal</h1>
    </div>
  )
}

export default App
