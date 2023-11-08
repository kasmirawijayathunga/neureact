import { Box, Typography } from '@mui/material'
import React from 'react'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function CheckList({ title, description }: { title: string, description: string }) {
    return(
      <Box sx={{ display:"flex", my:2, color:'text.secondary' }} data-aos="fade-up" data-aos-once="true">
        <CheckCircleIcon color="primary" sx={{ mr:1 }}/>
        <Box>
          <Typography sx={{ fontWeight: "bold" }} variant="subtitle1" component="span">{title}</Typography>
          <Typography variant="body1" component="span"> - {description}</Typography>
        </Box>
      </Box>
    )
}

export default CheckList