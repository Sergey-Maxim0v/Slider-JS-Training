const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const poetry = document.querySelector('.poetry')
const pictures = document.querySelector('.pictures')
const pictureCount = pictures.querySelectorAll('.picture').length
const container = document.querySelector('.container')

let activePictureIndex = 0

poetry.style.top = `-${(pictureCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
  changePicture('up')
})

downBtn.addEventListener('click', () => {
  changePicture('down')
})

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp') {
    changePicture('up')
    upBtn.classList.add('buttonKey')
  } else if (event.key === 'ArrowDown') {
    changePicture('down')
    downBtn.classList.add('buttonKey')
  }
})

document.addEventListener('keyup', event => {
  if (event.key === 'ArrowUp') {
    upBtn.classList.remove('buttonKey')
  } else if (event.key === 'ArrowDown') {
    downBtn.classList.remove('buttonKey')
  }
})

document.addEventListener('wheel', event => {
    if (event.deltaY < 0) {
      changePicture('up')
      upBtn.classList.add('buttonKey')
    } else if (event.deltaY > 0) {
      changePicture('down')
      downBtn.classList.add('buttonKey')
    }
    setTimeout(()=>{
      upBtn.classList.remove('buttonKey')
      downBtn.classList.remove('buttonKey')
    }, 200)
})

function changePicture(direction) {
  if (direction === 'up') {
    activePictureIndex++
    if(activePictureIndex === pictureCount) {
      activePictureIndex = 0
    }
  } else if (direction === 'down') {
    activePictureIndex--
    if (activePictureIndex < 0){
      activePictureIndex = pictureCount - 1
    }
  }

  const height = container.clientHeight

  pictures.style.transform = `translateY(-${activePictureIndex * height}px)`

  poetry.style.transform = `translateY(${activePictureIndex * height}px)`
}