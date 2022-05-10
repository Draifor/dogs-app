import useSWR from 'swr';
import React from 'react';

const URL = "https://api.thedogapi.com/v1/images/search";
const fetcher = (...args) => fetch(...args).then(res => res.json());

function Dogs() {
    const { data, error } = useSWR(URL, fetcher);

    console.table(data);
    console.log(error);
    if (error) return <div>Error al cargar</div>;
    if (!data) return <div>Cargando</div>;

    return (
        <div><img src={data[0].url} key={data[0].id} alt="" /></div>
    );
}

export default Dogs;
