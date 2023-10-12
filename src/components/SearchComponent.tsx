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


const SearchComponent = () => {
    return (
        <>
            <Grid container spacing={2} paddingLeft={0} paddingRight={0} >
                <Grid item xs={10} >
                    <TextField id="outlined-basic" label="Szukaj bilety" variant="outlined"
                               fullWidth
                               InputProps={{
                                   endAdornment: (
                                       <InputAdornment position="end">
                                           <SearchIcon style={{ color: "navy" }}  />
                                       </InputAdornment>
                                   ),
                               }}/>
                </Grid>
                <Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
                    <Button fullWidth variant="outlined" style={{fontWeight: "bold", color: "navy", fontSize: 18}}
                            endIcon={<MenuIcon style={{ color: "navy" }} />}>
                        FILTRY
                    </Button>
                </Grid>
            </Grid>

            <Grid

                container
                direction="row"
                justifyContent="flex-end"
            >
                <Grid alignItems="center" style={{ display: "flex" }}>
                    <AddIcon fontSize={"large"} style={{ color: "orange" }}/>
                    <Typography color={"#00bfff"} fontWeight={"bold"} fontSize={17}>
                    DODAJ BILET OKRESOWY
                </Typography>
                </Grid>
            </Grid>

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

export default SearchComponent;