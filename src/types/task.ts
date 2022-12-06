import ICustomItem from "./custom-item";

interface ITask extends ICustomItem {
    task: string;
    time: string;
    completed: boolean;
}


export default ITask;