import {Box, Button, Tab, Tabs, Typography} from "@mui/material";
import React from "react";
import SearchComponent from "../components/SearchComponent";
import TicketComponent from "../components/TicketComponent";
import { styled } from '@mui/material/styles';


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

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    '&.Mui-selected': {
        fontWeight: 'bold',
        color: '#142458',
    },
}));

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        backgroundColor: '#142458',
    },
    '& .MuiTabs-indicatorSpan': {
        backgroundColor: '#142458',
    },
});

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps {
    label: string;
}


const Main = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <><Typography fontSize={25} margin={2} fontFamily={"Segoe UI"}
                     fontWeight={"bold"} color={"#142458"} >
            Moje bilety
        </Typography>
            <Box margin={2}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <StyledTabs value={value} onChange={handleChange}
                          aria-label="basic tabs example"
                          >
                        <StyledTab  label="BILETY"  {...a11yProps(0)} />
                        <Tab label="HISTORIA PODRÓŻY" {...a11yProps(1)} />
                        <Tab label="ZWRÓCONE" {...a11yProps(2)} />
                    </StyledTabs>
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