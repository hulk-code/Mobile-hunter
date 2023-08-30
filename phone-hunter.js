const loadData=async(searchText) =>{
   const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
   const data= await res.json()
   const FetchData=data.data;
   // call the card function
  cardCointainer(FetchData);
}

const cardCointainer=(phoneData) =>{
   const addSection=document.getElementById('card-cointainer');
   // to clear previous search
   addSection.textContent=''
   
   if(phoneData.length > 10){
    document.getElementById('showMore').classList.remove('hidden')
   }
   else{
    document.getElementById('showMore').classList.add('hidden')
   }

   phoneData=phoneData.slice(0,6);

   phoneData.forEach(phone => {
    console.log(phone);
    
    const div= document.createElement('div');
   div.classList='card w-96 bg-base-100 shadow-xl'
    div.innerHTML=` 
    <figure><img src="${phone.image}" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name
      }</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" onclick="showMoreBtn('${phone.slug}')">Show More</button>
      </div>
    </div>`
    addSection.appendChild(div)
   });
   loddingId(false);
   
    
}
const searchText=() =>{
   const inputField=document.getElementById('searchId');
   const searchText=inputField.value ;
   loadData(searchText);
   loddingId(true);
}
const loddingId=(value) =>{
  const lodingIcone=document.getElementById('lodingId');
  if(value){
    lodingIcone.classList.remove('hidden')
  }
  else{
    lodingIcone.classList.add('hidden')
  }
  
}
const showMoreBtn= async(id) =>{
  console.log(id);
  
  const res= await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data= await res.json();
 const phonedetais=data.data;
 openMOdal(phonedetais)
}
const openMOdal=(phone) =>{
  console.log(phone);
  const addPhoneDetils=document.getElementById('addPhoneDetails')
  addPhoneDetils.innerHTML=`
  <img src="${phone.image}" class="m-auto"/>
  <h1>${phone.name}</h1>
  <p>storage ${phone.mainFeatures
.storage }</p>
  

  `
  modalbtn.showModal();
}


