export default function Input({
  type,
  name,
  className,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      id={crypto.randomUUID()}
      value={value}
      onChange={onChange}
    />
  );
}
