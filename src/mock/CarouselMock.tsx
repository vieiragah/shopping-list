import { ArrowUpIcon, ArrowDownIcon, ArrowUpDownIcon } from "@chakra-ui/icons";

export const CarouselMock = [
  {
    title: "Entradas",
    value: 17400,
    description: "Última entrada em 13 de abril",
    icon: <ArrowUpIcon color="green.100" />,
    bg: "gray.300",
  },
  {
    title: "Saídas",
    value: 1400,
    description: "Última entrada em 13 de abril",
    icon: <ArrowDownIcon color="red.200" />,
    bg: "gray.300",
  },
  {
    title: "Total",
    value: 16000,
    description: "Última entrada em 13 de abril",
    icon: <ArrowUpDownIcon color="gray.50" />,
    bg: "green.300",
  },
];
CarouselMock[2].bg = CarouselMock[2].value < 0 ? "red.200" : "green.300";