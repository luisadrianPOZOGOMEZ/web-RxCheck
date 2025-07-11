import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background: #ebf8ff;
  border-left: 4px solid #4299e1;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 0 8px 8px 0;
`;

const Title = styled.h4`
  color: #2b6cb0;
  margin-bottom: 8px;
`;

const Text = styled.p`
  color: #2c5282;
  font-size: 13px;
  line-height: 1.5;
`;

export function InfoBox({ title, children }) {
  return (
    <Box>
      {title && <Title>{title}</Title>}
      <Text>{children}</Text>
    </Box>
  );
}