import React from "react";
import useDogsApi from "../hooks/useDogsApi";
import Card from "./Card/Card";

function Dogs() {
  const id = Math.round(Math.random() * 100);
  const { data, isLoading, isError } = useDogsApi(id);
  if (isError) {
    console.log(isError);
    return <div>Error al cargar</div>;
  }
  if (isLoading) return <div>Cargando</div>;

  return (
    <div>
      <Card data={data} />
    </div>
  );
}

export default Dogs;
