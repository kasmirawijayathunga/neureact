import { Box, Container, Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

import Snippet from '@/components/Snippet';
import Terminal from '@/components/Terminal';

function Docs() {
  return (
    <Container sx={{ my: 10 }}>

      <Typography variant='h4' sx={{ mb: 3, fontWeight: 500 }}>Get Started</Typography>

      <Typography variant='h5' sx={{ mb: 2 }}>Prerequisites</Typography>
      <Divider />

      <Typography sx={{ my:3 }}>Node.js Installed: Before starting with Neureact, you should have Node.js installed on your system. Node.js is a JavaScript runtime that allows you to run JavaScript on your server or your machine. It comes with npm (Node Package Manager) that makes it easy to manage JavaScript dependencies in your projects.</Typography>

      <Typography>Basic JavaScript syntax: Neureact, uses ReactJs and NeutralinoJs, which is based on JavaScript. Therefore, you should be comfortable working with variables, arrays, objects, loops, and functions in JavaScript.</Typography>

      <Typography variant='h5' sx={{ mt: 5, mb: 2 }}>Creating a NeuReact Application</Typography>
      <Divider sx={{ mb: 4 }} />

      <Typography sx={{ mb:1 }}>Use the following command to create a new app</Typography>
      <Terminal
        code="> npx create-neureact-app"
        copyCode='npx create-neureact-app'
      />

      <Typography sx={{ mb:1 }}>Enter a name for your project</Typography>
      <Typography sx={{ mb:1 }}>This name will also be used to create a new folder for your project</Typography>
      <Terminal
        code={
          <Box sx={{ display: "flex" }}>&gt; What is your project named? <Typography color="lightgrey" sx={{ ml: 0.5 }}>(my-app)</Typography></Box>
        }
      />

      <Typography sx={{ mb:1 }}>Choose if you want to use Typescript</Typography>
      <Terminal
        code={
          <Box sx={{ display: "flex" }}>&gt; Would you like to use typescript? <Typography color="lightgrey" sx={{ ml: 0.5 }}>(<u>Yes</u>/No)</Typography></Box>
        }
      />

      <Typography>Now your NeuReact application is read</Typography>
      <Typography>Happy coding! 🚀</Typography>

      <Typography variant='h5' sx={{ mt: 5, mb: 2 }}>Run your application in development mode</Typography>
      <Divider sx={{ mb: 4 }} />

      <Typography sx={{ mb:1 }}>This will open a new development window.</Typography>
      <Typography sx={{ mb:1, color: "lightgrey" }}>you can also use localhost:3000 in browser to view the application in browser.</Typography>

      <Terminal
        code={<Box sx={{ display: "flex" }}>&gt; npm run dev</Box>}
        copyCode='npm run dev'
      />

      <Typography variant='h5' sx={{ mt: 5, mb: 2 }}>Build your NeuReact application</Typography>
      <Divider sx={{ mb: 4 }} />
      <Typography sx={{ mb:1 }}>This will export your application to all the available platforms.</Typography>

      <Terminal
        code={<Box sx={{ display: "flex" }}>&gt; npm run build</Box>}
        copyCode='npm run build'
      />

    </Container>
  )
}

export default Docs