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
                <button id="${i}" style="width: 100%; "  class="mostrarBtn card mb-4 text-white bg-dark">
                    <img class="card-img-top" src="img/pets/${pet.nome}/${i}.png" alt="Card image cap" style="height: 250px;">
                    <div class="card-body border border-0">
                    <p> Descrição pequena </p><br>
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
            <div id="minhaDiv" style=" height: 100vh; position: fixed; background-color: rgba(0,0,0,0.75); top: 0px; left: 0px; margin: auto auto; display: none; align-items: center; justify-content: center; height: 100vh; ">
                
                <div class="row py-2" style="max-width: 55vh; margin: auto auto; ">
                    <div id="carouselExampleIndicators" class="carousel slide col-12" >
                        <div class="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 0"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 4"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 5"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 6"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 7"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 8"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 9"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 10"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11" aria-label="Slide 11"></button>

                        </div>
                        <div class="carousel-inner" >
                          <div class="carousel-item active" id="slide0">
                            <img src="img/pets/${nome}/1.png" class="d-block w-100"  alt="..." >
                          </div>
                          <div class="carousel-item" id="slide1">
                            <img src="img/pets/${nome}/2.png" class="d-block w-100"  alt="..." >
                          </div>
                          <div class="carousel-item" id="slide2">
                            <img src="img/pets/${nome}/3.png" class="d-block w-100"  alt="..." >
                          </div>
                          <div class="carousel-item" id="slide3">
                            <img src="img/pets/${nome}/4.png" class="d-block w-100"  alt="..." >
                          </div>
                          <div class="carousel-item" id="slide4">
                            <img src="img/pets/${nome}/5.png" class="d-block w-100"  alt="..." >
                          </div>
                          <div class="carousel-item" id="slide5">
                            <img src="img/pets/${nome}/6.png" class="d-block w-100"  alt="..." >
                          </div>
                          <div class="carousel-item" id="slide6">
                            <img src="img/pets/${nome}/7.png" class="d-block w-100"  alt="..." >
                          </div>
                          <div class="carousel-item" id="slide7">
                            <img src="img/pets/${nome}/8.png" class="d-block w-100"  alt="..." >
                          </div>
                          <div class="carousel-item" id="slide8">
                            <img src="img/pets/${nome}/9.png" class="d-block w-100"  alt="..." >
                          </div>
                          <div class="carousel-item" id="slide9">
                            <img src="img/pets/${nome}/10.png" class="d-block w-100"  alt="..." >
                          </div>
                          <div class="carousel-item" id="slide10">
                            <img src="img/pets/${nome}/11.png" class="d-block w-100"  alt="..." >
                          </div>
                          <div class="carousel-item" id="slide11">
                            <img src="img/pets/${nome}/12.png" class="d-block w-100"  alt="..." >
                          </div>
                          

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                </div>
                <div class="row">
                    <button id="fecharBtn" style=" border: 0;  margin: 0; background-color: rgba(128, 192, 252, 0.9); color: rgb(0, 0, 0); font-weight: bolder;height: 100vh; "><p>      X     </p></button>
                </div>
            </div>
            
            ` 
    
}



