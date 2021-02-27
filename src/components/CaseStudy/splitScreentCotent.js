import React from "react";
import "../../style/components/splitScreenContent.css";

export default function({leftContent, rightContent}) {
    return (
        <div className="splitScreenContent">
            <div className="splitScreenContentContainer">
                <div className="leftScreentWrapper split left">

                </div>

                <div className="RightScreentWrapper split right">
                    <div className="centered">

                    </div>
                </div>
            </div>
        </div>
    )
};