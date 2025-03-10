import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "timeago.js";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchCommentUser = async () => {
      const res = await axios.get(`/users/find/${comment.userId}`);
      setChannel(res.data);
    };
    fetchCommentUser();
  }, [comment.userId]);

  return (
    <Container>
      <Avatar src={channel.img} />
      <Details>
        <Name>
          {channel.name} • {format(comment.createdAt)}
        </Name>
        <Text>{comment.desc}</Text>
      </Details>
    </Container>
  );
};

export default Comment;