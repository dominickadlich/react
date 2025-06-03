function TaskActionLocal() {
    function StoreActionTask(formData) {
        const task = {
            title: formData.get('title'),
            body: formData.get('body'),
            dueData: formData.get('date'),
        };
        localStorage.setItem('daily-task', JSON.stringify(task))
        console.log(JSON.stringify(task))
    }

    return (
        <form action={StoreActionTask}>
            <p>
                <label htmlFor="title">Title</label>
                <input type="title" id="title" name="title" />
            </p>
            <p>
                <label htmlFor="body">Body</label>
                <input type="body" id="body" name="body" />
            </p>
            <p>
                <label htmlFor="date">Due Date</label>
                <input type="date" id="date" name="date"/>
            </p>
            <button className="actions">Add Task</button>
        </form>
    );
}

export default TaskActionLocal;