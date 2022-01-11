import styled from 'styled-components';

export const StyledHeader = styled.div.attrs(() => ({
    className: [
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'min-h-screen',
        'py-2',
    ],
}))``;

export const StyledH1 = styled.h1.attrs(() => ({
    className: ['text-6xl', 'font-bold', 'first-letter:text-[#07B5D3]'],
}))``;

export const StyledMain = styled.main.attrs(() => ({
    className: [
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'w-full',
        'flex-1',
        'px-20',
        'text-center',
    ],
}))``;

export const StyledAOne = styled.a.attrs(() => ({
    className: ['text-blue-600'],
}))``;

export const StyledPOne = styled.p.attrs(() => ({
    className: ['mt-3', 'text-2xl'],
}))``;

export const StyledCode = styled.code.attrs(() => ({
    className: ['p-3', 'font-mono', 'text-lg', 'bg-gray-100', 'rounded-md'],
}))``;

export const StyledDivOne = styled.div.attrs(() => ({
    className: [
        'flex',
        'flex-wrap',
        'items-center',
        'justify-around',
        'max-w-4xl',
        'mt-6',
        'sm:w-full',
    ],
}))``;

export const StyledA = styled.a.attrs(() => ({
    className: [
        'p-6',
        'mt-6',
        'text-left',
        'border',
        'w-96',
        'rounded-xl',
        'hover:text-blue-600',
        'focus:text-blue-600',
    ],
}))``;

export const StyledH3 = styled.h3.attrs(() => ({
    className: ['text-2xl', 'font-bold'],
}))``;

export const StyledP = styled.p.attrs(() => ({
    className: ['mt-4', 'text-xl'],
}))``;

export const StyledFooter = styled.footer.attrs(() => ({
    className: [
        'flex',
        'items-center',
        'justify-center',
        'w-full',
        'h-24',
        'border-t',
    ],
}))``;

export const StyledATwo = styled.a.attrs(() => ({
    className: ['flex', 'items-center', 'justify-center'],
}))``;

export const StyledDiv = styled.div.attrs(() => ({
    className: ['h-4', 'ml-2'],
}))``;

export default {};
