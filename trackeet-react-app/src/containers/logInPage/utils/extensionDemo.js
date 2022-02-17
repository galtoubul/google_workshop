import * as React from "react";
import "./ExtensionDemo.scss";
import ReactPlayer from "react-player";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useIsPhoneContext } from "../../../utlis/hooks/phone/isPhoneContext";

export const ExtensionDemo = (props) => {
  const { isIpad } = useIsPhoneContext();

  return (
    <div className={"headerExtensionDemo"}>
      <div className={"extensionTextContainer"}>
        <Typography
          sx={{
            textAlign: isIpad ? "center" : undefined,
            marginBottom: isIpad ? "10" : "24px",
            width: isIpad ? "250px" : "410px",
          }}
          variant={isIpad ? "h6" : "h5"}
        >
          Chrome Orders Clipper
        </Typography>
        <Typography
          sx={{
            textAlign: isIpad ? "center" : undefined,
            marginTop: "24px",
            width: isIpad ? "250px" : "410px",
          }}
          variant={isIpad ? "h7" : "h6"}
        >
          Save your orders from across the web
          {!isIpad && <br />}
          with our Chrome extension
        </Typography>
        <Button
          onClick={() =>
            window.open(
              "https://chrome.google.com/webstore/detail/trackeet/fahklmfdcmnnbodejmnhbnkaoocaoabi?hl=iw",
              "_blank"
            )
          }
          sx={{ width: "140px", marginTop: "24px" }}
          variant="contained"
        >
          Orders Clipper
        </Button>
      </div>

      <div className={"player-wrapper"}>
        <ReactPlayer
          stopOnUnmount={true}
          loop={true}
          playing={props.isPlay}
          url="https://video.wixstatic.com/video/ba4f98_b5d9c8f0dd1b493886fbae880e54c479/1080p/mp4/file.mp4"
          className="react-player"
          width={isIpad ? "100%" : "90%"}
          height={isIpad ? "100%" : "90%"}
        />
      </div>
    </div>
  );
};
