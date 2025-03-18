import "../App.css"
const Button = ({ callApi }) => {
  return (
    <button className="btnJoke" onClick={callApi}>Click to generate a joke</button>
  )
}

export default Button;
