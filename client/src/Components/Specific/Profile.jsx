import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from 'moment'

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 180,
          height: 180,
          objectFit: "contain",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"this chat mingle"} />
      <ProfileCard heading={"UserName"} text={"@shivamchauhan123"} Icon={<UserNameIcon/>} />
      <ProfileCard heading={"Name"} text={"Shivam chauhan"} Icon={<FaceIcon/>} />
      <ProfileCard heading={"Joined"} text={moment('2023-11-04T18:30:00.00Z').fromNow()} Icon={<CalendarIcon/>} />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography variant="caption" color={"gray"}>
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
