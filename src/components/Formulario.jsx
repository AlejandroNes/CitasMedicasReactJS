import React from 'react'

export const Formulario = () => {
    return (
        <div className='md:w-2/5 p-2 mx2 my-4'>
            <p className='text-center font-bold uppercase'>Añade pacientes y
                <span className='text-indigo-600'> Administralos</span>
            </p>
            <form className='bg-white p-4 mt-5 shadow-md rounded-md'>
                <div className='mb-5'>
                    <label
                        htmlFor="mascota"
                        className='font-bold uppercase text-gray-800 block'
                    >Nombre Mascota</label>
                    <input
                        id='mascota'
                        className='border-2 mt-1 placeholder-gray-400 p-2 rounded-sm w-full'
                        type="text"
                        placeholder='nombre mascota'
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor="propietario"
                        className='font-bold uppercase text-gray-800 block'
                    >Nombre Propietario</label>
                    <input
                        id='propietario'
                        className='border-2 mt-1 placeholder-gray-400 p-2 rounded-sm w-full'
                        type="text"
                        placeholder='nombre del propietario'
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor="email"
                        className='font-bold uppercase text-gray-800 block'
                    >Correo Electronico</label>
                    <input
                        id='email'
                        className='border-2 mt-1 placeholder-gray-400 p-2 rounded-sm w-full'
                        type="email"
                        placeholder='ej: correo@correo.com'
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor="alta"
                        className='font-bold uppercase text-gray-800 block'
                    >Alta</label>
                    <input
                        id='alta'
                        className='border-2 mt-1 placeholder-gray-400 p-2 rounded-sm w-full'
                        type="date"
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor="sintomas"
                        className='font-bold uppercase text-gray-800 block'
                    >Alta</label>
                    <textarea
                        className='border-2 mt-1 placeholder-gray-400 p-2 rounded-sm w-full'
                        id='sintomas'
                        placeholder='ingrese los sintomas'
                    />
                </div>

                <input
                    type="submit"
                    className='bg-indigo-600 text-white font-bold p-2 text-center uppercase w-full cursor-pointer hover:bg-indigo-700 transition-opacity'
                    value="Agregar Paciente"
                />
            </form>
        </div>
    )
}
