let contain =document.querySelector('.contain')
let apiData =0
    const displayTestimonial=(data)=>{
        contain.innerHTML = ` <div class="card p-3">
        <div class="image">
         <img src="${}" alt="">
        </div>
        <div class="card-text">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officiis temporibus magnam, sapiente laboriosam eum rerum doloribus quibusdam quis quo?</p> 
           </div>
           <div class="play">
            <button class="btn btn-outline-success">
                Play Audio
            </button>
           </div>
        
        <div class="card-btn d-flex justify-content-between">
            <button class="btn">previous</button>
            <button class="btn">Next</button>
        </div>
    </div>`

    }
let endpoint = 'https://testimonialapi.toolcarton.com/api'
fetch(endpoint)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
    displayTestimonial(data)
})