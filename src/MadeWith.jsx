import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./MadeWith.css";

function MadeWith() {
  // all of  this to avoid repetitive code of multiple <li><img/></li> s
  const stack = [
    { name: "React library", icon: reactLogo },
    { name: "Vite tooling", icon: viteLogo },
  ];

  // this below specifically
  const stackItems = stack.map(({ name, icon }) => (
    <li className="list-item">
      <img className="list-item-icon" src={icon} alt={`${name} logo`} />
      <span>{name}</span>
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
