import * as React from "react";
import "./ExtensionDemo.scss";
import ReactPlayer from "react-player";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const ExtensionDemo = (props) => {
  return (
    <div className={"headerExtensionDemo"}>
      <div className={"extensionTextContainer"}>
        <Typography sx={{ marginBottom: "24px", width: "410px" }} variant="h5">
          Chrome Orders Clipper
        </Typography>
        <Typography sx={{ marginTop: "24px", width: "410px" }} variant="h6">
          Save your orders from across the web
          <br />
          with our Chrome extension
        </Typography>
        <Button
          onClick={props.openLoggingModal}
          sx={{ marginTop: "24px" }}
          variant="contained"
        >
          Orders Clipper
        </Button>
      </div>

      <div className={"player-wrapper"}>
        <ReactPlayer
          loop={true}
          playing={props.isPlay}
          url="https://video.wixstatic.com/video/af2570_49defd13db7a4f558b905b83dc9e0d50/1080p/mp4/file.mp4"
          className="react-player"
          width="90%"
          height="90%"
        />
      </div>
    </div>
  );
};
