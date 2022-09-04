import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { Toolbar, Box, Typography, IconButton, Drawer } from '@mui/material';
import Search from './Search'
import CustomButtons from './CustomButtons'
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const CustomizedSlider = styled(AppBar)`
  color: #20b2aa;
  background: #2874f0;
  height: 55px;
`;
const Components = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  color: #FFFFFF;
  text-decoration: none;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
  color: #eee;
`;
const PlusImage = styled(`img`)({
    width: 14,
    height: 14,
    marginLeft: 6
})

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block',
        color: '#fff'
    }
}));

const CustomButtonsWrapper = styled('Box')(({ theme }) => ({
    margin: '0 0 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const Header = () => {

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const [open, setOpen] = useState(false)

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <CustomizedSlider>
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>
                <Drawer open={open} onClose={handleClose}>
                    <Box style={{ width: 200 }} onClose={handleClose}>
                        <List>
                            <ListItem button>
                                <CustomButtons />
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
                <Components to='/'>
                    <img src={logoURL} alt='logo' style={{ width: 76 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>Explore
                            <Box component='span' style={{ color: `#ffe500` }}> Plus</Box>
                        </SubHeading >
                        <PlusImage src={subURL} alt='sub-logo' />
                    </Box>
                </Components>
                <Search />
                <CustomButtonsWrapper>
                    <CustomButtons />
                </CustomButtonsWrapper>
            </Toolbar>
        </CustomizedSlider>
    )
}

export default Header;