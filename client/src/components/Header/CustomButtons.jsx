import { Box, Button, Typography, Badge, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useContext } from 'react';
import LoginDialog from '../Login/LoginDialog';
import { DataContext } from '../../Context/DataProvider'
import Profile from './Profile';
import { useSelector } from 'react-redux';

const Wrapper = styled(Box)(({ theme }) => ({
  display : 'flex',
  // margin: '0 3% 0 auto',
  '& > *': {
    marginRight: 56,
    fontSize: 16,
    alignItems: 'center',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}));

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  color: '#fff',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}));

const NavText = styled(Typography)(({ theme }) => ({
  color: '#fff',
  [theme.breakpoints.down('md')]: {
    color: 'black',
    paddingBottom: 8,
    borderBottom: '1px solid black'
  }
}));

const CartContainer = styled(Container)(({ theme }) => ({
  color: '#fff',
  [theme.breakpoints.down('md')]: {
    color: 'black',
    display: 'flex',
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    borderBottom: '1px solid black'
  }
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 4px 50px;
  margin-right: 44px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  :hover {     
    color: #fff;    
}
`

const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const { cartItems } = useSelector(state => state.cart);

  const openDialog = () => {
    setOpen(true);
  }

  return (
    <Wrapper>
      {
        account ? <Profile account={account} setAccount={setAccount} /> :
          <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
      }
      <NavText style={{ marginTop: 4, marginRight: 44 }}>Become a Seller</NavText>
      <NavText style={{ marginTop: 4, marginRight: 44 }}>More</NavText>
      <CartContainer>
      <Badge badgeContent={ cartItems?.length } color="secondary">
        <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </CartContainer>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>

  )
}

export default CustomButtons;