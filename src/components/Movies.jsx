import { Container, Row, Col } from "react-bootstrap";

export const Movies = ({ movie }) => {
  console.log(movie);
  const { Title, Poster, Year, Type } = movie;
  return (
    <>
      <Col xs={12} md={4} className="movie center">
        <div className="card-movie">
          <h3 className="title-card">{Title}</h3>
          <img src={Poster} alt={Title} />
          <p>
            <span>Año:</span>
            {Year}
          </p>
          <p>
            <span>Tipo:</span>
            {Type}
          </p>
        </div>
      </Col>
    </>
  );
};
