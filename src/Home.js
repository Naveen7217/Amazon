import React from 'react';
import './Home.css';
import Product from "./Product";


function Home() {
  return (
    <div className='home'>
      <div className="home_images">
        <img
          className="home_img"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt=""
        />
        <img
          className="home_img"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71SnvcmmGlL._SX3000_.jpg"
          alt=""
        />
        <img
          className="home_img"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt=""
        />
        <img
          className="home_img"
          src="https://m.media-amazon.com/images/I/71AU5IQP05L._SX3000_.jpg"
          alt=""
        />
      </div>
        <div className='container'>
        <div className='home_row'>
          <Product
            id="12321341"
            title="Samsung Galaxy M04 Dark Blue, 4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery"
            price={9999}
            rating={4}
            image="	https://m.media-amazon.com/images/I/41kg-+XWoxL._AC_SY200_.jpg"
          />
          <Product
            id="12321342"
            title="SONY Alpha ILCE-6100Y APS-C Mirrorless Camera with Dual Lens 16-50 mm & 55-210 mm Zoom Featuring Eye AF and 4K movie recording  (Black)"
            price={80990}
            rating={5}
            image="https://rukminim1.flixcart.com/image/416/416/k3q76a80/camera/x/u/e/sony-apsc-ilce-6100y-b-in5-mirrorless-original-imafm6msr4fghzfw.jpeg?q=70"
          />
        </div>
        <div className='home_row'>
          <Product
            id="12321343"
            title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV (Glossy Black)"
            price={13490}
            rating={5}
            image="https://m.media-amazon.com/images/I/71a4ZQNqTiL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="12321344"
            title="Samsung Galaxy S23 Plus 5G (Cream, 8GB, 512GB Storage)"
            price={104999}
            rating={5}
            image="	https://m.media-amazon.com/images/I/61bM8Mojf6L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="12321345"
            title="Apple MacBook Air Laptop, 13.3-inch/33.74 cm, 8GB RAM,Works with iPhone/iPad; Space Grey"
            price={86990}
            rating={5}
            image="	https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className='home_row'>
          <Product
            id="12321456"
            title="OnePlus Buds Pro 2R  Bluetooth Truly Wireless in Ear Earbuds Co-Created with Dynaudion"
            price={9999}
            rating={5}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51G-nCt3mKL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="12321457"
            title="Samsung Galaxy Tab S8 Ultra 37.08 cm (14.6 inch) sAMOLED Display, RAM 12 GB"
            price={122999}
            rating={4}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41fijmiALSL._AC_SR400,600_.jpg"
          />
          <Product
            id="12321345"
            title="Apple iPhone 12 (128GB) - (Product) RED"
            price={57999}
            rating={4}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71E5zB1qbIL._SX522_.jpg"
          />
        </div>
        <div className='home_row'>
          <Product
            id="12321346"
            title="Core Python Programming fundamentals to advanced topics like OOPS,Exceptions, Net"
            price={755}
            rating={4}
            image="	https://m.media-amazon.com/images/I/81gpbxzPhLL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
          id="12321347"
          title="Quantitative Aptitude for Competitive Examinations"
          price={419}
          rating={4}
          image="	https://m.media-amazon.com/images/I/713PolAKv8L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
          id="12321348"
          title="Core Java: An Integrated Approach, New: Includes All Versions upto Java 8"
          price={705}
          rating={5}
          image="	https://m.media-amazon.com/images/I/51z+MsmqesL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        </div>
    </div>
  )
}

export default Home;