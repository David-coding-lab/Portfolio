import { Box, Button, Flex, Image, Text, Container} from '@chakra-ui/react'
import { desgignSystem } from '../App'
import MyWorks from './MyWorks'
import MyWorksGallary from './MyWorksGallary'
import myPhoto from '../assets/myPhoto.jpg'


export default function Home() {
    return(
        <>
            <Container maxW='flex'>
                <Flex mt="100px">
                    <Box m='auto'>
                    <Text fontSize={desgignSystem.HeaderFontDeskTop} mb="30px" fontWeight="bold">
                    👋 i'm Emeka David
                    </Text>
                    <Text fontSize={desgignSystem.textFontDeskTop} mb="30px" w='492px'>
                    Transforming ideas into interactive digital experiences as a passionate Frontend Developer
                    </Text>
                    <Button
                        w="196px"
                        h="60px"
                        _hover={{ opacity: 0.6 }}
                        fontWeight="medium"
                        color="white"
                        bgColor={desgignSystem.primaryColor}
                    >
                        Hire Me
                    </Button>
                    </Box>
                    <Box w='500px' h='500px'  borderRadius='50%' bgPos='top' bgSize='cover' bgImage={myPhoto}>
                        {/* <Image borderRadius='50%' w='inherit' h='inherit' objectFit='cover' src={myPhoto}/> */}
                    </Box>
                </Flex>
            </Container>

            <MyWorks />
            <MyWorksGallary />

    </>
    )
}