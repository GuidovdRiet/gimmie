import styled, { keyframes } from "styled-components";

// Components
import Icon from "../media/Icons";

const SquareButton = ({ text, iconType, ...props }) => {
  return (
    <Button type="button" {...props}>
      {text}
      {iconType && <Icon className="icon" type={iconType} />}
      <ButtonLine className="button-line" {...props} />
    </Button>
  );
};

export default SquareButton;

const Button = styled.button`
  min-width: 75px;
  min-height: 30px;
  border: 0px;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.geraldine : theme.shamrock};
  color: ${({ theme }) => theme.white};
  font-size: 1.9rem;
  -webkit-font-smoothing: antialiased;
  padding-top: 3px;
  position: relative;
  display: inline-block;
  &:hover {
    cursor: pointer;
    .button-line {
      transform: translate3d(-10px, -10px, 0);
    }
  }
  .icon {
    margin-left: 20px;
  }
`;

const ButtonLine = styled.div`
  top: 10px;
  left: 10px;
  z-index: -3;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.1s ease-in-out;
  border: 1px solid
    ${({ theme, secondary }) => (secondary ? theme.geraldine : theme.shamrock)};
`;
