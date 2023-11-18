import { Box } from '@chakra-ui/react'
import { CardComponent, Carousel, Header } from "./components";
 function App() {
  return (
    <Box bgGradient="linear(to bottom, black.100 160px, black.300 160px)">
      <Header />
      <Carousel />
      <CardComponent/>
    </Box>
  );
}

export default App;
