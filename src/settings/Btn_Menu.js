import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" color="textPrimary" variant="outlined" onClick={handleClick}>
        <AccountCircleRoundedIcon />
        <ArrowDropDownRoundedIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Button onClick={handleClose}  href="##"><AccountBoxRoundedIcon /> | Mi Cuenta</Button><br />
        <Button onClick={handleClose}  href="/"><PowerSettingsNewRoundedIcon /> | Cerrar Sesión</Button>
      </Menu>
    </div>
  );
}