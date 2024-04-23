import React, { useState } from "react";
import {
  Dialog,
  Stack,
  DialogTitle,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import { sampleUsers } from "../../Constants/SampleData";
import UserItem from "../Shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const groupName = useInputValidation("");

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setMembers((prev) =>
      prev.map((user) =>
        user._id === id ? { ...user, isAdded: !user.isAdded } : user
      )
    );

    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };

  const submitHandler = () => {};

  const closeHandler = () => {};

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"1.5rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>

        <TextField
          label="Create Your Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant="body1">Members</Typography>

        <Stack>
          {members.map((user) => (
            <UserItem
              key={user._id}
              user={user}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(user._id)}
            />
          ))}
        </Stack>

        <Stack
          direction={"row"}
          spacing={"6rem"}
          display={"flex"}
          width={"100%"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Button
            variant="contained"
            color="error"
            size="large"
            onClick={submitHandler}
          >
            Cancel
          </Button>
          <Button variant="contained" size="large">
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
