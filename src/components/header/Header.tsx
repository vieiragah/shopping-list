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
        <Heading color='#fff'>Money</Heading>
      <Button onClick={onOpen} colorScheme='green'>Nova transação</Button>
    </Flex>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg='#202024'>
          <ModalHeader color='#E1E1E6'>Nova transação</ModalHeader>
          <ModalCloseButton color='#7C7C8A' />
          <ModalBody pb={6}>
            <FormControl>
              <Input ref={initialRef} placeholder="Descrição"  bg='#121214' border='none'/>
            </FormControl>
            <FormControl mt={4}>
              <Input type="number" placeholder="Preço" bg='#121214' border='none'/>
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Categoria" bg='#121214' border='none'/>
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
