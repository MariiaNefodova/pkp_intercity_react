import {Box, Tab, Tabs, Typography} from "@mui/material";
import React from "react";
import SearchComponent from "../components/SearchComponent";
import TicketComponent from "../components/TicketComponent";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box paddingBottom={3} paddingTop={3} paddingLeft={0} paddingRight={0}>
                    <Typography >{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Main = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <><Typography fontSize={25} margin={2} fontFamily={"MontBold"}
                     fontWeight={"bold"} color={"#142458"} >
            Moje bilety
        </Typography>
            <Box margin={2}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs sx={{
                         '& .MuiTabs-indicator': { backgroundColor: '#142458' },
                         '& .MuiTab-root': { color: 'lightgrey', fontFamily: 'MontBold' },
                         '& .MuiTab-root.Mui-selected': { color: '#142458', fontFamily: 'MontBold'  },
                    }} value={value} onChange={handleChange}
                          >
                        <Tab  label="BILETY"  {...a11yProps(0)} />
                        <Tab label="HISTORIA PODRÓŻY" {...a11yProps(1)} />
                        <Tab label="ZWRÓCONE" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <SearchComponent/>
                    <TicketComponent/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    HISTORIA PODRÓŻY
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    ZWRÓCONE
                </CustomTabPanel>
            </Box>
        </>
    );
};

export default Main;