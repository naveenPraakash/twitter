import React from "react";
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SidebarOption from './SidebarOption';
import Button from '@mui/material/Button';

function Sidebar() {
    return (
        <div className="sidebar">
            {/*Twitter icon */}
            
            
            <TwitterIcon className="sidebar__twitterIcon"/>
            
            <SidebarOption active Icon={HomeIcon} text="home"/>
            <SidebarOption Icon={SearchIcon} text="explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}

            {/* Button -> Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>

    );
}

export default Sidebar;