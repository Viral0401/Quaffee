import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

const MatchColumnsCard = ({ leftItems, rightItems }) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {/* Left column */}
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom align='center'>
              Food Ordered
            </Typography>
            {leftItems.map((item, index) => (
              <Button key={index} variant="outlined" fullWidth>
                {item}
              </Button>
            ))}
          </Grid>
          {/* Right column */}
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom align='center'>
              Food likely to be Ordered
            </Typography>
            {rightItems.map((item, index) => (
              <Button key={index} variant="outlined" fullWidth>
                {item}
              </Button>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MatchColumnsCard;
