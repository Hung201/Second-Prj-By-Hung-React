import './ManageQuiz.scss'
import Select from 'react-select';
import { useState, useEffect } from 'react';
import { LuImagePlus } from "react-icons/lu";
import { postCreateNewQuiz, getAllQuizForAdmin } from '../../../../services/apiServices';
import { toast } from 'react-toastify';
import TableQuiz from './TableQuiz';
import Accordion from 'react-bootstrap/Accordion';
import ModalUpdateQuiz from './ModalUpdateQuiz';
import ModalDeleteQuiz from './ModalDeleteQuiz';
import QuizQA from './QuizQA';
import AssignQuiz from './AssignQuiz';


const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' },
];

const ManageQuiz = (props) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('EASY')
    const [image, setImage] = useState(null);
    const [previewImageQuiz, setPreviewImageQuiz] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);

    const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
    const [showModalUpdateQuiz, setShowModalUpdateQuiz] = useState(false);

    const [dataUpdate, setDataUpdate] = useState({})
    const [dataDelete, setDataDelete] = useState({})

    const [listQuizzes, setListQuizzes] = useState([])

    useEffect(() => {
        fetchListQuizzes();
    }, []);
    const fetchListQuizzes = async () => {
        let res = await getAllQuizForAdmin();
        if (res.EC === 0) {
            setListQuizzes(res.DT)
        }

    }
    const handleUploadImageQuiz = (e) => {
        if (e.target && e.target.files && e.target.files[0]) {
            setPreviewImageQuiz(URL.createObjectURL(e.target.files[0]))
            setImage(e.target.files[0])
        } else {
            // setPreviewImage("")
        }
    }

    const handleSubmitQuiz = async () => {
        //validate
        if (!name || !description) {
            toast.error('Name/Description is required');
            return
        }
        let res = await postCreateNewQuiz(description, name, type?.value, image)
        if (res && res.EC === 0) {
            toast.success(res.EM)
            setName('')
            setDescription('')
            setType('')
            setImage(null)
            setPreviewImageQuiz('')
            await fetchListQuizzes();
        }
    }
    const handleClickBtnUpdateQuiz = (quiz) => {
        setShowModalUpdateQuiz(true)
        setDataUpdate(quiz);
    }
    const handleClickBtnDeleteQuiz = (quiz) => {
        setShowModalDeleteQuiz(true)
        setDataDelete(quiz)
        console.log(quiz)
    }
    const resetUpdateData = () => {
        setDataUpdate({});
    }
    return (
        <div className="quiz-container">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Manage Quizzes</Accordion.Header>
                    <Accordion.Body>
                        <div className="add-new">
                            <div className="form-floating">
                                <fieldset className='border rounded-3 p-3 '>
                                    <legend className='float-none w-auto px-3'>Add new Quiz</legend>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <label for="floatingInput">Name</label>
                                    </div>
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                        <label for="floatingPassword">Description</label>
                                    </div>
                                    <div className='my-3'>
                                        <Select
                                            defaultValue={type}
                                            onChange={setType}
                                            options={options}
                                            placeholder={'Quiz type'}
                                        />
                                    </div>
                                    <div className='more-actions'>
                                        <label className="form-label label-upload-quiz" htmlFor='labelUpload'>
                                            <LuImagePlus />Upload File Image
                                        </label>
                                        <input
                                            type='file'
                                            hidden
                                            id='labelUpload'
                                            onChange={(e) => handleUploadImageQuiz(e)}
                                        />

                                    </div>
                                    <div className="img-preview">
                                        {previewImageQuiz ? <img src={previewImageQuiz} />
                                            :
                                            <span>Preview Image</span>
                                        }
                                    </div>
                                    <div className='mt-3'>
                                        <button
                                            className='btn btn-warning'
                                            onClick={() => handleSubmitQuiz()}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div className="list-detail">
                            <TableQuiz
                                handleClickBtnUpdateQuiz={handleClickBtnUpdateQuiz}
                                handleClickBtnDeleteQuiz={handleClickBtnDeleteQuiz}
                                listQuizzes={listQuizzes}
                            />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Update Q/A Quizzes</Accordion.Header>
                    <Accordion.Body>
                        <QuizQA />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Assign to Users</Accordion.Header>
                    <Accordion.Body>
                        <AssignQuiz />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <ModalUpdateQuiz
                show={showModalUpdateQuiz}
                setShow={setShowModalUpdateQuiz}
                dataUpdate={dataUpdate}
                resetUpdateData={resetUpdateData}
                fetchListQuizzes={fetchListQuizzes}
            />
            <ModalDeleteQuiz
                show={showModalDeleteQuiz}
                setShow={setShowModalDeleteQuiz}
                dataDelete={dataDelete}
                fetchListQuizzes={fetchListQuizzes}
            />
        </div>
    )
}

export default ManageQuiz

