import React from "react";

interface TemplateProps {
    children: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-8">
                {props.children}
            </div>
            <Footer />
        </>
    )
}

const Header: React.FC = () => {
    return (
        <header className="bg-black text-white py-3" >
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-3xl font-bold">Inspira Image</h1>
            </div>
        </header>
    )
}

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                   <p>&copy; 2026 Inspira Image. All rights reserved.</p>
                        Desenvolvido por Raquel Niehues Andrade
            </div>
        </footer>
    )
}