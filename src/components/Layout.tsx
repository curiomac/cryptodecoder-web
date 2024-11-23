import { Button, TextField } from "@mui/material";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import DecodedCode from "./DecodedCode";
import { useState } from "react";
import { useCrypto } from "../hooks/crypto";
const Layout = () => {
  const [encodedCode, setEncodedCode] = useState("");
  const [decodedData, setDecodedData] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const crypto = useCrypto();
  const handleDecodeSubmit = (e: any) => {
    e.preventDefault();
    const decryptedData = crypto.decode(encodedCode, secretKey);
    setDecodedData(decryptedData);
  };
  return (
    <div className="layout-container">
      <div className="options-container">
        <div className="heading">
          <AutoAwesomeOutlinedIcon className="ic-auto-awesome" />
          <span>Code Decoder</span>
          <AutoAwesomeOutlinedIcon className="ic-auto-awesome" />
        </div>
        <form className="fields-container" onSubmit={handleDecodeSubmit}>
          <TextField
            multiline
            rows={4}
            className="code-input"
            placeholder="Encoded crypto code"
            value={encodedCode}
            onChange={(e) => setEncodedCode(e.target.value)}
          />
          <TextField
            type="password"
            className="code-input"
            placeholder="Secret key"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
          />
          <Button type="submit" className="decode-btn" variant="contained">
            <BoltOutlinedIcon className="ic-auto-fix" />
            <span>Decode</span>
          </Button>
        </form>
      </div>
      <DecodedCode
        decodedOutput={{
          name: "John Doe",
          age: 30,
          contact: {
            email: "john.doe@example.com",
            phone: "+1234567890",
          },
          address: {
            street: "123 Main Street",
            city: "New York",
            country: "USA",
          },
        }}
      />
    </div>
  );
};

export default Layout;
