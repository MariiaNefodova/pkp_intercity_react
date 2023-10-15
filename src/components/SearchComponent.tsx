import {
    Button,
    Grid,
    InputAdornment,
 TextField,
} from "@mui/material";
import React from "react";
import TuneIcon from '@mui/icons-material/Tune';
import AddIcon from '@mui/icons-material/Add';
import glass from "../icons/glass.png";


const SearchComponent = () => {
    return (
        <>
            <Grid container spacing={2} paddingLeft={0} paddingRight={0} >
                <Grid item xs={10} >
                    <TextField id="outlined-basic" label="Szukaj biletu" variant="outlined"
                               sx={{
                                   fieldset: { borderColor: "grey.300", fontSize: "1.2rem", }
                               }}
                               fullWidth
                               InputLabelProps={{
                                   style: { color: '#00bfff', fontSize: 16, fontFamily: 'MontBold', borderColor: "#142458" },
                               }}
                               InputProps={{
                                   endAdornment: (
                                       <InputAdornment position="end">
                                           <img height={30} src={glass} alt="glass"/>
                                       </InputAdornment>
                                   ),
                               }}/>
                </Grid>
                <Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
                    <Button fullWidth variant="outlined"
                            sx={{ borderColor: 'grey.300', fontFamily: 'MontBold', color: "#142458", fontSize: 18,
                                '&:hover': {
                                    borderColor: 'black',
                                    backgroundColor: '#fff'
                                }}}
                            endIcon={<TuneIcon fontSize="large" style={{ color: "#142458" }} />}>
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
                    <Button fullWidth variant="text" sx={{color: "#00bfff", fontSize: 16, fontFamily: "MontBold",
                        '&:hover': {
                            borderColor: 'black',
                            backgroundColor: '#fff'
                        }}}
                            startIcon={<AddIcon fontSize={"large"} style={{ color: "#fc791e"}}/>}>
                        DODAJ BILET OKRESOWY
                    </Button>
                </Grid>
            </Grid>

        </>
    );
};

export default SearchComponent;