import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from 'axios';
import { message } from 'antd';
import { cookie } from '../utils/util';
import history from '@store/history';
import * as Hmall from '../utils/util';

axios.interceptors.request.use(
    config => {
        config.timeout = 30000;
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

interface Headers {
    'Content-Type'?: string;
    authorization?: string;
    uuid?: string;
}

function getHeader(headers?: Headers) {
    headers = headers || {};
    const access_token = cookie.get('access_token');
    if (access_token) {
        headers.authorization = 'bearer ' + access_token;
    }
    headers.uuid = cookie.get('userUuid');
    return headers;
}

const http = {
    async get(url, params = {}) {
        const { data } = await this.request({
            url,
            method: 'get',
            params: params,
            headers: getHeader(),
        });
        if (data && data.code !== 500) {
            return data;
        }
        return null;
    },

    async post(url, params = {}) {
        const { data } = await this.request({
            url,
            method: 'post',
            data: params,
            headers: getHeader({ 'Content-Type': 'application/json' }),
        });
        if (data && data.code !== 500) {
            return data;
        }
        return null;
    },

    async postForm(url, params = {}) {
        const formData = new FormData();
        console.log('postForm ', params);
        Object.entries(params).map((item, i) => {
            console.log('item ', item, item[0], item[1]);

            formData.append(item[0], item[1]);
        });
        console.log('formData ', formData);
        //formData.append("uploadFile",file,file.name);
        const { data } = await this.request({
            url,
            method: 'post',
            data: formData,
            headers: getHeader({ 'Content-Type': 'multipart/form-data' }),
        });
        if (data && data.code !== 500) {
            return data;
        }
        return null;
    },

    async postFormData(url, params: any = {}) {
        const formDatas = new FormData();
        console.log('postFormData ', params);
        params.uploadFiles.forEach(item => {
            console.log(item.file);
            formDatas.append('uploadFiles', item.file);
        });
        console.log(' formDatas ', formDatas.getAll('uploadFiles'));
        const { data } = await this.request({
            url,
            method: 'post',
            data: formDatas,
            headers: getHeader({ 'Content-Type': 'multipart/form-data' }),
            transformRequest: [
                function() {
                    return formDatas;
                },
            ],
        });
        if (data && data.code !== 500) {
            return data;
        }
        return null;
    },
    async request(config) {
        let result = axios({
            ...config,
        });

        if ((await result).data.msgCode === 'SESSION_EXPIRED') {
            setTimeout(() => {
                Hmall.cookie.remove('access_token');
                Hmall.cookie.remove('userUuid');
                Hmall.cookie.remove('smartmiId');
                history.replace('/login');
            }, 1000);
        }
        // if (result?.status !== 200) {

        //     //console.error('请求直接失败', config)
        // }
        return result;
    },
};

export default http;
