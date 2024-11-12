import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteQuiz } from '../../../../services/apiServices';

const ModalDeleteQuiz = (props) => {
    const { show, setShow, dataDelete } = props;

    const handleClose = () => setShow(false);

    const handleSubmitDeleteQuiz = async () => {
        let res = await deleteQuiz(dataDelete.id);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            handleClose();
            await props.fetchListQuizzes();
        }
        if (res && res.EC !== 0) {
            toast.error(res.EM);
        }
    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm delete the quiz?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this quiz. Quiz: <b>{dataDelete && dataDelete.name ? dataDelete.name : ''}</b> </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitDeleteQuiz()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteQuiz;