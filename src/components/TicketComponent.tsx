import {Box, Button, Grid, InputAdornment, Tab, Tabs, TextField, Theme, Typography} from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import {createStyles, makeStyles} from "@mui/styles";
import bookList from "../views/bookList";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            height: 45
        }
    })
);


const TicketComponent = () => {
    return (
        <>
            <Box
                sx={{
                    width: 1,
                    height: 300,
                    border: 1,
                    borderColor: 'grey.300',
                    borderRadius: 1

                }}
            />

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

export default TicketComponent;