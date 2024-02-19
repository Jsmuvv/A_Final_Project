import { Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/CartContxt"
import storeItems from "../data/items.json"
import { CurrencyFormat } from "../utilities/CurrencyFormat"
import Button from "react-bootstrap/Button"

type CartItemProps = {
    id:number
    quantity: number
}



export function CartItem({ id, quantity }: CartItemProps) {
    const {reduceCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction = "horizontal" gap = {2}>
            <img src= {item.imgUrl} style = {{ width: "125px", height:"75px", objectFit:"cover"}} />
            <div className = "me-auto">
                <div>
                    {item.name}{quantity > 1 && <span
                    className = "text-muted" style = {{fontSize: ".65rem"}}>x{quantity}</span>}
                </div>
                <div className = "text-muted" style ={{ fontSize: ".75rem" }}>
                {CurrencyFormat(item.price)}
                </div>
            </div>
            <div>
                {CurrencyFormat(item.price * quantity)}
            </div>
            <Button variant = "outline-danger" size="sm" onClick = {() => reduceCart(item.id)}>&times;</Button>
        </Stack>
    )
}