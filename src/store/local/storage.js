
export function addItem(key,value){
    localStorage.setItem(key,value)
}

export function getItem(key){
    return localStorage.getItem(key)
}

export function removeItem(key){
    localStorage.removeItem(key)
}

export function clearstorage(){
    localStorage.clear()
}