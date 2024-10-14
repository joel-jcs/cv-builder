/* eslint-disable react/prop-types */
export default function Input({
  type = "text",
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
      value={value}
      onChange={onChange}
    />
  );
}
