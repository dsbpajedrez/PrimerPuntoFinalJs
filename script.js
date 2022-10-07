window.addEventListener('load',()=>{
    const submit = document.querySelector('.send')
    const reset = document.querySelector('.reset')
    const inputs = document.querySelectorAll('input')
    submit.addEventListener('click',event=>{
        event.preventDefault()
        let vacio ='not empty'
        let field;
       for(let i=0; i<inputs.length;i++){
        if(inputs[i].value==''){
            vacio=''
            field=inputs[i].name;
            i=inputs.length
        }
       }
        if(vacio!=''){
            inputs.forEach(item=>{
                console.log(item.value);
            })
        }else{
            alert(`Falta el campo: ${field}`)
        }
    })
    reset.addEventListener('click',event=>{
        event.preventDefault()
        inputs.forEach(item=>{
            item.value=''
            console.clear();
        })
    })

})