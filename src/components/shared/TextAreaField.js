export const TextAreaField = ({
  id,
  label,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        required
        className="rounded text-zinc-950"
        onChange={onChange}
      />
    </>
  );
};
