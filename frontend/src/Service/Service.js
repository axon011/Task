import axios from 'axios'
const ADDTASK_APi='http://localhost:8080/loader/';
const TASK_REST_API='http://localhost:8080/loader/';
class Service
{
    getTask()
    {
        return axios.get(TASK_REST_API);

    }
    add(task)
    {
        return axios.post(ADDTASK_APi,task);
}

}
export default new Service()