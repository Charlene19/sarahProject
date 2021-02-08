import MYAJIMA_01 from '../../images/Travel/Japon/Tokyo/MYAJIMA_01.jpg'
import HIROSHIMA_02 from '../../images/Travel/Japon/Tokyo/HIROSHIMA_02.jpg'
import KOBE_04 from '../../images/Travel/Japon/Tokyo/KOBE_04.jpg'
import KYOTO_09 from '../../images/Travel/Japon/Tokyo/KYOTO_09.jpg'
import NAOSHIMA_04 from '../../images/Travel/Japon/Tokyo/NAOSHIMA_04.jpg'
import NAOSHIMA_05 from '../../images/Travel/Japon/Tokyo/NAOSHIMA_05.jpg'
import TOKYO_13 from '../../images/Travel/Japon/Tokyo/TOKYO_13.jpg'
import TOKYO_15 from '../../images/Travel/Japon/Tokyo/TOKYO_15.jpg'
import TOKYO_17 from '../../images/Travel/Japon/Tokyo/TOKYO_17.jpg'
import {BrowserRouter as Router} from "react-router-dom";
import Layout from "../../Layout";
import {SRLWrapper} from "simple-react-lightbox";

const Japon = () => {
    return (

        <Router>
            <Layout>
                <SRLWrapper>
                    <div className="imageP">
                        <img style={{marginTop: '200px', width: "612px", height: "526px"}} src={NAOSHIMA_05}
                             alt="NAOSHIMA_05"/>
                    </div>
                    <div className="imageP">
                        <img style={{marginTop: '200px', width: "612px", height: "526px"}} src={TOKYO_15}
                             alt="TOKYO_15"/>
                    </div>
                    <div className="imageP">
                        <img style={{marginTop: '200px', width: "612px", height: "526px"}} src={KYOTO_09}
                             alt="KYOTO_09"/>
                    </div>
                    <div className="imageP">
                        <img style={{marginTop: '200px', width: "612px", height: "526px"}} src={KOBE_04}
                             alt="KOBE_04"/>
                    </div>
                    <div className="imageP">
                        <img style={{marginTop: '200px', width: "612px", height: "526px"}} src={HIROSHIMA_02}
                             alt="HIROSHIMA_02"/>
                    </div>
                    <div className="imageP">
                        <img style={{marginTop: '200px', width: "612px", height: "526px"}} src={TOKYO_17}
                             alt="TOKYO_17"/>
                    </div>
                    <div className="imageP">
                        <img style={{marginTop: '200px', width: "612px", height: "526px"}} src={NAOSHIMA_04}
                             alt="NAOSHIMA_04"/>
                    </div>

                    <div className="imageP">
                        <img style={{marginTop: '200px', width: "612px", height: "526px"}} src={MYAJIMA_01}
                             alt="MYAJIMA_01"/>
                    </div>

                    <div className="imageP">
                        <img style={{marginTop: '200px', width: "612px", height: "526px"}} src={TOKYO_13}
                             alt="TOKYO_13"/>
                    </div>

                </SRLWrapper>
            </Layout>
        </Router>
    );
}

export default Japon;