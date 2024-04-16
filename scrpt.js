const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')

const sDescription = document.querySelector('#x-description')

const sSeverity = document.querySelector('#x-severity')

var sLocation = document.querySelector('#x-location')
var sLeng = document.querySelector('#x-leng')
var sWid = document.querySelector('#x-width')

var sSection = document.querySelector('#x-section')

var sLayer = document.querySelector('#x-layer')

var sSuface = document.querySelector('#x-suface')

var sProgression = document.querySelector('#x-progression')

var sRecomendation = document.querySelector('#x-recomendation')

var bntSalvar = document.getElementById('#bntSalvar')
var description = sDescription.value
var severity = sSeverity.value
var section = sSection.value
var layer = sLayer.value
var suface = sSuface.value
var progression = sProgression.value
var recomendation = sRecomendation.value

let itens 
let id


const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))
function loadItens(){
    itens = getItensBD()
    tbody.innerHTML =  '', itens.forEach((item, index) => {insertItem(item, index)
    });
}
loadItens()

function insertItem(item, index){
    let tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${item.description}</td>
    <td>${item.location}</td>
    <td>${item.length}</td>
    <td>${item.width}</td>
    <td>${item.severity}</td>
    <td>${item.section}</td>
    <td>${item.layer}</td>
    <td>${item.suface}</td>
    <td>${item.progression}</td>
    <td>${item.recomendation}</td>
   
    
    <td class="acao">
    <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
  </td>
  <td class="acao">
    <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
  </td>
    `
    tbody.appendChild(tr) 
}
function editItem(index){
    openModal(true, index)
}
function deleteItem(index){
    itens.splice(index, 1)
    setItensBD()
    loadItens()
}
function openModal(edit = false, index = 0){
    modal.classList.add('active')

    modal.onclick = e => {
        if(e.target.className.indexOf('modal-container') !== -1){
        modal.classList.remove('active')}
    }
    if(edit){
        sDescription.value = itens[index].description
        sLocation.value = itens[index].location
        sLeng.value = itens[index].length
        sWid.value = itens[index].width
        sSeverity.value = itens[index].severity
        sSection.value = itens[index].section
        sLayer.value = itens[index].layer
        sSuface.value = itens[index].suface
        sProgression.value = itens[index].progression
        sRecomendation.value = itens[index].recomendation
        
        id = index
    } else{
        sLocation.value = '';
        sLeng.value = '';
        sWid.value = '';
        sLayer.value = '';
        sSection.value = '';
        sDescription.value = '';
        sSuface.value = '';
        sProgression.value = '';
        sSeverity.value = '';
        sProgression.value = '';
        sRecomendation.value = '';
    }
}

bntSalvar.onclick = e =>{
    if(sLocation == '' || sLeng == '' || sWid == '' ||  sLayer == '' || sSection == '' || sDescription == ''
    ||   sProgression == '' || sSeverity == '' || sSuface == ''|| sRecomendation == '' ){
        return
    }
    e.preventDefault();
    if (id !== undefined) {
        itens[id].location = sLocation.value
        itens[id].length = sLeng.value
        itens[id].width = sWid.value
        itens[id].progression = sProgression.value
        itens[id].Layer = sLayer.value
        itens[id].Section = sSection.value
        itens[id].description = sDescription.value
        itens[id].Severity = sSeverity.value
        itens[id].Suface= sSuface.value
        itens[id].Recomendation= sRecomendation.value

      } else {
        itens.push({'Location': sLocation.value, 'Length':  sLeng.value, 'Width': sWid.value,
    'Progression': sProgression.value, 'Layer': sLayer.value, 'Severity': sSeverity.value, 
    'Secition': sSection.value,  'Description': sDescription.value, 'Surface': sSuface.value, 'Recomendation': sRecomendation.value})
      }
    
      setItensBD()
    
      modal.classList.remove('active')
      loadItens()
      id = undefined
}


