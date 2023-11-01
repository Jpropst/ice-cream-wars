import React from "react"

interface AdProps {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}

const Ad: React.FC<AdProps> = ({ flavor, fontSize, darkTheme }) => {
    const themeStyle = darkTheme ? { background: 'black', color: 'white', border: '3px solid #fff' } : { background: 'white', color: 'black', border: '3px solid #222' }
    return (
        <div
            className="ad"
            style={themeStyle}
            >
            <p style={{ fontSize: `${fontSize * 0.7}px` }}>Vote for</p>
            <h2 style={{ fontSize: `${fontSize}px` }}>{flavor}</h2>
        </div>
    )
}

export default Ad