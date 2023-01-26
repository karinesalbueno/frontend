import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "src/store/counter";

interface ICounter {
    counter: { counter: number };
}

export default function Button() {

    const dispatch = useDispatch();
    const counter = useSelector((state: ICounter) => state.counter.counter);

    const onAddHandler = () => {
        dispatch(counterActions.increment());
    };

    const onRemoveHandler = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            {counter}

            <button onClick={onAddHandler}>
                adicionar
            </button>

            <button onClick={onRemoveHandler}>
                remover
            </button>
        </div>
    )
}
