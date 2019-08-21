import React from 'react'

const GameSetup = () => {
    return(
        <div className="game-setup">
            <section className="setup">
            <h3>Setup</h3>
            <h4>Cornhole boards</h4>
                <ul>
                    <li>Should be placed on a flat surface 27 feet apart (front to front)</li>
                    <li>The cornhole board surface should be 2′ x 4′.</li>
                </ul>
            <h4>Cornhole Bags</h4>
                <ul>
                    <li>There should be 8 bags, 4 bags of each color. Consisting of 2 teams.</li>
                    <li>Each bag should be 6 inches by 6 inches and have 1 pound of corn inserted into each cornhole bag.</li>
                </ul>
            </section>
        </div>
    );
}

export default GameSetup