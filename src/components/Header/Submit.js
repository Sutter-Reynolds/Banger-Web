import { useNavigate } from "react-router-dom";

const Submit = () => {
    const navigate = useNavigate();
  return (
    <div className="Submit-Button-Hero">
        <p>Submit Your Music To Banger</p>
        <button className="Submit-Button" onClick={() => navigate()}>Submit</button>
    </div>
  )
}

export default Submit