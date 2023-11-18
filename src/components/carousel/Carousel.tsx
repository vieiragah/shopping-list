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
        <Card
          bg={item.bg}
          minWidth="270px"
          size="sm"
          padding="0 15px"
          key={index}
        >
          <CardHeader w="100%">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text color="#fff">{item.title}</Text>
              {item.icon}
            </Box>
          </CardHeader>
          <CardBody>
            <Text color="#fff" fontSize="3xl" fontWeight="bolder">
              {typeof item.value === "number"
                ? item.value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                : item.value}
            </Text>
          </CardBody>
          <CardFooter>
            <Text color="#7C7C8A">{item.description}</Text>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};
