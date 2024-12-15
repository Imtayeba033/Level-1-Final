const loadData =()=>{
    fetch("https://f24-1-mid-1.vercel.app/content")
    .then(res=>res.json())
    .then(data=>showData(data))
}
const showData=(values)=>{
    const mainDiv = document.getElementById("container")
    for(const value of values){
        // console.log(value);
        const {category,image, author, id,title ,description,comment_count,posted_time}=value
        const div = document.createElement("div")
        div.innerHTML=`
        <div class="card card-side bg-base-100 shadow-xl ">
  <figure>
    <img class="h-[250px] w-[250px] relative"
      src=${image}
      alt="Movie" />
  </figure>
  <div class="card-body">
    <div class="flex gap-5">
    <h2 class="card-title">${category}</h2>
    <h2 class="card-title">${author.name}</h2></div>
    <p>${title}</p>
    <p>${description}</p>
   <div class="flex" >
    <p>${comment_count}</p>
    <p>${posted_time}</p></div>
    
    <div class="card-actions justify-end">
      <button onclick='handleClick(${JSON.stringify(value)})' class="btn btn-primary">Add</button>
    </div>
  </div>
</div>
        `
    mainDiv.appendChild(div)
    }
    
}


const handleClick =(values)=>{
    const main =document.getElementById("main")
    const {category,image, author, id,title ,description,comment_count,posted_time}=values
    const div =document.createElement("div")
    div.innerHTML=`<div class="card bg-sky-950 shadow-xl mt-5 text-white">
  <div class="card-body">
   <div class="flex justify-between gap-5">
    <h2 class="card-title">${title}</h2>
    <p>${comment_count}</p>
    </div>
  </div>
</div>
    `
    const main1 =document.getElementById("main").childElementCount
    const zero =document.getElementById("zero")
    zero.innerText=main1+1
    if(main1>7){
      alert("You can only select 8")
    }
    else{
      main.appendChild(div)

    }

}
loadData()

