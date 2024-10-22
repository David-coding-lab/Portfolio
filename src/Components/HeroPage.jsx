import { Box } from '@chakra-ui/react'
import {useState} from 'react'
import NavBar from './NavBar'
import { desgignSystem } from '../App'
import Home from './Home'
import { About } from './About'

function HeroPage() {
    const [activeTab,setActiveTab] = useState('Home')
    return (
        <Box w='flex' h='auto' marginInline={desgignSystem.defaultMargin}>

            <NavBar setActiveTab={setActiveTab}/>

            {activeTab === 'Home' && <Home />}
            {activeTab === 'About' && <About />}
        </Box>
    )
}

export default HeroPage