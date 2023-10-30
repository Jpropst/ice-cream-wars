import React, { useState } from "react"
import "./Votes.css"

const Votes = () => {
    type VotesType = {
        'Blue Moon': number;
        'Moose Tracks': number;
        'Superman': number;
    }
    const [votes, setVotes] = useState<VotesType>({
        'Blue Moon': 0,
        'Moose Tracks': 0,
        'Superman': 0,
    })
    const handleVote = (flavor: keyof VotesType) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [flavor]: prevVotes[flavor] + 1,
        }))
    }
    const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);
    return (
        <div className="Votes">
            <h2>Vote Here</h2>
            {Object.keys(votes).map((flavor) => {
                const flavorVotes = votes[flavor as keyof VotesType]
                const percentage = totalVotes === 0 ? 0 : (flavorVotes / totalVotes) * 100
                return (
                    <div key={flavor} className="vote-item">
                        <button 
                            onClick={() => handleVote(flavor as keyof VotesType)}>
                            {flavor}
                        </button>
                        <div 
                            className="bar" 
                            style={{ width: `${percentage}%` }}>
                        </div>
                        <p>{flavorVotes} ({percentage.toFixed(1)}%)</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Votes