import { Text } from '@nextui-org/react';
import React, { useState } from 'react';
import {Box} from '../components/styles/box';
import {Flex} from '../components/styles/flex';
import {Layout} from "../components/navbar/layout";
import ReactCardFlip from 'react-card-flip';

export const Applications = () => {

      const [isFlipped, setIsFlipped] = useState(false);
      const handleMouseEnter = () => {
        setIsFlipped(true);
      };
      const handleMouseLeave = () => {
        setIsFlipped(false);
      };

   return (
      <Layout>
        <Flex
            id="applications"
            css={{
              gap: '$3',
              px: '$6',
              pt: '150px',
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
            direction={'row'}
        >

        <Box
            css={{
                maxWidth: '700px',
                maxHeight: '700px',
                borderRadius: '30px', // Rounded corners
                overflow: 'hidden', // Hide overflow from rounded corners
            }}>
        <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="horizontal"
        >
          <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ borderRadius: '10px',
                  width: '100%',
                  height: '100%',
              }}>
            <img src="/smart_farm.jpeg" />
          </div>
          <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                  borderRadius: '10px',
                  backgroundColor: 'lightgreen',
                  overflow: 'hidden',
                  width: '700px',
                  height: '500px',
                  padding: '20px', // Padding for the back side content
                  boxSizing: 'border-box', // Include padding in the total height
                  textAlign: 'left', // Align text to the left
              }}>
              <Text h4 style={{ textDecoration: 'underline', color: 'black' }}>Precision agriculture:</Text>
              <ul style={{ color: 'black', listStyleType: 'none', paddingLeft: 0 }}>
                <li style={{ marginBottom: '10px' }}><span style={{ marginRight: '10px' }}>&#8226;</span>Feature 1</li>
                <li style={{ marginBottom: '10px' }}><span style={{ marginRight: '10px' }}>&#8226;</span>Feature 2</li>
                <li style={{ marginBottom: '10px' }}><span style={{ marginRight: '10px' }}>&#8226;</span>Feature 3</li>
              </ul>
          </div>
        </ReactCardFlip>
        </Box>
        </Flex>
      </Layout>
   );
};

export default Applications;