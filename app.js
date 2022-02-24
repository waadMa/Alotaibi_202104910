function addTask(){
    const inputElement=document.querySelector('input') 
    const newH2=document.createElement('h2')

    newH2.innerHTML=inputElement.value 
    const thirdDiv=document.createElement('div')
    thirdDiv.className="Third"
    thirdDiv.appendChild(newH2)
    const d=document.querySelector('.First')
    d.appendChild(thirdDiv)
}