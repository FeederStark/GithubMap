import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 94%;
  top: 3%;
  width: 25%;
  left: 2%;
  border-radius: 10px;
  background: #fff;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

export const Avatar = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const Name = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const Username = styled.p`
  font-size: 12px;
`;

export const Xbutton = styled.img`
  height: 20px;
  width: 20px;
`;
