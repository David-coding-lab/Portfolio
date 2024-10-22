import {Box} from '@chakra-ui/react'
import HeroPage from './Components/HeroPage'
import ContactMe from './Components/ContactMe'

export const desgignSystem ={
  primaryColor: '#B20FB0',
  secondaryColor: '#1B1B1B',
  textColor:'#9C9C9C',
  defaultMargin: '140px',
  HeaderFontDeskTop: '30px',
  HeaderFontTablet: '20px',
  HeaderFontPhone: '15px',
  textFontDeskTop: '20px',
  textFontMobiles: '15px',
  designFont: 'poppins',
  designFont2: 'Inter'
}

function App() {
  return (
  <Box w='full' h='auto'>
    <HeroPage />
    <ContactMe />
  </Box>
  )
}

export default App
