import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/CartContxt";
import { CartItem } from "./CartItem";
import { CurrencyFormat } from "../utilities/CurrencyFormat";
import storeItems from "../data/items.json"


type ShoppingCartProps = {
    isOpen: boolean
}





export function ShoppingCart({isOpen}: ShoppingCartProps){
    const{ latchCart,cartItems } = useShoppingCart()

    return (
    <Offcanvas show = {isOpen} onHide={ latchCart} placement = "end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item => (
                    <CartItem key= {item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total {CurrencyFormat(cartItems.reduce((total,cartItem)=> {
                            const item = storeItems.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        },0)
                        )}
                    </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
    )
}
