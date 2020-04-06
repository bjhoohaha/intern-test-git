import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import "../styles/_app.scss";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.renderIcon = this.renderIcon.bind(this);
  }

  renderIcon() {
    console.log(this.context);
    if (this.props.isDarkMode) {
      return <FontAwesomeIcon icon={faSun} color="#FFA500" />;
    } else {
      return <FontAwesomeIcon icon={faMoon} />;
    }
  }

  render() {
    return (
      <button
        className="app__dark-mode-btn icon level-right"
        onClick={this.props.onClick}
      >
        {this.renderIcon()}
      </button>
    );
  }
}

export default Button;
