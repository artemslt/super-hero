// import HeroCard from "../components/HeroCard/HeroCard";
import { useDispatch, useSelector } from "react-redux";
import { pagesCount, selectAllHeroes, selectLoading } from "../redux/selectors";
import { useEffect, useState } from "react";
import { fetchHeroes } from "../redux/operations";
import { Container } from "../components/Layout/Layout.styled";
// import HeroCard from "../components/HeroCard/HeroCard";
import styled from "styled-components";
import { Card, Image, Title } from "../components/HeroCard/HeroCard.styled";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination/Pagination";

function Catalog() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const list = useSelector(selectAllHeroes);
  const totaalPages = useSelector(pagesCount);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchHeroes(currentPage));
  }, [currentPage, dispatch]);

  return (
    <Container>
      {isLoading ? (
        <div>...loading</div>
      ) : (
        <div>
          <CardList>
            {list.map((item) => (
              <li key={item._id}>
                <Card>
                  <Link to={`/hero/${item._id}`}>
                    <Title>{item.nickname}</Title>
                    <Image src={item.images[0]} alt="hero image" />
                  </Link>
                </Card>
              </li>
            ))}
          </CardList>
          {totaalPages > 1 && (
            <Pagination
              nPages={totaalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      )}
    </Container>
  );
}

export default Catalog;

export const CardList = styled.ul`
  padding-top: 36px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;
