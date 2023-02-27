import styles from './login.module.less';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import swal from 'sweetalert2';
import { mobilephone_regx } from '../../config/config';
import API from '../../services/api';
import http from '../../services/axios';
import * as Hmall from '../../utils/util';

/**
 * 路由参数 Props 类型声明
 */
interface RouterProps extends RouteComponentProps<any> {}

const Login = (props: RouterProps) => {

    useEffect(() => {

    }, []);

    return (
        <div className={styles.login}>
            
        </div>
    );
};

export default Login;
