import { Group, Input, InputLabel } from "./input.styles";

function FormInput({ label, labelFor, handleChange, value, type }) {
  return (
    <Group>
      <Input
        type={type}
        value={value}
        onChange={handleChange}
        required
        id={labelFor}
        name={labelFor}
      />
      <InputLabel htmlFor={labelFor} $shrink={value.length}>
        {label}
      </InputLabel>
    </Group>
  );
}

export default FormInput;
