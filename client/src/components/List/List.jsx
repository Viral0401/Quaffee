import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import Ettara from "../../assets/Ettara.jpg";
import Thirdwave from "../../assets/Thirdwave.jpg";
import Ananda from "../../assets/Ananda.jpg";
import Abcoffee from "../../assets/Abcoffee.jpg";
import EarthCafe from "../../assets/EarthCafe.jpg";

// import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from "./styles.js";

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places]);

  const [selectedCategory, setSelectedCategory] = useState("Third Wave Cafe");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const getImageForCategory = (category) => {
    switch (category) {
      case "Third Wave Cafe":
        return Thirdwave;
      // case "Starbucks":
      //   return Ettara;
      case "ABCoffee":
        return Abcoffee;
      case "Earth Cafe":
        return EarthCafe;
      case "Ananda":
        return Ananda;
      default:
        return null;
    }
  };

  return (
    <div className={classes.container}>
      {/* <Typography variant="h4">Restaurants, Hotels and Attractions around you</Typography> */}
      {/* {isLoading?(
              <div className={classes.loading} >
              <CircularProgress size="5rem"/></div>
            ):( <>
            <FormControl className={classes.formControl}>
              <InputLabel id="type">Type</InputLabel>
              <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="rating">Rating</InputLabel>
              <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="3">Above 3.0</MenuItem>
                <MenuItem value="4">Above 4.0</MenuItem>
                <MenuItem value="4.5">Above 4.5</MenuItem>
              </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
              {places?.map((place, i) => (
                <Grid   key={i} item xs={12}>
                  {/* <PlaceDetails
                   place={place}
                   selected={Number(childClicked)===i}
                   refProp={elRefs[i]}
                  
                  /> */}
      {/* </Grid>
              ))}
            </Grid>
            </>
          )} */}
          <div className="text-black header black ">Ettarra Word Cloud</div>
      <img
        src={Ettara}
        style={{ width: "100%", height: "auto", marginTop: "20px", marginBottom: "20px" }}
      />

      <Select
        sx={{
          padding: "0px",
          width: "20%",
          height: "10%",
          marginBottom: "20px",
          // color: theme.palette.secondary[800],
          border: "1px solid #3C2A21",
        }}
        value={selectedCategory}
        onChange={handleCategoryChange}
        displayEmpty
        inputProps={{ "aria-label": "Select Category" }}
      >
        <MenuItem
          value=""
          // sx={{ color: theme.palette.secondary[800] }}
          disabled
        >
          Select Category
        </MenuItem>
        {[
          "Third Wave Cafe",
          // "Starbucks",
          "ABCoffee",
          "Earth Cafe",
          "Ananda",
        ].map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>

      {selectedCategory && (
        <img
          src={getImageForCategory(selectedCategory)}
          alt={selectedCategory}
          style={{ width: "100%", height: "auto", marginTop: "20px" }}
        />
      )}
    </div>
  );
};

export default List;
