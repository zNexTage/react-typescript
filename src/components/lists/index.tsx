import React from "react";

// Function Components -> Forma moderna de escrever componentes em React. 

const List = (): JSX.Element => {
    const tasks = [{
        task: "React",
        time: "02:00"
    }, {
        task: "Javascript",
        time: "01:00"
    }, {
        task: "Typescript",
        time: "03:00"
    }];

    return (
        <aside>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {
                    tasks.map(({ task, time }, index) => (
                        <li key={index}>
                            <h3>
                                {task}
                            </h3>
                            <span>
                                {time}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}

export default List;