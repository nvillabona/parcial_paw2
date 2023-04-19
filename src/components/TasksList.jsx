import React, { useEffect, useState } from 'react'
import useTasks from '../hooks/useTasks'
import TaskCard from './TaskCard';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress';


const TasksList = () => {
    const { getTasks } = useTasks();
    
    const tasks = useSelector((state) => state.tasks.tasks)
    const isLoading = useSelector((state) => state.tasks.isLoading)

    useEffect(() => {
        getTasks()

    }, []);

    return (
        <>
        <Typography variant="h2" color="white">
            Checklist
        </Typography>
        {
            isLoading ? 
            <CircularProgress color="inherit" />
            :
            tasks.map(task =>(
                <TaskCard 
                    key={task.id} 
                    text={task.title}
                    isChecked={task.completed}
                />
            ))
        }
        </>
    )
}

export default TasksList