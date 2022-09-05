import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system'
import React from 'react'
import { navData } from '../../Constance/Data'

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '55px 130px 0 130px !important',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
      margin: '0px !important'
  }
}))

const SubContainer = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;


const Navbar = () => {
  return (
    <Container>
      {
        navData.map(data => (
            <SubContainer>
                <img src={data.url} alt='nav' style={{width: 64}} />
                <Text>{data.text}</Text>
            </SubContainer>
        ))
      }
    </Container>
  )
}

export default Navbar
