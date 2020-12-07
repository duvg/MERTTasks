import {
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    STATUS_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    UNSELECT_TASK
} from '../../types';


export default (state, action) => {

    switch(action.type) {

        case TASKS_PROJECT:
            return {
                ...state,
                tasksproject: action.payload

            }
        case ADD_TASK:
            return {
                ...state,
                tasksproject: [ action.payload, ...state.tasksproject ],
                errorTask: false
            }
        case VALIDATE_TASK:
            return {
                ...state,
                errortask: true
            }
        case DELETE_TASK:
            {
                return {
                    ...state,
                    tasksproject: state.tasksproject.filter(task => task._id !== action.payload)
                }
            }
        case UPDATE_TASK:
        case STATUS_TASK:
            return {
                ...state,
                tasksproject: state.tasksproject.map(task => task.id === action.payload.id ? action.payload : task)
            }
        case CURRENT_TASK:
            return {
                ...state,
                currenttask: action.payload
            }
        case UNSELECT_TASK:
            return {
                ...state,
                currenttask: null
            }

        default:
            return state;
    }

}