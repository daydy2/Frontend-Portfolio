import React from 'react'
import { behancelink, instagramlink, linkedlnlink, mediumlink, name, twitterlink } from '../constants'
import logo from "../img/logo.svg";
import behance from "../img/behance 1.svg"
import instagram from "../img/instagram 1.svg"
import medium from "../img/medium 1.svg"
import twitter from "../img/twitter-sign (1) 1.svg"
import linkedln from "../img/linkedin (1) 1.svg"

const Footer = () => {
const images ={
    behance: {
        images: behance,
        links: behancelink
    },
    instagram: {
        images: instagram,
        links: instagramlink

    },
    twitter: {
        images: twitter,
        links: twitterlink
    },
    medium: {
        images: medium,
        links: mediumlink
    },
     linkedln: {
        images: linkedln,
        links: linkedlnlink
    }
}
console.log(images)
// console.log(   Object.keys(images))
// console.log(   Object.values(images))
// console.log(Object.entries(images))

const image = Object.entries(images)
console.log(image)
// image.map((img : any,i: number)=> console.log(img[1].images))
  return (
    <footer className='ml-[1.25rem] md:ml-[6.5rem] my-[3rem] md:my-[8rem] '>
        <section className='flex  items-center gap-[1rem]'>
        <a href="#head"> <img className="bounce" src={logo} alt="" /></a>
          <a href="#head"><h1 className="text-black text-[0.875rem]  md:text-[1.25rem] font-bold leading-[normal] font-Bellota ">
            {name}
          </h1></a>
          </section>
          {/* <section className='flex gap-[1.5rem] mt-[2rem]'>
            {image.map((img : any, i)=>(
                 <a href={img[1].links} key={i}><img src={img[1].images} alt="" /></a>)
            )}
          </section> */}
    </footer>
  )
}

export default Footer