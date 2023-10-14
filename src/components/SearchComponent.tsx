import {
    Button,
    Grid,
    InputAdornment,
 TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import AddIcon from '@mui/icons-material/Add';


const SearchComponent = () => {
    return (
        <>
            <Grid container spacing={2} paddingLeft={0} paddingRight={0} >
                <Grid item xs={10} >
                    <TextField id="outlined-basic" label="Szukaj biletu" variant="outlined"
                               sx={{
                                   fieldset: { borderColor: "grey.300" }
                               }}
                               fullWidth
                               InputLabelProps={{
                                   style: { color: '#00bfff', fontSize: 16, fontWeight: "bold", borderColor: "#142458" },
                               }}
                               InputProps={{
                                   endAdornment: (
                                       <InputAdornment position="end">
                                           <SearchIcon style={{ color: "#142458" }}  />
                                       </InputAdornment>
                                   ),
                               }}/>
                </Grid>
                <Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
                    <Button fullWidth variant="outlined" style={{fontWeight: "bold", color: "#142458", fontSize: 18}}
                            sx={{ borderColor: 'grey.300' }} endIcon={<TuneIcon style={{ color: "#142458" }} />}>
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
                    <Button fullWidth variant="text" style={{fontWeight: "bold", color: "#00bfff", fontSize: 17, borderColor: 'grey.300'}}
                            startIcon={<AddIcon fontSize={"large"} style={{ color: "#fc791e"}}/>}>
                        DODAJ BILET OKRESOWY
                    </Button>
                </Grid>
            </Grid>

        </>
    );
};

export default SearchComponent;