import React, { useRef, useEffect, useCallback, useState } from 'react';
import swal from 'sweetalert2';
import API from '../services/api';
import http from '../services/axios';

export const cookie = {
    remove(key: string) {
        let self = this;
        const expires: any = new Date();
        expires.setTime(expires.getTime() - 1);
        const value = self.get(key);
        document.cookie = `${key}=${value};expires=${expires.toGMTString()};path=/`;
    },

    get(key: string) {
        const pattern = new RegExp(`${key}=([^=;]+)`);
        if (document.cookie.match(pattern)) {
            return RegExp.$1;
        } else {
            return '';
        }
    },

    set(key: string, value: string, expireDays = 365, domain?: string) {
        const expires: any = new Date();
        expires.setTime(expires.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let str = `${key}=${escape(value)};expires=${expires.toGMTString()};path=/;`;
        if (domain) {
            str += `domain=${domain};`;
        }
        document.cookie = str;
    },
};

/**
 * 根据 props.location.search 和 key 获取 value
 * @param {string} key
 * @param {string} query
 * @returns {string} query 内 key 映射的 value值
 */
export function getValueFromQuery(key, query) {
    const encodeQuery = decodeURIComponent(query);
    const match = encodeQuery.match(new RegExp('(\\?|&)' + key + '=(.+?)(&|$)'));
    if (match && match[2]) {
        return match[2];
    }
    return false;
}
