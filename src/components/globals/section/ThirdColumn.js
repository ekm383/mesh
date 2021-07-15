import React from "react"
import styled from "styled-components"

const ThirdColumn = ({ id, children, style }) => {
  return (
    <SectionWrapper id={id} style={style}>
      {children}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 4rem 0rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0rem;
  }
`

export default ThirdColumn
