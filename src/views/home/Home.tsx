import styles from './home.module.less';
import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import sign from '@assets/images/sign.png';
import { Input, Button } from 'antd';
import swal from 'sweetalert2';
import API from '../../services/api';
import http from '../../services/axios';
import * as Hmall from '../../utils/util';

/**
 * 路由参数 Props 类型声明
 */
interface RouterProps extends RouteComponentProps<any> {}

const Home = (props: RouterProps) => {

    useEffect(() => {

    }, []);

    return (
        <div className={styles.home}>
            
        </div>
    );
};

export default Home;
