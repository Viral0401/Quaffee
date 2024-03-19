import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";

const StatBox = ({ title, value, increase, icon, description }) => {
  const theme = useTheme();
  return (
    <Box
      gridColumn="span 4"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      borderColor={theme.palette.secondary[800]}
      border="1px solid "
      // backgroundColor={theme.palette.background.alt}
      backgroundColor={theme.palette.secondary[200]}
      borderRadius="0.55rem"
    >
      <FlexBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[800] }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>

      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ color: theme.palette.secondary[500] }}
      >
        {value}
      </Typography>
      <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: 'green' }}
        >
          {increase}
        </Typography>
        <Typography sx={{ color: theme.palette.secondary[500] }}>
          {description}
        </Typography>
      </FlexBetween>
    </Box>
  );
};

export default StatBox;
