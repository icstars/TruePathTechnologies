import React from "react";

const UpdatesCard = ({ title, date, summary, link }) => {
  return (
    <div className="w-full mb-4 border shadow-md p-4 rounded-2xl">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <p className="text-base mb-4">{summary}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Read More
      </a>
    </div>
  );
};

export default UpdatesCard;
