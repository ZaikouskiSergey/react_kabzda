import React, {ChangeEvent, useCallback, useMemo, useState} from "react";

export default {
    title: "useMemo"
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)
    const onChangeAHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setA(+e.currentTarget.value)
    }
    const onChangeBHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setB(+e.currentTarget.value)
    }
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return (
        <>
            <input type={"number"} value={a} onChange={onChangeAHandler}/>
            <input type={"number"} value={b} onChange={onChangeBHandler}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>


        </>
    )

}

const UsersSecret = (props: { users: Array<string> }) => {
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Petr', 'Vasya', 'Kolya', 'Sergey'])
    const onClickButton = () => {
        setCounter(counter + 1)
    }
    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [users])
    return (
        <>
            <button onClick={onClickButton}>+</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}

export const LikeUseCallBack = () => {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])
    const onClickButton = () => {
        setCounter(counter + 1)
    }
/*    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [books])*/



    const memoizedAddBook = useMemo(()=>{
        return  () => {
            const newBooks = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(()=>{
            const newBooks = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newBooks)

    }, [books])
    return (
        <>
            <button onClick={onClickButton}>+</button>
            {counter}
            <Book addBook={memoizedAddBook2}/>
        </>
    )
}
type BookSecretPropsType = {
    addBook: () => void

}
const BooksSecret = (props:BookSecretPropsType) => {
    console.log('BooksSecret')
    return (
        <div>
            <button onClick={() => {
                props.addBook()
            }}>add book
            </button>
        </div>
    )
}
const Book = React.memo(BooksSecret)