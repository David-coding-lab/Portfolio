import { Box, Button, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import { Tabs, TabList,Tab, } from '@chakra-ui/react'
import LinkedInd from '../assets/LinkedIn.svg'
import Tweeter from '../assets/Twitter.svg'
import FaceBook from '../assets/face book.png'
import { desgignSystem } from '../App'
import { useEffect, useState } from 'react'

function NavBar({setActiveTab}) {
    const [changeDisplay,setChangeDisplay] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 950) {
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


    return (
        <Flex width='flex' h='41px' m='auto' mt='16px' justifyContent={changeDisplay ? 'center':'space-between'} fontFamily={desgignSystem.designFont}>
        <Tabs variant="unstyled">
            <TabList gap="70px">
                <Tab
                color="black"
                width= '26px'
                _selected={
                        {
                            color: 'black',
                            borderBottom: '2px solid black',
                        }}
                onClick={() => setActiveTab('Home')}
                >
                Home
                </Tab>
                <Tab
                color="black"
                width= '26px'
                _selected={
                        {
                            color: 'black',
                            borderBottom: '2px solid black',
                        }}
                onClick={()=> setActiveTab('About')}
                >
                About
                </Tab>
            </TabList>
        </Tabs>


            {!changeDisplay &&
                <Flex gap='25px'>
                    <IconButton borderRadius='50%' bgColor='transparent'><Image src={LinkedInd}/></IconButton>
                    <IconButton borderRadius='50%' bgColor='transparent'><Image src={FaceBook}/></IconButton>
                    <IconButton borderRadius='50%' bgColor='transparent'><Image src={Tweeter}/></IconButton>
                    <Button
                        bgColor={desgignSystem.primaryColor}
                        color='white'
                        fontWeight='medium'
                        borderRadius='4px'
                        w='152px'
                        _hover={{opacity: .6}}
                    >Download Cv</Button>
            </Flex>}
        </Flex>
    )
}

export default NavBar