import React, { useCallback, useEffect, useState } from "react";
import { Modal, Button, useDisclosure, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, Box } from "@chakra-ui/react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { FaRegCopy, FaSave } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const ViewSQLEditor: React.FC = () => {

    const [code, setCode] = useState<string>();
    const { isOpen, onClose, onOpen } = useDisclosure();

    useEffect(() => {
        setCode("SELECT * FROM COUNTRIES WHERE POPULATION >= 10000");
    }, []);

    const onChangeCode = useCallback((val: string, viewUpdate: any) => {
        console.log('val:', val);
        setCode(val);
    }, []);

    return (
        <>
            <Button variant={"solid"} colorScheme="cyan" onClick={onOpen}>
                Traducir consulta
            </Button>
            <Modal
                size={{ base: "md", md: "lg" }}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Resultado SQL</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ModalBody>
                            <Box
                                width={"100%"}
                                height={"auto"}
                            >
                                <CodeMirror
                                    value={code}
                                    height="200px"
                                    extensions={[sql()]}
                                    onChange={onChangeCode} />
                            </Box>
                        </ModalBody>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3}>
                            <FaRegCopy />
                        </Button>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            <FaSave />
                        </Button>
                        <Button>
                            <IoMdShare />
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ViewSQLEditor;