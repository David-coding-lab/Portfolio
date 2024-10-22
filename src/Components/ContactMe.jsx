import { Box, Button, Container, Input, Text, Textarea, useSafeLayoutEffect, VStack } from '@chakra-ui/react'
import { desgignSystem } from '../App'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useState } from 'react'

function ContactMe() {
    const [message,setMessage] = useState({
        ClientEmail: '',
        ClientMobile: '',
        ClientMessage: ''
    })
    return (
        <Container mt='120px' fontFamily={desgignSystem.designFont} maxW='flex' h='100vh' bgColor='#080808' color='white'>
            <VStack pt='61px' >
                <Text fontWeight='bold' fontSize={desgignSystem.HeaderFontDeskTop}>Get In Touch</Text>
                <Text color={desgignSystem.textColor}>Reach me through my Gmail</Text>
            </VStack>

            <VStack pt='65px' gap='18px'>
                <Box>
                    <Text mb='5px'>Email</Text>
                    <Input
                        w='350px'
                        borderRadius='4px'
                        bgColor='white'
                        fontSize='14px'
                        value={message.ClientEmail}
                        color={desgignSystem.textColor}
                        onChange={(e)=> setMessage(prevMessage => ({...prevMessage, ClientEmail: e.target.value}))}
                        placeholder='Please enter your email'/>
                </Box>
                <Box>
                    <Text mb='5px'>Mobile</Text>
                    <Input
                        w='350px'
                        borderRadius='4px'
                        bgColor='white'
                        fontSize='14px'
                        value={message.ClientMobile}
                        color={desgignSystem.textColor}
                        onChange={(e)=> setMessage(prevMessage => ({...prevMessage, ClientMobile: e.target.value}))}
                        placeholder='Enter mobile'/>
                </Box>
                <Box>
                    <Text mb='5px'>Message</Text>
                    <Textarea
                        w='350px'
                        borderRadius='4px'
                        bgColor='white'
                        fontSize='14px'
                        value={message.ClientMessage}
                        color={desgignSystem.textColor}
                        h='200px'
                        onChange={(e)=> setMessage(prevMessage => ({...prevMessage, ClientMessage: e.target.value}))}
                        placeholder='Enter your message'/>
                </Box>
                <Button
                    w='350px'
                    h='53px'
                    color='white'
                    bgColor={desgignSystem.primaryColor}
                    fontWeight='normal'
                    rightIcon={<ChevronRightIcon />}
                    _hover={{opacity: .6}}
                >Submit</Button>
            </VStack>
        </Container>
    )
}

export default ContactMe