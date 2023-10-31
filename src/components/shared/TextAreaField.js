export const TextAreaField = ({
  id,
  label,
  value,
  placeholder,
  handleChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea id={id}
      name={id}
      value={value}
      placeholder={placeholder}
      required
      className="rounded text-zinc-950"
      onChange={handleChange} />
    </>
  )
};
