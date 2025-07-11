import styled from "styled-components";

const FormRow2 = styled.div`
  display: grid;
  gap: 20px;
  margin-bottom: 20px;

  &.two-columns {
    grid-template-columns: 1fr 1fr;
  }

  &.single-column {
    grid-template-columns: 1fr;
  }
`;

export default FormRow2;