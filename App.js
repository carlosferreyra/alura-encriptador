const InitialTxt = document.querySelector('.TextArea');
const EncriptarBtn = document.querySelector('.EncriptarBtn');
const DesencriptarBtn = document.querySelector('.DesencriptarBtn');
const FinalTxt = document.querySelector('.FinalText');

const RightContainer = document.querySelector('.RightContainer');
const Doll = document.querySelector('.Doll');
const RightInfo = document.querySelector('.RightInfo');
const CopyBtn = document.querySelector('.CopyBtn');

let VocalID = [
    ['a', '<1>'],
    ['e', '<2>'],
    ['i', '<3>'],
    ['o', '<4>'],
    ['u', '<5>']
];

let Vocales = [
    ['<1>', 'ai'],
    ['<2>', 'enter'],
    ['<3>', 'imes'],
    ['<4>', 'ober'],
    ['<5>', 'ufat']
];

EncriptarBtn.addEventListener("click", () => {
    const Txt = InitialTxt.value.toLowerCase();
    function Encriptar(NewTxt){
        // Paso de marcado: Reemplazar cada vocal por un marcador único
        for(let i = 0; i < VocalID.length; i++){
            NewTxt = NewTxt.replaceAll(VocalID[i][0], VocalID[i][1]);
        }
        // Paso de encriptación: Reemplazar cada marcador por su correspondiente cadena de encriptación
        for(let i = 0; i < Vocales.length; i++){
            NewTxt = NewTxt.replaceAll(Vocales[i][0], Vocales[i][1]);
        }
        return NewTxt;
    }
    

    const EncryptedTxt = Encriptar(Txt);

    Doll.style.display = 'none';
    RightInfo.style.display = 'none';
    CopyBtn.style.display = 'block';
    RightContainer.classList.add('Fixed');
    FinalTxt.classList.add('Fixed');
    FinalTxt.innerHTML = EncryptedTxt;
});

DesencriptarBtn.addEventListener("click", () => {    
    const Txt = InitialTxt.value.toLowerCase();
    function Desencriptar(NewTxt){
        for(let i = 0; i < Vocales.length; i++){
            NewTxt = NewTxt.replaceAll(Vocales[i][1], Vocales[i][0]);
        }
        for(let i = 0; i < VocalID.length; i++){
            NewTxt = NewTxt.replaceAll(VocalID[i][1], VocalID[i][0]);
        }
        return NewTxt;
    }
    

    const DecryptedTxt = Desencriptar(Txt);

    Doll.style.display = 'none';
    RightInfo.style.display = 'none';
    CopyBtn.style.display = 'block';
    RightContainer.classList.add('Fixed');
    FinalTxt.classList.add('Fixed');
    //FinalTxt.style.backgroundColor = 'rgba(0, 70, 0, 0.5)';
    FinalTxt.innerHTML = DecryptedTxt;
});

CopyBtn.addEventListener("click", () => {
    let Txt = FinalTxt;
    //navigator.clipboard.writeText(Txt.value);
    Txt.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles.');
});