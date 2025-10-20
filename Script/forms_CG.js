function FormValidado(){
    const name = document.getElementeById("name").value;
    const email = document.getElementeById("email").value;
    const number = document.getElementeById("number").value;
    const topic = document.getElementeById("topic").value;
    const mensage = document.getElementeById("mensage").value;

    if(name === "" || email === "" || number === "" || topic === "" || mensage === ""){
        errorMessage.textContent = "Por favor, preencha todos os campos";
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Por favor, insira um e-mail válido.";
        return false;
    }

    const phoneRegex = /\(\d{2}\) \d{4,5}-\d{4}/;
    if (!phoneRegex.test(number)) {
        alert("Por favor, insira um número de telefone no formato (XX) XXXXX-XXXX.");
        return false; 
    }

    alert("Formulario enviado!");
    return true;
}

function Mapa() {
    
    const centerLocation = { lat: -22.123377, lng: -51.394053 }; 

    const map = new google.maps.Mapa(document.getElementById("mapa"), {
        zoom: 12,
        center: centerLocation
    });

    const marker = new google.maps.Marker({
        position: centerLocation,
        map: map,
        title: "Estamos aqui!"
    });
}