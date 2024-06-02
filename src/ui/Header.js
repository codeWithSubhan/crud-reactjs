import { AppBar, IconButton, Toolbar, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Search from './Search';

function Header({ open, handleDrawerOpen, handleSearch, search, isSearch }) {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          color="black"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="h6"
            id="head"
            color="black"
            noWrap
            component="div"
          >
            {isSearch && <Search handleSearch={handleSearch} search={search} />}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
