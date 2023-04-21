pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                sh "rm -rf node_modules"
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "rm -rf /var/www/react-app"
                sh "cp -r build/ /var/www/react-app/"
            }
        }
    }
}
