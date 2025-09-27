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
                bat 'docker build -t "davidsalim/7.3_devops_pipeline_jenkins:%BUILD_NUMBER%" .'
                bat 'echo Built image: davidsalim/7.3_Devops_Pipeline_Jenkins:%BUILD_NUMBER%'
            }
        }

        stage('Test') {
            steps {
                bat 'docker run --rm -v "%CD%":/app -w /app node:20-alpine sh -lc "npm ci && npm test"'
            }
        }
    }
}
