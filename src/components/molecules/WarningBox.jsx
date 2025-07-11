import styled from "styled-components";

const Box = styled.div`
  background: #fff5f5;
  border-left: 4px solid #f56565;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 0 8px 8px 0;
`;

const Title = styled.h4`
  color: #c53030;
  margin-bottom: 8px;
`;

const Text = styled.p`
  color: #742a2a;
  font-size: 13px;
  line-height: 1.5;
`;

export const WarningBox = ({ title, children }) => (
  <Box>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </Box>
);