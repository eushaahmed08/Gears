// TopProducts.js
import React from 'react';
import myJsonData from "../topSearchesData/TopSearchesData.json";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import './TopProducts.css';

const TopProducts = () => {
    return (
        <>
            {/* Main heading section */}
            <div className='mainHeadingDiv'>
                <div className='headingD'>
                    <h1>Top Searches</h1>
                </div>
            </div>

            {/* Top products section */}
            <div>
                <div className="topproducts-container">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={{ xs: 2, md: 2 }}
                            columns={{ xs: 3, sm: 4, md: 10 }}
                            className="mainGrid"
                        >
                            {/* Iterate through the product data and display each product */}
                            {myJsonData.map((product, index) => (
                                <Grid xs={2} sm={4} md={3} key={index} className="allbox">
                                    <div className='overlay'>
                                        <div className='overlay-info'>
                                            <p>Title : {product.title}</p>
                                            <p>Price : {product.price}</p>
                                            <button>Add top cart</button>
                                        </div>
                                    </div>
                                    <img src={product.img} alt={product.name} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </div>
        </>
    );
};

export default TopProducts;
