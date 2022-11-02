import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Option from "./Option";
import Modal from "./Modal";
import InfoIcon from "../assets/icons/info-solid.svg";

SyntaxHighlighter.registerLanguage("javascript", javascript);

export default function Question({ question, index }) {
  const [showModal, setShowModal] = useState(false);
  const MarkdownComponents = {
    code({ className, ...props }) {
      const match = /language-(\w+)/.exec(className || "");

      return match ? (
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          className="codeStyle h-80 w-[90vw] md:w-[70vw] md:text-xl"
          wrapLines={false}
          useInlineStyles={true}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      );
    },
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="relative flex flex-1 flex-col items-center">
      <button
        onClick={handleModal}
        className="absolute right-1 top-1 md:right-5"
      >
        <img
          src={InfoIcon}
          className=" h-8 w-8 rounded-full bg-sky-200 p-2 ring-2 transition-all hover:-translate-y-1 hover:scale-105 hover:bg-sky-300 hover:shadow-lg"
        />
      </button>
      <h2 className="mb-4 border-b-2 pb-3 text-center text-xl md:w-4/5 md:text-2xl ">
        {`${index + 1}. ${question.title}`}
      </h2>
      <ReactMarkdown components={MarkdownComponents}>
        {question.snippet}
      </ReactMarkdown>
      <div className="mt-auto grid grid-cols-1 md:grid-cols-2">
        {question.options.map((option) => (
          <Option key={Math.random()} option={option} />
        ))}
      </div>
      {showModal && (
        <Modal explanation={question.explanation} handleModal={handleModal} />
      )}
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
