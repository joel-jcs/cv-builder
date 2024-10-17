import "../styles/Input.css";

/* eslint-disable react/prop-types */
export default function Input({
  type = "text",
  className,
  placeholder,
  value,
  onChange,
  entryId,
  isEditing,
  handleFieldClick,
}) {
  if (isEditing && isEditing === entryId) {
    return (
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={
          className === "location" || className === "datePeriod" ? 35 : 60
        }
      />
    );
  } else {
    return (
      <span
        type={type}
        className={value ? className : `${className} placeholder`}
        onClick={(e) => handleFieldClick(e, entryId)}
      >
        {value ? value : placeholder}
      </span>
    );
  }
}
