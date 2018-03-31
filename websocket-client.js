const WS = new WebSocket('ws://localhost:3232');


WS.onmessage = (payload)=>{

    displayMessage(payload.data);



};

WS.onopen = ()=>{

    displayTitle('Connected to server');

};

WS.onclose = ()=>{

    displayTitle('Disconnected from server');

};


function displayTitle (title){

    document.querySelector('h1').innerHTML = title;

}


function displayMessage(message){

    let h1 = document.createElement('h1');

    h1.innerText = message;

    document.querySelector('div.messages').appendChild(h1);
}

document.forms[0].onsubmit = ()=>{

  let input = document.getElementById('message');

  //console.log(input.value);

    WS.send(input.value);
};