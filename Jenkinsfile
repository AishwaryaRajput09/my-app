pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                sh "sudo rm -rf node_modules"
                sh "sudo npm install --force"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudorm -rf /var/www/react-app"
                sh "cp -r build/ /var/www/react-app/"
            }
        }
    }
}
