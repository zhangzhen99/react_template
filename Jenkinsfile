pipeline {
agent none
stages {
 stage('check') {
     agent any
     steps {
        sh 'pwd'
     }
}
stage('build') {
    // agent {
    //     docker {
    //         image 'node:8'
    //         args '-p 3000:3000 -u root'
    //         }
    //     }

    agent any
    steps {
     sh '''
            node -v
            npm -v

            git add .
            git reset --hard HEAD

            BUILD_TYPE='test'
            if [ "${BRANCH_NAME}" = "prod" ] ; then
              BUILD_TYPE="build"
            fi
            echo $BUILD_TYPE

            echo "开始执行编译打包..."
            npm install --registry=https://registry.npm.taobao.org --unsafe-perm=true --allow-root
            npm run $BUILD_TYPE
            echo "前端代码编译打包完成!"

    '''
     }
}

stage('build image') {
    agent any
    steps {
        sh '''
            source ~/.bash_profile
            source /etc/profile
            current=`date "+%Y%m%d%H%M%S"`
            version=smartmi-ci-${BRANCH_NAME}-$current-${BUILD_NUMBER}-${GIT_COMMIT}
            docker login -u ${DOCKER_USER} -p ${DOCKER_PWD} ${DOCKER_REGISTRY}
            docker build --pull -t ${DOCKER_REGISTRY}/smartmi-${BRANCH_NAME}/${PROJECT_NAME}:${version} ${1:-"."}
            docker push ${DOCKER_REGISTRY}/smartmi-${BRANCH_NAME}/${PROJECT_NAME}:${version}
        '''
       }
 }

stage('clean image') {
    agent any
    steps {
        sh '''
            sudo docker rmi $(docker images | grep "^${DOCKER_REGISTRY}/smartmi-${BRANCH_NAME}/${PROJECT_NAME}" | awk '{print $3}')'''
          }
    }
 }

environment {
 PROJECT_NAME = 'zhimi-bi'
 DOCKER_USER = '2000090957'
 DOCKER_PWD = 'zhimi.com'
 DOCKER_REGISTRY = 'hub.kce.ksyun.com'
 }
}
