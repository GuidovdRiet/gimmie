import styled from "styled-components";

// Components
import Icon from "../media/Icons";

const SquareButton = ({ text, iconType, ...props }) => {
  return (
    <Button type="button" {...props}>
      {text}
      {iconType && <Icon className="icon" type={iconType} />}
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
  .icon {
    margin-left: 20px;
  }
`;
