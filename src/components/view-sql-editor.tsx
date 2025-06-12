import React, { useState } from "react";
import { Modal, Button, useDisclosure, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, Box, useToast } from "@chakra-ui/react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { FaRegCopy, FaSave } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { useSQLMindStore } from "../../stores/sql-mind-store";
import { getResponseOpenAI } from "../../ai/get-response-ai";
import conffeti from "canvas-confetti";

const ViewSQLEditor: React.FC = () => {

    const toast = useToast();
    const { query, setHistoryQuerys, historyQuerys, countQueryUser, setCountQueryUser } = useSQLMindStore();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [code, setCode] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleResponseOpenAI = async () => {
        if (countQueryUser !== 0) {
            setIsLoading(true);
            const response = await getResponseOpenAI(query);
            setCode(response.output_text);
            setIsLoading(false);
            onOpen();
            conffeti({
                particleCount: 100,
                startVelocity: 30,
                spread: 360,
                origin: {
                    x: 0.5,
                    y: 0.5
                }
            });
            setHistoryQuerys([...historyQuerys, { queryUser: query, queryIA: response.output_text }]);
            setCountQueryUser(countQueryUser - 1);
        }
        else {
            toast({
                title: `Has alcanzado tu límite de 3 consultas. !Gracias por usar SQLMind!` ,
                status: 'info',
                duration: 7000,
                isClosable: true,
                variant: "top-accent",
            });
            return;
        }
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
                {/* <ModalOverlay /> */}
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