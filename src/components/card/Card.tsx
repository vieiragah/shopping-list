import { useMemo, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
  Input,
  Box,
} from "@chakra-ui/react";
import { CardMock } from "../../mock";
import { NotAllowedIcon } from "@chakra-ui/icons";

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
      w="100%"
      gap="12px"
      justify="center"
      margin="0 auto"
      padding="0 24px"
    >
      <Input placeholder="Buscar..." value={search} onChange={handleSearch} />
      {filteredCards.length > 0 ? (
        filteredCards.map((card, index) => (
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
        ))
      ) : (
        <Box margin="30px auto" textAlign="center">
          <NotAllowedIcon color="#ff6347bd" boxSize={20} />
          <Text>Nenhum item encontrado</Text>
        </Box>
      )}
    </Flex>
  );
};
