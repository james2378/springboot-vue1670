const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot1i659/",
            name: "springboot1i659",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot1i659/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "智慧党建系统设计与实现"
        } 
    }
}
export default base
