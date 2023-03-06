import styled from "styled-components";
import STATE from "./state";

export default function Index() {
  return (
    <Wrapper>
      <h1>
        <img src="/assets/logo.svg" alt="Geração Ar" />
      </h1>

      <Items>
        {STATE.items.map((item, i) => (
          <Item key={i} target="_blank" href={item.href}>
            <h2>{item.title}</h2>
            <h3>{item.subtitle}</h3>
            <small>{item.description}</small>
          </Item>
        ))}
      </Items>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  h1 {
    text-align: center;
    img {
      filter: invert(1);
      width: 200px;
    }
  }
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 12px;
`;
const Item = styled.a`
  text-align: center;
  text-decoration: none;
  padding: 20px;
  /* background: white; */
  border-radius: 5px;
  color: white;
  border: 1px solid white;
  transition: all 0.2s;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  h2 {
    font-size: 1.4em;
  }
  h3 {
    font-size: 1em;
  }
  &:hover {
    background: white;
    color: black;
  }
  small {
    margin-top: 10px;
    display: block;
    font-weight: normal;
    opacity: 0.8;
    text-transform: none;
  }
`;
