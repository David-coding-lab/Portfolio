import { Box, CloseButton, Container, Flex, HStack, Image, TagLeftIcon, Text } from "@chakra-ui/react";
import { desgignSystem } from "../App";
import { useState } from "react";
import GallaryItem from "./GallaryItem";
import test from '../assets/SchoolDasboard2.png'
import { GalleryData } from "./GallaryData";
import {ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function MyWorksGallary() {
    const [displayGalleryFullPreview,setDisplayGalleryFullPreview] = useState(false)
    const [currentClickedImgNum,setCurrentClickedImgNum] = useState(0)
    const [clickedGallery,setClickedGallery] = useState([])
    const items = GalleryData.map((data, index) => (
        <GallaryItem
            key={index}
            galleries={data.gallery}
            galleryName={data.galleryName}
            galleryDetails={data.galleryDescription}
            setDisplayGalleryFullPreview={setDisplayGalleryFullPreview}
            setClickedGallery={setClickedGallery}
        />
    ));

    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 2; // Number of items to show at a time

    // Function to handle the NextArrow click
    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    // Function to handle the PreviousArrow click
    const handlePrev = () => {
        setStartIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    // Get the items to display based on the current startIndex
    // Get the items to display based on the current startIndex, handling wrap-around
    const visibleItems = startIndex + itemsToShow <= items.length
    ? items.slice(startIndex, startIndex + itemsToShow)
    : [...items.slice(startIndex), ...items.slice(0, (startIndex + itemsToShow) % items.length)];

console.log(currentClickedImgNum);
console.log(clickedGallery);


    return (
        <Container
            fontFamily={desgignSystem.designFont}
            pt="50px"
            maxW="flex"
            centerContent
        >
            {displayGalleryFullPreview &&
                <Box
                    w='100vw'
                    h='100vh'
                    top='0'
                    zIndex='2'
                    position='fixed'
                    bgColor='blackAlpha.800'
                    paddingBlock='20px'
                    paddingInline='40px'
                >
                    <CloseButton color='white' ml='auto' onClick={()=> setDisplayGalleryFullPreview(false)}/>

                    <Flex margin='auto' w='100%' alignItems='center' h='fit-content' paddingInline='20px' justifyContent='space-between'>
                        <ChevronLeftIcon
                            color='white'
                            boxSize={16}
                            border='1px solid white'
                            borderRadius='50%'
                            cursor='pointer'
                            onClick={()=> setCurrentClickedImgNum(prevNum => prevNum != 0 ? prevNum - 1 : clickedGallery.length - 1 )}
                        />
                    <Box w='65vw' h='90vh'><Image borderRadius='4px' objectFit='cover' src={clickedGallery[currentClickedImgNum]} /></Box>
                    <ChevronRightIcon
                            color='white'
                            boxSize={16}
                            border='1px solid white'
                            borderRadius='50%'
                            cursor='pointer'
                            onClick={()=> setCurrentClickedImgNum(prevNum => prevNum < clickedGallery.length -1 ? prevNum + 1 : 0)}
                        />
                    </Flex>
                </Box>
            }
            <Text as="h1" fontSize={desgignSystem.HeaderFontDeskTop} fontWeight="bold">
                My Work Gallery
            </Text>

            <Text mt='10px' mb='10px' fontSize='18px'>View my Projects that i made in my development Journey</Text>

            <HStack w="full">
                <ChevronLeftIcon
                    onClick={handlePrev}
                    cursor="pointer"
                    color='#9C9C9C'
                    boxSize={10}
                    border='1px solid #9C9C9C'
                    borderRadius='50%'
                />
                <Flex
                    display="flex"
                    w="100%"
                    justifyContent="space-between"
                    gap="40px"
                    mt="45px"
                    h="500px"
                >
                    {visibleItems}
                </Flex>
                <ChevronRightIcon
                    onClick={handleNext}
                    cursor="pointer"
                    color='#9C9C9C'
                    boxSize={10}
                    border='1px solid #9C9C9C'
                    borderRadius='50%'
                />
            </HStack>
        </Container>
    );
}

export default MyWorksGallary;
