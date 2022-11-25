import React from "react";


export default function Footer({className}) {


    return (
        <footer className={className}>

     <div className="downloadCvContainer">
         <div className="downloadCv">
             <a href="Taron Sargsyan CV.pdf" download> click to downlode cv</a>
         </div>

         <span>see my projectes</span>
     </div>

            <div className="characterReferences">
                <span> Character References</span>
                <ul>
                    <li>Camden Michaels</li>
                    <li> Software Manager, Mathica Labs</li>
                    <li>Cell: <a href="tel:+4733378901">+47 333 78 901</a></li>
                </ul>
            </div>
        </footer>
    )
}
