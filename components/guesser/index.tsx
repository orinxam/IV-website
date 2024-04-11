import {Button, Divider, Input, Text } from '@nextui-org/react';
import React, { useState } from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { ChevronLeft, ChevronRight } from 'react-feather'; // Import icons

export const Guesser = () => {
  const imageSets = [
    {
      leftImage: 'mock.png',
      rightImage: 'prism.jpeg',
      correctImage: 'prism.jpeg', // Specify the correct image
    },
    {
      leftImage: 'mock.png',
      rightImage: 'prism.jpeg',
      correctImage: 'mock.png', // Specify the correct image
    },

    // Add more image sets as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTrue, setShowTrue] = useState(false);
  const [showFalse, setShowFalse] = useState(false);

  const handleLeftImageClick = () => {
    const currentSet = imageSets[currentIndex];
    setShowTrue(currentSet.correctImage === currentSet.leftImage);
    setShowFalse(currentSet.correctImage === currentSet.rightImage);
  };

  const handleRightImageClick = () => {
    const currentSet = imageSets[currentIndex];
    setShowTrue(currentSet.correctImage === currentSet.rightImage);
    setShowFalse(currentSet.correctImage === currentSet.leftImage);
  };

const handlePrevClick = () => {
  setCurrentIndex((prevIndex) => {
    const nextIndex = prevIndex - 1;
    return nextIndex >= 0 ? nextIndex : imageSets.length - 1; // Set index to the last index of imageSets if it becomes negative
  });
  setShowTrue(false);
  setShowFalse(false);
};

const handleNextClick = () => {
  setCurrentIndex((prevIndex) => {
    const nextIndex = prevIndex + 1;
    return nextIndex < imageSets.length ? nextIndex : 0; // Reset index to 0 if it exceeds the length of imageSets
  });
  setShowTrue(false);
  setShowFalse(false);
};

  const currentSet = imageSets[currentIndex];

  return (
    <>
      <Text h2 css={{ textAlign: 'center', marginTop: '-60px' }}>
        Which image is the real one?
      </Text>
      <Text css={{ color: '$accents8', textAlign: 'center' }} weight="normal" size="lg">
        Can you identify the perfect Aperol mixture? Click the image to find out.
      </Text>
      <Flex
        css={{
          gap: '$3',
          px: '$6',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          '@sm': {
            flexDirection: 'row',
            mt: '30px',
          },
        }}
        justify="center"
      >
          <Button
          onClick={handlePrevClick}
          auto
          icon={<ChevronLeft />}
          css={{
            width: '40px', // Adjust width
            borderRadius: '40px', // Make the button more round
            backgroundColor: 'grey', // Change button color
            '&:hover': {
              backgroundColor: 'darkgrey', // Change button color on hover
            },
            marginLeft: '-300px',
            visibility: currentIndex === 0 ? 'hidden' : 'visible', // Hide button when on the first image
          }}
        />
        <Box
          css={{
            '& img': {
              width: '375px',
              objectFit: 'contain',
              cursor: 'pointer', // Add pointer cursor
              marginLeft: '200px'
            },
          }}
        >
          <img onClick={handleLeftImageClick} src={currentSet.leftImage} alt="Left Image" />
        </Box>

        <Box
          css={{
            '& img': {
              width: '375px',
              objectFit: 'contain',
              cursor: 'pointer', // Add pointer cursor
              marginRight: '200px',
            },
          }}
        >
          <img onClick={handleRightImageClick} src={currentSet.rightImage} alt="Right Image" />
        </Box>

        <Button
          onClick={handleNextClick}
          auto
          icon={<ChevronRight />}
                    css={{
            width: '40px', // Adjust width
            borderRadius: '40px', // Make the button more round
            backgroundColor: 'grey', // Change button color
            '&:hover': {
              backgroundColor: 'darkgrey', // Change button color on hover
            },
            marginRight: '-300px',
          }}
        />

      </Flex>

      {showTrue && (
        <Text
          h3
          css={{
            textAlign: 'center',
            marginTop: '5px',
            borderColor: '#4CAF50', // Green border color
            color: '#4CAF50', // White text color
            borderWidth: '2px', // Border width
            borderStyle: 'solid', // Border style
            padding: '10px',
            borderRadius: '10px',
            maxWidth: '200px',
            marginLeft: '650px',
          }}
        >
          Well spotted!
        </Text>
      )}

      {showFalse && (
        <Text
          h3
          css={{
            textAlign: 'center',
            marginTop: '5px',
            borderColor: '#FF0000', // Green border color
            color: '#FF0000', // White text color
            borderWidth: '2px', // Border width
            borderStyle: 'solid', // Border style
            padding: '10px',
            borderRadius: '10px',
            maxWidth: '550px',
            marginLeft: '475px',
          }}
        >
            You can't tell the difference - MosaicX can!
        </Text>
      )}

      <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$10' }} />
    </>
  );
};
