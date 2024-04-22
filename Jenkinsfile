pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t yaparathna .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 yaparathna'
            }
        }
    }
}