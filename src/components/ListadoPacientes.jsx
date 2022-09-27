import React from 'react'
import { Paciente } from './Paciente'

export const ListadoPacientes = () => {
    return (
        <div className='md:w-3/5 p-2 m-2 mx2 my-4 md:h-screen overflow-y-scroll'>
            <p className='text-center font-bold uppercase'>Añade pacientes y
                <span className='text-indigo-600'> Administralos</span>
            </p>
            {/* LISTADO DE PACIENTES */}
            <Paciente />
            <Paciente />
            <Paciente />


        </div>
    )
}
