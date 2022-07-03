import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleShowSideMenu } from "../../../pages/System-state/SystemSlice";

export const SideMenu =()=> {
  const dispatch =useDispatch();
 

  const{showSideMenu}= useSelector((state)=>state.system);
  


 

  return (
    <>
      <Offcanvas
        show={showSideMenu}
        onHide={() => dispatch(toggleShowSideMenu())}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Welcome to Admin cms</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/dashboard" className="nav-link">
                <i class="fa-solid fa-gauge"></i>Dashbaord
              </Link>
            </ListGroup.Item>

            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/categories" className="nav-link">
                <i class="fa-solid fa-bowl-food"></i>Categories
              </Link>
            </ListGroup.Item>

            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/products" className="nav-link">
                <i class="fa-brands fa-accusoft"></i>Products
              </Link>
            </ListGroup.Item>

            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/payment-method" className="nav-link">
                <i class="fa-solid fa-file-invoice-dollar"></i> Payment method
              </Link>{" "}
              
            </ListGroup.Item>

            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/users" className="nav-link">
                <i class="fa-solid fa-users"></i> Users
              </Link>
            </ListGroup.Item>

            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/orders" className="nav-link">
                <i class="fa-brands fa-first-order"></i>Orders
              </Link>
            </ListGroup.Item>

            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/profile" className="nav-link">
                <i class="fa-solid fa-gear"></i>Profile
              </Link>
            </ListGroup.Item>

            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/settings" className="nav-link">
                <i class="fa-solid fa-gear"></i>Settings
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


