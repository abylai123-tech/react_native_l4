import styled from "styled-components/native";

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 14px;
  margin-right: 20px;
`;

const PostDetails = styled.View`
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const PostText = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

export const Post = (post) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: post.thumbnailUrl,
        }}
      />
      <PostDetails>
        <PostText>{post?.title}</PostText>
        {/* <PostDate>{post.id}</PostDate> */}
      </PostDetails>
    </PostView>
  );
};
