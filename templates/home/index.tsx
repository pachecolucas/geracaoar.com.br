import styled from "styled-components";

export default function Index() {
  return (
    <Wrapper>
      <h1>
        <img src="/assets/logo.svg" alt="Geração Ar" />
      </h1>
      <Items>
        <Item
          target="_blank"
          href="https://www.youtube.com/watch?v=PosvOTlZJUA&list=PLhMbqdk2mNpf6ixlzBeYXxOsVTzTCpvVy&index=2"
        >
          Conhecimentos Esotéricos
          <small>
            Uma Introdução aos Conhecimentos Esotérico através de aulas gravadas
            para turma de pós-graduação do Anicha em Blumenau no ano de 2020
          </small>
        </Item>
        <Item
          target="_blank"
          href="https://www.youtube.com/watch?v=mgkl57C4VZc"
        >
          Jogo da Vida
          <small>Palestra para ABPp em 2016</small>
        </Item>
        <Item
          target="_blank"
          href="https://www.youtube.com/watch?v=U5IP_1ADuSY"
        >
          Entrevista Numerologia
          <small>
            Entrevista para o programa Toda Manhã do RBA TV de Rio do Sul em
            2018
          </small>
        </Item>
        <Item target="_blank" href="/geracoes-e-os-quatro-elementos">
          Gerações
          <small>
            Como as Gerações obedecem ao ritmo da Nova Ordem dos 4 Elementos
          </small>
        </Item>
        <Item target="_blank" href="http://setenios.geracaoar.com.br/">
          Setênios
          <small>Aplicativo online</small>
        </Item>
        <Item target="_blank" href="http://numerologo.epanel.com.br/">
          Numerólogo
          <small>Sistema online para cálculo numerológico</small>
        </Item>
        <Item target="_blank" href="/numerologia">
          Numerologia e a Jornada Interior
          <small>Síntese das fases da vida numa visão numerológica</small>
        </Item>
        <Item target="_blank" href="/astrologia-e-auto-lideranca">
          Astrologia e a Auto-liderança
          <small>
            O nascimento do Líder e suas fases conforme o ritmo do zodíaco
          </small>
        </Item>
        <Item target="_blank" href="/ciclos-da-historia">
          Ciclos da História
          <small>
            Uma síntese alquímica dos últimos 600 anos e uma previsão para os
            próximos 200.
          </small>
        </Item>
        <Item target="_blank" href="http://metanoia.geracaoar.com.br/">
          Metanoia
          <small>Aplicativo online</small>
        </Item>
        <Item target="_blank" href="http://prosperacao.com.br/">
          Prosperação
          <small>
            Os 4 Pilares e as 8 Áreas para construção de Comunidades de
            Aprendizagem para a Era da Sabedoria
          </small>
        </Item>
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
  justify-content: space-between;
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
