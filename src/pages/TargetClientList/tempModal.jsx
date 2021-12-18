//Temporary Modal To Display Client Information
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button,  useDisclosure,
} from '@chakra-ui/react'

import React from 'react'




export default function TempModal({works}) {
    const obj = {works}

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>

            <Button   onClick={() => { onOpen()}} >View Details</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div>
                            <h1>{JSON.stringify(obj)}</h1>
                        </div>


                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}