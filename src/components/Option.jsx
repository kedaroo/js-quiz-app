import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

export default function Option({ option, handleClick, isRevealed }) {
  let bgColor = "";

  if (isRevealed) {
    bgColor = option.correct ? "bg-green-400" : "bg-red-400";
  }

  return (
    <button
      className={`option ${bgColor}`}
      onClick={() => handleClick(option.correct)}
    >
      <ReactMarkdown>{option.text}</ReactMarkdown>
    </button>
  );
}

Option.propTypes = {
  option: PropTypes.object.isRequired,
  isRevealed: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
