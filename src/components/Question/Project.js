import React, {useRef} from "react";

function Project(props) {
    const name1 = useRef(null);
    const technology1 = useRef(null);
    const link1 = useRef(null);
    const desc1 = useRef(null);

    const name2 = useRef(null);
    const technology2 = useRef(null);
    const link2 = useRef(null);
    const desc2 = useRef(null);

    function valueSave(event){
        event.preventDefault();
        const prdetails = {
            Project1: {
                Name: name1.current.value,
                Technology: technology1.current.value,
                Link: link1.current.value,
                Description: desc1.current.value
            }, Project2: {
                Name: name2.current.value,
                Technology: technology2.current.value,
                Link: link2.current.value,
                Description: desc2.current.value
            }
        }
        props.onSave(prdetails);
    }
    return(
        <div>
            <h3>Projects</h3>
            <form onSubmit={valueSave}>
                <h5>Project 1</h5>
                    <input type={Text} placeholder="Name of the Project*" ref={name1} required></input>
                    <input type={Text} placeholder="Technology Used*" ref={technology1} required></input>
                    <input type="url" placeholder="Link to the Project" ref={link1}></input>
                    <textarea type={Text} placeholder="Description to the Project*" ref={desc1}></textarea>
                <h5>Project 2</h5>
                    <input type={Text} placeholder="Name of the Project*" ref={name2} required></input>
                    <input type={Text} placeholder="Technology Used*" ref={technology2} required></input>
                    <input type="url" placeholder="Link to the Project" ref={link2}></input>
                    <textarea type={Text} placeholder="Description to the Project*" ref={desc2}></textarea><br></br>
                <button>Next</button>
            </form>
        </div>
    )
}

export default Project;