import React, {useState} from "react";
import "../../style/components/clickableImage.css";

export default function({imageSource, className, id, shadowBox = false, style = null}) {
    let imageContainerClassName= className ? `clickableImageContainer ${className}` : "clickableImageContainer";
    let imageContainerId = id ? `clickableImageContainer_${id}` : `clickableImageContainer_0`;
    var clickableImageClassName = shadowBox ? `smallImage box-shadow` : "smallImage";
    var style = style || {};
    const [isOpen, setIsOpen] = useState(false);

    const handleShowDialog = () => {
        setIsOpen(!isOpen);
        console.log("cliked");
    };

    return (
        <div className={imageContainerClassName} id={imageContainerId} key={id}>
            <div className="clickableImage">
                <img
                    className={clickableImageClassName}
                    src={imageSource}
                    onClick={handleShowDialog}
                />
                {isOpen && (
                    <dialog
                        className="clickableImageDialog"
                        open
                        onClick={handleShowDialog}
                    >
                        <div style={{fontSize: "30px", position: "absolute", top: "50px", right: "50px", color: "black", fontFamily: "arial, sans-serif", cursor: "pointer"}}>[X]</div>
                    <img
                        className="fullImage"
                        style={style}
                        src={imageSource}
                        onClick={handleShowDialog}/>
                    </dialog>
                    // <div
                    //     className="backdrop"
                    //     style={{position: "absolute"}}
                    //     style={{
                    //         position:"fixed",
                    //         top: "50%",
                    //         left: "50%",
                    //         transform: "translate(-50%, -50%)",
                    //         width: "100vw",
                    //         height: "100vh",
                    //         backgroundColor: "rgb(165 165 165/24%)"
                    //     }}
                    // >

                    // </div>
                )}
            </div>
        </div>
    )
};