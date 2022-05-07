import useSWR from 'swr';
import React from 'react';

function Dogs() {
    const URL = "https://api.thedogapi.com/v1/images/search";
    const [data, error] = useSWR(URL, fetch);

    if (error) return <div>Error al cargar</div>
    if (!data) return <div>Cargando</div>
    console.log(data)
    return (
        <div>data</div>
    );
}

export default Dogs;
