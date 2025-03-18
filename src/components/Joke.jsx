import Button from "./Button";
import { useState } from "react";
import axios from "axios";
import "../App.css"

const Joke = () => {
  const [joke, setJoke] = useState({ setup: "", delivery: "" });
  const callAPI = async () => {
    try {
      const response = await axios.get("https://v2.jokeapi.dev/joke/Programming?type=twopart");
      const { setup, delivery } = response.data;
      setJoke({ setup, delivery });

    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <div className="containerJokes">
      <Button callApi={callAPI} />
      {joke.setup && <p>{joke.setup}</p>}
      {joke.delivery && <p>{joke.delivery}</p>}
    </div>
  )
}

export default Joke;
