const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')

const sDescription = document.querySelector('#x-description')

const sSeverity = document.querySelector('#x-severity')

const sLocation = document.querySelector('#x-location')
const sLeng = document.querySelector('#x-leng')
const sWid = document.querySelector('#x-width')

const sSection = document.querySelector('#x-section')

const sLayer = document.querySelector('#x-layer')

const sSuface = document.querySelector('#x-suface')

const sProgression = document.querySelector('#x-progression')

const sRecomendation = document.querySelector('#x-recomendation')

var bntSalvar = document.getElementById('#bntSalvar')

/*const description = sDescription.value
const severity = sSeverity.value
const section = sSection.value
const layer = sLayer.value
const suface = sSuface.value
const progression = sProgression.value
const recomendation = sRecomendation.value*/


let itens 
let id





function openModal(edit = false, index = 0) {
    modal.classList.add('active')

    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
          modal.classList.remove('active')
        }
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
        sSeverity.value = '';
        sProgression.value = '';
        sRecomendation.value = '';
    }
}

function editItem(index) {

    openModal(true, index)
  }
  
  function deleteItem(index) {
    itens.splice(index, 1)
    setItensBD()
    loadItens()
  }
  function insertItem(item, index) {
    let tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${item.description}</td>
    <td>${item.location} (z)</td>
    <td>${item.length} mm</td>
    <td>${item.width} mm</td>
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
btnSalvar.onclick = e => {
    if(sLocation.value == '' || sLeng.value == '' || sWid.value == '' ||  sLayer.value == '' || sSection.value == '' || sDescription.value == ''
    ||   sProgression.value == '' || sSeverity.value == '' || sSuface.value == ''|| sRecomendation.value == '' ){
        return
    }
    e.preventDefault();

    if (id !== undefined) {
        itens[id].location = sLocation.value
        itens[id].length = sLeng.value
        itens[id].width = sWid.value
        itens[id].progression = sProgression.value
        itens[id].layer = sLayer.value
        itens[id].section = sSection.value
        itens[id].description = sDescription.value
        itens[id].severity = sSeverity.value
        itens[id].suface = sSuface.value
        itens[id].recomendation= sRecomendation.value

      } else {
        itens.push({'location': sLocation.value, 'length':  sLeng.value, 'width': sWid.value,
    'progression': sProgression.value, 'layer': sLayer.value, 'severity': sSeverity.value, 
    'section': sSection.value,  'description': sDescription.value, 'suface': sSuface.value, 'recomendation': sRecomendation.value})
      }
  
      setItensBD()
    
      modal.classList.remove('active')
      loadItens()
      id = undefined
    }

    function loadItens() {
        itens = getItensBD()
        tbody.innerHTML = ''
        itens.forEach((item, index) => {
          insertItem(item, index)
        })
      
      }
const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))
loadItens()

