// Lista de convidados confirmados
const convidadosConfirmados = [
    "Andreize",
    "Ayla Daraci",
    "Danil Brasil",
    "Emerson Davi",
    "Jhenifer Brasil"
];

// Função de callback para quando o QR Code for escaneado
function onScanSuccess(decodedText, decodedResult) {
    const nomeLido = decodedText.trim();

    if (convidadosConfirmados.includes(nomeLido)) {
        document.getElementById('message').textContent = `${nomeLido}, seja bem-vindo ao meu Aniversário!`;
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = `Desculpe, seu nome não foi confirmado!`;
        document.getElementById('message').style.color = 'red';
    }
}

// Inicializa o leitor de QR Code
let html5QrCode = new Html5Qrcode("reader");
html5QrCode.start(
    { facingMode: "environment" }, // Usa a câmera traseira
    {
        fps: 10,    // Frames por segundo
        qrbox: { width: 250, height: 250 }  // Tamanho da área de escaneamento
    },
    onScanSuccess
).catch(err => {
    console.error("Erro ao iniciar a câmera: ", err);
});
