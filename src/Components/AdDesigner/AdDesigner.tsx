import React, { useState } from "react"
import "./AdDesigner.css"
import Ad from "../Ad/Ad";

const AdDesigner = () => {
    const [selectedFlavor, setSelectedFlavor] = useState<string>("Blue Moon");
    const [lightTheme, setLightTheme] = useState(true);
    const [fontSize, setFontSize] = useState<number>(20);

    return (
        <div className="ad-designer">
            <h2>
                Ad Designer
            </h2>
            <Ad
                flavor={selectedFlavor}
                fontSize={fontSize + 1}
                darkTheme={!lightTheme}
            />
            <div>
                <h3>What to Support</h3>
                <button
                    onClick={() => setSelectedFlavor("Black Cherry")}
                    disabled={selectedFlavor === "Black Cherry"}
                    >Black Cherry
                </button>
                <button 
                    onClick={() => setSelectedFlavor("Blue Moon")}
                    disabled={selectedFlavor === "Blue Moon"}
                    >Blue Moon
                </button>
                <button
                    onClick={() => setSelectedFlavor("Superman")}
                    disabled={selectedFlavor === "Superman"}
                    >Superman
                </button>
            </div>
            <div>
                <h3>Color Theme</h3>
                <button
                    onClick={() => setLightTheme(true)}
                    disabled={lightTheme}
                    >Light
                </button>
                <button
                    onClick={() => setLightTheme(false)}
                    disabled={!lightTheme}
                    >Dark
                </button>
            </div>
            <h3>Font Size</h3>
            <div className="font-size-container">
                <button 
                    onClick={() => setFontSize(fontSize - 1)}
                    >Down
                    </button>
                <p>{fontSize}</p>
                <button
                    onClick={() => setFontSize(fontSize + 1)}
                    >Up
                    </button>
            </div>
        </div>
    )
}

export default AdDesigner