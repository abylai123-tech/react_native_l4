import styled from "styled-components";

export const PostDiv = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

export const PostText = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 14px;
  margin-right: 20px;
`;

export const PostDetails = styled.View`
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;
