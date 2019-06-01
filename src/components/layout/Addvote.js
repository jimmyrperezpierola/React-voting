import React, { Component } from 'react'
import { Button, Card, Spinner, Form } from 'react-bootstrap';

class Addvote extends Component {
  render() {
    return (
      <div>
            <Spinner animation="grow" />
            <div className="addcandi">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">

                            <h1 className="display-4 text-center">Add Candidate</h1>
                            <p className="lead text-center">Desc</p>
                            <form action="test.html">
                                <h6>Name</h6>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Enter Your Name" name="name" required />
                                </div>

                                <h6>Party Name</h6>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Party Name" name="Party" required />
                                </div>

                                <h6>Image URL</h6>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Enter Image URL" name="Imageurl" />
                                </div>
                                <h6>Give Description</h6>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Description" name="description"></textarea>
                        
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
export default Addvote;
