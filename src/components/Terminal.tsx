'use client'

import { Box, Button, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TerminalIcon from '@mui/icons-material/Terminal';

function Terminal({ code, copyCode }:{ code: string | ReactNode, copyCode?: string }) {
  return (
    <Box sx={{ maxWidth: 800, mb: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", bgcolor: "rgb(78, 87, 105)", py: copyCode ? 0.25 : 1, pl: 2, pr: copyCode ? 0.25 : 2, borderTopLeftRadius: 7, borderTopRightRadius: 7 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <TerminalIcon sx={{ fontSize: 14, mr:1 }}/>
                <Typography variant="body2">Terminal</Typography>
            </Box>
            {copyCode && (
              <Button variant="text" onClick={()=>navigator.clipboard.writeText(copyCode)} sx={{ display: "flex", alignItems: "center", my:0 }}>
                <ContentCopyIcon sx={{ fontSize: 14, mr:0.5 }} />
                <Typography variant="body2">Copy</Typography>
              </Button>
            )}
        </Box>
        <Box sx={{ bgcolor: "rgb(94 104 126)", px:4, py: 3, overflowX: "scroll" }}>{code}</Box>
    </Box>
  )
}

export default Terminal