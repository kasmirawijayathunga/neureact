import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';

import Image_Logo from '@/assets/neu-react.svg'
import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@mui/material';

const drawerWidth = 240;
const navItems = [
  {
    label: 'Docs',
    path: '/documentation'
  }
];

function DrawerComponent({ handleDrawerToggle }:{ handleDrawerToggle: () => void }){
  return(
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box component={Link} href="/" sx={{ display: "flex", alignItems: "center", justifyContent: "center", my:1.3 }}>
        <Image src={Image_Logo} alt="react-logo" width={35} />
        <Typography sx={{ fontWeight: 500, ml:0.5, mt: 0.3 }} variant='h5'>NeuReact</Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton component={Link} href={item.path}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ bgcolor: "#121212dd", backdropFilter: "blur(20px)" }}>
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box component={Link} href="/" sx={{ display: "flex", alignItems: "center" }}>
              <Image src={Image_Logo} alt="react-logo" width={35} />
              <Typography sx={{ fontWeight: 500, ml:0.5, mt: 0.3 }} variant='h5'>NeuReact</Typography>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button component={Link} href={item.path} key={item.path} sx={{ color: '#fff' }}>
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <DrawerComponent handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar