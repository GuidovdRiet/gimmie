import styled from "styled-components";

// Components
import Icon from "../media/Icons";

const SquareButton = ({ text, iconType, ...props }) => {
  return (
    <ButtonWrapper {...props}>
      <Button type="button" {...props}>
        {text}
        {iconType && <Icon className="icon" type={iconType} />}
      </Button>
      <ButtonLine className="button-line" {...props} />
    </ButtonWrapper>
  );
};

export default SquareButton;

const ButtonWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const Button = styled.button`
  min-width: 75px;
  min-height: 30px;
  border: 0px;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.geraldine : theme.shamrock};
  color: ${({ theme }) => theme.white};
  font-size: 1.9rem;
  ${({ theme }) => theme.fontSmoothing};
  padding-top: 3px;
  display: inline-block;
  transition: transform 0.04s cubic-bezier(0.25, 0.75, 0.5, 1.25);
  position: relative;
  z-index: 1;
  &:hover {
    cursor: pointer;
    transform: translate3d(7px, 7px, 0);
    /* Prevent jitter */
    &:after {
      content: "";
      position: absolute;
      top: -10px;
      left: -10px;
      height: 110%;
      width: 110%;
      box-sizing: border-box;
    }
  }
  &:active {
    background-color: ${({ theme, secondary }) =>
      secondary ? theme.geraldineLight : theme.shamrockLight};
  }
  &:focus {
    outline: 0;
  }
  &.cross {
    svg {
      width: 10px;
      margin-left: 14px;
      fill: ${({ theme }) => theme.white};
    }
  }
  .icon {
    margin-left: 20px;
    transform: translateY(1px);
  }
`;

const ButtonLine = styled.div`
  top: 7px;
  left: 7px;
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid
    ${({ theme, secondary }) => (secondary ? theme.geraldine : theme.shamrock)};
`;
