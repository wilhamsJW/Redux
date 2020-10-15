
//Essa função vem do Userform.js
export const submitUserAction = (data) => {
    console.log("Aqui", data)

    //simulação pra enviar dados pra uma API
    let url = "http://localhost:8080" //porém isso aqui não é um enderço válido de uma api mas se fosse iria enviar

    fetch(url, {
        method:"POST",
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify(data)
    }).then(response => response.json() ).then(json => {console.log(json)})
}