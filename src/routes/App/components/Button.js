import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import "../styles/_app.scss";
import ThemeContext from "./ThemeContext";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.renderIcon = this.renderIcon.bind(this);
  }

  // render different icons for different modes
  renderIcon(context) {
    if (context.isDarkMode) {
      return <FontAwesomeIcon icon={faSun} color="#FFA500" />;
    } else {
      return <FontAwesomeIcon icon={faMoon} />;
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => (
          <button
            className="app__dark-mode-btn icon level-right"
            onClick={context.toggleMode}
          >
            {this.renderIcon(context)}
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Button;
