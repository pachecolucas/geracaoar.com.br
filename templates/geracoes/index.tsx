import styled from "styled-components";

export default function Index() {
  return (
    <Wrapper>
      <img src="/assets/geracoes.gif" alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  background: black;
  img {
    width: 100%;
    max-height: 90vh;
    filter: invert(100%);
  }
`;
