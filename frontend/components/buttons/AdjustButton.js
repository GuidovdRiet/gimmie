import styled, { keyframes } from "styled-components";
import { string, bool } from "prop-types";

// Components
import Icon from "../media/Icons";

const AdjustButton = ({
  iconType,
  iconColor,
  buttonColor,
  remove,
  ...props
}) => {
  return (
    <ButtonWrapper {...props}>
      <Button
        type="button"
        iconColor={iconColor}
        buttonColor={buttonColor}
        remove={remove}
      >
        {iconType && <Icon className="icon" type={iconType} />}
      </Button>
      <ButtonLine className="button-line" remove={remove} />
    </ButtonWrapper>
  );
};

export default AdjustButton;

AdjustButton.propTypes = {
  iconType: string.isRequired,
  iconColor: string,
  buttonColor: string,
  remove: bool
};

const ButtonWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const Button = styled.button`
  min-height: 40px;
  min-width: 40px;
  border: 0px;
  background-color: ${({ theme, remove }) =>
    remove ? theme.lightGrey : theme.shamrock};
  display: inline-block;
  transition: transform 0.04s cubic-bezier(0.25, 0.75, 0.5, 1.25);
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
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
    background-color: ${({ theme, remove }) =>
      remove ? theme.geraldineLight : theme.shamrockLight};
  }
  &:focus {
    outline: 0;
  }
  .icon {
    transform: translateY(1px);
    fill: ${({ theme, iconColor }) =>
      iconColor ? theme[iconColor] : theme.white};
    transform: ${({ remove }) => (remove ? "rotate(0)" : "rotate(45deg)")};
    min-width: 16px;
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
    ${({ theme, remove }) => (remove ? theme.lightGrey : theme.shamrockLight)};
`;
