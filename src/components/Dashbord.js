import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './SideItems';
import AdminCharts from './AdminCharts';
import DashboardOrders from './DashboardOrders';
import PendingOrders from './PendingOrders';
import ExpertsCharts from './ExpertsCharts';
import AttendanceTimer from './AttendanceTimer';
import ExpertTasks from './ExpertTasks';

const defaultTheme = createTheme();

export default function Dashboard() {
  
  const roles = localStorage.getItem("roles");

  return (
      <Box sx={{ display: 'flex', bgcolor: '#FBF1F7', height: '100vh'}}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p:2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {roles == 'admin' && (
                    <AdminCharts />
                  )}
                  
                  {roles == 'expert' && (
                    <ExpertsCharts />
                  )}
                  
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                   {roles == 'admin' && (
                     <PendingOrders />
                  )}
                  
                  {roles == 'expert' && (
                    <AttendanceTimer />
                  )}
                 
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  
                  {roles == 'admin' && (
                    <DashboardOrders />
                  )}

                  {roles == 'expert' && (
                    <ExpertTasks />
                  )}

                </Paper>
              </Grid>
            </Grid>
          </Container>
      </Box>
  
  );
}