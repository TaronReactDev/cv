import React, {useState} from "react";
import "../../style.scss";


export default function InfoSection({info, objectivClass,gridClass}) {

    const [state, setStat] = useState(info);

    const infoArrExtract = state.infoArr.map((el) => {
        return (
            <>
                <h5>{el.title ? el.title : ""}</h5>
                <h6>{el.subTitle? el.subTitle : ""}</h6>
                {el.description ? el.description.map((el => {return <li>{el}</li>})) : ""}

            </>
        )

    })
    return (
        <section className= {`infoSectionContainer  ${objectivClass ? objectivClass:"" } ${gridClass}`} >
            <h4>{state.containerTitle}</h4>
            <ul>{infoArrExtract}</ul>
        </section>
    )


}