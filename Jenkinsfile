pipeline {
  agent { label 'slave-01' }

  environment {
    BRANCH_NAME = 'main'
  }

  tools {
    nodejs "node 14"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: "${BRANCH_NAME}", url: 'https://github.com/chatreejs/smart-home.git'
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
}
