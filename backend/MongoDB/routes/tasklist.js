const Task = require("../models/task");

/* Este es el controlador */

class TaskList {

    /**
     * Manejar APIs y despliega y maneja los tasks
     * @param {Task} taskObject 
     */

    constructor(taskObject) {
        this.taskObject = taskObject;
    }

    async showTasks(req, res) {
        const querySpec = {
            query: "SELECT * FROM root r WHERE r.completed=@completed",
            parameter: {
                name: "@completed",
                value: false
            },
        }

        const items = await this.taskObject.find(querySpec);
        res.render("index", {
            title: "Mi lista de pendientes",
            task: items
        });

    }

    async addTask(req, res) {
        const item = req.body;
        await this.taskObject.addItem(item);
        res.redirect("/");
    }


    async completeTask(req, res) {
        const completed = Object.keys(req.body); /* Obtener las llaves dentro de body */
        const tasks = [];

        completed.forEach(task => {
            tasks.push(this.taskObject.updateItem(task));
        });

        await Promise.all(tasks);

        res.redirect("/");
    }
}

module.exports = TaskList;