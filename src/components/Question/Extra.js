import React, {useRef} from "react";

function Extra(props) {
    const lang = useRef(null);
    const hobb = useRef(null);

    function valueSave(event){
        event.preventDefault();
        const exdetails = {
            Languages: lang.current.value,
            Hobbies: hobb.current.value
        }
        props.onSave(exdetails);
    }
    return(
        <div>
            <h3>Extra Activity</h3>
            <form onSubmit={valueSave}>
                <h5>Languages</h5>
                    <input type={Text} placeholder="Languages you Know" ref={lang} required></input>
                <h5>Hobbies & Interest</h5>
                    <input type={Text} placeholder="Hobbies and Interests" ref={hobb} required></input><br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Extra;