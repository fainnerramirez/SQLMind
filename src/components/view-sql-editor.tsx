import React, { useState } from "react";
import { Modal, Button, useDisclosure, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, Box, useToast } from "@chakra-ui/react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { FaRegCopy, FaSave } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { useSQLMindStore } from "../../stores/sql-mind-store";
import { getResponseOpenAI } from "../../ai/get-response-ai";

const ViewSQLEditor: React.FC = () => {

    const toast = useToast();
    const { query, setHistoryQuerys, historyQuerys } = useSQLMindStore();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [code, setCode] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleResponseOpenAI = async () => {
        setIsLoading(true);
        const response = await getResponseOpenAI(query);
        setCode(response.output_text);
        setIsLoading(false);
        onOpen();
        toast({
            title: '¡Tu consulta ha sido traducida!',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
        setHistoryQuerys([...historyQuerys, { queryUser: query, queryIA: response.output_text }]);
    }

    const handleCopy = async () => {
        try {

            await navigator.clipboard.writeText(code);
            toast({
                title: '¡Consulta copiada!',
                status: 'info',
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            console.error("Error al copiar la consulta");
        }
    }

    const handleDownloadFile = () => {

        if (code === "") return;

        const date = new Date().toLocaleDateString();
        const filename = `query-${date}.sql`;
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.style.display = 'none';

        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }

    return (
        <>
            <Button
                variant={"solid"}
                colorScheme="cyan"
                onClick={handleResponseOpenAI}
                isLoading={isLoading}
                loadingText='Traduciendo...'
                isDisabled={query === ""}
            >
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
                                />
                            </Box>
                        </ModalBody>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={handleCopy}>
                            <FaRegCopy />
                        </Button>
                        <Button colorScheme='blue' mr={3} onClick={handleDownloadFile}>
                            <FaSave />
                        </Button>
                        <Button isDisabled>
                            <IoMdShare />
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ViewSQLEditor;