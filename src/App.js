import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, Route, Routes } from 'react-router-dom';
import Sidebar from './ui/Sidebar';
import Header from './ui/Header';
import Dashboard from './pages/Dashboard';
import AddUser from './pages/AddUser';
import UserInfo from './pages/UserInfo';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function App() {
  const isMobile = useMediaQuery('(max-width:992px)');
  const [open, setOpen] = useState(!isMobile);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const data1 = JSON.parse(window.localStorage.getItem('data'));
  const [filterData, setFilterData] = useState(data1);
  const [reReder, setreReder] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleSearch(e) {
    setSearch(e.target.value);
    const value = e.target.value.toLowerCase().trim();
    const filterData = data.filter(
      (item) =>
        item.name.includes(value) ||
        item.price.includes(value) ||
        item.address.includes(value)
    );
    setFilterData(filterData);
  }

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('data'));
    setData(data);
    setFilterData(data);
  }, [reReder]);

  // const isSearch = window.location.pathname === '/';

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        search={search}
        handleSearch={handleSearch}
        isSearch={isSearch}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Link
            to="/"
            style={{
              maxHeight: '64px',
              margin: 'auto',
              paddingLeft: '22px',
              height: '100%',
            }}
          ></Link>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Sidebar handleDrawerClose={handleDrawerClose} isMobile={isMobile} />
      </Drawer>
      <Main
        open={open}
        style={{
          padding: '20',
        }}
      >
        <DrawerHeader />
        <Typography component={'div'}>
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  filterData={filterData}
                  data={data}
                  setreReder={setreReder}
                  setIsSearch={setIsSearch}
                />
              }
            />
            <Route
              path="/adduser"
              element={
                <AddUser setreReder={setreReder} setIsSearch={setIsSearch} />
              }
            />
            <Route
              path="userinfo/:id"
              element={<UserInfo setIsSearch={setIsSearch} />}
            />
          </Routes>
        </Typography>
      </Main>
    </Box>
  );
}
