import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FCMTokenDialog = ({
  isOpen,
  onClose,
  FCMToken,
}: {
  isOpen: boolean;
  onClose: () => void;
  FCMToken: string | undefined | null;
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="dialog-container-class">
      <DialogTitle>
        FCM Token
        <IconButton
          aria-label="close"
          onClick={onClose}
          className="close-button"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {FCMToken ? FCMToken : "FCM Token not available"}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default FCMTokenDialog;
