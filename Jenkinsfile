@Library("Shared") _
pipeline{
    agent any
    stages{
        stage("greet"){
            steps{
                script{
                    hello()
                }
            }
        }
        stage("cloning the code"){
            steps{
                script{
                    clone("https://github.com/nitin-panwar-6963/student-management-react.git" , "main")
                }
            }
        }
        stage("build base image"){
            steps{
                script{
                   build("student-react")
                }
            }
        }
        stage("deploy"){
            steps{
                script{
                    deploy()
                }
            }
        }
    }
}
