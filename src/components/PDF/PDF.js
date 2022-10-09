import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

function PDF(props) {
    console.log(props.Ext.Languages);
    return(
        <>
        <div className="Post" ref={ref}>
            <h3>Personal Details</h3>
                <p>{props.Person.Name}</p>
                <p>{props.Person.Email}</p>
                <p>{props.Person.Phone}</p>
                <p>{props.Person.LinkedIn}</p>
                <p>{props.Person.Github}</p>
            <h3>Education</h3>
                <h5>{props.Edu.Education1.Qualification1}</h5>
                    <p>{props.Edu.Education1.Name1}</p>
                    <p>{props.Edu.Education1.Start_Year1.slice(0, 4)} - {props.Edu.Education1.End_Year1.slice(0, 4)}</p>
                    <p>{props.Edu.Education1.Percentage1}</p>
                <h5>{props.Edu.Education2.Qualification2}</h5>
                    <p>{props.Edu.Education2.Name2}</p>
                    <p>{props.Edu.Education2.Start_Year2.slice(0, 4)} - {props.Edu.Education2.End_Year2.slice(0, 4)}</p>
                    <p>{props.Edu.Education2.Percentage2}</p>
            <h3>Skills</h3>
                <p>{props.Ski.Skills}</p>
            <h3>Projects</h3>
                <p><strong>{props.Proj.Project1.Name}</strong>,{props.Proj.Project1.Technology}</p>
                <p>{props.Proj.Project1.Description}</p>
                <p><strong>{props.Proj.Project2.Name}</strong>,{props.Proj.Project2.Technology}</p>
                <p>{props.Proj.Project2.Description}</p>
            <h3>Languages</h3>
                <p>{props.Ext.Languages}</p>
            <h3>Hobbies & Interests</h3>
                <p>{props.Ext.Hobbies}</p>
        </div>
        <Pdf targetRef={ref} filename="post.pdf">
            {({toPdf}) => <button onClick={toPdf}>Generate PDF</button>}
        </Pdf>
        </>
    )
}

export default PDF;