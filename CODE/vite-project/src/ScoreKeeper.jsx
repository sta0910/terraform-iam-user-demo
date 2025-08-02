import { useState } from "react"

const ScoreKeeper = ({ numplayers = 3, target = 5 }) => {

    const [playerScore, setPlayerScore] = useState(new Array(numplayers).fill(0))

    // const plusScore = (idx) => {
    //     setPlayerScore(prev => {
    //         const copy = [...prev]
    //         copy[idx] += 1;
    //         return copy;
    //     })
    // }

    const plusScore = (idx) => {
        setPlayerScore(prev => prev.map((score, i) => {
            if (i === idx) return score + 1
            return score;
        })
        )
    };

    // const reset = () => {
    //     setPlayerScore(prev => prev.map((score) => {
    //         return score = 0
    //     })
    //     )
    // }

    const reset = () => {
        setPlayerScore(new Array(numplayers).fill(0))
    }

    const hasWinner = playerScore.some(score => score >= target);


    return (
        <div>ScoreKeeper
            <ul>
                {playerScore.map((score, idx) => {
                    return <li key={idx}>player{idx + 1}--{playerScore[idx]}
                        <button disabled={hasWinner} onClick={() => plusScore(idx)}>＋１</button>
                        {score >= target && <span style={{ color: "red" }}>winner</span>}</li>

                })}

            </ul>
            <button onClick={reset}>リセット</button>
        </div>
    )
}


export default ScoreKeeper