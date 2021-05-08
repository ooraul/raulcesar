import Head from 'next/head';
import { useState } from 'react';
import Switch from "react-switch";

export default function Custom404() {
    const [cdb,setCdb] = useState('bg-white')
    const [cdt,setCdt] = useState('text-black')
    const [estado,setEstado] = useState(false)

    return (
        <body className={`${cdb} overflow-hidden select-none font-mono`}>
            <Head>
                <title>Raul C. Oliveira</title>
            </Head>

            <div className="ml-5 mt-5">
                <Switch 
                onChange={(op) => {
                if(op===true) {
                    setCdb('bg-gray-900')
                    setCdt('text-white')
                    setEstado(true)
                } else {
                    setCdb('bg-white')
                    setCdt('text-black')
                    setEstado(false)
                }
                }} 
                checked={estado}
                uncheckedIcon={false}
                checkedIcon={false}
                handleDiameter={25}
                onHandleColor={'#0f98d4'}
                onColor={'#007db3'}
                height={17}
                width={55}
                offHandleColor={'#a6a6a6'}
                activeBoxShadow={'0 0 1px 2px #737373'}
                />
            </div>

            <div className={`${cdt} flex h-screen justify-center items-center`}>
                <div className="text-center">
                    <h1 className="text-grande">404! =(</h1>
                    <h1 className="text-medio">Não foi possivel encontrar esta página.</h1>
                    <a href="/" className="text-red-700 text-voltar hover:text-red-500">Voltar</a>
                </div>
            </div>
        </body>
    )
}