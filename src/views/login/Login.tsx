import styles from './login.module.less';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import swal from 'sweetalert2';
import { mobilephone_regx } from '../../config/config';
import API from '../../services/api';
import http from '../../services/axios';
import * as Hmall from '../../utils/util';
import { RootDispatch, RootState } from '@src/store';
import { useSelector, useDispatch } from 'react-redux';

/**
 * 路由参数 Props 类型声明
 */
interface RouterProps extends RouteComponentProps<any> {}

const Login = (props: RouterProps) => {
    const dispatch: RootDispatch = useDispatch();
    const { login } = dispatch;

    const count = useSelector((state: RootState) => {
        const {
            login: { count },
        } = state;
        return count;
    });

    return (
        <div className={styles.login}>
            <p
                className={styles.btn}
                onClick={() => {
                    login.INCREMENT();
                }}
            >
                Add Btn
            </p>
            <p>count : {count}</p>
        </div>
    );
};

export default Login;
