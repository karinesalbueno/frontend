
import { useDispatch } from 'react-redux';
import { cartActions } from 'src/store/cart-slice';

import * as Styled from '../styles/CardAside'

export default function CardItem(props) {
    const dispatch = useDispatch();

    let { title, quantity, price, id, image } = props.item;

    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    const addItemHandler = () => {
        dispatch(
            cartActions.addItemToCart({
                id,
                title,
                price,
            })
        );
    };

    return (
        <Styled.Card>
            <img
                src={image.toString()}
                alt="Image Product"
            />
            <h4>{title}</h4>

            <Styled.SumDiv>
                <small>Qtd:</small>
                <div>
                    <button onClick={removeItemHandler}>-</button>
                    <span className='border' />
                    <span className='quantity'>{quantity}</span>
                    <span className='border' />
                    <button onClick={addItemHandler}>+</button>
                </div>
            </Styled.SumDiv>

            <span className='price'>R${parseFloat(price)}</span>
        </Styled.Card>
    );
};
