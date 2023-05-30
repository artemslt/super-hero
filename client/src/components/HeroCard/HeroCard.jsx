/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import {
  Poster,
  Title,
  ImagesWrapper,
  TextAccent,
  Text,
  HeroCardWrapper,
  EditLink,
  DeleteButton,
} from "./HeroCard.styled";
import { deleteHero } from "../../redux/operations";
import { selectLoading } from "../../redux/selectors";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function HeroCard(props) {
  const [isSucces, setIsSucces] = useState(false);
  const {
    _id,
    nickname,
    images,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
  } = props.item;

  const dispatch = useDispatch();

  const handleDelete = () => {
    setIsSucces(true);
    dispatch(deleteHero(_id));
  };
  const isLoading = useSelector(selectLoading);
  return (
    <>
      {!isLoading && isSucces && <Navigate to={"/catalog"} replace={true} />}
      <HeroCardWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title>{nickname}</Title>
          <div>
            <EditLink to={`/update/${_id}`}>Edit</EditLink>
            <DeleteButton type="button" onClick={handleDelete}>
              Delete
            </DeleteButton>
          </div>
        </div>

        <Text>
          <TextAccent>Real name:</TextAccent> {real_name}
        </Text>
        <Text>
          <TextAccent>Description:</TextAccent> {origin_description}
        </Text>
        <Text>
          <TextAccent>Superpowers:</TextAccent> {superpowers}
        </Text>
        <Text>
          <TextAccent>CAtch phrase:</TextAccent> {catch_phrase}
        </Text>

        <ImagesWrapper>
          {images.map((image, idx) => {
            return <Poster key={idx} src={image} alt="hero image" />;
          })}
        </ImagesWrapper>
      </HeroCardWrapper>
    </>
  );
}

export default HeroCard;
