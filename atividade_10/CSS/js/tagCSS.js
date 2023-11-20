document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()
    elemento.style.borderColor = '#616161'

    const label = document.createElement('label')
    label.style.backgroundColor = '#616161'
    label.innerHTML = tagName
    elemento.insertBefore(label,elemento.childNodes[0])
    

});