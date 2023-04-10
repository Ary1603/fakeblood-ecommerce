import React from 'react'
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
export default function AdContainer() {
    return (
        <div className="ad-container">
            <img
                src="https://media.gq.com.mx/photos/62cf470ee59053d5b54afd40/16:9/w_2991,h_1682,c_limit/que-es-aesthetic-como-llevarlo.jpg"
                alt=""
                id="ad-img"
            />
            <div className="ad-text-info">
                <p id="limited-offer-text">LIMITED OFFER</p>
                <p className="ad-text-offer" id="offer-text">
                    35% off only this Friday <br />
                    and get special gift
                </p>
                <button className="btn-grab-it-now">
                    Grab it now <AiOutlineArrowRight />
                </button>
            </div>
        </div>
    )
}
