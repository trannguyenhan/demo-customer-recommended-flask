import React, { useState, useEffect } from "react";
import styles from "./predict.module.css";
import FooterPage from "../../component/FooterPage";
import HeaderPage from "../../component/HeaderPage";
import { predict } from "../../api/api";
import { Link } from "react-router-dom";
import { CardStatistic } from "../../component/CardStatistic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export default function Predict() {
    const [id, setId] = useState("");
    const [result, setResult] = useState({});
    const [status, setStatus] = useState(false);

    const changeId = (event) => {
        setId(event.target.value);
    };




    const Dashboard = ({customer}) => {
        const options = {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom"
            },
            title: {
              display: true
            }
          }
        };
        // const customer = {
        //   categ0: "896.7",
        //   categ1: "484.32",
        //   categ2: "1136.8",
        //   categ3: "1273.19",
        //   categ4: "518.99",
        //   count: "7",
        //   customer_id: "12347",
        //   max: "1294.32",
        //   max_recency: "367",
        //   mean: "615.7142857142857",
        //   min: "224.82",
        //   min_recency: "2",
        //   sum: "4310.0"
        // };
        const [labels, setLabels] = useState([]);
        const [data, setData] = useState([]);
        useEffect(() => {
          //console.log(Object.keys(customer).slice(0, 5));
          setLabels(Object.keys(customer).slice(0, 5));
          setData(Object.values(customer).slice(0, 5));
        }, []);
        return (
          <div className="App">
            <div className="cards">
              <CardStatistic title="Mã khách hàng" total={customer.customer_id}/>
              <CardStatistic
                icon={<FontAwesomeIcon icon="fa-thin fa-user" />}
                title="Tổng số đơn hàng"
                total={customer.count}
              />
              <CardStatistic title="Đơn hàng đắt nhất" total={customer.max} unit=" $"/>
      
              <CardStatistic title="Trung bình giá trị đơn hàng" total={customer.mean} unit=" $"/>
              <CardStatistic title="Đơn giá rẻ nhất" total={customer.min} unit=" $"/>
      
              <CardStatistic title="Tổng số tiền" total={customer.sum} unit=" $"/>
            </div>
            <div className="chart">
              <div className="chart-main">
                <Bar
                  options={options}
                  data={{
                    labels,
                    datasets: [
                      {
                        label: "Cụm sản phẩm",
                        data,
                        backgroundColor: "rgba(24, 80, 168, 0.8)"
                      }
                    ]
                  }}
                />
              </div>
      
              <div className="chart-statistic">
                <CardStatistic title="khoảng thời gian mua hàng xa nhất" total={customer.max_recency} unit=" ngày" />
                <CardStatistic title="Khoảng thời gian mua hàng gần nhất" total={customer.min_recency} unit=" ngày"/>
              </div>
            </div>
          </div>
        );
      }
      



    const submitPress = (event) => {
        // alert(JSON.stringify(data));
        predict(id).then(res => setResult(res.data)).then(i=>setStatus(true));
        // alert(JSON.stringify(result));
        // setStatus(true);
        event.preventDefault();
    };

    // const listItems = products.map((product) =>
    //     <div className="card" style={{width: "30%", marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 20}}>
    //         <img className="card-img-top" src={product.img} alt="Card image cap" />
    //         <div className="card-body">
    //             <h5 className="card-title">{product.name}</h5>
    //             <p className="card-text"><span>Ram:</span>{product.ram}</p>
    //             <p className="card-text"><span>Rom:</span>{product.rom}</p>
    //             <p className="card-text"><span>Màu sắc:</span>{product.color}</p>
    //             <p className="card-text"><span>CPU:</span>{product.cpu}</p>
    //             <p className="card-text"><span>Số nơi bán:</span>{product.count}</p>
    //             <Link to={"/detail/"+product.id} target="_blank">
    //                 <p className="btn btn-primary">Xem các sản phẩm</p>
    //             </Link>
    //         </div>
    //     </div>
    // );


    const RenderProductRecommended = ({ items }) => {
        let listItems = items.map((product) =>
        <li>
            {product}
        </li>
    );
        return (
        <ul>
            {listItems}
        </ul>
        );
      }


    const RenderPredict = ({ item }) => {
        return (
        <div style={{marginTop: 100}}>
            <h3 style={{color: "#1e90ff"}}>
                Lịch sử  khách hàng
            </h3>
            <Dashboard customer={item.customer} />
            <br></br>
            <h3 style={{color: "#1e90ff"}}>
                Cụm khách hàng:
            </h3>
            <h4 style={{color: "#8a2be2"}}>{item.cluster}</h4>
            <h3 style={{color: "#1e90ff", marginTop: 30}}>
                Sản phẩm gợi ý:
            </h3>
            <div>
            <RenderProductRecommended items={item.product_recommended} />
            </div>
        </div>
        );
      }

    return (
        <div>
            <HeaderPage />
            <h1 className={styles.h1}>Phân tích lịch sử khách hàng, gợi ý sản phẩm phù hợp</h1>
            <div className={styles.main}>
                <form onSubmit={submitPress}>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Mã khách hàng</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                //step="0.01"
                                placeholder={"Hãy nhập mã khách hàng"}
                                className="form-control"
                                value={id}
                                onInput={(e) => setId(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row justify-content-center" style={{marginTop: 40}}>
                        <input
                            type="submit"
                            className="btn btn-primary btn-lg btn-block"
                            value="Đánh giá"
                        />
                    </div>
                </form>

                <div>
                    {status && <RenderPredict item={result}/>}
                </div>

            </div>
            <div style={{marginBottom: 150}}></div>
            <FooterPage />
        </div>
    );
}
