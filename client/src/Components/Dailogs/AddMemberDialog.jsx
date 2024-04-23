import { Dialog, DialogTitle, Stack, Typography, Button } from "@mui/material";
import React, { useState } from "react";

import { sampleUsers } from "../../Constants/SampleData";

import UserItem from "../Shared/UserItem";

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
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

  const closeHandler = () => {
    setSelectedMembers([]);
    setMembers([]);
  };

  const addMemberSubmitHandler = () => {
    closeHandler();
  };
  return (
    <Dialog open onClose={closeHandler} >
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"} >
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
      </Stack>
      <Stack spacing={"1rem"}>
        {members.length > 0 ? (
          members.map((user) => (
            <UserItem
            key={user._id}
            user={user}
            handler={selectMemberHandler}
            isAdded={selectedMembers.includes(user._id)}
            />
          ))
        ) : (
          <Typography textAlign={"center"}>No Friends</Typography>
        )}
      </Stack>
      <Stack
      marginBottom={"1rem"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"
    }
      >
        <Button onClick={closeHandler} color="error">
          Cancel
        </Button>
        <Button
          onClick={addMemberSubmitHandler}
          variant="contained"
          disabled={isLoadingAddMember}
        >
          Submit Changes
        </Button>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
