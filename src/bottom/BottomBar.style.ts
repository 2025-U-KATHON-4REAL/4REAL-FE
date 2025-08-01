import styled from "styled-components";

export const BarContainer = styled.div`
  position: absolute; /*부모를 기준으로 하단에 고정*/
  bottom: 0;
  width: 100%;
  height: 95px;
  background-color: #fff;
  box-shadow: 0 -4px 14px rgba(0, 0, 0, 0.1);
  display: flex; /*내부 아이템 가로 정렬*/
  justify-content: space-around;
  align-items: center;
  z-index: 1000; /*다른 요소 위에 표시되도록 Z축 우선순위 부여*/
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  text-decoration: none; /*Link에 기본적으로 적용돼 있는 underline 제거*/
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  gap: 5px;
`;
