"use client";
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Logo from '../Logo';

// Styled Components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#ffffff',
  boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid #e0e0e0',
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.appBar,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 24px',
  minHeight: '64px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: '0 16px',
    minHeight: '70px',
    justifyContent: 'space-between',
  
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  position: 'absolute',
  left: '24px',
  [theme.breakpoints.down('md')]: {
    position: 'static',
    left: 'auto',
  },
}));

const LogoIcon = styled(Box)(({ theme }) => ({
  width: '32px',
  height: '32px',
  backgroundColor: '#1C1C1E',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
}));

const LogoText = styled('span')(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  color: '#1C1C1E',
  marginLeft: '4px',
}));

const DesktopNavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#1C1C1E',
  borderRadius: '32px',
  padding: '4px',
  gap: '0px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  fontSize: '16px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '10px 20px',
  borderRadius: '28px',
  minWidth: 'auto',
  height: '35px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '&.active': {
    backgroundColor: 'white',
    color: '#1C1C1E',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1C1C1E',
  color: 'white',
  fontSize: '16px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '10px 24px',
  borderRadius: '24px',
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: '#333333',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: '#1C1C1E',
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    backgroundColor: 'white',
    color: '#1C1C1E',
    padding: '0',
  },
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 24px',
  backgroundColor: 'white',
}));

const DrawerLogo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}));

const DrawerLogoIcon = styled(Box)(({ theme }) => ({
  width: '32px',
  height: '32px',
  backgroundColor: '#1C1C1E',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
}));

const DrawerLogoText = styled('span')(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  color: '#1C1C1E',
  marginLeft: '4px',
}));

const MobileNavContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1C1C1E',
  borderRadius: '24px',
  margin: '24px',
  padding: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '0px',
}));

const MobileNavList = styled(List)(({ theme }) => ({
  padding: '0',
  display: 'flex',
  flexDirection: 'column',
  gap: '0px',
}));

const MobileNavItem = styled(ListItemButton)(({ theme }) => ({
  padding: '16px 24px',
  borderRadius: '20px',
  margin: '0',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '&.active': {
    backgroundColor: 'white',
    '& .MuiListItemText-primary': {
      color: '#1C1C1E',
    },
  },
}));

const MobileNavText = styled(ListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    fontSize: '18px',
    fontWeight: 500,
    color: 'white',
    textAlign: 'center',
  },
}));

// Navigation items
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

interface NavigationProps {
  activeRoute?: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeRoute = '/' }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
          {/* Logo */}
          <LogoContainer>
            <Logo/>
          </LogoContainer>

          {/* Desktop Navigation */}
          <DesktopNavLinks>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                <NavButton
                  className={activeRoute === item.href ? 'active' : ''}
                >
                  {item.label}
                </NavButton>
              </Link>
            ))}
          </DesktopNavLinks>

         

          {/* Mobile Menu Button */}
          <MobileMenuButton
            onClick={handleDrawerToggle}
            aria-label="open drawer"
          >
            <MenuIcon />
          </MobileMenuButton>
        </StyledToolbar>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <MobileDrawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <DrawerHeader>
          <DrawerLogo>
            <DrawerLogoIcon>Oi</DrawerLogoIcon>
            <DrawerLogoText>OneInfo.ai</DrawerLogoText>
          </DrawerLogo>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: '#1C1C1E' }}
          >
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        <MobileNavContainer>
          <MobileNavList>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <Link href={item.href} style={{ textDecoration: 'none', width: '100%' }}>
                  <MobileNavItem
                    onClick={handleMobileNavClick}
                    className={activeRoute === item.href ? 'active' : ''}
                  >
                    <MobileNavText primary={item.label} />
                  </MobileNavItem>
                </Link>
              </ListItem>
            ))}
          </MobileNavList>
        </MobileNavContainer>
      </MobileDrawer>
    </>
  );
};

export default Navigation;
