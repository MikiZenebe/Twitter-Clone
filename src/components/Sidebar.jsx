import React from "react";

import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";

import TwitterIcon from "@mui/icons-material/Twitter";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsRounded from "@mui/icons-material/NotificationsRounded";
import MailOutlineRounded from "@mui/icons-material/MailOutlineRounded";
import BookmarkBorderRounded from "@mui/icons-material/BookmarkBorderRounded";
import ListAltRounded from "@mui/icons-material/ListAltRounded";
import PermIdentityRounded from "@mui/icons-material/PermIdentityRounded";
import MoreHorizRounded from "@mui/icons-material/MoreHorizRounded";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter Icon*/}
      <TwitterIcon className="sidebar_twitterIcon" />
      <SidebarOption active Icon={HomeRoundedIcon} text="Home" />
      <SidebarOption Icon={SearchRoundedIcon} text="Explore" />
      <SidebarOption Icon={NotificationsRounded} text="Notifications" />
      <SidebarOption Icon={MailOutlineRounded} text="Messages" />
      <SidebarOption Icon={BookmarkBorderRounded} text="Bookmarks" />
      <SidebarOption Icon={ListAltRounded} text="Lists" />
      <SidebarOption Icon={PermIdentityRounded} text="Profile" />
      <SidebarOption Icon={MoreHorizRounded} text="More" />

      <Button variant="outlined" fullWidth className="side-tweet">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
