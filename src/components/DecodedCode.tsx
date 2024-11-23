import React from "react";
import ReactJson from "react-json-view";

const DecodedCode = ({ decodedOutput }: { decodedOutput?: object }) => {
  console.log("decodedOutput: ", decodedOutput);

  return (
    <div className="decoded-code-container">
      {decodedOutput ? (
        <div className="decoded-output">
          <ReactJson src={decodedOutput} />
        </div>
      ) : (
        <div className="empty-state">Decode to see the output</div>
      )}
    </div>
  );
};

export default DecodedCode;
