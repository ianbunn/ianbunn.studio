import { Heading } from '@chakra-ui/react'

const LandingPage: React.FC = () => {
    return (
        <div>
            {/*TODO: change welcome to be in English, Spanish, Portuguese and French */}
            <Heading>Yo, I'm Ian</Heading>
            <Heading size='sm'>got 99 problems but software ain't one</Heading>
        </div>
    );
};

export default LandingPage;
