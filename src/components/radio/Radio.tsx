import {
  Box,
  HStack,
  useRadioGroup,
  useRadio,
  Input,
  Text,
} from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

interface RadioCardProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

function RadioCard({ children, icon, ...props }: RadioCardProps) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <Input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="md"
        boxShadow="md"
        bg="#29292E"
        opacity=".8"
        color="#C4C4CC"
        _checked={{
          bg: "#7C7C8A",
          color: "white",
        }}
        px={5}
        py={3}
        display="inline-block"
      >
        <HStack spacing={2}>
          {icon && <Box>{icon}</Box>}
          <Text>{children}</Text>
        </HStack>
      </Box>
    </Box>
  );
}

export const Radio = () => {
  const options = [
    { label: "Entrada", icon: <ArrowUpIcon color="green" /> },
    { label: "Saída", icon: <ArrowDownIcon color="red" /> },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "value",
    defaultValue: "entrada",
  });

  const group = getRootProps();

  return (
    <HStack {...group} justifyContent="center" margin="20px 0 0 0">
      {options.map((option) => {
        const radio = getRadioProps({ value: option.label });
        return (
          <RadioCard key={option.label} {...radio} icon={option.icon}>
            {option.label}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
