import { ThemeProvider } from '@emotion/react'

const tema = {
    cores:{
        branco: '',
        atencao: '',
        focus: '',
        primarias: {
            a:'#E754ED',
            b:'',
            c:''
        },
        secundarias: {
            a:'#EBEAF9',
            b:'',
            c:''
        },
        neutras: {
            a:'',
            b:'',
            c:'',
            d:''
        },
        dark: {
            a:'',
            b:''
        },
    },
    espacamentos: {
        l: '32px',
        s: '16px',
    },
    fontFamily:  "'Montserrat', sans-serif"

};

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>

}