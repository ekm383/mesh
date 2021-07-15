import React from "react"
import styled from "styled-components"

const serviceColumn = ({ business, description, link, linkName }) => {
  return (
    <Wrapper>
      <div>
        <h3>{business}</h3>
        <p>{description}</p>
        <a href={link}>{linkName}</a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 2rem;
  h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: var(--mainColor);
  }
  p {
    font-size: 0.9rem;
    line-height: 1.5rem;
    margin-bottom: 10px;
  }
  a {
    font-size: 0.8em;
    font-weight: bold;
    color: var(--mainColor);
    transition: 150ms ease-in-out;
    &:hover {
      color: #000000;
    }
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }
  }
`

export default serviceColumn
