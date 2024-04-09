import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../components/icons/BoxIcon';
import {Box} from '../components/styles/box';
import {Flex} from '../components/styles/flex';
import Home from "./index";
import {Layout} from "../components/navbar/layout";

export const FAQ = () => {
   return (
      <Layout>
         <Flex
            id="faq"
            css={{
               py: '$20',
               gap: '$18',
               px: '$6',
            }}
            direction={'column'}
         >
            <Flex align={'center'} direction={'column'}>
               <Text span css={{color: '$blue600'}}>
                  FAQ
               </Text>
               <Text h2>Is this some kind of magic?</Text>
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Of course not! Here we explain some of the common concepts and
                  frequent questions in the hyperspectral imaging (HSI) field.
               </Text>
            </Flex>

            <Flex
               css={{
                  'gap': '$10',
                  '@lg': {
                     px: '$64',
                  },
               }}
               direction={'column'}
            >
               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        What is 'the spectrum'?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Light is a wave - by measuring the intensity of specific wavelength components
                        (red: 630nm (nanometers), green: 532nm and blue: 465nm), our eye approximates the true colour
                        of objects by mixing the intensities of these three colours. However, true colours
                        are far more complex and every wavelength (between roughly 380-700nm) contributes to the overall
                        colour.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        And what can a hyperspectral camera do with this?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        A normal RGB camera (just like our eyes) extracts intensities at the wavelengths for
                        red, green and blue. HSI cameras are able to extract the intensity at a greater number
                        of intensities, think for example also at the wavelengths corresponding to magenta, burgundy,
                        yellow, dark green and cyan. By adding these wavelength components to the true colour, a more
                        refined representation of the true object, manifesting in its material composition, becomes apparent.
                     </Text>
                     <img src="light_spectrum.jpeg" />
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        Why do we need hyperspectral images?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Hyperspectral images are useful whenever we want to distinguish between different materials
                        that look the same to the naked eye. Examples may include spoilt food, identifying differences
                        between identical-looking drug pills, counterfeit products or spotting camouflaged animals.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                        nisl aliquet aliquet elit. Sed condimentum, nisl ut
                        aliquam lacinia, nisl nisl aliquet aliquet elit. Sed
                        condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                        aliquet elit. Sed condimentum, nisl ut aliquam lacinia,
                        nisl nisl aliquet aliquet
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </Layout>
   );
};

export default FAQ;