import styled from "styled-components";

export default function Index() {
  return (
    <Wrapper>
      <h1>
        <img src="/assets/logo.svg" alt="Geração Ar" />
      </h1>
      <Items>
        <Item target="_blank" href="http://setenios.geracaoar.com.br/">
          Setênios
        </Item>
        <Item target="_blank" href="http://metanoia.geracaoar.com.br/">
          Metanoia
        </Item>
        <Item target="_blank" href="http://numerologo.epanel.com.br/">
          Numerólogo
        </Item>
        <Item target="_blank" href="http://prosperacao.com.br/">
          Prosperação
        </Item>
      </Items>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    img {
      filter: invert(1);
      width: 200px;
    }
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
`;
const Item = styled.a`
  text-align: center;
  text-decoration: none;
  padding: 10px 20px;
  /* background: white; */
  border-radius: 5px;
  margin-bottom: 10px;
  color: white;
  border: 1px solid white;
  transition: all 0.2s;
  &:hover {
    background: white;
    color: black;
  }
`;
