import React from 'react'
import './Home.css'
import Header from './Header'
import Product from './Product'

function Home() {
  return (
   <div>
   <Header/>
     <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_HERO_NTA_BOE_TODAY_2X_EN._CB574639543_.jpg' alt='amazon_banner' />

        <div className='home_row'>
          <Product
          id={1}
            title='Xbox White Controller'
            price={3990}
            rating='⭐ ⭐ ⭐ ⭐ ⭐'
            image='https://m.media-amazon.com/images/I/51-VUKOiYUL._SX679_.jpg'
          />

          <Product
          id={2}
            title='Xbox Series S'
            price={30990}
            rating='⭐ ⭐ ⭐ ⭐ ⭐'
            image='https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_UY327_FMwebp_QL65_.jpg'
          />

        </div>

        <div className='home_row'>



          <Product
          id={3}
            title='Sony PS5 Digital Standalone'
            price={44990}
            rating='⭐ ⭐ ⭐ ⭐ ⭐'
            image='https://m.media-amazon.com/images/I/51wPWj--fAL._SX679_.jpg'
          />

          <Product
          id={4}
            title='DualSense Wireless Controller Red (PlayStation 5)'
            price={5799}
            rating='⭐ ⭐ ⭐ ⭐ ⭐'
            image='https://m.media-amazon.com/images/I/41eM1Ld1eEL._SX679_.jpg'
          />

          <Product
          id={5}
            title='PSVR2 Controller Charging Dock with LED Light， VR Stand Display Your PSVR2， Charging Compatible with PS5 Controller Charger， Playstation VR2 Handle, Charging Cable, Seat Charger'
            price={14990}
            rating='⭐ ⭐ ⭐ ⭐ ⭐'
            image='https://m.media-amazon.com/images/I/71YwxEZT-RL._SX679_.jpg'
          />

        </div>

        <div className='home_row'>

          <Product
          id={6}
            title='Xbox Series X'
            price={48990}
            rating='⭐ ⭐ ⭐ ⭐ ⭐'
            image='https://m.media-amazon.com/images/I/61-jjE67uqL._SX522_.jpg'
          />

        </div>

      </div>



    </div>
   </div>
  )
}

export default Home