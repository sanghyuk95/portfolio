const $choice = document.querySelectorAll('.team-choice > li')
const $detail = document.querySelectorAll('.team-detail-list')

$choice.forEach((item,idx) => {
  item.addEventListener('click', () => {
    $choice.forEach((a, i) => {
      a.classList.toggle('active',idx===i)
    })
    $detail.forEach((a, i) => {
      a.classList.toggle('active',idx!==i)
    })
  })
})

const $choiceSolo = document.querySelectorAll('.solo-choice > li')
const $detailSolo = document.querySelectorAll('.solo-detail-list')

$choiceSolo.forEach((item,idx) => {
  item.addEventListener('click', () => {
    $choiceSolo.forEach((a, i) => {
      a.classList.toggle('active',idx===i)
    })
    $detailSolo.forEach((a, i) => {
      a.classList.toggle('active',idx!==i)
    })
  })
})

const $mast = document.querySelector('.mast')
const $mastDetail = document.querySelector('.mast-detail')
const $mastX = document.querySelector('.modal-x-btn')
$mastDetail.addEventListener('click', () => {
  $mast.classList.remove('active')
})
$mastX.addEventListener('click', () => {
  $mast.classList.add('active')
  
})