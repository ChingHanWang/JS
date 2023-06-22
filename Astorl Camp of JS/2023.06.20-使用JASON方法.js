const API = "https://jsonplaceholder.typicode.com/photos?_limit=20"
const gallary = document.querySelector("#gallery")

fetch(API)
  .then((resp) => {
    return resp.json()
  })
  .then((photos) => {
    // 字串，變數 組合

    const getURL = (photo) => photo.thumbnailUrl
    const buildImage = (acc, url) => acc + `<img src="${url}" />`

    const str = photos.map(getURL).reduce(buildImage, "")

    

    // let str = ""
    // photos.forEach((photo) => {
    //   str = str + `<img src="${photo.thumbnailUrl}" />`
    //   // gallary.insertAdjacentHTML("beforeend", str)
    gallary.insertAdjacentHTML("beforeend", str)
    // })
    // gallary.innerHTML = str

    // photos.forEach((photo) => {
    // const el = document.createElement("img")
    // const url = photo.thumbnailUrl
    // el.setAttribute("src", url)

    // gallary.appendChild(el)
    // })

  })

