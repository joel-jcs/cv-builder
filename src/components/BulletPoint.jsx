import "../styles/Input.css";

/* eslint-disable react/prop-types */
export default function Bulletpoint({
  bulletPointId,
  type = "text",
  name,
  className,
  placeholder,
  value,
  changeBulletPoint,
  entryId,
  isEditing,
  addBulletPoint,
  deleteBulletPoint,
}) {
  if (isEditing && isEditing === entryId) {
    return (
      <input
        id={bulletPointId}
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={changeBulletPoint}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const parentNode = e.target.parentNode.parentNode; //parentNode called twice because each bullet is nested in a li
            const index = Array.prototype.indexOf.call(
              parentNode.children,
              e.target.parentNode
            );
            const newItemIndex = index + 1;
            addBulletPoint(parentNode, newItemIndex);
          }
        }}
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
