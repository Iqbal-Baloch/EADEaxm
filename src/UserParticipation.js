import { useRef, useState } from "react";

export default function UserParticipation(props){
    const handleSubmit = (e) =>{
        e.preventDefault() ;
        if(value){
            props.incrementVote(value) ;
        }

    }
    const [value, setValue] = useState(null) ;
    const handleValue = (e)=>{
        if(e.target.checked) setValue(e.target.value) ;
        console.log(value); 
    }
    const relation = useRef();
    return(
        <div style={{margin: "2rem"}}>
            <h3>Answer Choices:</h3>
           <form onSubmit={handleSubmit}>
                {props.data.choices.map(options =>{
                    return(
                        <div key={options.id}>
                            <input id={options.id} type="radio" onChange={handleValue} name="choice" value={options} /> 
                            <label htmlFor={options.id}>{options.label}</label>
                        </div>
                        
                    );
                })}
             <input type="submit" value="Submit vote"/>
           </form>
        </div>
    );
}