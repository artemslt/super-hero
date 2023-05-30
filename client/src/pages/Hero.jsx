import {  useParams } from "react-router-dom";
import { getHeroDetails } from "../services/getHeroDetails";
import { useEffect, useState } from "react";
import { Container } from "../components/Layout/Layout.styled";
import HeroCard from "../components/HeroCard/HeroCard";

function Hero() {
  const { id } = useParams();
  const [hero, setHero] = useState(null);
  const [isLoading, setisloading] = useState(false);


  useEffect(() => {
    setisloading(true);
    getHeroDetails(id)
      .then((res) => {
        setHero(res);
      })
      .catch(() => {
        setisloading(false);
      });
  }, [id]);

  if (!hero) return null;

  return (
    <Container>
      {!isLoading ? <div>...Loading</div> : <HeroCard item={hero} is />}
    </Container>
  );
}

export default Hero;
