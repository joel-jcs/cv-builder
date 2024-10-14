/* eslint-disable react/prop-types */
export default function Input({
  type = "text",
  name,
  className,
  placeholder,
  value,
  onChange,
  isEditing,
  entryId,
}) {
  if (isEditing && isEditing === entryId) {
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
  } else {
    return (
      <span type={type} className={className}>
        {placeholder}
      </span>
    );
  }
}
