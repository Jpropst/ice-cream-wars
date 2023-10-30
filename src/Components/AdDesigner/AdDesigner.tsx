import React, { useState } from "react"
import "./AdDesigner.css"

const AdDesigner = () => {
    const [selectedFlavor, setSelectedFlavor] = useState<string>("Blue Moon");
    const [lightTheme, setLightTheme] = useState(true);
    const [fontSize, setFontSize] = useState<number>(20);

    return (
        <div className="ad-designer">
            <h2>
                Ad Designer
            </h2>
            <div className={`ad ${lightTheme ? "adlight" : "addark"}`}>
                <p style={{ fontSize: `${fontSize}px` }}>Vote For</p>
                <p style={{ fontSize: `${fontSize}px` }}>{selectedFlavor}</p>
            </div>
            <div>
                <p>What to Support</p>
                <button onClick={() => setSelectedFlavor("Blue Moon")} disabled={selectedFlavor === "Blue Moon"}>
                    Chocolate
                </button>
                <button onClick={() => setSelectedFlavor("Moose Tracks")} disabled={selectedFlavor === "Moose Tracks"}>
                    Vanilla
                </button>
                <button onClick={() => setSelectedFlavor("Superman")} disabled={selectedFlavor === "Superman"}>
                    Strawberry
                </button>
            </div>
            <div>
                <p>Color Theme</p>
                <button onClick={() => setLightTheme(true)} disabled={lightTheme}>
                    Light
                </button>
                <button onClick={() => setLightTheme(false)} disabled={!lightTheme}>
                    Dark
                </button>
            </div>
            <p>Font Size</p>
            <div className="font-size-container">
                <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
                <p>{fontSize}</p>
                <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
            </div>
        </div>
    )
}

export default AdDesigner