import { Card } from "react-bootstrap"
import { CurrencyFormat } from "../utilities/CurrencyFormat"
import Button from "react-bootstrap/Button"
import { useShoppingCart } from "../context/CartContxt"

type StoreItemProps = {
    id:number
    price: number,
    name: string
    imgUrl: string
}








export function StoreItem ({id, price,name,imgUrl}: StoreItemProps){
    const {getItemQuantity,AddToCartQauntity, reduceCart,removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <Card className = "h-100 "  style={{ backgroundColor: 'grey', color: 'white' }}>
            <Card.Img 
            variant = "top" 
            src = {imgUrl} 
            height="200px" 
            style = {{ objectFit:"cover" }} />
                <Card.Body className = "d-flex flex-column">
                    <Card.Title className = "d-flex justify-content-between align-items-baseline mb-4">
                    <span className = "fs-2">{name}</span>
                    <span className = "ms-2 text-muted">{CurrencyFormat(price)}</span>
                    </Card.Title>
                        <div className = "mt-auto">
                            {quantity === 0 ? (
                                <Button className = "w-100" onClick={() => AddToCartQauntity(id)}>
                                    Add To Cart
                                </Button>
                            ) : ( 
                            <div 
                            className="d-flex align-items-center flex-column" 
                            style = {{ gap:".5rem" }}>
                            <div 
                            className = "d-flex align-items-center justify-content-center" 
                            style = {{ gap:".5rem" }}>
                                <Button onClick={() => reduceCart(id)}> - </Button>
                                <div>
                                    <span className="fs-3">{quantity}</span>
                                    In 
                                    Cart
                                </div>
                                <Button onClick={() => AddToCartQauntity(id)}> + </Button>
                            </div>
                            <Button 
                            onClick={() => removeFromCart(id)}
                            variant = "danger" 
                            size="sm">Remove</Button>
                            </div>)}
                        </div>
                </Card.Body>
        </Card>
    )
}