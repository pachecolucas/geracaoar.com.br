import styled from "styled-components";
import degraus from "./degraus.svg";

export default function Index() {
  return (
    <Wrapper>
      <img src={degraus.src} alt="" />
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
