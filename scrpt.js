const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')

const description = document.getElementById('description')
var SevSelect = description.value

const selectSev = document.getElementById('severity')
var SevSelect = selectSev.value

var slocation = document.querySelector('#location')
var sleng = document.querySelector('#leng')
var swid = document.querySelector('#width')

const selSection = document.getElementById('section')
var section = selSection.value

const selLayer = document.getElementById('layer')
var layer = selLayer.value

const selSuface = document.getElementById('suface')
var suface = selSuface.value

const selprogression = document.getElementById('progression')
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
    <td>${item.location}</td>
    <td>${item.length}</td>
    <td>${item.width}</td>
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
        slocation.value = itens[index].location
        sleng.value = itens[index].length
        swid.value = itens[index].width
        .value = itens[index].
        .value = itens[index].
        .value = itens[index].
        .value = itens[index].
        .value = itens[index].
        .value = itens[index].
        id = index
    } else{
        slocation.value = '';
        sleng.value = '';
        swid.value = '';
        .value = '';
        .value = '';
        .value = '';
        .value = '';
        .value = '';
        .value = '';
    }
}

bntSalvar.onclick = e =>{
    if(slocation == '' || sleng == '' || swid == '' || == '' || == '' || == '' || == ''
    || == '' || == '' || == ''){
        return
    }
    e.preventDefault();
    if (id !== undefined) {
        itens[id].location = slocation.value
        itens[id].length = sleng.value
        itens[id].width = swid.value
        [id].width = .value
        [id].width = .value
        [id].width = .value
        [id].width = .value
        [id].width = .value
        [id].width = .value
        [id].width = .value

      } else {
        itens.push({'location': slocation.value, 'length':  sleng.value, 'width': swid.value
    '': .value, '': .value, '': .value, '': .value, '': .value, '': .value, '': .value})
      }
    
      setItensBD()
    
      modal.classList.remove('active')
      loadItens()
      id = undefined
}


