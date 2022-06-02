function newImage(imgFile, imgLeft, imgBottom) {
    let imgElement = document.createElement('img')
    imgElement.src = imgFile
    imgElement.style.position = 'fixed'
    imgElement.style.left = imgLeft
    imgElement.style.bottom = imgBottom
    document.body.append(imgElement)
}

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)