import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
} from "@chakra-ui/react";
import { CardMock } from "../mock";
export const CardComponent = () => {
  return (
    <Flex
      direction="column"
      w="95%"
      gap="12px"
      justify="center"
      margin="0 auto"
    >
      {CardMock.map((card, index) => (
        <Card size="sm" key={index}>
          <CardBody>
            <CardHeader textAlign="center">{card.product}</CardHeader>
            <Text textAlign="center">R$: {card.price}</Text>
          </CardBody>
          <CardFooter justify="space-between">
            <Text>{card.category}</Text>
            <Text>{card.date}</Text>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  );
};
