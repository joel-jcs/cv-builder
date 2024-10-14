import "../styles/Input.css";

/* eslint-disable react/prop-types */
export default function Input({
  type = "text",
  name,
  className,
  placeholder,
  value,
  onChange,
  entryId,
  isEditing,
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
      <span
        type={type}
        className={value ? className : `${className} placeholder`}
      >
        {value ? value : placeholder}
      </span>
    );
  }
}
