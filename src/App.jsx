import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavBar, Banner, Movies } from "./components/";

function App() {
  const [movies, setMovies] = useState([]);
  // console.log(movies);

  return (
    <>
      <NavBar />
      <Banner setMovies={setMovies} />

      <Container>
        <Row>
          {movies &&
            movies.map((movie) => {
              return <Movies key={movie.imdbID} movie={movie} />;
            })}
        </Row>
      </Container>
    </>
  );
}

export default App;
