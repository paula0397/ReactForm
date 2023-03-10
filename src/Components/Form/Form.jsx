import React, { useState } from "react";
import Card from "../Card/Card";
import "./Form.css";

const Form = () => {
    const [user, setUser] = useState({
        favoritePlace: "",
        person: "",
        feeling: "",
    });

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    const handleChange = (e, prop) => {
        setUser({ ...user, [prop]: e.target.value.trim() });
    };

    console.log(user);

    const handleSubmit = (e) => {
        e.preventDefault();

        const firstTextIsValid = user.favoritePlace.length > 3;
        const secondTextIsValid = user.person.length > 6;

        if (!firstTextIsValid || !secondTextIsValid) {
        setError(true);

        if (!firstTextIsValid && !secondTextIsValid) {
            setErrorMessage("Please check that the information is correct");
        } else if (!firstTextIsValid) {
            setErrorMessage("Please check that you have more than 3 characters");
        } else {
            setErrorMessage("Please check that you have more than 6 characters");
        }
        return;
        }
        setIsLogged(true);
        console.log("data:", user);
    };

    return (
        <div className="container">
        <a className="gif" href="">
            <img
            src="https://www.gifsanimados.org/data/media/291/mariposa-imagen-animada-0082.gif"
            border="0"
            alt="mariposa-imagen-animada-0082"
            />
        </a>
        <h1>Let's dream...</h1>
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="">What is your favorite place in the world?</label>
            <input
            type="text"
            name=""
            onChange={(e) => handleChange(e, "favoritePlace")}
            placeholder="Imaginary is valid"
            />
            {error && (
            <span style={{ color: "white", fontSize: "0.7rem" }}>
                {" "}
                {errorMessage}{" "}
            </span>
            )}

            <br />
            <label>Who are you with? (more than 6 characters)</label>
            <input
            type="text"
            name=""
            onChange={(e) => handleChange(e, "person")}
            placeholder="Yes, the first one you thought of"
            />
            {error && (
            <span style={{ color: "white", fontSize: "0.7rem" }}>
                {errorMessage}
            </span>
            )}
            <br />
            <label>What feeling do you have?</label>
            {
            <select
                style={{
                width: "100%",
                height: "30px",
                fontSize: "0.9rem",
                }}
                onChange={(e) => handleChange(e, "feeling")}
            >
                <option value="">Not selected</option>
                <option value="Happy" default>
                Happy
                </option>
                <option value="Sadness">Sadness</option>
                <option value="Fear">Fear</option>
                <option value="Love">Love</option>
            </select>
            }
            <br />
            <button>This is your information, click here :)</button>
        </form>
        <br />

        {isLogged && (
            <Card
            favoritePlace={user.favoritePlace}
            person={user.person}
            feeling={user.feeling}
            />
        )}
        </div>
    );
};

export default Form;
