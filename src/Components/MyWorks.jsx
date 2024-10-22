import { Container, Text } from "@chakra-ui/react"
import { desgignSystem } from "../App"
import { DisplayWork } from "./DisplayWork"
import ResidaLogo from '../assets/Resida Logo.png'
import LelasCusine from '../assets/lelasCusine.png'
import Exclusive from '../assets/Exclusive.png'

function MyWorks() {
    return (
        <Container
            maxW='flex'
            fontFamily={desgignSystem.designFont}
            centerContent='true'
            pt='150px'
            minH='50vh'
        >
            <Text as='h1' fontSize={desgignSystem.HeaderFontDeskTop}color={desgignSystem.secondaryColor} fontWeight='bold'>My Works</Text>
            <Text mt='10px' fontSize='18px'>View my Projects that i made in my development Journey</Text>


            <DisplayWork
                workName={'Exclusive Online Shopping Website'}
                workDetails='Exclusive is a sleek e-commerce platform for shopping shoes,
                bags, and accessories. It features a user-friendly interface.' workImg={Exclusive}/>
            <DisplayWork
                workName={'Lela\'s Cuisine Restaurant And Booking'}
                workDetails='A vibrant restaurant website designed to showcase delicious dishes and authentic flavors. With an inviting interface'
                workImg={LelasCusine} flatLayout='true'/>
            <DisplayWork
                workName={'Resida House Finding Website'}
                workDetails={'Resida is an intuitive house-finding app that simplifies your search for the perfect home'}
                workImg={ResidaLogo}/>

        </Container>
    )
    }

export default MyWorks