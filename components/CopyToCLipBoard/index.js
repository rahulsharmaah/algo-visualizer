import { Button, Snackbar } from "@mui/material";
import { useState } from "react";

const CopyToClipboardButton = ({ value }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleClick = () => {
    const textArea = document.createElement("textarea");
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setIsCopied(true);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        style={{
          display: "flex",
          alignItems: "left",
          justifyContent: "flex-end",
        }}
      >
        Copy Code
      </Button>
      <Snackbar
        open={isCopied}
        onClose={() => setIsCopied(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
    </>
  );
};

export default CopyToClipboardButton;
