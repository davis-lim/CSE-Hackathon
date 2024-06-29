import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { User } from './models/userModel.js';
import { Task } from './models/taskModel.js';
import { Memory } from './models/memoryModel.js';
import { Item } from './models/itemModel.js';
import cors from 'cors';

const app = express();

// Middleware for parsing json
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors())

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Breh');
});

// Post new user
app.post('/user', async (request, response) => {
    try{
        const { username, password, pollen, tasks, memory } = request.body;
        if (
            !username ||
            !password ||
            !pollen
        ) {
            return response.status(400).send({
                message: 'Send all required fields: username, password, pollen',
            });
        }

        const newUser = {
            username: username,
            password: password,
            pollen: pollen,
        };

        const user = await User.create(newUser);

        return response.status(201).send(user);
    } catch(error) {
        console.log(error)
        response.status(500).send({ message: error.message });
    }
});

// Post new task
app.post('/user/tasks/task', async (request, response) => {
    try {
        const { taskname, description, isCompleted } = request.body;

        if (!taskname ||
             !description ||
              typeof isCompleted !== 'boolean'
            ) {
            return response.status(400).send({
                message: 'Send all required fields: taskname, description, isCompleted',
            });
        }

        const newTask = {
            taskname,
            description,
            isCompleted,
        }

        const task = await Task.create(newTask);

        return response.status(201).send(task);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

// Post new memory
app.post('/user/memories/memory', async (request, response) => {
    try {
        const { image, task } = request.body;

        if (!image ||
             !task
            ) {
            return response.status(400).send({
                message: 'Send all required fields: image, task',
            });
        }

        const newMemory = {
            image,
            task,
        }

        const memory = await Memory.create(newMemory);

        return response.status(201).send(memory);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

// Post new item
app.post('/user/items/item', async (request, response) => {
    try {
        const { itemname, description, pollenCost, isBought } = request.body;

        if (!itemname ||
             !description ||
             !pollenCost ||
             !isBought
            ) {
            return response.status(400).send({
                message: 'Send all required fields: itemname, description, pollenCost, isBought',
            });
        }

        const newItem = {
            itemname,
            description,
            pollenCost,
            isBought
        }

        const item = await Item.create(newItem);

        return response.status(201).send(item);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

// Get all user tasks
app.get('/user/tasks', async (request, response) => {
    try {
        const tasks = await Task.find({})

        return response.status(200).json({
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Get all user memories
app.get('/user/memories', async (request, response) => {
    try {
        const memories = await Memory.find({})

        return response.status(200).json({
            count: memories.length,
            data: memories
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Get all user items
app.get('/user/items', async (request, response) => {
    try {
        const items = await Item.find({})

        return response.status(200).json({
            count: items.length,
            data: items
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Delete Task
app.delete('/user/tasks/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Book.findbyIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'task not found'});
        }

        return response.status(200).send({message: 'task deleted successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})



mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        })
    }).catch((error) => {
        console.log(error);
    })

