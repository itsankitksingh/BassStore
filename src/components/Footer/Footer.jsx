import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo eaque
                        ipsa quae ab illo.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha,
                            Kerala, 688006
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0471 272 0261</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: store@bassstore.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text" onClick={() => navigate(`/category/7`)}>Headphones</span>
                    <span className="text" onClick={() => navigate(`/category/9`)}>Smart Watches</span>
                    <span className="text" onClick={() => navigate(`/category/8`)}>Bluetooth Speakers</span>
                    <span className="text" onClick={() => navigate(`/category/10`)}>Wireless Earbuds</span>
                 
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        BassStore E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;