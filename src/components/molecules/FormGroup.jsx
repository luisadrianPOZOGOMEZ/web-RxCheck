import React from "react";
import Input2 from "../atoms/Input2";
import { Label } from "../atoms/Label";
import styled from "styled-components";

const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = ({ label, name, type = "text", required, children }) => (
  <Group>
    <Label>{label}{required && <span style={{ color: "#e53e3e" }}> *</span>}</Label>
    {children || <Input2 name={name} type={type} required={required} />}
  </Group>
);