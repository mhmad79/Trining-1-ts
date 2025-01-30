"use client";

import React, { useState } from "react";
import { Box, Container, Grid, Typography, Link, IconButton, Collapse, colors } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Footer = () => {
  const [openSite, setOpenSite] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <Box 
    className=" bg-black"
      component="footer"
      sx={{
        backgroundColor: "",
        color: "white",
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* الروابط */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              القائمة
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {["عرض التسليم", "السجل", "النموذج", "الحجوزات", "الإحصائيات"].map((item, index) => (
                <Link key={index} href="#" color="inherit" underline="hover" sx={{ fontSize: "1rem" }}>
                  {item}
                </Link>
              ))}

              {/* الموقع مع قائمة فرعية */}
              <Box>
                <Link
                  component="button"
                  color="inherit"
                  underline="hover"
                  onClick={() => setOpenSite(!openSite)}
                  sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: "1rem" }}
                >
                  الموقع {openSite ? <ExpandLess /> : <ExpandMore />}
                </Link>
                <Collapse in={openSite} timeout="auto" unmountOnExit>
                  <Box sx={{ pl: 3, mt: 1 }}>
                  <div className=" flex flex-col">
                    <Link href="#" color="inherit" underline="hover">
                      سجل المزامنة
                    </Link>
                    <Link href="#" color="inherit" underline="hover">
                      المزامنة
                    </Link>
                  </div>
                  </Box>
                </Collapse>
              </Box>

              {/* الإعدادات مع قائمة فرعية */}
              <Box>
                <Link
                  component="button"
                  color="inherit"
                  underline="hover"
                  onClick={() => setOpenSettings(!openSettings)}
                  sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: "1rem" }}
                >
                  الإعدادات {openSettings ? <ExpandLess /> : <ExpandMore />}
                </Link>
                <Collapse  in={openSettings} timeout="auto" unmountOnExit>
                  <Box  sx={{ pl: 3, mt: 1,  }}>
                    <div className=" flex flex-col">
                      <Link href="#" color="inherit" underline="hover">
                        رقم 1
                      </Link>
                      <Link href="#" color="inherit" underline="hover">
                        رقم 2
                      </Link>
                    </div>
                  </Box>
                </Collapse>
              </Box>
            </Box>
          </Grid>

          {/* وسائل التواصل الاجتماعي */}
          <Grid item xs={12} md={5}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              تابعنا
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {[
                { icon: <FacebookIcon />, link: "#" },
                { icon: <TwitterIcon />, link: "#" },
                { icon: <LinkedInIcon />, link: "#" },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.link}
                  color="inherit"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.1)",
                    transition: "0.3s",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* حقوق النشر */}
        <Box sx={{ textAlign: "center", mt: 4, pt: 2, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
