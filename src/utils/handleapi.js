import axios from 'axios'
import Swal from 'sweetalert2';


const baseurl = 'http://localhost:5000'

const getAllTodo = (settodo) => {
    axios.get(baseurl)
        .then(({ data }) => {
            console.log('data-->', data)
            settodo(data)
        })
}

const addtodo = (text, settext, settodo) => {

    if (text == "" || text == false) return Swal.fire("Input field shouldn't be empty....");
        

    axios
        .post(`${baseurl}/save`, { text })
        .then((data) => {
            console.log(data, "front end")
            settext('')
            getAllTodo(settodo)
        })
}

const updatetodo = (todoId, text, settodo, settext, setisupdating) => {

    axios.post(`${baseurl}/update`, { _id: todoId, text })
        .then((data) => {
            settext('')
            setisupdating(false)
            getAllTodo(settodo)
        })
}


const deletetodo = (_id, settodo) => {
    axios.post(`${baseurl}/delete`, { _id })
        .then((data) => {
            getAllTodo(settodo)
        })

        Swal.fire("Deleted successfully");

}


export { getAllTodo, addtodo, updatetodo, deletetodo }