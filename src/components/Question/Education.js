import React, {useRef} from "react";

function Education(props){
    const name1 = useRef(null);
    const syear1 = useRef(null);
    const eyear1 = useRef(null);
    const quali1 = useRef(null);
    const percent1 = useRef(null);

    const name2 = useRef(null);
    const syear2 = useRef(null);
    const eyear2 = useRef(null);
    const quali2 = useRef(null);
    const percent2 = useRef(null);

    function valueSave(event){
        event.preventDefault();
        const edetails = {
            Education1: {
                Name1: name1.current.value,
                Start_Year1: syear1.current.value,
                End_Year1: eyear1.current.value,
                Qualification1: quali1.current.value,
                Percentage1: percent1.current.value
            }, Education2: {
                Name2: name2.current.value,
                Start_Year2: syear2.current.value,
                End_Year2: eyear2.current.value,
                Qualification2: quali2.current.value,
                Percentage2: percent2.current.value
            }
        }
        props.onSave(edetails)
    }
    return(
        <div>
            <h3>Education Details</h3>
            <form onSubmit={valueSave}>
            <h5>University</h5>
                <input type={Text} placeholder="Name*" ref={name1} required></input><br></br>
                <label className="datelabel">Start Date</label>
                <input className="leftdate" type="date" placeholder="Start Year*" ref={syear1} required></input>
                <label className="datelabel">End Date</label>
                <input type="date" placeholder="Year of Graduation*" ref={eyear1} required></input><br></br>
                <input type={Text} placeholder="Qualification*" ref={quali1} required></input>
                <input type={Text} placeholder="Percentage/GPA*" ref={percent1} required></input>
            <h5>Higher Secondary Education</h5>
                <input type={Text} placeholder="Name*" ref={name2} required></input><br></br>
                <label className="datelabel">Start Date</label>
                <input className="leftdate" type="date" placeholder="Start Year*" ref={syear2} required></input>
                <label className="datelabel">End Date</label>
                <input type="date" placeholder="Year of Completion*" ref={eyear2} required></input><br></br>
                <input type={Text} placeholder="Qualification*" ref={quali2} required></input>
                <input type={Text} placeholder="Percentage/GPA*" ref={percent2} required></input><br></br>
            <button>Next</button>
            </form>
        </div>
    )
}

export default Education;