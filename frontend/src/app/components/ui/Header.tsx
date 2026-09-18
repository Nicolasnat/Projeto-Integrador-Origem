import LogoOrigem from '../../../../assets/LogoOrigem.png'
import Image from 'next/image'
import { Heart, ShoppingCart, User } from 'lucide-react'
import { Input } from "@chakra-ui/react"

export default function Header(){
    return(
        <div>
            <header className="h-20 flex items-center justify-around bg-gray-50 shadow-sm hover:shadow-md transition duration-300 ease-in-out">
                <div className="logo">
                    <Image   src={LogoOrigem} alt="Logo do Sistema Origem" width={120} height={40}/>
                </div>

                <nav>
                    <div className='flex gap-5'>
                        <a href="" ><p className='text-gray-900'>Artesanato</p></a>
                        <a href="" ><p className='text-gray-900'>Literatura</p></a>
                        <a href="" ><p className='text-gray-900'>Arte e Decoração</p></a>
                        <a href="" ><p className='text-gray-900'>Artesãos</p></a>
                        <a href="" ><p className='text-gray-900'>Regiões</p></a>
                        <a href="" ><p className='text-gray-900'>Coleções</p></a>
                        <a href="" ><p className='text-yellow-900'>Ofertas</p></a>
                    </div>
                </nav>

                <div className='flex items-center gap-3'>
                    <div className='flex justify-center h-10 border-2 border-black rounded-2xl bg-red-50' >
                       <Input placeholder='Busque produtos, artesãos...' _placeholder={{ color: "#A09485" }} />
                    </div>
                    <a href="" ><Heart className='text-gray-900' /></a>
                    <a href=""><ShoppingCart className='text-gray-900' /></a>
                    <a href=""><User className='text-gray-900' /></a>
                    
                </div>
            </header>
        </div>
    )
}