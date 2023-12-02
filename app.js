// -------- PARTE JOAO JOSE -------------------

function exibePets() {
    let str = ''



    fetch('db.json')
        .then(response => response.json())
        .then(db => {          
            
            for (let i = 0; i < db.pets.length; i++) {
                let pet = db.pets[i];
                str += `<div class="col-xl-3 col-lg-4 col-md-6 border border-0">
                    <a class="card mb-4 bg-dark" href="pet.html?id=${pet.id}">
                        <img class="card-img-top" src = ${pet.foto}/p.png alt = ${pet.foto}/p.png   >
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
    
    fetch('db.json')
        .then(response => response.json())
        .then(db => {
            let idx = db.pets.findIndex(elem => elem.id == id)
            let pet = db.pets[idx];
            let str =''
            str += `
            
            <!-- Albuns -->
            <p class="text-dark border-bottom border-primary border-4 h2">Álbum do ${pet.nome}</p>
            
            <div class="row " >
                
                <!-- Descrição-->
                <div class="col-md-12">
                   <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                        <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="img/pets/${pet.nome}/s.png" style="width: 200px; height: 250px;">
                        <div class="card-body d-flex flex-column align-items-start">
                            <strong class="d-inline-block mb-2 text-primary">${pet.nome}</strong>
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
            for ( i = 1; i < 13; i++) {
                
                str += `<div class="col-xl-3 col-lg-4 col-md-6 border border-0" >
                <button id="${i}" style="width: 100%; " onclick="exibeCarrosselAlbum(${i},'${pet.nome}')" class="mostrarBtn card mb-4 text-white bg-dark">
                    <img class="card-img-top" src="img/pets/${pet.nome}/${i}.png" alt="Card image cap" style="height: 250px;">
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

function exibeCarrosselAlbum(id, nome){
    
    let str =''
    str+=` 
            
            <!--CARROSEL-->
            <div id="minhaDiv" style=" height: 100vh; position: fixed; background-color: rgba(0,0,0,0.75); top: 0px; left: 0px; margin: auto auto; display: flex; align-items: center; justify-content: center; height: 100vh; ">
                
                <div class="row py-2" style="max-width: 55vh; margin: auto auto; ">
                    <div id="carouselExampleIndicators" class="carousel slide col-12" >
                        <div class="carousel-indicators">
                            
                            `
                            for ( i = 0; i < 12; i++) {
                                if (i+1==id){
                                    str +=`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class="active" aria-current="true" aria-label="Slide ${i}"></button>`
                                } else {
                                    str +=`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${i}"></button>`
                                }
                            }
                        str +=`
                        </div>
                        <div class="carousel-inner" >`

                            for ( i=0; i<12;i++){
                                if (i+1==id){
                                    str+= 
                                    `<div class="carousel-item active" id="slide${i}">
                                        <img src="img/pets/${nome}/${i+1}.png" class="d-block w-100"  alt="..." >
                                    </div>`
                                } else {
                                    str+=`<div class="carousel-item" id="slide${i}">
                                    <img src="img/pets/${nome}/${i+1}.png" class="d-block w-100"  alt="..." >
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


function exibeMap(){
    const centralLatLong= [-43.9397233,-19.9332786]
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hb2pvc2VjciIsImEiOiJjbHBtdWFlN3QwZGdvMnF1aGo1dzJtdHJhIn0.AIfELyfSUPcP-S2sRaHBXw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: centralLatLong,
        zoom: 5
    });
    console.log("map")
    fetch('db.json')
        .then(response => response.json())
        .then(db => {          
            
            for (let i = 0; i < db.pets.length; i++) {
                let popup = new mapboxgl.Popup({ offset: 25 })
                const marker = new mapboxgl.Marker({ color: 'red' })
                .setLngLat(db.pet[i].latlong)
                .setPopup(popup)
                .addTo(map);     
            }

        })
}
