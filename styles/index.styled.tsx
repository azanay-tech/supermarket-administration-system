import tw from 'twin.macro';

export const StyledHeader = tw.div`
    flex
    flex-col
    items-center
    justify-center
    min-h-screen
    py-2
`;

export const StyledH1 = tw.h1`
    text-6xl 
    font-bold 
    first-letter:text-[#07B5D3]
`;

export const StyledMain = tw.main`    
    flex
    flex-col
    items-center
    justify-center
    w-full
    flex-1
    px-20
    text-center
`;

export const StyledAOne = tw.a`
    text-blue-600
`;

export const StyledPOne = tw.p`
    mt-3 
    text-2xl
`;

export const StyledCode = tw.code`
    p-3 
    font-mono 
    text-lg 
    bg-gray-100 
    rounded-md
`;

export const StyledDivOne = tw.div`
    flex
    flex-wrap
    items-center
    justify-around
    max-w-4xl
    mt-6
    sm:w-full
`;

export const StyledA = tw.a`
    p-6
    mt-6
    text-left
    border
    border-gray-200
    w-96
    rounded-xl
    hover:text-blue-600
    focus:text-blue-600
`;

export const StyledH3 = tw.h3`
    text-2xl 
    font-bold
`;

export const StyledP = tw.p`
    mt-4 
    text-xl
`;

export const StyledFooter = tw.footer`
    flex
    items-center
    justify-center
    w-full
    h-24
    border-t
    border-gray-200
`;

export const StyledATwo = tw.a`
    flex 
    items-center 
    justify-center
`;

export const StyledDiv = tw.div`
    h-4 
    ml-2
`;

export default {};
