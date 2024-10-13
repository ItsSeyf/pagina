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

    const datos = {
        nombre: document.getElementById('Nombre').value,
        opcion: document.getElementById('Opciones').value,
        nece: document.getElementById('Necesidad').value,
        infocon: document.getElementById('infocon').value
    };
    if(datos.nombre==="" || datos.nece==="" || datos.infocon==="" || datos.opcion==="Seleccione---"){
        alert('Complete todos los campos')
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
            alert('Formulario enviado con éxito');
        } else {
            const errorMsg = await response.text();
            console.error('Error en la respuesta de la API:', errorMsg);
            alert('Ocurrió un problema: ' + errorMsg);
        }
    } catch (error) {
        console.error('Error capturado:', error);
        alert('Ocurrió un error, intente nuevamente');
    }
}

function vaciar(event){
    event.preventDefault();
    document.getElementById('Nombre').value="";
    document.getElementById('Opciones').value="Seleccione---";
    document.getElementById('Necesidad').value="";
    document.getElementById('infocon').value="";
}