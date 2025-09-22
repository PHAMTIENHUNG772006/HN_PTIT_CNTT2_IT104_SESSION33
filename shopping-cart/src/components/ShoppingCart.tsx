import { useDispatch, useSelector } from "react-redux";
import { Space, Table } from "antd";
import type { Product } from "./Product";

const { Column} = Table;

export default function ShoppingCart() {
  const cart = useSelector((state: any) => state.cart);
  const isEmpty = cart.length === 0;

  const dispatch = useDispatch()
  const handleDelete = (product : Product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product
    })
  }

  const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

 return (
  <div>
    <header>Your Cart</header>
    { isEmpty ? (
      <div>Không có sản phẩm</div>
    ) : (
      <Table<Product> dataSource={cart} rowKey="id" pagination={false}>
        <Column title="STT" dataIndex="id" key="id" />
        <Column title="Name" dataIndex="nameProduct" key="nameProduct" />
        <Column title="Price" dataIndex="price" key="price" />
        <Column title="Quantity" dataIndex="quantity" key="quantity" />
        <Column
          title="Action"
          key="action"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
          render={(_: any, record: Product) => (
            <Space size="middle">
              <button>Update</button>
              <button onClick={() => handleDelete(record)}>Delete</button>
            </Space>
          )}
        />
      </Table>
    )}
    <div style={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
      <div>There are {cart.length} item in your shopping cart </div>
      <h3 style={{color:"orange"}}> Tổng tiền :{total}</h3>
    </div>
  </div>
);
}
