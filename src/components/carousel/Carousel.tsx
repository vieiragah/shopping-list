import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Box,
} from "@chakra-ui/react";
import { CarouselMock } from "../../mock";
export const Carousel = () => {
  return (
    <Box
      display="flex"
      overflowX="auto"
      whiteSpace="nowrap"
      gap="20px"
      scrollBehavior="smooth"
      padding="0 24px"
      marginBottom="20px"
    >
      {CarouselMock.map((item, index) => (
      <Card minWidth="270px" size="sm" padding="0 15px" key={index}>
        <CardHeader w="100%">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>{item.title}</Text>
            {item.icon}
          </Box>
        </CardHeader>
        <CardBody>
          <Text fontSize='3xl'>R$ {item.value}</Text>
        </CardBody>
        <CardFooter>
          <Text>{item.description}</Text>
        </CardFooter>
      </Card>
        ))}
      
    </Box>
  );
};
