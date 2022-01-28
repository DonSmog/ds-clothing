import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  width: fit-content;
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 46.5vw;
  top: 5vh;
  color: red;
  font-size: 1rem;
  font-weight: bold;
  background-color: black;
  padding: 0.2rem 1rem;
  z-index: 1;

  @media screen and (max-width: 800px) {
    top: 2vh;
    left: 40vw;
  }
`;
