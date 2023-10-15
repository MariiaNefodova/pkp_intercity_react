import {
    Box,
    Button,
    Grid,
    Link, Select, TextField,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {ticketListSelector} from "../reducers/ticketReducer";
import {FcGoogle} from "react-icons/fc";
import {CgSoftwareUpload} from "react-icons/cg";
import Avatar from '@mui/material/Avatar';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import logo from '../logo/ic.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const styles = {
    avatar: {
        border: 1,
        borderColor: 'grey.300',
        backgroundColor: 'white',
        paddingRight: 0,
        width: '30px',
        height: '30px',
        left: '20px',
        marginRight: '10px'
    },
    typographyName: {
        paddingLeft: 3,
        paddingTop: 1,
        fontSize: 17,
        fontFamily: "MontBold",
        color: "#00bfff"
    },

    typographyText: {
        paddingLeft: 3,
        paddingTop: 1,
        fontSize: 21,
        fontFamily: "MontBold",
        color: "#142458"
    },

    typographyWithArrow: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    button: {
        fontWeight: "bold",
        color: "#fc791e",
        fontSize: 18,
        height: "100%",
        borderColor: 'grey.300',
        '&:hover': {
            borderColor: 'black',
            backgroundColor: '#fff'
        }
    },

};

const TicketComponent = () => {
    const ticketList = useSelector(ticketListSelector);
    const date = (input: Date) => {
        return ('0' + input.getDate()).slice(-2) + '.' +
            ('0' + (input.getMonth() + 1)).slice(-2) + '.' + input.getFullYear();
    }
    const duration = (start: Date, end: Date) => {
        const timeDuration = Math.abs(end.getTime() - start.getTime());
        const hours = Math.floor(timeDuration / (1000 * 60 * 60));
        const minutes = Math.floor((timeDuration % (1000 * 60 * 60)) / (1000 * 60));

        return hours + 'h ' + minutes + 'min'
    }
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
                        <Grid container spacing={2} padding={2} direction="row"
                              alignItems="center">
                            <Grid item xs={7}>
                                <Box bgcolor="grey.100" width={"fit-content"} height={30}>
                                    <Typography padding={1} display={"inline"} fontSize={16} fontFamily={'MontMedium'} color="#00bfff">
                                        Numer biletu:
                                    </Typography>
                                    <Typography padding={1} display={"inline"} fontFamily={'MontMedium'} fontSize={19} color="#142458">
                                        {ticket.number}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item container xs={5} paddingRight={2}
                                  justifyContent="flex-end" alignItems={"center"}>
                                <Link href="#" fontSize={14} color={"#02075d"} fontFamily={'MontBold'}>
                                    TRASA TWOJEGO POCIĄGU
                                </Link>
                                <Avatar sx={styles.avatar}>
                                    <CgSoftwareUpload color={"#fc791e"} strokeWidth={1}/>
                                </Avatar>
                                <Avatar sx={styles.avatar}>
                                    <DeleteOutlineIcon sx={{color: "#142458"}}/>
                                </Avatar>
                                <Avatar sx={styles.avatar}>
                                    <FcGoogle/>
                                </Avatar>
                            </Grid>
                        </Grid>
                        <Grid container xs={12} spacing={2} paddingLeft={0} paddingRight={0}>
                            <Grid item xs={3} lineHeight={"5%"}>
                                <Typography sx={styles.typographyName}>
                                    Data
                                </Typography>
                                <br/>
                                <Typography sx={styles.typographyText}>
                                    {date(ticket.dateStart)}
                                </Typography>
                            </Grid>
                            <Grid item xs={3} lineHeight={"5%"}>
                                <Typography sx={styles.typographyName}>
                                    Czas {duration(ticket.dateStart, ticket.dateEnd)}
                                </Typography>
                                <br/>
                                <Typography sx={[styles.typographyText, styles.typographyWithArrow]}>
                                    {ticket.dateStart.getHours() + ":" + ticket.dateStart.getMinutes()} &nbsp; &nbsp;
                                    <ArrowForwardIosIcon fontSize={"medium"}
                                                         style={{color: "#fc791e",}}/> &nbsp; &nbsp;
                                    {ticket.dateEnd.getHours() + ":" + ticket.dateEnd.getMinutes()}
                                </Typography>
                            </Grid>
                            <Grid item xs={3} lineHeight={"5%"}>
                                <Typography sx={styles.typographyName}>
                                    Klasa {ticket.class}
                                </Typography>
                                <br/>
                                <Typography sx={styles.typographyText}>
                                    {ticket.price+ ' zł'}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant="outlined"
                                        sx={styles.button}>
                                    POBIERZ PDF
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container xs={12} spacing={2} paddingLeft={0} paddingRight={0} paddingTop={1}>
                            <Grid item xs={9} lineHeight={"5%"}>
                                <Typography sx={styles.typographyName}>
                                    Trasa
                                </Typography>
                                <br/>
                                <Typography sx={[styles.typographyText, styles.typographyWithArrow, {fontSize: 17}]}>
                                    {ticket.from} &nbsp; &nbsp;
                                    <ArrowForwardIosIcon fontSize={"medium"}
                                                         style={{color: "#fc791e",}}/> &nbsp; &nbsp;
                                    {ticket.to}
                                </Typography>
                                <br/>
                                <Box paddingTop={1}>
                                    <Typography display={"inline"} paddingLeft={3} >
                                        <img height={15} src={logo} alt="Logo"/>
                                    </Typography>
                                    <Typography display={"inline"} fontFamily={'MontReg'} paddingLeft={1} fontSize={20}
                                                color="#142458">
                                        {ticket.trainNumber}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={3} >
                                <Button fullWidth variant="outlined"
                                        sx={styles.button}>
                                    STWÓRZ PROFIL ZAKUPOWY
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container paddingTop={1} paddingRight={2} direction="row"
                              alignItems="center" justifyContent="flex-end">
                                <Button sx={{
                                    padding: 0,
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                    }
                                }}>
                                    <Link component="button" fontSize={14} color={"#02075d"} fontFamily={'MontBold'}>
                                        INNE FUNKCJE DLA TEGO BILETU
                                    </Link>
                                    <ExpandMoreIcon fontSize={"large"} style={{color: "#fc791e"}}/>
                                </Button>
                        </Grid>
                    </Box>
                ))}
        </>
    );
};

export default TicketComponent;