import './ManageQuiz.scss'
import Select from 'react-select';
import { LuImagePlus } from "react-icons/lu";
import { useState } from 'react';

const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' },
];

const ManageQuiz = (props) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('EASY')
    const [imageQuiz, setImageQuiz] = useState(null);
    const [previewImageQuiz, setPreviewImageQuiz] = useState("");

    const handleUploadImageQuiz = (e) => {
        if (e.target && e.target.files && e.target.files[0]) {
            setPreviewImageQuiz(URL.createObjectURL(e.target.files[0]))
            setImageQuiz(e.target.files[0])
        } else {
            // setPreviewImage("")
        }
    }
    return (
        <div className="quiz-container">
            <div className="title">
                Manage Quizzes
            </div>
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
                                value={type}
                                // onChange={this.handleChange}
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
                    </fieldset>
                </div>
            </div>
            <div className="list-detail">
                table
            </div>
        </div>
    )
}

export default ManageQuiz

