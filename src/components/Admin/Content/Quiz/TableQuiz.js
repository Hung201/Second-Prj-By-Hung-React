import { useEffect, useState } from "react"
import { getAllQuizForAdmin } from "../../../../services/apiServices";

const TableQuiz = (props) => {
    const [listQuiz, setListQuiz] = useState([]);
    const { listQuizzes } = props

    useEffect(() => {
        fetchQuiz()
    }, [])

    const fetchQuiz = async () => {
        let res = await getAllQuizForAdmin();
        if (res && res.EC === 0) {
            setListQuiz(res.DT)
        }
    }
    return (

        <>
            <div>List Quizzes: </div>
            <table className="table table-hover table-bordered mt-2 my-2">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listQuizzes && listQuizzes.map((item, index) => {
                        return (
                            <tr key={`table-quiz-${index}`}>
                                <th >{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.difficulty}</td>
                                <td style={{ display: "flex", gap: "15px" }}>
                                    <button className="btn btn-warning" onClick={() => props.handleClickBtnUpdateQuiz(item)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => props.handleClickBtnDeleteQuiz(item)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </>
    )
}

export default TableQuiz