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
      <li className="bulletPoint">
        <input
          type={type}
          name={name}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={changeBulletPoint}
          onKeyDown={(e) => {
            const parentNode = e.target.parentNode.parentNode; //parentNode called twice because each bullet is nested in a li
            const index = Array.prototype.indexOf.call(
              parentNode.children,
              e.target.parentNode
            );

            if (e.key === "Enter") {
              addBulletPoint(parentNode, index);
            }
            if (e.key === "Backspace" && e.target.value === "") {
              if (parentNode.children.length === 1) {
                return;
              }
              deleteBulletPoint(bulletPointId, parentNode, index);
            }
          }}
        />
      </li>
    );
  } else {
    return (
      <li className="bulletPoint">
        <span
          type={type}
          className={value ? className : `${className} placeholder`}
        >
          {value ? value : placeholder}
        </span>
      </li>
    );
  }
}
