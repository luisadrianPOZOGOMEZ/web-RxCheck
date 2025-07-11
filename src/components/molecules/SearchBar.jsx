import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #647be1;
  }
`;

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Buscar paciente..."
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default SearchBar;
