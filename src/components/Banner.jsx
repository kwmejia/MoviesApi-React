import headerImg from "../assets/img/header-img.svg";
import { FormSearch } from "./";

export const Banner = ({ setMovies }) => {
  return (
    <>
      <div className="container-fluid cont-banner ">
        <div className="search center">
          <FormSearch setMovies={setMovies} />
        </div>
        <div className="cont-header-img center">
          <img src={headerImg} />
        </div>
      </div>
    </>
  );
};
