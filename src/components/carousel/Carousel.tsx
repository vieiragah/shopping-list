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
      paddingX="24px"
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
              <Text color="white">{item.title}</Text>
              {item.icon}
            </Box>
          </CardHeader>
          <CardBody>
            <Text color="white" fontSize="3xl" fontWeight="bolder">
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
            <Text color="gray.100">{item.description}</Text>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};
