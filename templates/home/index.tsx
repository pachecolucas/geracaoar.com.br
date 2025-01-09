import styled from "styled-components";
import STATE from "./state";

export default function Index() {
  return (
    <Wrapper>
      <h1>
        <img src="/assets/logo2.svg" alt="Era da Sabedoria" />
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
      width: 100%;
      filter: invert(1);
      max-width: 200px;
      padding: 20px;
    }
  }
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 12px;
`;
const Item = styled.a`
  background: #191919;
  text-align: center;
  text-decoration: none;
  padding: 20px;
  /* background: white; */
  border-radius: 5px;
  color: white;
  border: 1px solid hsla(0, 0%, 100%, 0.08);
  transition: all 0.2s;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  box-shadow: 0 2px 10px #0005;
  h2 {
    font-size: 1.4em;
  }
  h3 {
    font-size: 1em;
  }
  &:hover {
    background: #111;
    scale: 1.01;
    box-shadow: 0 5px 10px #0005;
  }
  small {
    margin-top: 10px;
    display: block;
    font-weight: normal;
    opacity: 0.8;
    text-transform: none;
  }
`;
