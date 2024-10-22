import { ChevronRightIcon } from "@chakra-ui/icons"
import {Box, Button, Divider, Flex, Image, Text} from "@chakra-ui/react"
import { desgignSystem } from "../App"

export function DisplayWork({flatLayout,workName,workDetails,workImg}) {
    return(
            <>
                <Divider mt='50px'/>
                <Flex justifyContent='space-between' gap='26px' fontFamily={desgignSystem.designFont} mt='80px' flexDirection={flatLayout && 'row-reverse'}>
                    <Box w='50%' marginBlock='auto'>
                        <Text fontSize='25px' fontFamily={desgignSystem.designFont2} fontWeight='semibold' mb='25px'>{workName}</Text>
                        <Text mb='25px' fontSize='18px' color={desgignSystem.textColor} lineHeight='25px'>
                            {workDetails}
                        </Text>
                        <Button
                            bgColor={desgignSystem.primaryColor}
                            color='white'
                            mb='25px' rightIcon={<ChevronRightIcon />}
                            fontWeight='normal'
                            borderRadius='4px'
                            _hover={{opacity: .6}}
                        >View Project</Button>
                    </Box>
                    <Box h='500px' w='900px' overflow='hidden'><Image objectFit='cover' borderRadius='4px' src={workImg}/></Box>
                </Flex>
                <Divider mt='30px'/>
            </>
    )
}