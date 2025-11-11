import GoalItem from "./GoalItem"

function GoalList() {
    return (
        <ul>
            <GoalItem title="Learn React for projects and products!">
                I want to ensure that I learn the most from this book! 
                I want to create fantastic products that add value to society!
            </GoalItem>
            <GoalItem title="Practice what I learned!">
                Reading and learning is fun and helpful but I can only master a topic, 
                if I really work with it! That's why I want to do all the exercises throughout this book. 
                It will help me practice what I've learned!
            </GoalItem>
            <GoalItem title="Motivate Continuous Learning!">
                As a developer, learning never ends. 
                I want to ensure that I enjoy learning and that I'm motivated to dive into 
                advanced (React) resources after finishing this book.
            </GoalItem>
        </ul>
    );
}

export default GoalList;