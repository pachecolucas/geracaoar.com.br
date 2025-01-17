import styled from "styled-components";
import imagem from "./imagem.svg";

export default function Index() {
  return (
    <Wrapper>
      <img src={imagem.src} alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: black;
  min-width: 100vw;
  img {
    width: 100%;
    filter: invert(100%);
  }
`;
