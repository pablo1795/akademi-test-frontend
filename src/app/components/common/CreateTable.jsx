import { useState, useEffect } from 'react';

// Components
import Button from '../Button';
import InputField from '../InputField';

function CreateTable({
    bodyData = [],
    headerData = [],
    title = 'titulo tabla',
}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowCount, setRowCount] = useState(3);
    const [totalPages, setTotalPages] = useState(0);

    const [searchTerm, setSearchTerm] = useState('');

    const handleRowCount = (event) => {
        setRowCount(parseInt(event.target.value));
    }

    const onPageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    }

    const handleSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    }

    useEffect(() => {
        setTotalPages(Math.ceil(bodyData.length / 3));
    }, [bodyData, rowCount]);

    const filteredData = bodyData.filter((value) =>
        value.some((data) => String(data).toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const startIndex = (currentPage - 1) * rowCount;
    const endIndex = startIndex + rowCount;
    const pageData = filteredData.slice(startIndex, endIndex);

    return (
        <section className='flex flex-col gap-4'>
            <InputField
                onChange={handleSearchTerm}
                placeholder={`buscar de ${title}`}
                value={searchTerm}
                label='buscador'
            />
            <div>
                <table className='w-full'>
                    <thead className='bg-blue-500 text-white'>
                        {headerData.length > 0 ? (
                            <tr>
                                {headerData.map((value, index) => (
                                    <th className='p-2' key={index}>
                                        {value}
                                    </th>
                                ))}
                            </tr>
                        ) : (
                            <tr>
                                <th>datos de cabecera</th>
                            </tr>
                        )}
                    </thead>

                    <tbody>
                        {bodyData.length > 0 ? (
                            pageData.map((value, index) => (
                                <tr className='hover:bg-stone-300' key={startIndex + index}>
                                    {value.map((data, i) => (
                                        <td className='text-center p-2 border-blue-300' key={i}>
                                            {data}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className='text-center' colSpan={headerData.length}>
                                    no tienes {title} 😢
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {bodyData.length > 0 && (
                <div className='flex items-center justify-between'>
                    <div className='flex gap-3 items-center'>
                        <Button
                            title='pagina anterior'
                            icon='◀'
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            pagina anterior
                        </Button>

                        <p>pagina {currentPage}/{totalPages}</p>

                        <Button
                            title='siguiente pagina'
                            icon='▶'
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            siguiente pagina
                        </Button>
                    </div>

                    <p>total de {title} {bodyData.length}</p>

                    <InputField
                        onChange={handleRowCount}
                        placeholder={`3`}
                        value={rowCount}
                        label='cantidad de filas'
                        type='number'
                    />
                </div>
            )}
        </section>
    );
}

export default CreateTable;