pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build (Docker image)') {
            steps {
                bat 'docker build -t "7.3_Devops_Pipeline_Jenkins:%BUILD_NUMBER%" .'
                bat 'echo Built image: 7.3_Devops_Pipeline_Jenkins:%BUILD_NUMBER%'
            }
        }
    }
}
