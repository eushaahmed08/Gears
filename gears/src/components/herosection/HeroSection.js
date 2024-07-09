import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div>
        <div className='mainherosection-container' >
            
            <div className='herosection'>
                <div className='box-1'>
                    <div className='iconAndHeading'>
                    <AccessTimeIcon sx={{marginLeft:"-38px",color:"black"}}/>
                        <h1>lorem ipsum</h1>

                    </div>
                    <p>lorem </p>
                    <p>lorem </p>
                </div>
                <div className='box-2'>
                    <div className='iconAndHeading'>
                    <AccessTimeIcon sx={{marginLeft:"-38px",color:"black"}}/>
                    <h1>lorem ipsum</h1>

                    </div>
                    <p>lorem </p>
                    <p>lorem </p>    
                </div>
                <div className='box-3'>
                    <div className='iconAndHeading'>
                    <AccessTimeIcon sx={{marginLeft:"-38px",color:"black"}}/>
                    <h1>lorem ipsum</h1>

                    </div>
                    <p>lorem </p>
                    <p>lorem </p>
                </div>
                <div className='box-4'>
                    <div className='iconAndHeading'>
                    <AccessTimeIcon sx={{marginLeft:"-38px",color:"black"}}/>
                    <h1>lorem ipsum</h1>

                    </div>
                    <p>lorem </p>
                    <p>lorem </p>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default HeroSection
