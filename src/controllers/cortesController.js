export const obtenerDatosComentarios = (req,res) =>{
    console.log("obteniendo datos de los comentarios")

    res.json([
        {
            "nombre":"Felix Astudillo",
            "comentario":"Recomendado 100%, Gran equipo de trabajo con un local impecable."
        },
        {
            "nombre":"Diego Espinoza",
            "comentario":"Buen trato de los barberos y excelente servicio."
        },
        {
            "nombre":"Gonzalo Jeldes",
            "comentario":"Trabajo totalmente recomendado, los mejores de la región en cuanto a cortes de cabello."
        },
        {
            "nombre":"Tomás Torres",
            "comentario":"Trabajo de calidad, recomendado para niños, adultos y adolescentes. Gran servicio."
        },
        {
            "nombre":"Hans Bravo",
            "comentario":"En cuanto a calidad y trabajo, los mejores de la zona. Recomendado para todos los panas."
        },
        {
            "nombre":"Luis Salas",
            "comentario":"The best barber, los mejores en el rubro, recomiendo el servicio de excelencia y calidad que ofrecen."
        },{
            "nombre":"Emilio Gallardo",
            "comentario":"Siempre dando lo mejor y con la mejor calidad a sus clientes, recomendados 100%, calidad garantizada."
        },{
            "nombre":"Jaime Carriel",
            "comentario":"Lo mejor del mercado, sin duda alguna."
        }


    ])
}


