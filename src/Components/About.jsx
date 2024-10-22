import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { desgignSystem } from "../App";
import Test from '../assets/myPhoto.png'
import { useEffect, useState } from "react";


export function About() {
    const [changeDisplay,setChangeDisplay] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1099) {
                setChangeDisplay(true);
            } else {
                setChangeDisplay(false);
            }
        };

        handleResize();
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
      }, []);  // Empty dependency array so this only runs once on mount

    console.log(changeDisplay);

    return(
        <Flex w='full' h='auto' flexDir={changeDisplay ? 'column-reverse': 'row'} align={changeDisplay && 'center'}  marginBlock='164px' fontFamily={desgignSystem.designFont}>
            <Box marginBlock='auto' w={{base: '25em', sm: '30em', md: '35em'}} textAlign={changeDisplay && 'center'}>
                <Text fontWeight='bold' fontSize={desgignSystem.HeaderFontDeskTop}>About Me</Text>
                <Text mb='30px' lineHeight='30px'>
                    Hi! I’m a Front-End UI/UX Developer based in Nigeria, with over two years of experience in
                    crafting visually stunning and user-focused websites. My passion lies in combining aesthetics
                    with functionality to create seamless digital experiences.
                </Text>
                <Text mb='30px' lineHeight='30px'>
                    Specializing in front-end development, I work with technologies like HTML, CSS, JavaScript,
                    and React to transform ideas into interactive,responsive designs.
                    I believe great design is about more than just looks—it’s about making every interaction
                    meaningful and intuitive. Inspired by Nigeria’s vibrant culture
                </Text>
                <Text mb='30px' lineHeight='30px'>
                    I strive to build interfaces that
                    are both beautiful and functional, leaving a lasting impact on users. Let's connect and create something amazing together!
                </Text>
                <HStack gap='52px' justify='center'>
                    <Button w='200px' h='65px' bgColor={desgignSystem.primaryColor} color='white'fontWeight='normal'_hover={{opacity: .8}}>Hire Me</Button>
                    <Button w='200px' h='65px' bgColor={desgignSystem.secondaryColor} color='white'fontWeight='normal'_hover={{opacity: .8}}>Download Cv</Button>
                </HStack>
            </Box>
            <Box w={{base: '30em', md: '30em'}} ml={{xl: 'auto'}} mb={changeDisplay && '20px'} h='514px'><Image w='inherit' h='inherit' objectFit='cover' borderRadius='4px' src={Test}/></Box>
        </Flex>
    )
}