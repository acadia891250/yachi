function doFirst(){
    document.getElementById('file').onchange = changeImg;
}


// change這個event只有代表改變，並不代表有檔案
function changeImg(){                   
    let file = this.files[0];   // this代表<input id="file">  files.length == 1 是長度為一的陣列
    console.log(file);
    let reader = new FileReader();   
    // new FileReader(); 用途是用來讀取檔案，標準的API
    // 如果要FileReader去讀檔案，必須給他一個檔案Object。
    // 它拿到檔案Object後會驅動onload事件
    // 給它URL的方式就是用 readAsDataURL( /*裡面放檔案Object*/ )
    // 所以我們才會放入 reader.readAsDataURL(input.files[0]);
    // onload事件讀出來的會是一個接近二進位檔案，所以可以直接給<img>
    // 所以這邊直接改變img 的 src 就可以了
    reader.readAsDataURL(file);       
    reader.onload = function () {    //成功讀取文件

    let img = document.getElementById("headImg");
    img.src = this.result;      //或 img.src = this.result / e.target == this
    img.style.width = `200px`;
    img.style.height = `200px`;
    }
}






window.addEventListener('load',doFirst);