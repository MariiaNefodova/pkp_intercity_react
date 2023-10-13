import {Box, Button, Grid, InputAdornment, Tab, Tabs, TextField, Theme, Typography} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {ticketListSelector} from "../reducers/ticketReducer";

const TicketComponent = () => {
    const ticketList = useSelector(ticketListSelector);
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
                    <Grid container spacing={2} padding={1}>
                        <Grid item xs={3}>
                            <Box bgcolor="grey.200" height={30}>
                                <Typography padding={1}  display={"inline"} fontSize={16} color="#00bfff">
                                    Numer biletu:
                                </Typography>
                                <Typography padding={1} display={"inline"} fontSize={19} color="navy">
                                    {ticket.number}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                ))}
        </>
    );
};

export default TicketComponent;