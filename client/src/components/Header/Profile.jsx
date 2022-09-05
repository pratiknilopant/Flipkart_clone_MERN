import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { PowerSettingsNew } from '@mui/icons-material';

const Component = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {

    const [ open, setOpen ] = useState(false); 

    const handleClick = (event) => {
        setOpen(event.currentTarget);
      };

    const handleClose = () => {
        setOpen(false);
      };

      const logout = () => {
        setAccount('');
    }

    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{ marginTop: 4, color: '#fff', cursor: 'pointer' }}>{account}</Typography>
            </Box>
            <Component
                id="basic-menu"
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => { handleClose(); logout();}}>
                    <PowerSettingsNew fontSize='small' color='primary'/> 
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>

        </>
    )
}

export default Profile
