function requestMethod(par1, par2, par3, callback) {

    var xhr = new XMLHttpRequest();

    xhr.open(par1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + par2);

    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    xhr.send(par3);

    xhr.onreadystatechange = function () {
        //xhr.readyState == 4 代表数据返回完成
        //xhr.status == 200   代表数据返回成功
        if (xhr.readyState == 4 & xhr.status == 200) {
            var responseData = JSON.parse(xhr.responseText);
            var returnStr = responseData.data;
            callback(returnStr);
        }
    }
}



