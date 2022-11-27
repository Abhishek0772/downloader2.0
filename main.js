const inp = document.querySelector('input');
const btn = document.querySelector('button');
btn.addEventListener('click',e =>{
    e.preventDefault();
    fetchfile(inp.value);
});
function fetchfile(url){
    fetch(url).then(res=>res.blob()).then(file=>{
        let tempurl = URL.createObjectURL(file);
        let atag = document.createElement('a');
        atag.href = tempurl;
        console.log(tempurl)
        atag.download = 'abhishek_ka_jadu'
        document.body.appendChild(atag);
        atag.click();
        atag.remove();
    }).catch(()=>{
        alert('download filled')
    })
}