import React from 'react'
import styled from 'styled-components'

const StyledPointer = styled.div`
  position: relative;
  width: ${({ size }) => size};
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.$light ? `${props.white} ${props.bg_white}` : `${props.black} ${props.bg_black}`};

  background-size: cover;
  border-radius: 50%;

  border: 14px solid ${props => props.$light ? props.white : props.black};

  box-shadow: ${props => props.$light ? props.bg_white_box_shadow : props.bg_black_box_shadow};

  color: ${props => props.$light ? props.black : props.white};
`

StyledPointer.defaultProps = {
  size: "250px",
  white: "#fff",
  black: "#091921",
  $light: true,
  bg_white: 'url(src/images/clock_white.png)',
  bg_black: 'url(src/images/clock_black.png)',

  bg_white_box_shadow:
    "inset 0 0 30px rgba(0, 0, 0, 0.1), 0 20px 20px rgba(0, 0, 0, 0.2), 0 0 0 4px rgba(255, 255, 255, 1)",
  bg_black_box_shadow:
    "inset 0 0 30px rgba(255, 255, 255, 0.1), 0 20px 20px rgba(0, 0, 0, 0.5), 0 0 0 4px #091921",
}

const Pointer = (props) => {
  const { light, ...rest } = props
  return (
    <StyledPointer $light={light} {...rest} />
  )
}

export default Pointer