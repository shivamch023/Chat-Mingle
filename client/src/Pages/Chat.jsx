import React, { Fragment, useRef } from "react";
import AppLayout from "../Components/Layout/AppLayout";
import { IconButton, Input, Stack } from "@mui/material";
import { grayColor, orange } from "../Constants/Color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../Components/Styles/StyledComponent";
import FileMenu from "../Components/Dailogs/FileMenu";
import { sampleMessages } from "../Constants/SampleData";
import MessageComponent from "../Components/Shared/MessageComponent";

const user = {
  _id: "sjvhjbhsd",
  name: "Shivam chauhan",
};

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {sampleMessages.map((message) => ( // Fixed: added return statement
          <MessageComponent key={message.id} message={message} user={user} />
        ))}
      </Stack>

      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "relative",
              rotate: "90deg",
              borderRadius: " 10px",
              bgcolor: grayColor,
            }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="Type Message Here...." />

          <IconButton
            type="submit"
            sx={{
              backgroundColor: orange,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

      <FileMenu />
    </Fragment>
  );
};

export default AppLayout()(Chat);
