import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { useNavigate } from "react-router-dom";
const Banner = () => {
    const navigate = useNavigate();
    return <div className='hero-banner'>
        <div className="content">
            <div className="text-content">
                
                <h1 >30% OFF</h1>
                <p>
                    30% off on all Headphones. Use code "30OFF" at checkout.
                </p>
                <div className="ctas">
                    {/* <div className="banner-cta"> Read More</div> */}
                    <div className="banner-cta v2" onClick={() => navigate(`/category/7`)}>Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="banner" />
        </div>
    </div>;
};

export default Banner;
