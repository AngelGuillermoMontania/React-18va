import styled from "styled-components";

export const Button = styled.button`
  background: #ff00ff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin: 3px;
`;

export const Button2 = styled.button`
  background: #ffffaf;
  color: #000000;
  border: none;
  border-radius: 5px;
  margin: 3px;
`;

export const Button3 = styled.button`
  background: ${(props) => (props.$primary ? "#105ff0" : "#BF4f74")};
  color: #000000;
  border: none;
  border-radius: 5px;
  margin: 3px;
`;

export const SpecialButton3 = styled(Button3)`
  font-size: 1.2em;
`;
