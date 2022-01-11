import Head from 'next/head';
import Image from 'next/image';
import {
    StyledA,
    StyledAOne,
    StyledASix,
    StyledCode,
    StyledDiv,
    StyledDivOne,
    StyledFooter,
    StyledH1,
    StyledH3,
    StyledHeader,
    StyledMain,
    StyledP,
    StyledPFour,
    StyledPOne,
    StyledPThree,
    StyledPTwo,
} from './index.styled';

const Home = () => (
    <StyledHeader>
        <Head>
            <title>Create Next App</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <StyledMain>
            <StyledH1>
                Welcome to{' '}
                <StyledAOne href='https://nsextjs.org'>Next.js!</StyledAOne>
            </StyledH1>

            <StyledPOne>
                Get started by editing <StyledCode>pages/index.js</StyledCode>
            </StyledPOne>

            <StyledDivOne>
                <StyledA href='https://nextjs.org/docs'>
                    <StyledH3>Documentation &rarr;</StyledH3>
                    <StyledPTwo>
                        Find in-depth information about Next.js features and
                        API.
                    </StyledPTwo>
                </StyledA>

                <StyledA href='https://nextjs.org/learn'>
                    <StyledH3>Learn &rarr;</StyledH3>
                    <StyledPThree>
                        Learn about Next.js in an interactive course with
                        quizzes!
                    </StyledPThree>
                </StyledA>

                <StyledA href='https://github.com/vercel/next.js/tree/master/examples'>
                    <StyledH3>Examples &rarr;</StyledH3>
                    <StyledPFour>
                        Discover and deploy boilerplate example Next.js
                        projects.
                    </StyledPFour>
                </StyledA>

                <StyledA href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
                    <StyledH3>Deploy &rarr;</StyledH3>
                    <StyledP>
                        Instantly deploy your Next.js site to a public URL with
                        Vercel.
                    </StyledP>
                </StyledA>
            </StyledDivOne>
        </StyledMain>

        <StyledFooter>
            <StyledASix
                href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                target='_blank'
                rel='noopener noreferrer'
            >
                Powered by{' '}
                <StyledDiv>
                    <Image
                        src='/vercel.svg'
                        alt='Vercel Logo'
                        width={70}
                        height={16}
                    />
                </StyledDiv>
            </StyledASix>
        </StyledFooter>
    </StyledHeader>
);

export default Home;
