import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  RadioGroup,
  FormControl,
  Input,
  Flex,
  Heading,
  Box
} from "@chakra-ui/react";
import React from "react";
import { Radio } from "../radio";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Box padding='15px 24px 25px 24px'>
    <Flex justify='space-between'>
        <Heading>Money</Heading>
      <Button onClick={onOpen} colorScheme='green'>Nova transação</Button>
    </Flex>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nova transação</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input ref={initialRef} placeholder="Descrição" />
            </FormControl>
            <FormControl mt={4}>
              <Input type="number" placeholder="Preço" />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Categoria" />
            </FormControl>
            <RadioGroup>
                <Radio/>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" width='100%' margin='0 auto' mr={3}>
              Cadastrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
