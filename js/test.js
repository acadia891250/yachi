function doFirst(){
    let btn = document.getElementById("btn");
    let wbk = document.getElementById("wbk");
    btn.addEventListener('click',button);

}
function button(){
    // if(wbk.value.length != 0){

    // }
    // else{
    // }
    alert("请输入内容");
}
window.addEventListener('load',doFirst);