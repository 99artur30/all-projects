async function loopCard() {
    let number = 1;
    for (let i=0; i < 12; i++) {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + number);
        let pokemonGet = await response.json();
        let getId = document.getElementById("container");
        let createDiv = document.createElement("div");
        createDiv.classList.add("card");
        let setId = createDiv.appendChild(document.createElement("h6"));
        setId.innerHTML = "#" + pokemonGet.id;
        let setImg = createDiv.appendChild(document.createElement("img"));
        setImg.setAttribute("src", pokemonGet.sprites.front_default);
        let setName = createDiv.appendChild(document.createElement("h3"));
        setName.innerHTML = pokemonGet.name;
        let setType = createDiv.appendChild(document.createElement("h5"));
        setType.innerHTML = pokemonGet.types[0].type.name;
        getId.appendChild(createDiv);
        console.log(createDiv);
        number++;
        createDiv.onclick = () => {
            setImg.setAttribute("src", pokemonGet.sprites.back_default);
            setName.innerHTML = "attack:" + pokemonGet.moves[0].move.name;
            setType.innerHTML = pokemonGet.stats[0].stat.name + ":" + pokemonGet.stats[0].base_stat;
            }
            createDiv.onclick = () => {
                if(backside == true) { 
                setImg.setAttribute("src", pokemonGet.sprites.front_default);
                setName.innerHTML = pokemonGet.name;
                setType.innerHTML = pokemonGet.types[0].type.name;
                console.log("false");    
            }   
        }     
        };
    }
loopCard();