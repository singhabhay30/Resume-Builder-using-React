import React, {useRef} from "react";

function Skills(props) {
    const skil = useRef(null);
    function valueSave(event){
        event.preventDefault();
        const skills = {
            Skills: skil.current.value
        }
        props.onSave(skills);
    }
    return(
        <div className="sdiv">
            <h3>Skills</h3>
            <form onSubmit={valueSave}>
                <label>Seperate each Skill by a comma(,)</label><br></br>
                <input type={Text} placeholder="Skills" ref={skil} required></input><br></br>
                <button>Next</button>
            </form>
        </div>
    )
}

export default Skills;