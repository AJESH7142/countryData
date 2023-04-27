function displayCountry() {
   country = cname.value
   fetch(`https://restcountries.com/v2/name/${country}?fullText=true`).then(data=>data.json()).then(data=>displayData(data))
}

function displayData(cData) {
   cname = cData[0].name
   capital = cData[0].capital
   population = cData[0].population
   flag = cData[0].flag
   currency = cData[0].currencies[0].name
   symbol = cData[0].currencies[0].symbol
   language = cData[0].languages[0].nativeName
   status1 = cData[0].independent 

   let resultContainer = document.getElementById('result')

   resultContainer.innerHTML = `
   <div class="card" style="width: 18rem;">
  <img src="${flag}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title ctitle" style="color:red; text-align:center;">${cname}</h5>
  </div>
  <ul class="list-group list-group-flush" style="">
    <li class="list-group-item" style="color:green;">capital - <span style="color:coral">${capital}</span></li>
    <li class="list-group-item" style="color:green;">Population - <span style="color:coral">${population}</span></li>
    <li class="list-group-item" style="color:green;">Currency - <span style="color:coral">${currency}</span></li>
    <li class="list-group-item" style="color:green;">Symbol - <span style="color:coral">${symbol}</span></li>
    <li class="list-group-item" style="color:green;">Language - <span style="color:coral">${language}</span></li>
    <li class="list-group-item" style="color:green;">Status - <span style="color:coral">${status1}</span></li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-li""nk" style="text-decoration:none;padding:0 10px;color:aquamarine">Official site</a>
    <a href="#" class="card-link" style="text-decoration:none;padding:0 10px;color:aquamarine">Diplomatic</a>
  </div>
</div>
   `
}
