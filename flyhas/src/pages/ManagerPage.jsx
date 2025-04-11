import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import SideMenuManager from '../components/SideMenuManager';
import { Outlet } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ManagerPage = () => {
  return (
    <Grid container spacing={2} direction="row" sx={{ justifyContent: "space-evenly", alignItems: "flex-start", minHeight: "80vh" }}>
      <Grid item xs={12} sm={8} md={3} lg={3}>
        <Item elevation={1}>
          <SideMenuManager />
        </Item>
      </Grid>
      <Grid item xs={12} sm={8} md={9} lg={9}>
        <Item elevation={1} sx={{ minHeight: "80vh" }}>
          <Outlet />
        </Item>
      </Grid>
    </Grid>
  );
};

export default ManagerPage;
