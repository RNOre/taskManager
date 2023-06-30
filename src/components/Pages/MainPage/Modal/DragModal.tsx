import classes from "./DragModal.module.css"
import {useDispatch} from "react-redux";
import {changePriority} from "../../../../store/reducers/taskReducer.ts";

interface IDragModal {
    currentId: string,
    gold: boolean
    closeDragModal: () => void
}

const DragModal = ({currentId, gold, closeDragModal}:IDragModal) => {


    const dispatch = useDispatch();

    function dragLeaveHandler(e) {
        if (e.target.className.includes("gold")) {
            dispatch(changePriority(currentId));
        } else if (e.target.className.includes("grey")) {
            dispatch(changePriority(currentId))
        }
        closeDragModal();
    }

    return (
        <div draggable={true} className={` ${classes.modal} ${gold ? classes.gold : " grey"} Dragmodal`}
             onDragLeave={(e) => dragLeaveHandler(e)}>
        </div>
    )
}

export default DragModal;