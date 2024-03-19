import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { LoadScript } from "@react-google-maps/api";

import useStyles from "./styles";

const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };

  const PrettoSlider = styled(Slider)({
    color: "#ffffff",
    height: 4,
    "& .MuiSlider-track": {
      border: "none",
      width: "3",
    },
    "& .MuiSlider-thumb": {
      height: 10,
      width: 10,
      backgroundColor: "#fff",
      border: "1px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1,
      fontSize: 10,
      background: "unset",
      padding: 0,
      width: 20,
      height: 20,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#ffffff",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  return (
    <AppBar position="static">
      <Toolbar className={"classes.toolbar"}>
        <Typography variant="h5" className={classes.title}>
          Competitor Analysis
        </Typography>
        {/* <Box display="flex">
          <LoadScript
            googleMapsApiKey="process.env.REACT_APP_GOOGLE_MAPS_API_KEY"
            libraries={["places"]} // Add libraries prop here
          >
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Where to?"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </Autocomplete>
          </LoadScript>
        </Box> */}
        {/* <Typography gutterBottom>Distance</Typography>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="Distance"
                    defaultValue={20}
                /> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
