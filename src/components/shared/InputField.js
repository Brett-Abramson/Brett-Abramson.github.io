export const InputField = ({
  id,
  label,
  value,
  placeholder,
  autoComplete,
  handleChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        required
        autoComplete={autoComplete}
        className="rounded text-zinc-950"
        onChange={handleChange}
      />
    </>
  );
};
