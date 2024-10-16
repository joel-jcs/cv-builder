import "../styles/Input.css";

/* eslint-disable react/prop-types */
export default function Bulletpoint({
  bulletPointId,
  type = "text",
  name,
  placeholder,
  value,
  sectionTitle,
  changeBulletPoint,
  entryId,
  isEditing,
  addBulletPoint,
  deleteBulletPoint,
}) {
  const itemClassName =
    sectionTitle === "Skills" ? "bulletPoint skill" : "bulletPoint";

  if (isEditing && isEditing === entryId) {
    return (
      <li className={itemClassName}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          style={
            sectionTitle === "Skills"
              ? value
                ? { width: `${value.length * 0.5}em` }
                : { width: `${placeholder.length - 3}ch` }
              : undefined
          }
          maxLength={sectionTitle === "Skills" ? 80 : undefined}
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
            if (
              (e.key === "Backspace" || e.key === "Delete") &&
              e.target.value === ""
            ) {
              if (parentNode.children.length === 1) {
                return;
              }
              deleteBulletPoint(bulletPointId, parentNode, index);
            }
            if (e.key === "ArrowUp") {
              if (index > 0) {
                const prevInput =
                  parentNode.children[index - 1].querySelector("input");
                if (prevInput) {
                  prevInput.focus();
                }
              }
            }

            if (e.key === "ArrowDown") {
              if (index < parentNode.children.length - 1) {
                const nextInput =
                  parentNode.children[index + 1].querySelector("input");
                if (nextInput) {
                  nextInput.focus();
                }
              }
            }
          }}
        />
      </li>
    );
  } else {
    return (
      <li className={itemClassName}>
        <span type={type} className={value ? "" : "placeholder"}>
          {value ? value : placeholder}
        </span>
      </li>
    );
  }
}
