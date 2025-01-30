"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState<{ [key: string]: HTMLElement | null }>({
    site: null,
    inventory: null,
    settings: null,
  });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menu: string) => {
    setMenuAnchor((prev) => ({ ...prev, [menu]: event.currentTarget }));
  };

  const handleMenuClose = (menu: string) => {
    setMenuAnchor((prev) => ({ ...prev, [menu]: null }));
  };

  return (
    <AppBar sx={{ backgroundColor: "black" }} position="static">
      <Toolbar className="flex justify-between">
          {/* حساب المستخدم */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Link href="/login" passHref>
            <Button color="inherit">خروج / دخول</Button>
          </Link>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <Typography variant="body1">Hi Ahmad</Typography>
        </Box>
        
        {isDesktop ? (
          <Box sx={{ display: "flex", gap: 2 }}>
         {/* القوائم المنسدلة */}
                {[
                { label: "الجرد", key: "inventory", items: [{ name: "جرد 1", link: "/inventory/1" }, { name: "جرد 2", link: "/inventory/2" }] },
                { label: "الموقع", key: "site", items: [{ name: "المزامنة", link: "/sync" }, { name: "سجل المزامنة", link: "/register" }] },
                { label: "الإعدادات", key: "settings", items: [{ name: "إعدادات 1", link: "/settings/1" }, { name: "إعدادات 2", link: "/settings/2" }] }
                ].map(({ label, key, items }) => (
                <Box key={key}>
                    <Button color="inherit" endIcon={<ExpandMore />} onClick={(event) => handleMenuOpen(event, key)}>
                    {label}
                    </Button>
                    <Menu anchorEl={menuAnchor[key]} open={Boolean(menuAnchor[key])} onClose={() => handleMenuClose(key)}>
                    {items.map((item, index) => (
                        <MenuItem key={index} onClick={() => handleMenuClose(key)}>
                        <Link href={item.link}>{item.name}</Link>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                ))}



            <Link href="/stats" passHref>
              <Button color="inherit">الإحصائيات</Button>
            </Link>
            <Link href="/bookings" passHref>
              <Button color="inherit">الحجوزات</Button>
            </Link>
            <Link href="/form" passHref>
              <Button color="inherit">النموذج</Button>
            </Link>
            <Link href="/history" passHref>
              <Button color="inherit">السجل</Button>
            </Link>
            <Link href="/delivery" passHref>
              <Button color="inherit">عرض التسليم</Button>
            </Link>
            <Link href="/" passHref>
              <Button color="inherit">العرض</Button>
            </Link>
            <Link href="/" passHref>
              <Button color="inherit">الرئيسية</Button>
            </Link>
         
          </Box>
        ) : (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpenDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}

      
      </Toolbar>

      {/* القائمة الجانبية */}
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ width: 250 }}>
          {["الإحصائيات", "الحجوزات", "النموذج", "السجل", "عرض التسليم", "العرض", "الرئيسية"].map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => setOpenDrawer(false)}>
                <Link href={`/${text === "الرئيسية" ? "" : text}`.replace(" ", "")}>
                  <ListItemText primary={text} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
          {/* القوائم الجانبية المنسدلة */}
          {[{ label: "الجرد", key: "inventory" }, { label: "الموقع", key: "site" }, { label: "الإعدادات", key: "settings" }].map(({ label, key }) => (
            <ListItem key={key} disablePadding>
              <ListItemButton onClick={() => handleMenuOpen({ currentTarget: document.body } as any, key)}>
                <ListItemText primary={label} />
                <ExpandMore />
              </ListItemButton>
              <Menu anchorEl={menuAnchor[key]} open={Boolean(menuAnchor[key])} onClose={() => handleMenuClose(key)}>
                <MenuItem onClick={() => handleMenuClose(key)}>
                  <Link href={`/${key}/1`}>{label} 1</Link>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(key)}>
                  <Link href={`/${key}/2`}>{label} 2</Link>
                </MenuItem>
              </Menu>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
