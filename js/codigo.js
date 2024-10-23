function mostrarbarrala(){
    const barrala=document.querySelector('.barrala')
    barrala.style.display='flex'
}

function cerrarbarrala(){
    const barrala=document.querySelector('.barrala')
    barrala.style.display='none'
}

async function enviar(event) {
    event.preventDefault();
    const dia=new Date().toLocaleDateString();
    let registros=JSON.parse(localStorage.getItem('enviosFormularios'));
    if(!registros || registros.fecha !==dia){
        registros={fecha: dia,
            contador: 0
        };
    }
    if(registros.contador >=2){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Solo puede enviar 2 formularios por día",
            footer: '<a href="contacto.html"> Contacto</a>',
            color: "#fff",
            background: "#011931",
            confirmButtonText: "Cerrar"
        });
        return;
    }

    const datos = {
        nombre: document.getElementById('Nombre').value,
        opcion: document.getElementById('Opciones').value,
        nece: document.getElementById('Necesidad').value,
        infocon: document.getElementById('infocon').value
    };
    if(datos.nombre==="" || datos.nece==="" || datos.infocon==="" || datos.opcion==="Seleccione---"){
        Swal.fire({
            icon: "warning",
            title: "Por Favor",
            text: "Complete todos los campos",
            color: "#fff",
            background: "#011931",
            confirmButtonText: "Cerrar"
        })
        return
    }

    try {
        const response = await fetch('https://formspree.io/f/mwpkeggl', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        });
        if (response.ok) {
            const resultado = await response.json();
            Swal.fire({
                title: "Exito",
                text:"Formulario enviado con éxito",
                icon:"success",
                color: "#fff",
                background: "#011931",
                confirmButtonText: "Cerrar"
            });
            document.getElementById('Nombre').value="";
            document.getElementById('Opciones').value="Seleccione---";
            document.getElementById('Necesidad').value="";
            document.getElementById('infocon').value="";
            registros.contador++;
            localStorage.setItem('enviosFormularios', JSON.stringify(registros));
        } else {
            const errorMsg = await response.text();
            console.error('Error en la respuesta de la API:', errorMsg);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Intente de nuevo o póngase en contacto con nosotros.",
                footer: '<a href="contacto.html"> Contacto</a>',
                color: "#fff",
                background: "#011931",
                confirmButtonText: "Cerrar"
            })
            localStorage.setItem('enviosFormularios', JSON.stringify(registros));
        }
    } catch (error) {
        console.error('Error capturado:', error);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Intente de nuevo o póngase en contacto con nosotros.",
            footer: '<a href="contacto.html"> Contacto</a>',
            color: "#fff",
            background: "#011931",
            confirmButtonText: "Cerrar"
        })
        localStorage.setItem('enviosFormularios', JSON.stringify(registros));
    }
}

function vaciar(event){
    event.preventDefault();
    document.getElementById('Nombre').value="";
    document.getElementById('Opciones').value="Seleccione---";
    document.getElementById('Necesidad').value="";
    document.getElementById('infocon').value="";
}