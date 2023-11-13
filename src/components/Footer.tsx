import { Box, Container, Divider, Typography } from '@mui/material'
import Link from 'next/link'

function Footer() {
  return (
    <>
        <Divider />
        <Box sx={{ bgcolor: "#1a1a1a" }}>
            <Container sx={{ py:2, textAlign: "right" }}>
                <Typography variant="body2">Made with <Typography variant="caption">❤️</Typography> by <Link href="https://wijayathunga.com/">Kasmira Wijayathunga</Link></Typography>
            </Container>
        </Box>
    </>
  )
}

export default Footer