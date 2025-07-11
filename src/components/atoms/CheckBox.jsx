import React from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 8px;
  margin-bottom: 15px;
`;

const CheckboxInput = styled.input`
  width: auto;
  margin-right: 10px;
  transform: scale(1.2);
  margin-top: 4px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #2d3748;
`;

export const Checkbox = ({ name, id, label, required }) => (
  <CheckboxWrapper>
    <CheckboxInput type="checkbox" name={name} id={id} required={required} />
    <CheckboxLabel htmlFor={id}>
      {label}{required && <span style={{ color: "#e53e3e" }}> *</span>}
    </CheckboxLabel>
  </CheckboxWrapper>
);