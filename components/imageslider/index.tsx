import Image from "next/image";
import React, { useState } from "react";
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import {Divider, Text} from "@nextui-org/react";
import ReactCompareImage from "react-compare-image";

export const ImageSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
      <>
        <Text h2 css={{ textAlign: 'center', marginTop: '30px' }}>
          Check out how much extra information can be revealed with the help of HSI images
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
                  flexDirection: 'column',
                  mt: '$20',
               },
            }}
            justify={'center'}
      >

    <Box onMouseUp={handleMouseUp}>
        <Box
        style={{
          position: 'relative',
          top: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '5px',
          borderRadius: '5px',
          zIndex: 1, // Ensure the box is above the images
        }}
      >
        {/* RGB Label */}
        <div>RGB</div>

        {/* HSI Label */}
        <div>HSI</div>
      </Box>
      <Box
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
        style={{
            position: 'relative',
            width: '700px',
            height: '400px',
            cursor: 'ew-resize',
            userSelect: 'none',
        }}
      >
        <Image
          alt=''
          width="700"
          height= "400"
          draggable={false}
          src="/prism.jpeg"
          style={{ userSelect: 'none' }}
        />

        <Box
          style={{
              clipPath: `inset(0 0 0 ${sliderPosition}%)`, // Adjusted clipPath
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
          }}
          >
          <Image
            width= "700"
            height= "400"
            draggable={false}
            alt=""
            src="/light_spectrum.jpeg"
            style={{ userSelect: 'none' }}
          />
        </Box>
        <Box
          style={{
              position: 'absolute',
              left: `calc(${sliderPosition}% - 1px)`,
              top: 0,
              height: '100%',
              width: '3px', // Adjust slider width
              background: 'white', // Adjust slider color
          }}
        >
        </Box>
      </Box>
    </Box>
    <Divider css={{ position: 'relative', inset: '40px', left: '0', mt: '$100', }} />
  </Flex>
  </>
  );
};