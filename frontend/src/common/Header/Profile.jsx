import { useState } from "react";
import { Typography, Menu, MenuItem, Box, styled } from "@mui/material";
import { PowerSettingsNew } from "@mui/icons-material";
import { logoutUser } from "../../features/user/userService";

const Component = styled(Menu)`
  margin-top: 5px;
  cursor: pointer;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
  cursor: pointer;
`;

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = async () => {
    await logoutUser();
    setAccount("");
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {account}
        </Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNew fontSize="small" color="primary" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
