$app = document.querySelector("#app")

const publication = params => {
    return `
        <div class="card mb-3">
            <div class="card-header bg-primary text-white">
                PUBLICADO ${params.date}
            </div>
            <div class="card-body">
                <h5 class="card-title text-center">${params.title}</h5>
                <p class="card-text">${params.info}</p>
            </div>
            <div class="card-footer small">
                <p class="mb-0">${params.author}</p>
                <p class="mb-0">${params.place}</p>                
            </div>
        </div>
    `
}

let publicationList = publication({date: '18-01-2021', title: "COMUNICADO", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fuga quaerat enim eum at sit iusto illum ipsa eligendi aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fuga quaerat enim eum at sit iusto illum ipsa eligendi aspernatur", author: "División de Pensiones", place: "Rimac,Enero 2021"});

$app.innerHTML = ""
$app.innerHTML+= publicationList
$app.innerHTML+= publicationList
$app.innerHTML+= publicationList