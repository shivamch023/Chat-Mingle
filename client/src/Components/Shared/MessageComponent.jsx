import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import { senderNameColor } from "../../Constants/Color";
import moment from "moment";
import  {fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;

  const sameSender = sender?._id === user?._id;

  const timeAgo = moment(createdAt).fromNow();

  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {/* Display sender's name if it's not the current user */}
      {!sameSender && (
        <Typography
          color={senderNameColor}
          fontStyle={"Poppins"}
          fontWeight={"600"}
          variant="caption"
        >
          {sender.name}
        </Typography>
      )}

      {/* Display message content */}
      {content && <Typography>{content}</Typography>}

      {/* Attachments */}
      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);

          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{
                  color: "black",
                }}
              >
                
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })}

      {/* Display message timestamp */}
      <Typography variant="caption" color={"text.secondary"}>
        {timeAgo}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);
