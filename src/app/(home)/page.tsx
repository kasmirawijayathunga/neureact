import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import CheckList from './CheckList';

import Image_Neutralino from '@/assets/neutralino-logo.svg';
import Image_React from '@/assets/react-logo.svg';
import Image_Hero from '@/assets/neureact-app.webp';

import GitHubIcon from '@mui/icons-material/GitHub';
import Snippet from '@/components/Snippet';

function Home() {
  return (
    <>
      <Container sx={{ textAlign: "center", my: 15 }}>
        <Typography sx={{ fontWeight: 500 }} variant='h1'>NeuReact</Typography>
        <Typography sx={{ maxWidth: 650, mx: "auto", mt:1 }}>Welcome to Neureact, a powerful tool that seamlessly integrates React with NeutralinoJs, providing a robust platform for building cross-platform desktop applications. With Neureact, you can leverage the power of React components and Neutralino&apos;s lightweight runtime to create efficient and user-friendly desktop applications.</Typography>
        <Button component={Link} href="/documentation" variant="outlined" size="large" sx={{ borderRadius: 100, textTransform: "capitalize", mt:4 }}>Get Started</Button>
        <Snippet
          code="npx create-neureact-app"
          sx={{
            mx: "auto",
          }}
        />
      </Container>
      <Box sx={{ bgcolor: "#1a1a1a" }}>
        <Container sx={{ textAlign: "center", py: 15 }}>
          
          <Typography sx={{ fontWeight: 400 }} variant='h4'>Unifying <Box component={Link} href="https://react.dev/" color="#61dafb" sx={{ fontWeight: 500 }}><Image src={Image_React} alt="react-logo" width={30} />React</Box> with <Box component={Link} href="https://neutralino.js.org/" color="#f89901" sx={{ fontWeight: 500 }}><Image src={Image_Neutralino} alt="neutralino-logo" width={34} style={{ margin: -4, marginRight: -2 }} />NeutralinoJs</Box><br/> for Efficient Cross-Platform Development</Typography>

          <Typography sx={{ my: 5 }}>Neureact eliminates the complexities of setting up your development environment, allowing you to focus solely on coding.<br/> Whether you&apos;re a seasoned React developer or just starting, Neureact provides a smooth and straightforward development experience.<br/> It&apos;s as simple as installing the package and starting your development server.</Typography>

          <Box sx={{ width: "100%", height: "100%", minHeight: 400, position: "relative", mt: 5}}>
            <Image src={Image_Hero} alt="NeuReact App" fill style={{ objectFit: "contain" }} />
          </Box>

        </Container>
      </Box>
      <Container sx={{ my: 15 }}>
        <Typography variant='h4' sx={{ mb:3 }}>Features that Empower Development</Typography>

        <Typography sx={{ my: 5 }}>Neureact comes with a host of features designed to enhance your development experience:</Typography>

        <CheckList
          title="Efficient Setup"
          description="Neureact sets up your development environment, enabling you to use the latest ReactJs features without hassle."
        />
        <CheckList
          title="Optimized for Production"
          description="Neureact ensures your application is optimized for production, we made it posible to build and export the application with a single command, providing a seamless user experience."
        />
        <CheckList
          title="React and NeutralinoJs Integration"
          description="With Neureact, you can build applications using React components and Neutralino's lightweight runtime, combining the best of both worlds for efficient desktop application development."
        />
      </Container>
      <Box sx={{ bgcolor: "#1a1a1a" }}>
        <Container sx={{ textAlign: "center", py: 15, display: "flex" }}>

            <GitHubIcon sx={{ fontSize: 200, mr: 4 }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant='h4'>An Open-Source Project with a Powerful Mission</Typography>

              <Typography sx={{ my: 5 }}>Neureact is an open-source project aiming to streamline the process of building cross-platform desktop applications. By integrating React with NeutralinoJs, Neureact enables developers to build lightweight desktop applications using their familiar React components and Neutralino&apos;s powerful runtime. We believe in the power of open-source and invite developers to contribute to our <Link href="https://github.com/kasmirawijayathunga/neutralino-react">GitHub repository</Link>.</Typography>
            </Box>

        </Container>
      </Box>
    </>
  )
}

export default Home