import React, { useState } from "react";
import { Dialog, Stack, DialogTitle, TextField, InputAdornment, List } from "@mui/material";
import {useInputValidation} from '6pp';
import {Search as SearchIcon} from "@mui/icons-material"
import UserItem from "../Shared/UserItem";
import { sampleUsers } from "../../Constants/SampleData";

const Search = () => {
  const search = useInputValidation("");
  let isLoadingSendFriendRequest = false;
  const [users, setUsers] = useState(sampleUsers);

  const addFriendHandler = (id) => {
    console.log(id);
  }

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
        <List>
          {
            users.map((user) => (
              <UserItem
                key={user._id}
                user={user}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingSendFriendRequest}
              />
            ))
          }
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
