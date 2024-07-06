import React , {useState} from 'react';
import "./slider.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import image1 from '../../assets/sliderimg/image1.png'
import image2 from '../../assets/sliderimg/image2.png'
import image3 from '../../assets/sliderimg/image3.png' // Import the image

const Slider = () => {


    const [count , setCount] = useState(0)


    let images = [
        { img: image1 },
        { img: image2 },
        { img: image3 } // Use the imported image
    ];


    

    const previous = () =>{
        setCount(count-1);

        if(count==0)
            {
                setCount(2)
            }
    }
    const next = () =>{
        setCount(count+1);
        if(count==2)
            {
                setCount(0)
            }
        
    }


    return (
        <div className="slider-container">
            <div className="slider">
                <div className="info-box">
                    <p>YOUR PRODUCTS
                        <br /> ARE GREAT</p>
                    <button>View Button</button>
                </div>

                <div className="slider-box">
                    <img src={images[count].img} alt="Product" />
                </div>
                <ArrowBackIosIcon sx ={{position : "absolute" , top : "36%" , left : "1%" ,cursor:"pointer", fontSize : "75px" }} onClick={previous}/>
                < ArrowForwardIosIcon sx ={{position : "absolute" , top : "36%" , right : "1%" ,cursor:"pointer", fontSize : "75px" }} onClick={next}/>
            </div>
        </div>
    )
}

export default Slider
