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
                bat 'docker run --rm -v "%WORKSPACE%":/app -v /app/node_modules -w /app node:20-alpine sh -lc "npm ci && npm test"'
            }
        }
        
        stage('Code Quality') {
            steps {
                bat 'docker run --rm -v "%WORKSPACE%":/app -v /app/node_modules -w /app node:20-alpine sh -lc "npm ci && npm run lint:ci"'
            }
            post {
                always {
                archiveArtifacts artifacts: 'reports/eslint-junit.xml', fingerprint: true
                junit allowEmptyResults: true, testResults: 'reports/eslint-junit.xml'
                }
            }
        }

        stage('Security') {
            steps {
                bat 'docker run --rm -v "%WORKSPACE%":/app -v /app/node_modules -w /app node:20-alpine sh -lc "npm ci && npm run audit:ci"'
            }
            post {
                always {
                archiveArtifacts artifacts: 'reports/npm-audit.json', fingerprint: true
                }
            }
        }
    }
}
