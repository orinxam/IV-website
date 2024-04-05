import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/hero';
import {Comparison} from '../components/comparison'
import {Guesser} from '../components/guesser';
import {Trusted} from '../components/trusted';
import {Box} from '../components/styles/box';
import {Features1} from '../components/features1';
import {Features2} from '../components/features2';
import {Features3} from '../components/features3';
import {Testimonials} from '../components/tesminonials';
import {Statistics} from '../components/statistics';
import {Plans} from '../components/plans';
import {Trial} from '../components/trial';
import {Footer} from '../components/footer';

const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
            <Hero />
            <Guesser />
            <Comparison />
            <Trusted />
            <Features1 />
            <Features2 />
            <Features3 />
            <Testimonials />
            <Statistics />
            <Plans />
            <Trial />
            <Footer />
         </Box>
      </Layout>
   );
};

export default Home;
