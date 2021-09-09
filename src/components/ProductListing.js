import React from 'react'
import { Button, Table } from 'react-bootstrap'
import Loader from './Loader'
import NoRecordFound from './NoRecordFound'


function ProductListing({ product, deleteproducts, isLoader }) {
  return (

    <Table bordered hover className="shadow">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Category</th>
          <th>Description</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {isLoader ? <tr><td colSpan="5"><Loader LoadingText="Loading..." /></td></tr> : product.length > 0 ? product.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title.slice(0, 30)}...</td>
            <td>{product.category}</td>
            <td>{product.description.slice(0, 30)}...</td>
            <td>{product.price}</td>
            <td>
              <Button variant="primary" size="sm">View</Button>
              <Button variant="outline-primary" className="mx-1" size="sm">Edit</Button>
               <Button variant="danger" size="sm" onClick={() => deleteproducts(product.id)}>Delete</Button></td>
          </tr>
        )) : <tr><td colSpan="5"><NoRecordFound NoRecordFoundText="No Record Found" /></td></tr>}
      </tbody>
    </Table>

  )
}

export default ProductListing
