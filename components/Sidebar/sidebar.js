"use client";
import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton"; // Ekledik
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import logo from "@/public/logo.png";
import "./sidebar.css";

export default function Sidebar() {
  const [state, setState] = React.useState({
    left: false, // Open the sidebar by default
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const listItemStyle = {
    marginBottom: "36px", // Alt kenarlık eklemek için
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 350,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "black",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)} // Bir öğe tıklandığında çekmecenin kapanması
      onKeyDown={toggleDrawer(anchor, false)} // 'Esc' tuşuna basıldığında çekmecenin kapanması
    >
      <List>
        <ListItem disablePadding style={listItemStyle}>
          <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
            <Image src={logo} width={130} alt="Author's picture" />
          </ListItemButton>
        </ListItem>
        <Divider />
        {[
          {
            text: "Listed",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22.0156 9.98498L12.7068 1.42087C12.4042 1.14246 12.0056 0.991785 11.5945 1.00035C11.1834 1.00891 10.7915 1.17604 10.5008 1.46681L1.93936 10.0282L1.5 10.4676V23.0889H9.75V15.2139H14.25V23.0889H22.5V10.4307L22.0156 9.98498ZM11.6268 2.50003C11.64 2.50003 11.6318 2.50289 11.6262 2.50846C11.6203 2.50289 11.6136 2.50003 11.6268 2.50003ZM21 21.5889H15.75V15.2139C15.75 14.8161 15.592 14.4345 15.3107 14.1532C15.0294 13.8719 14.6478 13.7139 14.25 13.7139H9.75C9.35218 13.7139 8.97064 13.8719 8.68934 14.1532C8.40804 14.4345 8.25 14.8161 8.25 15.2139V21.5889H3V11.0889L11.6268 2.52745C11.6274 2.52689 11.6274 2.52637 11.6279 2.52581L21 11.0889V21.5889Z"
                  fill="white"
                />
              </svg>
            ),
            link: "/",
          },
          {
            text: "Market",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.1453 0V24L22.281 19.113V3.336L16.1453 0ZM13.293 18.7582L8.35503 20.9145V2.0865L13.293 3.5475V18.7582ZM1.72278 18.2033L5.49978 17.2073V5.1885L1.73778 4.5825L1.72278 18.2033Z"
                  fill="white"
                  fill-opacity="0.23"
                />
              </svg>
            ),
            link: "/market",
          },
          {
            text: "Staking",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.5 6.9C14.28 6.9 14.94 7.75 15 9H17.21C17.14 7.28 16.09 5.7 14 5.19V3H11V5.16C10.61 5.24 10.25 5.37 9.9 5.52L11.41 7.03C11.73 6.95 12.1 6.9 12.5 6.9ZM5.47 3.92L4.06 5.33L7.5 8.77C7.5 10.85 9.06 11.99 11.41 12.68L14.92 16.19C14.58 16.68 13.87 17.1 12.5 17.1C10.44 17.1 9.63 16.18 9.52 15H7.32C7.44 17.19 9.08 18.42 11 18.83V21H14V18.85C14.96 18.67 15.83 18.3 16.46 17.73L18.68 19.95L20.09 18.54L5.47 3.92Z"
                  fill="white"
                  fill-opacity="0.23"
                />
              </svg>
            ),
            link: "/staking",
          },
          {
            text: "Redeem",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_10_1619)">
                  <path
                    d="M23.781 0.219003C23.8849 0.323002 23.9559 0.455215 23.9852 0.599219C24.0145 0.743224 24.0009 0.892674 23.946 1.029L15.2175 22.8495C15.1406 23.0417 15.0122 23.2089 14.8463 23.3328C14.6805 23.4566 14.4837 23.5323 14.2776 23.5516C14.0715 23.5708 13.8641 23.5328 13.6782 23.4417C13.4923 23.3507 13.3352 23.2101 13.224 23.0355L8.45702 15.543L0.96452 10.776C0.789496 10.665 0.648547 10.5078 0.557224 10.3217C0.465902 10.1356 0.427756 9.92795 0.446997 9.72158C0.466238 9.51521 0.542117 9.31816 0.666261 9.15219C0.790405 8.98621 0.957989 8.85776 1.15052 8.781L22.971 0.0555034C23.1073 0.000621788 23.2568 -0.0129978 23.4008 0.0163365C23.5448 0.0456707 23.677 0.116666 23.781 0.220503V0.219003ZM9.95402 15.105L14.0955 21.612L21.195 3.864L9.95402 15.105ZM20.1345 2.8035L2.38652 9.903L8.89502 14.043L20.1345 2.8035Z"
                    fill="white"
                    fill-opacity="0.23"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10_1619">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ),
            link: "/redeem",
          },
          {
            text: "Settings",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_10_1613)">
                  <path
                    d="M12.0667 7.33333C9.46669 7.33333 7.40002 9.4 7.40002 12C7.40002 14.6 9.46669 16.6667 12.0667 16.6667C14.6667 16.6667 16.7334 14.6 16.7334 12C16.7334 9.4 14.6667 7.33333 12.0667 7.33333ZM12.0667 15.3333C10.2 15.3333 8.73336 13.8667 8.73336 12C8.73336 10.1333 10.2 8.66667 12.0667 8.66667C13.9334 8.66667 15.4 10.1333 15.4 12C15.4 13.8667 13.9334 15.3333 12.0667 15.3333Z"
                    fill="white"
                    fill-opacity="0.23"
                  />
                  <path
                    d="M21.8666 9.8L20 9.2L19.6 8.2L20.5333 6.46667C20.7333 6.06667 20.6666 5.53333 20.3333 5.2L18.7333 3.6C18.4 3.26667 17.8666 3.2 17.4666 3.4L15.7333 4.33333L14.7333 3.93333L14.1333 2.06667C14 1.66667 13.6 1.33333 13.1333 1.33333H10.8666C10.4 1.33333 9.99998 1.66667 9.93331 2.13333L9.33331 4C8.93331 4.06667 8.59998 4.2 8.26665 4.4L6.53331 3.46667C6.13331 3.26667 5.59998 3.33333 5.26665 3.66667L3.66665 5.26667C3.33331 5.6 3.26665 6.13333 3.46665 6.53333L4.33331 8.2C4.19998 8.53333 4.06665 8.93333 3.93331 9.26667L2.06665 9.86667C1.66665 10 1.33331 10.4 1.33331 10.8667V13.1333C1.33331 13.6 1.66665 14 2.13331 14.1333L3.99998 14.7333L4.39998 15.7333L3.46665 17.4667C3.26665 17.8667 3.33331 18.4 3.66665 18.7333L5.26665 20.3333C5.59998 20.6667 6.13331 20.7333 6.53331 20.5333L8.26665 19.6L9.26665 20L9.86665 21.9333C9.99998 22.3333 10.4 22.6667 10.8666 22.6667H13.1333C13.6 22.6667 14 22.3333 14.1333 21.9333L14.7333 20L15.7333 19.6L17.4666 20.5333C17.8666 20.7333 18.4 20.6667 18.7333 20.3333L20.3333 18.7333C20.6666 18.4 20.7333 17.8667 20.5333 17.4667L19.6 15.7333L20 14.7333L21.9333 14.1333C22.3333 14 22.6666 13.6 22.6666 13.1333V10.8667C22.6666 10.4 22.3333 9.93333 21.8666 9.8ZM21.3333 12.9333L18.9333 13.6667L18.8666 14L18.2666 15.4L18.0666 15.7333L19.2666 17.9333L17.9333 19.2667L15.7333 18.0667L15.4 18.2667C14.9333 18.5333 14.4666 18.7333 14 18.8667L13.6666 18.9333L12.9333 21.3333H11.0666L10.3333 18.9333L9.99998 18.8667L8.59998 18.2667L8.26665 18.0667L6.06665 19.2667L4.73331 17.9333L5.93331 15.7333L5.73331 15.4C5.46665 14.9333 5.26665 14.4667 5.13331 14L5.06665 13.6667L2.66665 12.9333V11.0667L4.93331 10.4L5.06665 10.0667C5.19998 9.53333 5.39998 9.06667 5.66665 8.6L5.86665 8.26667L4.73331 6.06667L6.06665 4.73333L8.19998 5.93333L8.53331 5.73333C8.99998 5.46667 9.46665 5.26667 9.99998 5.13333L10.3333 5L11.0666 2.66667H12.9333L13.6666 5L14 5.13333C14.4666 5.26667 14.9333 5.46667 15.4 5.73333L15.7333 5.93333L17.9333 4.73333L19.2666 6.06667L18.0666 8.26667L18.2666 8.6C18.5333 9.06667 18.7333 9.53333 18.8666 10L18.9333 10.3333L21.3333 11.0667V12.9333Z"
                    fill="white"
                    fill-opacity="0.23"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10_1613">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ),
            link: "/settings",
          },
        ].map(({ text, icon, link }, index) => (
          <ListItem key={text} disablePadding style={listItemStyle}>
            <Link href={link}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
