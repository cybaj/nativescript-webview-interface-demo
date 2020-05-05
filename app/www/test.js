(function(){
    var div = window.document.createElement('div')
    div.innerHTML = 'test'
    const body = window.document.getElementsByTagName('body')
    body.appendChild(div)
    window.document.alert('test')
})()
