const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')

const sdescription = document.getElementById('description')
var SevSelect = description.value

const sSeverity = document.getElementById('severity')
var SevSelect = selectSev.value

var slocation = document.querySelector('#location')
var sleng = document.querySelector('#leng')
var swid = document.querySelector('#width')

const sSection = document.getElementById('section')
var section = selSection.value

const sLayer = document.getElementById('layer')
var layer = selLayer.value

const sSuface = document.getElementById('suface')
var suface = selSuface.value

const sprogression = document.getElementById('progression')
var progression= selectSev.value

const bntSalvar = document.getElementById('#bntSalvar')
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
        sdescription.value = itens[index].description
        slocation.value = itens[index].location
        sleng.value = itens[index].length
        swid.value = itens[index].width
        sSeverity.value = itens[index].
        sSection.value = itens[index].
        sLayer.value = itens[index].
        sSuface.value = itens[index].
        sprogression.value = itens[index].
        
        id = index
    } else{
        slocation.value = '';
        sleng.value = '';
        swid.value = '';
        sLayer.value = '';
        sSection.value = '';
        sdescription.value = '';
        sSuface.value = '';
        sprogression.value = '';
        sSeverity.value = '';
    }
}

bntSalvar.onclick = e =>{
    if(slocation == '' || sleng == '' || swid == '' ||  sLayer == '' || sSection == '' || sdescription == ''
    ||   sprogression == '' || sSeverity == '' || sSuface == '' ){
        return
    }
    e.preventDefault();
    if (id !== undefined) {
        itens[id].location = slocation.value
        itens[id].length = sleng.value
        itens[id].width = swid.value
        itens[id].progression = progression.value
        itens[id].Layer = sLayer.value
        itens[id].Section = sSection.value
        itens[id].description = sdescription.value
        itens[id].Severity = sSeverity.value
        itens[id].Suface= sSuface.value
      

      } else {
        itens.push({'Location': slocation.value, 'Length':  sleng.value, 'Width': swid.value,
    'Progression': sprogression.value, 'Layer': sLayer.value, 'Severity': sSeverity.value, 
    'Secition': sSection.value,  'Description': sdescription.value, 'Surface': sSuface.value})
      }
    
      setItensBD()
    
      modal.classList.remove('active')
      loadItens()
      id = undefined
}


