import React, {useRef} from "react";

function PersonalQuestion(props){
    const name = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const linkedin = useRef(null);
    const github = useRef(null);

    function valueSave(event){
        event.preventDefault();
        const pdetails = {
            Name: name.current.value,
            Email: email.current.value,
            Phone: phone.current.value,
            LinkedIn: linkedin.current.value,
            Github: github.current.value
        }
        props.onSave(pdetails);
    }

    return(
        <div className="pdiv">
            <h2>Personal Details</h2>
            <form onSubmit={valueSave} className="pform">
                <input type={Text} placeholder="Name*" ref={name} required></input>
                <input type="email" placeholder="Email*" ref={email} required></input>
                <input type={Text} size="13" placeholder="Phone Number*" ref={phone} required></input><br></br>
                <label>(with Country Code)</label><br></br>
                <input type="url" placeholder="LinkedIn*" ref={linkedin} required></input>
                <input type="url" placeholder="GitHub*" ref={github} required></input><br></br>
                <button>Next</button>
            </form>
        </div>
    )
}

export default PersonalQuestion;