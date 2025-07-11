import styled from "styled-components";

const SectionTitle = styled.div`
  background: linear-gradient(135deg, #647be1 0%, #5a6bcc 100%);
  color: white;
  padding: 15px 20px;
  margin: -30px -30px 25px -30px;
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 13px 13px 0 0;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  }
`;

export default SectionTitle;