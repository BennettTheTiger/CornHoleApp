import React from 'react'

const Classic = () => {
    return (
        <section className="game-varient">
            <h3 className="title">Classic (Cancelation Scoring)</h3>
            <div className="list-wrapper">
                <ul>
                    <li>3 points scored when a bag goes in the hole, called a cornhole.</li>
                    <li>1 point scored when it lands on the platform, called a woody.</li>
                    <li>At the end of each round, you subtract the high-scoring team’s score from the low-scoring team’s score.</li>
                    <li>First team to 21 wins.</li>
                </ul>
                <button title="Play Clas">Play Classic</button>
            </div>
        </section>
    )

}

export default Classic