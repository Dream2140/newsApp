import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Tab, Tabs} from "@mui/material";
import ProfileCommentsList from "../components/profile/ProfileCommentsList";
import EditProfile from "../components/profile/EditProfile";
import ChangePassword from "../components/profile/ChangePassword";

const Profile = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={selectedTab}
                onChange={handleTabChange}
                aria-label="Profile page tabs"
                sx={{borderRight: 1, borderColor: 'divider'}}
            >
                <Tab label="Comments List"/>
                <Tab label="Edit profile"/>
                <Tab label="Change password"/>
            </Tabs>
            <Box sx={{flexGrow: 1, p: 3}}>
                {selectedTab === 0 && <ProfileCommentsList/>}
                {selectedTab === 1 && <EditProfile/>}
                {selectedTab === 2 && <ChangePassword/>}
            </Box>
        </Box>
    );
};

export default Profile;