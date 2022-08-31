import { useState } from "react";
import "../css/inputs.css";
import consultApi from "../helpers/getMovies.js";

export const FormSearch = ({ setMovies }) => {
  const [inputValue, setInputValue] = useState("");

  async function submit() {
    // e.preventDefault();
    if (inputValue.trim() === "") return;
    const data = await consultApi(inputValue);

    setMovies(data);
    // setInputValue("");
  }
  const onInputChange = ({ target: { value } }) => {
    setInputValue(value);
    setTimeout(() => {
      submit();
    }, 300);
  };

  return (
    <>
      <form className="cont-form center" onSubmit={submit}>
        <div className="inputBox">
          <input
            type="text"
            id="search"
            onChange={onInputChange}
            value={inputValue}
            required
          />
          <span>Buscar</span>
        </div>
        <button type="submit" className="btnSearch">
          <i className="fas fa-search lead"></i>
        </button>
      </form>
    </>
  );
};
