import { useNavigate } from 'react-router'
import { useEffect } from 'react'

const ModalWarning = ({ mutationParams, mutation, navloc }) => {
    const [deleteMutation, deleteResult] = mutation()

    const navigate = useNavigate()

    const handleDelete = () => {
        deleteMutation(mutationParams)
    }

    useEffect(() => {
        if (deleteResult.isSuccess) {
            navigate(navloc)
        }
    }, [deleteResult])

    return (
        <div>
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel"
                            >
                                Confirmation
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                data-bs-dismiss="modal"
                                onClick={handleDelete}
                                type="button"
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalWarning
