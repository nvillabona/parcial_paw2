import { useDispatch } from 'react-redux';
import { setError, setTasks, setLoading } from '../store/TaskSlice';

const useTasks = () => {
    const dispatch = useDispatch();

    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

    const getTasks = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            dispatch(setTasks(data));
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(setError());
        }
    }
    return {
        getTasks
    }

}

export default useTasks