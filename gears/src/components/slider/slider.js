import React from 'react'
import "./slider.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import image1 from '../../assets/sliderimg/image3.png' // Import the image

const Slider = () => {
    let images = [
        { img: image1 }, // Use the imported image
    ]

    return (
        <div className="slider-container">
            <div className="slider">
                <div className="info-box">
                    <p>YOUR PRODUCTS
                        <br /> ARE GREAT</p>
                    <button>View Button</button>
                </div>

                <div className="slider-box">
                    <img src={images[0].img} alt="Product" />
                </div>
                <ArrowBackIosIcon sx ={{position : "absolute" , top : "36%" , left : "1%" , fontSize : "75px" }}/>
                < ArrowForwardIosIcon sx ={{position : "absolute" , top : "36%" , right : "1%" , fontSize : "75px" }}/>
            </div>
        </div>
    )
}

export default Slider
