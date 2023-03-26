import React from "react";
import TextField from "@mui/material/TextField";

const SearchBox = ({ handleSearch }) => {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    handleSearch(searchTerm);
  };

  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-basic"
          label="Search Products"
          variant="outlined"
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

export default SearchBox;
