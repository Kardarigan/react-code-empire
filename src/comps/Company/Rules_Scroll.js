import { Link } from "react-router-dom";
import { Scroll } from "../Portal";

const Rules_Scroll = ({ rules }) => {
  return (
    <Scroll>
      <h3 className="title-sm">{rules.title}</h3>
      <ul className="mt-5">
        {rules.rules.map((rule, i) => {
          return (
            <li key={i}>
              <Link
                to={"/policy/" + rule.title}
                className="underline hover:no-underline"
              >
                {rule.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Scroll>
  );
};

export default Rules_Scroll;
