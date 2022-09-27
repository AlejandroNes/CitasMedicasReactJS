import React from 'react'

export const Paciente = () => {
    return (
        <div className='bg-white p-4 mt-5 mx-5'>
            <p className='font-bold'>Nombre: {" "}
                <span className='font-light'>Luna</span>
            </p>
            <p className='font-bold'>Propietario: {" "}
                <span className='font-light'>Alejandro</span>
            </p>
            <p className='font-bold'>Correo Electronico: {" "}
                <span className='font-light'>alejandro@correo.com</span>
            </p>
            <p className='font-bold'>Fecha de Alta: {" "}
                <span className='font-light'>21 de Septiembre de 2022</span>
            </p>
            <p className='font-bold'>Sintomas: {" "}
                <span className='font-light'>Come mucho y no toma agua tambien duerme demasiado</span>
            </p>
        </div>
    )
}
