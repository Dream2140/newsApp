import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Tab, Tabs} from "@mui/material";
import AddNews from "../components/admin/AddNews";
import UserList from "../components/admin/UserList";
import FetchNews from "../components/admin/FetchNews";


const Admin = () => {
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
                <Tab label="Add News"/>
                <Tab label="User List"/>
                <Tab label="Fetch News"/>
            </Tabs>
            <Box sx={{flexGrow: 1, p: 3}}>
                {selectedTab === 0 && <AddNews/>}
                {selectedTab === 1 && <UserList/>}
                {selectedTab === 2 && <FetchNews/>}
            </Box>
        </Box>
    );
};

export default Admin;