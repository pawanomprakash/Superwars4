const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  // "Popcorn",
  // "Gemwoman",
  // "Bolt",
  // "Antwoman",
  // "Mask",
  // "Tiger",
  // "Captain",
  // "Catwoman",
  // "Fish",
  // "Hulk",
  // "Ninja",
  // "Black Cat",
  // "Volverine",
  // "Thor",
  // "Slayer",
  // "Vader",
  // "Slingo"
];

// Player Class
class Player {
  constructor(id, name, type) {
    // Progression 1: Create member variables and assign values
    this.id=id
    this.name=name
    this.type=type
    this.strength=this.getRandomStrength()
    this.img="images/super-"+(id+1)+".png"

  }
  // getting random strength
  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  // Progression 2: Create a player for displaying
  view = () => {
    // Accumulate HTML template
    // Type your code here
    let player=document.createElement('div')
    player.setAttribute('data-id',this.id)
    // player.setAttribute('class','player')
    player.classList.add('player')
    let img=document.createElement('img')
    img.setAttribute('src',this.img)
    player.append(img);

    let namediv=document.createElement('div')
    namediv.setAttribute('class','name')
    namediv.textContent=this.name
    player.append(namediv);

    let strengthdiv=document.createElement('div')
    strengthdiv.setAttribute('class','strength')
    strengthdiv.textContent=this.strength
    player.append(strengthdiv)

    return player;
  };
}

// Superwar Class
class Superwar {
  constructor(players) {
    // Progression 3:
    // Create a field players
    // Use Map method to loop through players argument and create new players
    // Type your code here
    // let id=1
    this.players=players.map((item,i)=>{
      let type=i%2!=0 ? "villain":"hero"
      // id++
      return new Player(i,item,type);

    })

  }

  // Display players in HTML
  viewPlayers = () => {
    let team = document.getElementById('heroes');
    team.innerHTML = '';
    let fragment = this.buildPlayers('hero');
    team.append(fragment);

    team = document.getElementById('villains');
    team.innerHTML = '';
    fragment = this.buildPlayers('villain');
    team.append(fragment);
  };

  // Build players fragment
  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type == type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  };
}

// uncomment this part -- only after you complete progression 3
window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
}

// <img src="images/super-2.png"><div class="name">Spiderman</div><div class="strength">40</div>

// <img src="images/super-1.png"><div class="name">Spiderman</div><div class="strength">98</div>