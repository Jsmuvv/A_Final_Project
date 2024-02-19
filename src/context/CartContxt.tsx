import { ReactNode, createContext,useContext,useState } from "react"
import { ShoppingCart } from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"
type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartContext = {
    openCart: () => void
    latchCart: () => void
    cartAmount: number
    cartItems: CartItem[]
    getItemQuantity: (id:number) => number
    AddToCartQauntity: (id:number) => void
    reduceCart: (id:number) => void
    removeFromCart: (id:number) => void
}

type CartItem = {
    id:number
    quantity:number
}

const CartContext = createContext({} as CartContext)


export function useShoppingCart() {
    return useContext(CartContext)
}


export function ShoppingCartProvider( {children}: ShoppingCartProviderProps ) {
    const [cartItems,setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])
    const [isOpen,setIsOpen] = useState(false)


    const openCart = () => setIsOpen(true)
    const latchCart = () => setIsOpen(false)
    const cartAmount = cartItems.reduce (
        (quantity,item) => item.quantity + quantity,
        0
    )
    function getItemQuantity(id:number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    function AddToCartQauntity(id: number){
        setCartItems(currItems => {
            if (currItems.find(item => item.id == id) == null) {
                return [...currItems, {id,quantity:1}]
            } else {
                return currItems.map(item => {
                    if (item.id) {
                        return {...item,quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function reduceCart(id: number){
        setCartItems(currItems => {
            if (currItems.find(item => item.id == id)?.quantity === 1) {
                return currItems.filter(item => item.id !==id)
            } else {
                return currItems.map(item => {
                    if (item.id) {
                    return {...item,quantity: item.quantity - 1}
                } else {
                    return item
                }
            })
        }
    })
    }
    function removeFromCart(id:number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !==id)
        })
    }
    return (
        <CartContext.Provider value = {{ getItemQuantity,AddToCartQauntity, reduceCart,removeFromCart,cartItems,cartAmount,openCart,latchCart }}>
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </CartContext.Provider>
    )
}

