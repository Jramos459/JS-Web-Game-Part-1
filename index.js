
// refactor code using one function
function newImage(url, left, bottom){   // created a function called newImage
    let object = document.createElement('img')  //creates the image with the name object
    object.src = url  // specifies the source for the url image
    object.style.position = 'fixed'  //we give the object a fixed position
    object.style.left = left + 'px' // we give the object a left direction in pixels
    object.style.bottom = bottom + 'px' // we give the onject a bottom direction in pixels 
    document.body.append(object) // places the object on the screen
    return object
}

function newItem(url, left, bottom){   // defined a function called newItem
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {  // added dblclick to event listener
        object.remove()
    })
}

// coming out of the assets folder
newImage('assets/green-character.gif', 175, 260)
newImage('assets/tree.png', 80, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 500, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 200, 425)
newImage('assets/pine-tree.png', 200, 230)
newImage('assets/pine-tree.png', 220, 20)
newImage('assets/boulder.png', 600, 60)
newImage('assets/red-character.gif', 400, 50)
newImage('assets/rock.png', 180, 22)
newImage('assets/tree.png', 325, 425)


newItem('assets/sword.png', 525, 405)
newItem('assets/shield.png', 80, 125)
newItem('assets/staff.png', 280, 400)