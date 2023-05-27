export default function PollDisplay(props){
    
    return(
        <div style={{margin: "2rem"}}>
            <h2>Poll Question: {props.data.question}</h2>
          
            <h3>Answer Choices with Vote Counts:</h3>
            <ul>
                {props.data.choices.map(options =>{
                    return(
                        <li key={options.id}>{options.label}: {options.votes}</li>
                    );
                })}
            </ul>
        </div>
    );
}