export const InputField = ({
  id,
  label,
  value,
  autoComplete,
  handleChange,
}) => {
  <>
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      id={id}
      name={id}
      value={value}
      required
      autoComplete={autoComplete}
      className="rounded text-zinc-950"
      onChange={handleChange}
    />
  </>;
};
