import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Hero = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '480px',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     The future of imaging ... {' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                         color: '$primary',
                     }}
                  >
                     is here
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                  }}
                  size={'$lg'}
                  span
               >
                  Hyperspectral images open up a new way to view the world.
               </Text>
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '575px',
                     objectFit: 'contain',
                  },
               }}
            >
               <img src="prism.jpeg" />
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
