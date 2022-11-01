import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

export default function Modal({ handleModal, explanation }) {
  return (
    <div className="absolute inset-0 mx-4 rounded-xl bg-slate-200 p-4">
      <div className="relative flex h-full flex-col justify-between overflow-auto ">
        <ReactMarkdown className="text-xl leading-8">
          {explanation}
        </ReactMarkdown>
        <button className="mx-auto block" onClick={handleModal}>
          Close
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  handleModal: PropTypes.func.isRequired,
  explanation: PropTypes.string.isRequired,
};
