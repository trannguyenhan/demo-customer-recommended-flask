import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styles from "./footerPage.module.css";


const FooterPage = () => {
  return (
    <div className={styles.main}>
      <MDBFooter color="cyan" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Phân khúc khách hàng</h5>
              <p>
                Phân tích, đánh giá, gợi ý sản phẩm cho khách hàng
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Tác giả</h5>
              <ul>
                <li className="list-unstyled">
                  <p href="#!">Bùi Việt Hoàng</p>
                </li>
                <li className="list-unstyled">
                  <p href="#!">Nguyễn Quang Huy</p>
                </li>
                <li className="list-unstyled">
                  <p href="#!">Đinh Công Minh</p>
                </li>
                <li className="list-unstyled">
                  <p href="#!">Trần Quang Minh</p>
                </li>
                <li className="list-unstyled">
                  <p href="#!">Nguyễn Văn Thanh</p>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {(new Date().getFullYear())+1-1 } Copyright:{" "}
            <a href="bachkhoahanoi"> bachkhoahanoi </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default FooterPage;
