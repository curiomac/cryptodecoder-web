import ReactJson from "react-json-view";

const DecodedCode = ({ decodedOutput = {} }: { decodedOutput?: object }) => {
  return (
    <div className="decoded-code-container">
      <div className="decoded-output">
        <ReactJson src={decodedOutput} />
      </div>
    </div>
  );
};

export default DecodedCode;
