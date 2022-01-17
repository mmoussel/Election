import styled from "styled-components";

export const Button = styled.button`
  display: block;
  width: 150px;
  padding: 8px 0;
  margin: 20px auto;
  background: #4979ff;
  border-radius: 4px;
  color: white;
  text-align: center;
  cursor: pointer;
  :hover {
    background: #fff;
    color: #000;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const InnerBoxContainer = styled.div`
  padding: 60px;
  cursor: pointer;
  align-items: center;
  background-color: ${({ selected }) => (selected ? "#5664d2" : "#ffffff")};
  border: "10px solid black";
`;
