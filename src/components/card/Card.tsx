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
  CalendarIcon,
  MinusIcon,
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
      padding="0 24px 50px 24px"
    >
      <Flex justify="space-between">
        <Text color="gray.200">Transações</Text>
        <Text color="gray.100">{filteredCards.length} itens</Text>
      </Flex>
      <Input
        bg="black.100"
        border='none'
        color='white'
        placeholder="Busque uma transação"
        value={search}
        onChange={handleSearch}
      />
      {visibleData.length > 0 ? (
        visibleData.map((card, index) => (
          <Card size="sm" key={index} bg="black.200" paddingX="10px">
            <CardBody>
              <CardHeader paddingY="10px" color="gray.200">
                {card.product}
              </CardHeader>
              {card.entry === true ? (
                <Text color="green.100" fontSize="2xl" fontWeight="bolder">
                  {typeof card.price === "number"
                    ? card.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    : card.price}
                </Text>
              ) : (
                <Text color="red.100" fontSize="2xl" fontWeight="bolder">
                  -{" "}
                  {typeof card.price === "number"
                    ? card.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    : card.price}
                </Text>
              )}
            </CardBody>
            <CardFooter justify="space-between">
              <Text color="gray.100">
                <MinusIcon /> {card.category}
              </Text>
              <Text color="gray.100">
                <CalendarIcon /> {card.date}
              </Text>
            </CardFooter>
          </Card>
        ))
      ) : (
        <Box margin="30px auto" textAlign="center">
          <NotAllowedIcon color="red.300" boxSize={20} />
          <Text color='white.100'>Nenhum item encontrado</Text>
        </Box>
      )}
      <Flex justify="space-around" marginTop='20px'>
        <IconButton
          onClick={() => goToPage(currentPage - 1)}
          aria-label="previus"
          icon={<ArrowBackIcon />}
          isDisabled={currentPage === 1}
        />
        <Text color='gray.100'>Página {currentPage}</Text>
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
