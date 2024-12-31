import { Button, TextField } from "@mui/material";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import DecodedCode from "./DecodedCode";
import { useState } from "react";
import { useCrypto } from "../hooks/crypto";
import FCMTokenDialog from "./FCMTokenDialog";
import { getFCMToken } from "../plugins/firebase/firebase";
const Layout = () => {
  const [encodedCode, setEncodedCode] = useState<string>("");
  const [decodedData, setDecodedData] = useState<any>({});
  const [secretKey, setSecretKey] = useState<string>("");
  const [isFCMTokenDialogOpen, setIsFCMTokenDialogOpen] =
    useState<boolean>(false);
  const handleCloseDialog = () => setIsFCMTokenDialogOpen(false);
  const [FCMToken, setFCMToken] = useState<string | null | undefined>(null);
  const crypto = useCrypto();
  const handleFCMToken = async () => {
    try {
      const permission = await Notification.requestPermission();

      if (permission === "granted") {
        setFCMToken(await getFCMToken());
        setIsFCMTokenDialogOpen(true);
      }
    } catch (error) {
      console.log("Error requesting notification permission:", error);
    }
  };
  const handleDecodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setDecodedData({});
      const decryptedData = crypto.decode(encodedCode, secretKey);
      setDecodedData(decryptedData);
    } catch (err) {
      console.error(err);
      setDecodedData({});
    }
  };
  return (
    <div className="layout-container">
      <div className="options-container">
        <div className="heading">
          <AutoAwesomeOutlinedIcon className="ic-auto-awesome" />
          <span>Crypto Decoder</span>
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
          <Button
            type="button"
            className="decode-btn"
            variant="contained"
            onClick={() => handleFCMToken()}
          >
            <LocalActivityOutlinedIcon className="ic-auto-fix" />
            <span>Get FCM Token</span>
          </Button>
        </form>
      </div>
      <DecodedCode decodedOutput={decodedData} />
      <FCMTokenDialog
        isOpen={isFCMTokenDialogOpen}
        FCMToken={FCMToken}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default Layout;
