import styled, { css } from "styled-components";

type Props = {
  children: any;
  fillHeight?: boolean;
};
export default function index({ children, fillHeight = false }: Props) {
  return <Wrapper fillHeight={fillHeight}>{children}</Wrapper>;
}

const Wrapper = styled.div<{ fillHeight: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
  ${(props) =>
    props.fillHeight &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      /* border: 1px solid white; */
      min-height: calc(100vh - 55px);
    `}
`;
