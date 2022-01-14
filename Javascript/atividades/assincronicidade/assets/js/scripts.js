const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; //endereço pra api
const catBtn= document.getElementById('change-cat');
const catImg = document.getElementById('cat')

const getCat= async () =>{
    try{    
        const data =await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    } catch(e){
        console.log(e.message);
    }
}

//DOm com botão

const loadImg= async () => {
    catImg.src = await getCat();
}

catBtn.addEventListener('click', loadImg);

loadImg();