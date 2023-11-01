import React, { useState } from "react"
import "./Votes.css"

const Votes = () => {
    const [ blueMoonVotes, setBlueMoonVotes] = useState(0)
    const [ blackCherryVotes, setBlackCherryVotes ] = useState(0)
    const [ supermanVotes, setSupermanVotes ] = useState(0)

    const totalVotes = blueMoonVotes + blackCherryVotes + supermanVotes

    return (
        <div className="votes">
            <h2>
                Vote Here
            </h2>
            <div className="votes-buttons">
                <button onClick={() => setBlackCherryVotes(blackCherryVotes + 1)}>
                    Black Cherry
                </button>
                <button onClick={() => setBlueMoonVotes(blueMoonVotes + 1)}>
                    Blue Moon
                </button>
                <button onClick={() => setSupermanVotes(supermanVotes + 1)}>
                    Superman
                </button>
            </div>
            <div className="votes-display">
                {blueMoonVotes > 0 && (
                    <>
                        Blue Moon: {blueMoonVotes} ({((blueMoonVotes / totalVotes) * 100).toFixed(2)}%)
                        <div 
                            className="vote-bar"
                            style={{
                                width: `${(blueMoonVotes / totalVotes) * 100}%`,
                                backgroundColor: "#74d1d0"
                            }}
                        ></div>
                    </>
                )}
                {blackCherryVotes > 0 && (
                    <>
                    Black Cherry: {blackCherryVotes} ({((blackCherryVotes / totalVotes) * 100).toFixed(2)}%)
                        <div 
                            className="vote-bar"
                            style={{
                                width: `${(blackCherryVotes / totalVotes) * 100}%`,
                                backgroundColor: "#f2857e"
                            }}
                        ></div>
                    </> 
                )}
                {supermanVotes > 0 && (
                    <>
                    Superman: {supermanVotes} ({((supermanVotes / totalVotes) * 100).toFixed(2)}%)
                        <div 
                            className="vote-bar"
                            style={{ 
                                width: `${(supermanVotes / totalVotes) * 100}%`,
                                background: "linear-gradient(#0060aa 0% 33%, #ffed10 33% 66%, #e20025 66% 100%)"
                            }}
                        ></div>
                    </> 
                )}
            </div>
            {totalVotes === 0 && <>No Votes Yet</>}
        </div>
    )
}

export default Votes