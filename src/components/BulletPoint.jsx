export default function BulletPoint({ text, id }) {
  const bulletsArr = [];

  if (text !== null || text !== undefined) {
    bulletsArr.push({ text, id });
  }

  if (bulletsArr.length > 0) {
    return bulletsArr.map((bullet) => (
      <li className="bulletPoint" key={bullet.id}>
        <input placeholder={bullet.text} />
      </li>
    ));
  }
}
