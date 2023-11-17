import { useMemo, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
  Input,
} from "@chakra-ui/react";
import { CardMock } from "../../mock";

export const CardComponent = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCards = useMemo(() => {
    return CardMock.filter((item) => {
      const searchItem =
        `${item.product} ${item.category} ${item.date} ${item.price}`.toLowerCase();
      return searchItem.includes(search.toLowerCase());
    });
  }, [search]);

  return (
    <Flex
      direction="column"
      w="95%"
      gap="12px"
      justify="center"
      margin="0 auto"
    >
      <Input placeholder="Buscar..." value={search} onChange={handleSearch} />
      {filteredCards.map((card, index) => (
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
