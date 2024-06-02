import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import GridViewIcon from '@mui/icons-material/GridView';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const listItem = [
  {
    tabsName: 'Dashboard',
    to: '/',
    icon: <GridViewIcon />,
  },
  {
    tabsName: 'Add User',
    to: '/adduser',
    icon: <PersonAddAltIcon />,
  },
  // {
  //   tabsName: 'User Info',
  //   to: '/userinfo',
  //   icon: <PersonAddAltIcon />,
  // },
];

function Sidebar({ handleDrawerClose, isMobile }) {
  function closeDrawer() {
    isMobile && handleDrawerClose();
  }

  return (
    <>
      <List>
        {listItem.map(({ tabsName, to, icon }) => (
          <ListItem key={tabsName} disablePadding className="sideBarTabs">
            <ListItemButton component={NavLink} to={to} onClick={closeDrawer}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={tabsName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
