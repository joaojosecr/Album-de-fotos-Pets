// -------- PARTE JOAO JOSE -------------------


function exibePets() {
    let str = ''
    const url = 'https://jsonserver.joaojosecr.repl.co/pets'; // PARA USAR O SERVIDOR LOCAL COLOQUE url = 'http://localhost:3000/pets'; E COM JSON-SERVER INSTALADO POR npm install json-server, INICIE O SERVIDOR PELO PROMPT json-server --watch db.json
    console.log("PARA USAR O SERVIDOR LOCAL COLOQUE url = 'http://localhost:3000/pets'; E COM JSON-SERVER INSTALADO POR npm install json-server, INICIE O SERVIDOR PELO PROMPT json-server --watch db.json");
    
    fetch(url)
    .then(response => response.json())
    .then(pets => {          
        
        for (let i = 0; i < pets.length; i++) {
            let pet = pets[i];
            str += `<div class="col-xl-3 col-lg-4 col-md-6 border border-0">
                <a class="card mb-4 bg-dark" href="pet.html?id=${pet.id}">
                    <img class="card-img-top" src = "${pet.foto[12]}" alt = ${pet.foto[i]}   >
                    <div class="card-body border border-0 text-white")>
                        <h4 class="card-title text-primary">${pet.nome}</h4>
                        <p >${pet.raca}</p>

                    </div>
                </a>
            </div>
            `
            document.querySelector('#pets-container').innerHTML=str
        }

    })
}   

function exibeUnPet(id) {

    const url = 'https://jsonserver.joaojosecr.repl.co/pets'; // PARA USAR O SERVIDOR LOCAL COLOQUE url = 'http://localhost:3000/pets'; E COM JSON-SERVER INSTALADO POR npm install json-server, INICIE O SERVIDOR PELO PROMPT json-server --watch db.json
    console.log("PARA USAR O SERVIDOR LOCAL COLOQUE url = 'http://localhost:3000/pets'; E COM JSON-SERVER INSTALADO POR npm install json-server, INICIE O SERVIDOR PELO PROMPT json-server --watch db.json");
    
    fetch(url)
        .then(response => response.json())
        .then(pets => {
            let idx = pets.findIndex(elem => elem.id == id)
            let pet = pets[idx];
            let str =''
            let favr = ''
            if (pet.favorito){
                favr = ' clicked'
            } 
    
            str += `
            <!-- Albuns -->
            <p class="text-dark border-bottom border-primary border-4 h2">Álbum do ${pet.nome}</p>
            
            <div class="row " >  
                <!-- Descrição-->
                <div class="col-md-12">
                   <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                        <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="${pet.foto[13]}" style="width: 200px; height: 250px;">
                        
                        <div class="card-body d-flex flex-column align-items-start">
                            <div class="row " >
                                <strong class="d-inline-block mb-2 text-primary col-3">${pet.nome}</strong>
                                <button class="star-btn col-1 ${favr}" onclick="toggleStar(event, ${id},${pet.favorito})"></button>
                                
                            <p class="card-text mb-auto">${pet.descricao}</p>
                            
                            <div style="display: flex; flex-wrap: wrap; width: 100%; padding-bottom: 1%;">
                                <div style="width: 50%; display: flex; display: inline;">
                                    <strong class="d-inline-block mb-2 text-primary">Localização</strong>
                                    <div class="mb-1 text-muted small">${pet.local}</div>
                                </div>
                                <div style="width: 50%; display: flex; display: inline;">
                                    <strong class="d-inline-block mb-2 text-primary">Data de nascimento</strong>
                                    <div class="mb-1 text-muted small">${pet.data}</div>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
                <!--FOTOS-->
                <div class="row py-2" id="buttonss">
            `
            for ( i = 0; i < 12; i++) {
                
                str += `<div class="col-xl-3 col-lg-4 col-md-6 border border-0" >
                <button id="${i}" style="width: 100%; " onclick="exibeCarrosselAlbum(${i},'${pet.foto}')" class="mostrarBtn card mb-4 text-white bg-dark">
                    <img class="card-img-top" src="${pet.foto[i]}" alt="Card image cap" style="height: 250px;  overflow: hidden;">
                    <div class="card-body border border-0">
                    <p>  </p><br>
                    </div>
                </button>
                </div>
                `
                }

            str+=`</div>`

        document.querySelector('#main').innerHTML=str
        })

}

function toggleStar(event, id, fav) {
    event.preventDefault();
    const url = 'https://jsonserver.joaojosecr.repl.co/pets/' +id; // PARA USAR O SERVIDOR LOCAL COLOQUE url = 'http://localhost:3000/pets'; E COM JSON-SERVER INSTALADO POR npm install json-server, INICIE O SERVIDOR PELO PROMPT json-server --watch db.json
    console.log("PARA USAR O SERVIDOR LOCAL COLOQUE url = 'http://localhost:3000/pets/'; E COM JSON-SERVER INSTALADO POR npm install json-server, INICIE O SERVIDOR PELO PROMPT json-server --watch db.json");
    
    var starBtn = document.querySelector('.star-btn');
    starBtn.classList.toggle('clicked');

    let alt = !fav;
        
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            favorito: alt,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Faça algo com a resposta (se necessário)
        console.log('Resposta:', data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });

    return false;
}

function exibeCarrosselAlbum(id, fotos){

    var nome = fotos.split(',')

    let str =''
    str+=` 
            
            <!--CARROSEL-->
            <div id="minhaDiv" style=" height: 100vh; position: fixed; background-color: rgba(0,0,0,0.75); top: 0px; left: 0px; margin: auto auto; display: flex; align-items: center; justify-content: center; height: 100vh; ">
                
                <div class="row py-2" style="max-width: 55vh; margin: auto auto; ">
                    <div id="carouselExampleIndicators" class="carousel slide col-12" >
                        <div class="carousel-indicators">
                            
                            `
                            for ( i = 0; i < 12; i++) {
                                if (i==id){
                                    str +=`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class="active" aria-current="true" aria-label="Slide ${i}"></button>`
                                } else {
                                    str +=`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${i}"></button>`
                                }
                            }
                        str +=`
                        </div>
                        <div class="carousel-inner" >`

                            for ( i=0; i<12;i++){
                                if (i==id){
                                    str+= 
                                    `<div class="carousel-item active" id="slide${i}">
                                        <img src="${nome[i]}" class="d-block w-100"  alt="..." >
                                    </div>`
                                } else {
                                    str+=`<div class="carousel-item" id="slide${i}">
                                    <img src="${nome[i]}" class="d-block w-100"  alt="..." >
                                    </div>`
                                }
                            }
                            
                            str+=`
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button  class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                </div>
                <div class="row">
                    <button onclick="fecharCarrossel()" id="fecharBtn" style=" border: 0;  margin: 0; background-color: rgba(128, 192, 252, 0.9); color: rgb(0, 0, 0); font-weight: bolder;height: 100vh; "><p>      X     </p></button>
                </div>
            </div>
            
            ` 
            document.querySelector('#carrossel_album').innerHTML=str
}   

function fecharCarrossel(){
    minhaDiv.style.display = 'none'; // Oculta a div novamente
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        minhaDiv.style.display = 'none'; // Oculta a div quando "ESC" é pressionado
    }
});



