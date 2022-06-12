import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=''
                />
                <div className='home__row'>
                    <Product
                        id="146672"
                        title="The Secret Hardcover – 1 January 2009 by Rhonda Byrne"
                        price={468}
                        image="https://m.media-amazon.com/images/I/91Wj9JEjtiL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    <Product
                        id="134164"
                        title="Mamaearth Ubtan Natural Face Wash for All Skin Type with Turmeric & Saffron for Tan removal and Skin brightning 100 ml - SLS & Paraben Free"
                        price={228}
                        image="https://m.media-amazon.com/images/I/51hwUO-kAqL._SL1200_.jpg"
                        rating={3}
                    />
                    <Product
                        id="673904"
                        title="GNC AMP Pure Isolate Powder Vanilla 1kg"
                        price={5399.00}
                        image="https://m.media-amazon.com/images/I/71CyreMOStL._SL1500_.jpg"
                        rating={4}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id="550570"
                        title="Xiaomi 11 Lite NE 5G (Vinyl Black 6GB RAM 128 GB Storage) | Slimmest (6.81mm) & Lightest (158g) 5G Smartphone | 10-bit AMOLED with Dolby Vision |"
                        price={24999}
                        image="https://m.media-amazon.com/images/I/71xZXmNJ6UL._SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="679735"
                        title="Armani Exchange Banks Analog Black Dial Men's Watch-AX7133SET"
                        price={15995}
                        image="https://m.media-amazon.com/images/I/61otyf3psdL._UL1500_.jpg"
                        rating={5}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id="822921"
                        title="Mi 125.7 cm (50 Inches) 4K Ultra HD Android Smart LED TV 4X | L50M5-5AIN (Black)"
                        price={25999}
                        image="https://m.media-amazon.com/images/I/61V7cDH8AAS._SL1188_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home