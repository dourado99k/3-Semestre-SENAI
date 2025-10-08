import logo from '../../assets/logo.png'

export default function Login(){
    return(
        <>
           <div className='flex min-h-screen bg-grey-100'>
                <div className='hidden md:flex w-1/2 bg-gray-200 flex-col itens-center justify-center p-8 '>
                    <img src={logo} alt='clinica medica' className='mb-6'/>
                </div>
                <div className='flex w-full md:w-1/2 items-center justify-center p-8'>
                    <h1>Login </h1>
                </div>
            </div>
        </>
    )
}