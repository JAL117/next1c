export const metadata={
    title:'Netflix',
    description:"Mi primer proyecto en Next sale mal"
    
}

export default function RootLayout({children}){

    return(
        <html lang="es">
            <body>
                {children}
            </body>
        </html>
    )
}

