import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from '../Action/products';

function Products(){
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(async()=>{
    await dispatch(getAllProduct());
  },[])
  
  return (
    <>
    <Container>
      <h1 style={{marginBottom:'2rem', marginTop:'1rem'}}>Products</h1>
    <div className="d-flex" key='productcontainer' style={{ marginTop:'2rem'}} >
      {
        products?.items?.map((product,i) => (
          <>
          <div key={`productdiv_${i}`} style={{marginRight: '1rem'}}>
          <Card key={`productname_${i}`} style={{ width: '12rem'}}>
            <Card.Body key={`productbody_${i}`}>
                <Card.Title key={`producttitle_${i}`}>{product.product_name}</Card.Title>
                <Card.Text key={`producttext_${i}`}>
                {product.quantity} still available
                </Card.Text>
                <Card.Text key={`productstatus_${i}`}>
                Status: {product.status}
                </Card.Text>
            </Card.Body>
          </Card>
          </div>
          </>
        ))
      }
    </div>
    </Container>
    </>
  )
};

export default Products;