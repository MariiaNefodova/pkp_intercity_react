import {
    Box,
    Button,
    Grid,
    InputAdornment,
    Link,
    Tab,
    Tabs,
    TextField,
    Theme,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {ticketListSelector} from "../reducers/ticketReducer";
import {FcGoogle} from "react-icons/fc";
import {CgSoftwareUpload} from "react-icons/cg";
import {SlArrowRight} from "react-icons/sl";
import {MdDeleteOutline} from "react-icons/md";
import Avatar from '@mui/material/Avatar';
import {  ThemeProvider, createTheme } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import {orange} from "@mui/material/colors";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TuneIcon from "@mui/icons-material/Tune";


// const theme = createTheme({
//     palette: {
//         box: {
//             border: 1, borderColor: 'grey.300', backgroundColor: 'white',
//             paddingRight: 0, width: '30px', height: '30px', left: '20px', marginRight: '10px'
//         },
//     },
// });

const TicketComponent = () => {
   // const theme = useTheme();
    const ticketList = useSelector(ticketListSelector);
    const date = (input: Date) => {
        return ('0' + input.getDate()).slice(-2) + '.' +
            ('0' + (input.getMonth() + 1)).slice(-2) + '.' + input.getFullYear();
    }
    const duration = (start: Date, end: Date) =>{
        const timeDuration = Math.abs(end.getTime() - start.getTime());
        const hours = Math.floor(timeDuration / (1000 * 60 * 60));
        const minutes = Math.floor((timeDuration % (1000 * 60 * 60)) / (1000 * 60));

        return hours+'h '+minutes+'min'
    }
    console.log(ticketList)
    return (
        <>
            {
                ticketList.map(ticket => (
                <Box
                    sx={{
                        width: 1,
                        height: 300,
                        border: 1,
                        borderColor: 'grey.300',
                        borderRadius: 1

                    }}>
                    <Grid container spacing={2} padding={2}  direction="row"
                          alignItems="center">
                        <Grid item xs={3}>
                            <Box bgcolor="grey.100" width={"fit-content"} height={30}>
                                <Typography padding={1}  display={"inline"} fontSize={16} color="#00bfff">
                                    Numer biletu:
                                </Typography>
                                <Typography padding={1} display={"inline"} fontSize={19} color="navy">
                                    {ticket.number}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item container xs={9} paddingRight={2}
                              justifyContent="flex-end" alignItems={"center"}>
                                <Link href="#" fontSize={15} color={"#02075d"} fontWeight={"bold"}>
                                    TRASA TWOJEGO POCIĄGU
                                </Link>
                            <Avatar sx={{ border: 1, borderColor: 'grey.300', backgroundColor: 'white',
                                 paddingRight: 0, width: '30px', height: '30px', left: '20px', marginRight: '10px'
                            }}>
                            <CgSoftwareUpload color={"orange"} strokeWidth={1}/>
                            </Avatar>
                            <Avatar sx={{ border: 1, borderColor: 'grey.300', backgroundColor: 'white',
                                paddingRight: 0, width: '30px', height: '30px', left: '20px', marginRight: '10px'
                            }}>
                                <DeleteOutlineIcon sx={{color: "navy"}}/>
                            </Avatar>
                            <Avatar sx={{ border: 1, borderColor: 'grey.300', backgroundColor: 'white',
                                paddingRight: 0, width: '30px', height: '30px', left: '20px', marginRight: '10px'
                            }}>
                                <FcGoogle/>
                            </Avatar>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} spacing={2} paddingLeft={0} paddingRight={0} >
                        <Grid item xs={3} lineHeight={"5%"} >
                            <Typography paddingLeft={3} paddingTop={1} fontSize={17} fontWeight={"bold"} color="#00bfff">
                                Data
                            </Typography>
                            <br />
                            <Typography  paddingLeft={3} paddingTop={1}   fontSize={21} fontWeight={"bold"} color="navy">
                                {date(ticket.dateStart)}
                            </Typography>
                        </Grid>
                        <Grid item xs={3} lineHeight={"5%"}  >
                            <Typography paddingLeft={3} paddingTop={1}   fontSize={17} fontWeight={"bold"} color="#00bfff">
                                Czas {duration(ticket.dateStart, ticket.dateEnd)}
                            </Typography>
                            <br/>
                            <Typography  paddingLeft={3} paddingTop={1} fontSize={21} fontWeight={"bold"} color="navy">
                                {ticket.dateStart.getHours()+":"+ ticket.dateStart.getMinutes()} &nbsp; &nbsp;
                                <ArrowForwardIosIcon fontSize={"medium"}
                                style={{ color: "orange",  }}/> &nbsp; &nbsp;
                                {ticket.dateEnd.getHours()+":"+ ticket.dateEnd.getMinutes()}
                            </Typography>
                        </Grid>
                        <Grid item xs={3} lineHeight={"5%"} >
                            <Typography paddingLeft={3} paddingTop={1}   fontSize={17} fontWeight={"bold"} color="#00bfff">
                                Klasa {ticket.class}
                            </Typography>
                            <br/>
                            <Typography  paddingLeft={3} paddingTop={1}  fontSize={21} fontWeight={"bold"} color="navy">
                                {ticket.price.toFixed(2)+' zł'}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Button fullWidth variant="outlined" style={{fontWeight: "bold", color: "orange", fontSize: 18, height: "100%"}}
                                    sx={{ borderColor: 'grey.300' }} >
                                POBIERZ PDF
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} spacing={2} paddingLeft={0} paddingRight={0} >
                        <Grid item xs={9} lineHeight={"5%"}  >
                            <Typography paddingLeft={3} paddingTop={1}   fontSize={17} fontWeight={"bold"} color="#00bfff">
                                Trasa
                            </Typography>
                            <br/>
                            <Typography  paddingLeft={3} paddingTop={1} fontSize={21} color="navy">
                                {ticket.from} &nbsp; &nbsp;
                                <ArrowForwardIosIcon fontSize={"medium"}
                                                     style={{ color: "orange",  }}/> &nbsp; &nbsp;
                                {ticket.to}
                            </Typography>
                            <br/>
                            <Box >
                                <Typography display={"inline"} paddingLeft={3} paddingTop={1} fontSize={21}  color="orange">
                                    IC
                                </Typography>
                                <Typography display={"inline"} paddingLeft={4} paddingTop={1} fontSize={21} color="navy">
                                    {ticket.trainNumber}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3} style={{paddingTop: "20px"}}>
                            <Button fullWidth variant="outlined" style={{fontWeight: "bold", color: "orange", fontSize: 18, height: "100%"}}
                                    sx={{ borderColor: 'grey.300' }} >
                                POBIERZ PDF
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} padding={2}  direction="row"
                          alignItems="center">
                        <Grid item container paddingRight={2}
                              justifyContent="flex-end" alignItems={"center"}>
                            <Link href="#" fontSize={15} color={"#02075d"} fontWeight={"bold"}>
                                INNE FUNKCJE DLA TEGO BILETU
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                ))}
        </>
    );
};

export default TicketComponent;