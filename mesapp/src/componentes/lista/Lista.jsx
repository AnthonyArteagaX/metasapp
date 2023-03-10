import Meta from "./Meta";
const listaMock =[ {
    "id": "1",
    "detalles": "Correr por 30 minutos",
    "periodo": "dia",
    "eventos": 1,
    "icono":"🏃",
    "meta": 365,
    "plazo": "2030-01-01",
    "completado": 5
},
{
    "id": "1",
    "detalles": "Leer libros",
    "periodo": "dia",
    "eventos": 1,
    "icono":"📕",
    "meta": 365,
    "plazo": "2030-01-01",
    "completado": 365
},
{
    "id": "1",
    "detalles": "Viajar a españa",
    "periodo": "dia",
    "eventos": 1,
    "icono":"✈️",
    "meta": 365,
    "plazo": "2030-01-01",
    "completado": 200
}





];
function Lista() {
    return ( 

     listaMock.map(meta => <Meta {...meta}></Meta>)


     );
}

export default Lista;