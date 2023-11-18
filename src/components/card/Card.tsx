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
  IconButton,
} from "@chakra-ui/react";
import {
  NotAllowedIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
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

  // Paginação
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(filteredCards.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleData = useMemo(() => {
    return filteredCards?.slice(startIndex, endIndex);
  }, [filteredCards, startIndex, endIndex]);

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPage) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Flex
      direction="column"
      w="100%"
      gap="12px"
      justify="center"
      margin="0 auto"
      padding="0 24px"
    >
      <Flex justify="space-between">
        <Text>Transações</Text>
        <Text>{filteredCards.length} itens</Text>
      </Flex>
      <Input placeholder="Buscar..." value={search} onChange={handleSearch} />
      {visibleData.length > 0 ? (
        visibleData.map((card, index) => (
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
      <Flex justify="space-around">
        <IconButton
          onClick={() => goToPage(currentPage - 1)}
          aria-label="previus"
          icon={<ArrowBackIcon />}
          isDisabled={currentPage === 1}
        />
        <IconButton
          onClick={() => goToPage(currentPage + 1)}
          aria-label="next"
          icon={<ArrowForwardIcon />}
          isDisabled={currentPage === totalPage || visibleData.length < 3}
        />
      </Flex>
    </Flex>
  );
};
