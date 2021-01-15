import  { SRLWrapper } from "simple-react-lightbox";
import React from "react";
import travel_logo from '../images/travel_logo.jpg';
import travelde from '../images/travel_N9A9788.jpg';
import './GalleryMenu.css';
import Maroc0211 from '../images/Travel/MAROC-021 1.jpg'


import MYAJIMA_01 from '../images/Travel/Japon/Tokyo/MYAJIMA_01.jpg'

import Layout from "../Layout";
import { BrowserRouter as Router } from 'react-router-dom';




const GalleryTravel = () => {
    return (

        <Router>
        <SRLWrapper>
        <Layout>

            < div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/travelMaroc">
<div>
                <img className=" image _ay " src={Maroc0211} alt="Maroc0211"/></div>
                <div className=" normal _b1 ">
                    <div className=" text _2 ">
                    </div>
                </div>
                <div className=" hover _b0 ">
                    <img className=" image _ay " src={Maroc0211} alt="Portrait legend"/>
                    <div className=" text _2 ">Maroc
                    </div>
                </div>
            </a> </div>





            <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/japonGallery">
                <img className=" image _ay " src={MYAJIMA_01} alt="MYAJIMA_01"/>
                <div className=" normal _b1 ">
                    <div className=" text _2 ">
                    </div>
                </div>
                <div className=" hover _b0 ">
                    <img className=" image _ay " src={MYAJIMA_01} alt="MYAJIMA_01"/>
                    <div className=" text _2 ">Japon
                    </div>
                </div>
            </a></div>

            <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href={travelde}>
                <img className=" image _ay " src={travelde} alt="Travel"/>
                <div className=" normal _b1 ">
                    <div className=" text _2 ">
                    </div>
                </div>
                <div className=" hover _b0 ">
                    <img className=" image _ay " src={travel_logo} alt="Travel legend"/>
                    <div className=" text _2 ">Travel 3
                    </div>
                </div>
            </a></div>



        </Layout>
            </SRLWrapper>
        </Router>
    );
}

export default GalleryTravel;
