

//Minha chave API
const apikey = {
    key: '907934f0-3a1f-4c1a-81f3-f0dd184d64e3'
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
apikey.key)
.then((response) => {
    if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
    return response.json();
})
.then((api) => {
    console.log(api);

    let texto ="";
    // Get 10 coins and symbols
    for(let i = 0; i < 10; i++){


        //Show API information

        texto = texto + `

        <div class="media">
            <i class='bx bx-coin align-self-center mr-3 coin_icon' alt="coin"></i>
            <!--  <img src="coin.jpg" class="align-self-center mr-3" alt="coin" whidth="100" height="60"> -->
            <div class="media-body">
                <h5 class="mt-2"><span>MOEDA:</span>: ${api.data[i].name}</h5>
                <p><span>SIMBOLO:</span>: ${api.data[i].symbol}</p>
                    <p><span>HISTÓRICO: </span>:${api.data[i].first_historical_data}</p>

             </div>
         </div>        
         `;
    
         document.getElementById("coins").innerHTML = texto;

     }

    })
    .catch((error) =>{
        console.error(error.message);
    });