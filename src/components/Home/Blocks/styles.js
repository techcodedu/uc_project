import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: auto;
  gap: 1rem;
  font-family: "Roboto", sans-serif;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const Block = styled.div`
  color: #000;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  border-radius: 5px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
`;
