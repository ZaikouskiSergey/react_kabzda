import React, {useState} from "react";

export default {
    title: "React.memo demo"
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>

}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('called')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Petya', 'Vasya', 'Kolya'])
    const onClickButton = () => {
        setCounter(counter + 1)
    }
    return (
        <>
            <button onClick={onClickButton}>+</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )

}