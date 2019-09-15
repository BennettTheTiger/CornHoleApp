import React from 'react'

const DeadOn = () => {
    return (
        <section className="game-varient">
            <h3 className="title">Dead On</h3>
            <div className="list-wrapper">
                <ul>
                    <li>3 points scored when a bag goes in the hole, called a cornhole.</li>
                    <li>1 point scored when it lands on the platform, called a woody.</li>
                    <li>At the end of each round, you subtract the high-scoring team’s score from the low-scoring team’s score.</li>
                    <li>First team to 21 wins.</li>
                </ul>
                <button className="mode-btn" title="Play Clas">Play Dead On</button>
            </div>
        </section>
    )

}

export default DeadOn