import { Typography } from '@mui/material';
import React from 'react';
import { getMountainTime } from '../../utilities/DatetimeUtils';

const MSTDatetime = () => {
  const mstFullDate = getMountainTime();
  const mstTimeValue = (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '400',
        fontSize: { xs: '10px', sm: '12px' },
        color: 'rgba(255, 255, 255, .7)',
        lineHeight: 1,
        paddingRight: '2px',
        fontFamily: 'Poppins',
      }}
    >
      {mstFullDate} MST
    </Typography>
  );
  return mstTimeValue;
};

export default MSTDatetime;
