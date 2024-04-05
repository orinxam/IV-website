import {Button, Divider, Input, Text} from '@nextui-org/react';
import React, { useState } from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Guesser = () => {

  const [showTrue, setShowTrue] = useState(false);
  const [showFalse, setShowFalse] = useState(false);

  // Function to handle click on left image
  const handleLeftImageClick = () => {
    setShowTrue(true);
    setShowFalse(false);
  };

  // Function to handle click on right image
  const handleRightImageClick = () => {
    setShowTrue(false);
    setShowFalse(true);
  };

   return (
      <>
          <Text h2 css={{
              textAlign: 'center',
              'marginTop': '50px',
          }}>
               Which image is the real one?
          </Text>
          <Text
               css={{
                  color: '$accents8',
                  textAlign: 'center',
               }}
               weight="normal"
               size={'$lg'}
            >
               Can you identify the perfect Aperol mixture? Click the image to find out.
          </Text>
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
                  mt: '30px',
               },
            }}
            justify={'center'}
         >
             <Box
               onClick={handleLeftImageClick}
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                     cursor: 'pointer', // Add pointer cursor
                  },
               }}
            >
               <img src="mock.png" alt="Left Image"/>
            </Box>

            <Box
               onClick={handleRightImageClick}
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                     cursor: 'pointer', // Add pointer cursor
                  },
               }}
            >
               <img src="mock.png" alt="Right Image"/>
            </Box>
         </Flex>

          {showTrue && <Text h3 css={{
              textAlign: 'center',
              'marginTop': '5px',
              background: 'green',
              padding: '10px',
              borderRadius: '10px',
              maxWidth: '200px',
              marginLeft: '650px',
          }}>
               Well spotted!
          </Text>}

          {showFalse && <Text h3 css={{
              textAlign: 'center',
              'marginTop': '5px',
              background: 'red',
              color: 'black',
              padding: '10px',
              borderRadius: '10px',
              maxWidth: '550px',
              marginLeft: '475px',
          }}>
               You can't tell the difference - MosaicX can!
          </Text>}

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
