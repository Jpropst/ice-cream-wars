import React from "react"

interface AdProps {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}

const Ad: React.FC<AdProps> = ({ flavor, fontSize, darkTheme }) => {

    return (
      <div className="ad">

      </div>
    )
}

export default Ad