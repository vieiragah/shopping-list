import { ArrowUpIcon, ArrowDownIcon, ArrowUpDownIcon } from "@chakra-ui/icons";

export const CarouselMock = [
  {
    title: "Entradas",
    value: 17400,
    description: "Última entrada em 13 de abril",
    icon: <ArrowUpIcon color="green" />,
    bg: "#323238",
  },
  {
    title: "Saídas",
    value: 1400,
    description: "Última entrada em 13 de abril",
    icon: <ArrowDownIcon color="red" />,
    bg: "#323238",
  },
  {
    title: "Total",
    value: 16000,
    description: "Última entrada em 13 de abril",
    icon: <ArrowUpDownIcon color="lightBlue" />,
    bg: "#015F43",
  },
];
CarouselMock[2].bg = CarouselMock[2].value < 0 ? "#6a121a" : "#015F43";