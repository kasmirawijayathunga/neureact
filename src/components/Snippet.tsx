import { Box, IconButton, SxProps, Typography } from '@mui/material'
import React from 'react'

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Snippet({ code, sx }:{ code: string, sx?: SxProps }) {
  return (
    <Box sx={{ my:5, py:1, pl: 3, pr: 1.5, borderRadius: 3, bgcolor: "#1a1a1a", width: "fit-content", display: "flex", alignItems: "center", ...sx }}>
        <Typography sx={{ mr:1, mb: 0.2 }}>{code}</Typography>
        <IconButton>
            <ContentCopyIcon fontSize="small" />
        </IconButton>
    </Box>
  )
}

export default Snippet