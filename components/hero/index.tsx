import { Divider, Text} from '@nextui-org/react';
import React, { useState } from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
   const [textColor, setTextColor] = useState('red');
   return (
      <>
         <Flex style={{
             position: 'relative',
             width: '1500px',
             height: '830px',
         }}>
            <video
               width="100%"
               height="100%"
               autoPlay
               muted
               loop
               style={{
                   position: 'absolute',
                   zIndex: 0,
            }}
            >
               <source src="/cols_vid_cropped.mp4" type="video/mp4" />
                   <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url("/fallback_image.jpg")',
                        backgroundSize: 'cover',
                      }}
                    >
               Oops! Your browser doesn't want to this the video.
                   </div>
            </video>
            <Flex
               css={{
                  position: 'absolute',
                  top: '25%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '$6',
                  px: '$6',
                  textAlign: 'center',
                  zIndex: 1,
               }}
         >
            <Flex
               css={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                  gap: '50px',
                  pt: '410px',
               }}
            >
               <Box
                  css={{
                     maxWidth: '520px',
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
                  <Box
                        css={{
                            pt: '150px',
                           maxWidth: '480px',
                       }}
                  >
                  <Text
                     h2
                     css={{
                        display: 'inline',
                         color: textColor,
                     }}
                  >
                  <TypeAnimation
                      sequence={[
                        'i',
                        50,
                        () => setTextColor('orange'),
                        'is', //  Continuing previous Text
                        50,
                        () => setTextColor('yellow'),
                        'is h',
                        50,
                        () => setTextColor('green'),
                        'is he',
                        50,
                        () => setTextColor('aqua'),
                        'is her',
                        50,
                        () => setTextColor('$primary'),
                        'is here',
                        1685,
                        () => setTextColor('purple'),
                        'is now',
                        1750,
                        () => setTextColor('red'),
                      ]}
                      style={{ fontSize: '2em' }}
                      repeat={Infinity}
                    />
                  </Text>
                  </Box>
               </Box>

               <Text
                  css={{
                     pt: '120px',
                     color: '$accents8',
                     maxWidth: '400px',
                     pb: '-1000px',
                  }}
                  size={'$lg'}
                  span
               >
                  Hyperspectral images open up a new way to view the world.
               </Text>
            </Flex>
         </Flex>
         </Flex>
         <Divider
            css={{position: 'relative', inset: '-80px', left: '0', mt: '$10'}}
         />
      </>
   );
};
