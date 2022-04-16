
const usuarios = new Map;
usuarios.set('Luiz', 'admin');
usuarios.set('Victor', 'Animador');
usuarios.set('João', 'admin');
usuarios.set('Gui', 'Dev');
usuarios.set('lucas', 'rh');

function getAdmins(map){ 
    let admins = [];   
    for([key,value] of map ){
        if(value === 'admin'){
            admins.push(key)
        }
    }
    return admins;
}


console.log(getAdmins(usuarios));


