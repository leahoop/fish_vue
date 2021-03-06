import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
axios.defaults.baseURL = 'http://localhost:8889/api';   //配置接口地址



// if (process.env.NODE_ENV === 'development') {
//     axios.defaults.baseURL = 'http://dev.xxx.com'
// } else if (process.env.NODE_ENV === 'production') {
//     axios.defaults.baseURL = 'http://prod.xxx.com'
// }


//POST传参序列化(添加请求拦截器)
// axios.interceptors.request.use((config) => {
//     //在发送请求之前做某件事
//     if (config.method === 'post') {
//         config.data = qs.stringify(config.data);
//     }
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    //对响应数据做些事
    if (!res.data.success) {
        return Promise.resolve(res);
    }
    return res;
}, (error) => {
    return Promise.reject(error);
});

// 返回一个Promise(发送post请求)
export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

// 返回一个Promise(发送get请求)
export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: param})
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function fileUpload(fileobj) {
    let param = new FormData();
    // 上传文件对象 名称file与后台控制器参数要一致
    param.append('file', fileobj.file);
    return axios({
        method: 'post',
        // 上传地址
        url: '/upload',
        // 定义上传头
        headers: {'Content-Type': 'multipart/form-data'},
        data: param
    });
}

export default {
    fetchPost,
    fetchGet,
    fileUpload
}
