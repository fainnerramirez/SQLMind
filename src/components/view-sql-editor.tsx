import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, useDisclosure, useToast } from "@chakra-ui/react";
import { sql } from "@codemirror/lang-sql";
import CodeMirror from "@uiw/react-codemirror";
import conffeti from "canvas-confetti";
import React, { useCallback, useState } from "react";
import { FaRegCopy, FaSave } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { runAgent } from "../../agent/get-response-ai";
import { useSQLMindStore } from "../../stores/sql-mind-store";

const ViewSQLEditor: React.FC = () => {

    const toast = useToast();
    const { query, setQuery, setHistoryQuerys, historyQuerys, countQueryUser, setCountQueryUser } = useSQLMindStore();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [code, setCode] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleResponseOpenAI = async () => {

        console.log("Query user: ", query);
        if (!query || query === "") {
            toast({
                title: `Escribe una consulta válida`,
                status: 'warning',
                duration: 3000,
                isClosable: true,
                variant: "top-accent",
            });
            return;
        }

        if (countQueryUser !== 0) {
            setIsLoading(true);
            const { finalOutput, history } = await runAgent(query);
            console.log({ finalOutput, history });
            setCode(finalOutput!);
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
            setHistoryQuerys([...historyQuerys, { queryUser: query, queryIA: finalOutput! }]);
            setCountQueryUser(countQueryUser - 1);
            setQuery("");
        }
        else {
            toast({
                title: `Has alcanzado tu límite de 3 consultas. !Gracias por usar SQLMind!`,
                status: 'info',
                duration: 7000,
                isClosable: true,
                variant: "top-accent",
            });
            return;
        }
    }

    const handleCopy = useCallback(async () => {
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
    }, [code]);

    const handleDownloadFile = useCallback(() => {

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

    }, [code]);

    return (
        <>
            <Button
                onClick={handleResponseOpenAI}
                isLoading={isLoading}
                loadingText='Traduciendo...'
                isDisabled={query === ""}
                bg={"transparent"}
                borderRadius={"lg"}
                borderWidth={2}
                borderColor={"#1A202C"}
                color={"#1A202C"}
                _hover={{
                    bg: "rgba(114, 92, 173, 0.7)",
                    transform: "translateY(-2px)",
                    transition: "all .5s"
                }}
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