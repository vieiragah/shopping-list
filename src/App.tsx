import { Box } from '@chakra-ui/react'
import { CardComponent, Carousel, Header } from "./components";
 function App() {
  return (
    <Box bgGradient="linear(to bottom, #121214 160px, #202024 160px)">
      <Header />
      <Carousel />
      <CardComponent/>
    </Box>
  );
}

export default App;
