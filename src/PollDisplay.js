export default function PollDisplay(props){
    const {javascriptVote, pythonVote, javaVote, cVote} = props ;
    return(
        <div style={{margin: "2rem"}}>
            <h2>Poll Question: What is your favorite programming language?</h2>
          
            <h3>Answer Choices with Vote Counts:</h3>
            <ul>
                <li>JavaScript: {javascriptVote} votes</li>
                <li>Python: {pythonVote} votes</li>
                <li>Java: {javaVote} votes</li>
                <li>C#: {cVote} votes</li>
            </ul>
        </div>
    );
}