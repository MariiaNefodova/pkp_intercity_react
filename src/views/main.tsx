import {Box, Button, Tab, Tabs, Typography} from "@mui/material";
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
                    <Typography>{children}</Typography>
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
        <><Typography fontSize={25} margin={3} fontFamily={"Segoe UI"}
                     fontWeight={"bold"} color={"navy"} >
            Moje bilety
        </Typography>
            <Box margin={3}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange}
                          aria-label="basic tabs example">
                        <Tab label="Bilety"  {...a11yProps(0)} />
                        <Tab label="HISTORIA PODRÓŻY" {...a11yProps(1)} />
                        <Tab label="ZWRÓCONE" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <SearchComponent/>
                    <TicketComponent/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel>
            </Box>
        </>
        //     flexDirection="row"
        //     justifyContent="space-between"
        //     alignItems="center"
        //     width="100%"
        //     as="nav"
        //     p={4}
        //     mx="auto"
        //     maxWidth="1150px"
        // >
        //     <Box>
        //         <Link to="/">
        //             <Button
        //                 fontWeight={['medium', 'medium', 'medium']}
        //                 fontSize={['xs', 'sm', 'lg', 'xl']}
        //                 variant="ghost"
        //                 _hover={{ bg: 'rgba(0,0,0,.2)' }}
        //                 padding="1"
        //                 color="white"
        //                 letterSpacing="0.65px"
        //             >
        //                 <Text fontSize={['xl', '2xl', '2xl', '2xl']} mr={2}>
        //                     🦉
        //                 </Text>
        //                 Library App
        //             </Button>
        //         </Link>
        //     </Box>
        //
        //     <Box>
        //         <Link to="/">
        //             <Button
        //                 fontWeight={['medium', 'medium', 'medium']}
        //                 fontSize={['xs', 'sm', 'lg', 'xl']}
        //                 variant="ghost"
        //                 _hover={{ bg: 'rgba(0,0,0,.2)' }}
        //                 p={[1, 4]}
        //                 color="white"
        //             >
        //                 List Books
        //             </Button>
        //         </Link>
        //         <Link to="/add-new-book">
        //             <Button
        //                 fontWeight={['medium', 'medium', 'medium']}
        //                 fontSize={['xs', 'sm', 'lg', 'xl']}
        //                 variant="ghost"
        //                 _hover={{ bg: 'rgba(0,0,0,.2)' }}
        //                 p={[1, 4]}
        //                 color="white"
        //             >
        //                 Add Book
        //             </Button>
        //         </Link>
        //     </Box>
        // </Flex>
    );
};

export default Main;