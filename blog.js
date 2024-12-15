const apiData =()=>{
    fetch("https://f24-1-mid-1.vercel.app/blogs")
    .then(resolve=>resolve.json())
    .then(Data=>valueData(Data)
    )
  }
  const valueData=(number)=>{
    const mainDiv=document.getElementById("mainDiv")
      for(const num of number){
        const {profile_image,posted_date,title ,description,cover_image,designation ,author}=num
        // console.log(num);
        if (valueData&&num !== undefined) {
            console.log(apiData);
        } else {
            console.log("undifined");
        }
        const div=document.createElement("div")
        div.innerHTML=`
        <div class="card bg-base-100 shadow-xl">
    <figure>
      <img class="h-[250px] w-[350px]"
        src=${cover_image}
        alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">${posted_date}</h2>
      <p>${title}</p>
        <p>${description}</p>
        <div class="flex gap-5">
        <figure>
    <img class="h-14"
      src=${profile_image}
      alt="Movie" />
  </figure>
        <div class="items-center"><p>${author.name}</p>
         <p>${designation}</p></div>
        </div>
       
    </div>
  </div>

        `
  mainDiv.appendChild(div)
  
      }
  }
  apiData()
  