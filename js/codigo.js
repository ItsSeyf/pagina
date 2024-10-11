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
        opcion: document.getElementById('opciones').value,
        nece: document.getElementById('Necesidad').value,
        contacto: document.getElementById('contacto').value,
        infocon: document.getElementById('infocon').value
    };
    if(datos.nombre==="" || datos.nece==="" || datos.infocon===""){
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
    document.getElementById('opciones').value=1;
    document.getElementById('Necesidad').value="";
    document.getElementById('contacto').value=1;
    document.getElementById('infocon').value="";
}