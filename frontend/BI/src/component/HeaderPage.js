import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function HeaderPage() {
  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Tìm kiếm</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Về chúng tôi</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div
        id="intro-example"
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Phân khúc khách hàng</h1>
              <h5 className="mb-4">
              Phân tích, đánh giá, gợi ý sản phẩm cho khách hàng!!!
              </h5>
              {/*<Link to="/predict">*/}
              {/*<p*/}
              {/*  className="btn btn-outline-light btn-lg m-2"*/}
              {/*  role="button"*/}
              {/*  rel="nofollow"*/}
              {/*>*/}
              {/*  Dự đoán*/}
              {/*</p>*/}
              {/*</Link>*/}

              {/*<Link to="/dashboard">*/}
              {/*<p*/}
              {/*  className="btn btn-outline-light btn-lg m-2"*/}
              {/*  role="button"*/}
              {/*>*/}
              {/*  Phân tích, thống kê*/}
              {/*</p>*/}
              {/*</Link>*/}
              
              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
