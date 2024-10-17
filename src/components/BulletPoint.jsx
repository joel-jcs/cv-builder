import "../styles/Input.css";
import "../styles/BulletPoint.css";

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
  handleFieldClick,
  addBulletPoint,
  deleteBulletPoint,
}) {
  const skillItem =
    sectionTitle === "Skills" ? "bulletPoint skill" : "bulletPoint";

  if (isEditing && isEditing === entryId) {
    return (
      <li className={skillItem}>
        <div
          contentEditable="true"
          suppressContentEditableWarning={true} // remove on prod
          className={"input"}
          type={type}
          name={name}
          placeholder={placeholder}
          maxLength={sectionTitle === "Skills" ? 80 : undefined}
          onBlur={changeBulletPoint}
          onKeyDown={(e) => {
            const parentNode = e.target.parentNode.parentNode; //parentNode called twice because each bullet is nested in a li
            const index = Array.prototype.indexOf.call(
              parentNode.children,
              e.target.parentNode
            );
            if (e.key === "Enter") {
              e.preventDefault();
              addBulletPoint(parentNode, index);
            }
            if (
              (e.key === "Backspace" || e.key === "Delete") &&
              e.target.innerText === ""
            ) {
              deleteBulletPoint(bulletPointId, parentNode, index);
            }
            if (e.key === "ArrowUp") {
              if (index > 0) {
                const prevInput =
                  parentNode.children[index - 1].querySelector(".input");
                if (prevInput) {
                  prevInput.focus();
                }
              }
            }

            if (e.key === "ArrowDown") {
              if (index < parentNode.children.length - 1) {
                const nextInput =
                  parentNode.children[index + 1].querySelector(".input");
                if (nextInput) {
                  nextInput.focus();
                }
              }
            }
          }}
        >
          {value}
        </div>
      </li>
    );
  } else {
    return (
      <li className={skillItem}>
        <span
          type={type}
          className={value ? "input" : "placeholder"}
          onClick={(e) => handleFieldClick(e, entryId)}
        >
          {value ? value : placeholder}
        </span>
      </li>
    );
  }
}
