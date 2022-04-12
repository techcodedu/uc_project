import styled from "styled-components";

export const Grid = styled.div`
  border: 1px solid #ccc;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: auto;
  gap: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 20px;
`;
export const Items = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
