import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "../../state/MapApi";
import { LoadScript } from "@react-google-maps/api";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import Map from "../../components/Map/Map";
import TableContent from "./TableContent";

const Geography = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  console.log(coordinates);
  const [bounds, setBounds] = useState({});

  // const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // useEffect(() => {
  //   const filteredPlaces = places.filter((place) => place.rating > rating);
  //   setFilteredPlaces(filteredPlaces);
  // }, [rating]);

  // useEffect(() => {
  //   if (bounds.sw && bounds.ne) {
  //     setIsLoading(true);
  //     getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
  //       setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
  //       setFilteredPlaces([]);
  //       setIsLoading(false);
  //     });
  //   }
  // }, [bounds]);

  return (
    <div>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={6}>
          <List
            // places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            // places={filteredPlaces.length ? filteredPlaces : places}
            places={[
              { latitude: 19.02668667860077, longitude: 72.85060246904996 },
            ]}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
      <TableContent/>
      
    </div>
  );
};

export default Geography;
