import React, { useCallback, useEffect, useState } from "react";
import { Modal, Button, useDisclosure, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, Box } from "@chakra-ui/react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { FaRegCopy } from "react-icons/fa";

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
                Ver resultado
            </Button>
            <Modal
                size={"lg"}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Resultado de la Query</ModalHeader>
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
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Descargar como .sql
                        </Button>
                        <Button>
                            <FaRegCopy />
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ViewSQLEditor;