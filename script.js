const users = [
  {
    name: "Horse",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThL_LaJChPM-kg2ZeSneHHPskd9LofHO8jsRtE7QaUUItNTSN0_2C4m6A&s=10",
    bio: "Balancing on a moving horse builds deep abdominal and back muscles."
  },
  {
    name: "Dog",
    pic: "https://images.unsplash.com/photo-1552053831-71594a27632d",
    bio: "Dogs improve our mood and encourage an active and healthy lifestyle."
  },
  {
    name: "Elephant",
    pic: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46",
    bio: "Elephants are highly intelligent animals with strong family bonds."
  },
  {
    name: "Lion",
    pic: "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Lions are powerful social animals that live and hunt together in groups."
  },
  {
    name: "Tiger",
    pic: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
    bio: "Tigers are strong solitary hunters known for their speed and agility."
  },
  {
    name: "Giraffe",
    pic: "https://images.unsplash.com/photo-1566160995964-4d7bd54dbaf4?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Giraffes use their long necks to reach leaves high above the ground."
  },
  {
    name: "Panda",
    pic: "https://media.istockphoto.com/id/468446643/photo/cute-panda-bear.jpg?s=1024x1024&w=is&k=20&c=A1leaILgsgrhlB-fPZi0J6pId3uIACSd75mxZaT678k=",
    bio: "Pandas spend most of their day eating bamboo and resting."
  }
];

function showUsers(arr) {
    arr.forEach(function(user) {
       // Create Outer card div 
       const card = document.createElement("div");
       card.classList.add("card");

       //Create image
       const img = document.createElement("img");
       img.src = user.pic;
       img.classList.add("bg-img");

       //create blurred-layer div 
       const blurredLayer = document.createElement("div");
       blurredLayer.style.backgroundImage = `url(${user.pic})`;
       blurredLayer.classList.add("blurred-layer");

       //Create content div
       const content = document.createElement("div");
       content.classList.add("content");

       //Create h3 and paragraph 
       const heading = document.createElement("h3");
       heading.textContent = user.name;

       const para = document.createElement("p");
       para.textContent = user.bio;

       //Append heading and paragraph to content 
       content.appendChild(heading);
       content.appendChild(para);

       //Append all to card
       card.appendChild(img);
       card.appendChild(blurredLayer);
       card.appendChild(content);

       //Finally, append card to the body or any container
       document.querySelector(".cards").appendChild(card);
})};

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function() {
  let newUsers = users.filter((user) => {
    return user.name.startsWith(inp.value)
  });

  document.querySelector(".cards").innerHTML = ""

  showUsers(newUsers);
});