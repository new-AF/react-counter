import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./MadeWith.css";

function MadeWith() {
  // all of  this to avoid repetitive code of multiple <li><img/></li> s
  const stack = [
    { name: "React library", icon: reactLogo, url: "https://react.dev/" },
    { name: "Vite tooling", icon: viteLogo, url: "https://vitejs.dev/" },
  ];

  // this below specifically
  const stackItems = stack.map(({ name, icon, url }) => (
    <li className="list-item">
      <a className="list-item-link" href={url}>
        <img className="list-item-link-icon" src={icon} alt={`${name} logo`} />
        <span className="list-item-link-text">{name}</span>
      </a>
    </li>
  ));

  return (
    <section>
      <p className="section-header">made with</p>
      <ul className="list">{stackItems}</ul>
    </section>
  );
}

export default MadeWith;
