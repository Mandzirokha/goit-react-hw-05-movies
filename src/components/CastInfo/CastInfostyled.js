import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

export const Item = styled.li`
  background: #fff;
  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);
  width: 100%;
  max-width: 200px;
  margin: 0.5em;
  border-radius: 10px;
  display: inline-block;
  text-decoration: none;
  color: black;
`;

export const Img = styled.img`
  padding: 0;
  margin: 0;
  height: 260px;
  width: 100%;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Text = styled.p`
  padding: 5px 5px;
  font-size: 16px;
  text-align: center;
`;
