import React from "react";

export default function PleyerResultes(props) {
    var resultes = props.resultes;
    let player1 = [];
    let player2 = [];

    player1 = resultes.filter((elem, i) => {
        return i % 2 === 0;
    }).map((e) => {
        return <span>`${e},`</span>;
    });

    player2 = resultes
        .filter((elem, i) => {
            return i % 2 === 1;
        })
        .map((e) => {
            return <span>`${e},`</span>;
        });

    let set = player1.map((e, i) => {
        return <span>{`${i + 1},`}</span>;
    });

    return (
        <div className="resulte">
            <div className="setnumber">
                {" "}
                <p>Setnumber</p>
             <p>{set}</p>
            </div>
            <div className="setnumber">
                {" "}
                <p>Player 1</p>
               <p>{player1}</p>
            </div>
            <div className="setnumber">
                <p>Player 2</p>
                <p>{player2} </p>
            </div>
        </div>
    );
}
