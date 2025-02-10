import React, {useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom'; 
// import DropType from "../../bootstrap/DropType";
// import ModalTPSL from "./../../Modal/ModalTPSL";
import {Equal, ChevronRight, ChevronLeft, Calendar} from "lucide-react" 
import "react-datepicker/dist/react-datepicker.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";

const OpenOrdersTab = () =>{
    
    const [data, setData] = useState(
        document.querySelectorAll("#futureorder_wrapper tbody tr")
    );
    const sort = 6;
    const activePag = useRef(0);
    const [test, settest] = useState(0);

    // Active data
    const chageData = (frist, sec) => {
        for (var i = 0; i < data.length; ++i) {
            if (i >= frist && i < sec) {
                data[i].classList.remove("d-none");
            } else {
                data[i].classList.add("d-none");
            }
        }
    };
   // use effect
    useEffect(() => {
      setData(document.querySelectorAll("#futureorder_wrapper tbody tr"));
      //chackboxFun();
    }, [test]);

  
   // Active pagginarion
    activePag.current === 0 && chageData(0, sort);
   // paggination
    let paggination = Array(Math.ceil(data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   // Active paggination & chage data
    const onClick = (i) => {
        activePag.current = i;
        chageData(activePag.current * sort, (activePag.current + 1) * sort);
        settest(i);
    };

    const [active, setActive] = useState("day");

    return(
        <>
     
            <div className="table-responsive dataTabletrade " >
                <div id="futureorder_wrapper" className="dataTables_wrapper no-footer position_dataTables">
                    <div className="filteringContainer d-flex justify-content-start align-items-center flex-row gap-2">
                        <div className="d-flex justify-content-start align-items-center flex-row gap-2">
                            <div 
                                className={`sort_day c-pointer btn btn-sorttype btn-xxs border-0 typography-caption0  ${active === "day" ? "active" : ""}`}
                                onClick={() => setActive("day")}
                            >
                                1일
                            </div>
                            <div 
                                className={`sort_week c-pointer btn btn-sorttype btn-xxs border-0 typography-caption0  ${active === "week" ? "active" : ""}`}
                                onClick={() => setActive("week")}
                            >
                                1주일
                            </div>
                            <div 
                                className={`sort_month c-pointer btn btn-sorttype btn-xxs border-0 typography-caption0  ${active === "month" ? "active" : ""}`}
                                onClick={() => setActive("month")}
                            >
                                1달
                            </div>
                        </div>
                        <div className="border-start h-3 border-Line"></div>
                        <div className="d-flex justify-content-start align-items-center flex-row gap-2">
                            <div className="sort_date typography-caption0 d-flex justify-content-start align-items-center flex-row gap-1">
                            <DateRangePicker
                                initialSettings={{ 
                                    startDate: moment().format('MM/DD/YYYY'), 
                                    endDate: moment().format('MM/DD/YYYY'), 
                                    locale: { format: 'MM/DD/YYYY' }, 
                                    autoApply: false
                                }}
                            >
                                <input type="text" className="form-control input-daterange-timepicker border-0 typography-caption0" />
                            </DateRangePicker>


                                <Calendar size={12} />
                            </div>
                            <div className="btnwrap"><button className="btn table-btn-search btn-xxs border-0" type="button">Search</button></div>
                          
                        </div>
                    </div>
                    <table id="example" className="table display dataTable no-footer" style={{minWidth:"845px"}}>
                        <thead>
                            <tr>
                               <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">코인종류</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">시간</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">구분</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">매수/매도</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">채결가</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">수량</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">주문가격</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">상태</div></div></th>
                            </tr>
                        </thead>
                        <tbody>
                                
                             <tr className="">
                                <td className=""><div className="d-flex align-items-start justify-content-start symbol_item_wrap flex-column"><div className="symbol_item">XRPUSDT</div><div className="d-flex align-items-center"><span className="symbol_item"><span class="badge-dark light badge badge-xs badgexs_title mx-1 border-radius-0">Perp</span></span><span className="symbol_item"><span class="badge-dark light  badge badge-xs badgexs_title mx-1 border-radius-0"></span></span></div></div></td>
                                <td><div className="d-flex align-items-center justify-content-start size_item_wrap"><span className="DateTimeWrap size_item"> <span className="dataDate">2025-01-14 </span><span className="dataTime">15:23:21</span></span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-black">시장가</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-Buy">매수</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black Executed_item">0.0000 USDT</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black AmountOrder_item">9.5310 USDT</span></div></td>
                                <td><div className="d-flex justify-content-start flex-row gap-1"><div className="TriggerConditions_item text-TriggerConditions">Last Price</div><div className="d-flex"><span className="TriggerConditions_item text-TriggerConditions"> <ChevronRight size={12} style={{marginRight:'-3px'}}/><Equal size={12} />3.0100</span></div></div></td>
                               
                                <td><div className="d-flex justify-content-between gap-2 flex-row"><span className="badge tp-badge-success badge-lg">채결</span></div></td>
                            </tr>
                            <tr className="">
                                <td className=""><div className="d-flex align-items-start justify-content-start symbol_item_wrap flex-column"><div className="symbol_item">XRPUSDT</div><div className="d-flex align-items-center"><span className="symbol_item"><span class="badge-dark light badge badge-xs badgexs_title mx-1 border-radius-0">Perp</span><span class="badge-dark light  badge badge-xs badgexs_title mx-1 border-radius-0">20x</span><span class="badge-green badge badge-xs badgexs_title mx-1 border-radius-0">Long</span></span><span className="symbol_item"></span></div></div></td>
                                <td><div className="d-flex align-items-center justify-content-start size_item_wrap"><span className="DateTimeWrap size_item"> <span className="dataDate">2025-01-14 </span><span className="dataTime">15:23:21</span></span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-black text-TypeOrder_item-TP">TP</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-Buy">매수</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black Executed_item">10.3685 USDT</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black AmountOrder_item">10.37535 USDT</span></div></td>
                                <td><div className="d-flex justify-content-start flex-row gap-1"><div className="TriggerConditions_item text-TriggerConditions">Last Price</div><div className="d-flex"><span className="TriggerConditions_item text-TriggerConditions"> <ChevronRight size={12} style={{marginRight:'-3px'}}/><Equal size={12} />3.0100</span></div></div></td>
                               
                                <td><div className="d-flex justify-content-between gap-2 flex-row"><span className="badge tp-badge-cancel badge-lg">취소</span></div></td>
                            </tr>
                            <tr className="">
                                <td className=""><div className="d-flex align-items-start justify-content-start symbol_item_wrap flex-column"><div className="symbol_item">XRPUSDT</div><div className="d-flex align-items-center"><span className="symbol_item"><span class="badge-dark light badge badge-xs badgexs_title mx-1 border-radius-0">Perp</span></span><span className="symbol_item"><span class="badge-dark light  badge badge-xs badgexs_title mx-1 border-radius-0">20x</span></span></div></div></td>
                                <td><div className="d-flex align-items-center justify-content-start size_item_wrap"><span className="DateTimeWrap size_item"> <span className="dataDate">2025-01-14 </span><span className="dataTime">15:23:21</span></span></div></td>      
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-black">지정가</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-Sell">매도</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black Executed_item">9.5659 USDT</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black AmountOrder_item">9.5713 USDT</span></div></td>
                                <td><div className="d-flex justify-content-start flex-row gap-1"><div className="TriggerConditions_item text-TriggerConditions">Last Price</div><div className="d-flex"><span className="TriggerConditions_item text-TriggerConditions"> <ChevronLeft size={12} style={{marginRight:'-3px'}}/><Equal size={12} />2.7300</span></div></div></td>
                                <td style={{width:'250px'}}><div className="d-flex justify-content-between gap-2 flex-row"><span className="badge tp-badge-success badge-lg">채결</span></div></td>
                            </tr>
                            <tr className="">
                                <td className=""><div className="d-flex align-items-start justify-content-start symbol_item_wrap flex-column"><div className="symbol_item">XRPUSDT</div><div className="d-flex align-items-center"><span className="symbol_item"><span class="badge-dark light badge badge-xs badgexs_title mx-1 border-radius-0">Perp</span><span class="badge-dark light  badge badge-xs badgexs_title mx-1 border-radius-0">20x</span><span class="badge-red badge badge-xs badgexs_title mx-1 border-radius-0">Short</span></span><span className="symbol_item"></span></div></div></td>
                                <td><div className="d-flex align-items-center justify-content-start size_item_wrap"><span className="DateTimeWrap size_item"> <span className="dataDate">2025-01-14 </span><span className="dataTime">15:23:21</span></span></div></td>      
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-black text-TypeOrder_item-SL">SL</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-Sell">매도</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black Executed_item">0.0000 USDT</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black AmountOrder_item">9.5659 USDT</span></div></td>
                                <td><div className="d-flex justify-content-start flex-row gap-1"><div className="TriggerConditions_item text-TriggerConditions">Last Price</div><div className="d-flex"><span className="TriggerConditions_item text-TriggerConditions"> <ChevronLeft size={12} style={{marginRight:'-3px'}}/><Equal size={12} />2.7300</span></div></div></td>
                                <td style={{width:'250px'}}><div className="d-flex justify-content-between gap-2 flex-row"><span className="badge tp-badge-success badge-lg">채결 </span></div></td>
                            </tr>

                          
                                                    
                        </tbody>
                    </table>
                    <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
                        <div className="dataTables_info">
                            Showing {activePag.current * sort + 1} to{" "}
                            {data.length > (activePag.current + 1) * sort
                                ? (activePag.current + 1) * sort
                                : data.length}{" "}
                            of {data.length} entries
                        </div>
                        <div
                            className="dataTables_paginate paging_simple_numbers mb-0"
                            id="application-tbl1_paginate"
                        >
                            <Link
                                className="paginate_button previous "
                                to="/future"
                                onClick={() =>
                                    activePag.current > 0 &&
                                    onClick(activePag.current - 1)
                                }
                                >
                                <i className="fa fa-angle-double-left" ></i> 
                            </Link>
                            <span>
                                {paggination.map((number, i) => (
                                    <Link
                                        key={i}
                                        to="/future"
                                        className={`paginate_button  ${
                                            activePag.current === i ? "current" : ""
                                        } `}
                                        onClick={() => onClick(i)}
                                    >
                                        {number}
                                    </Link>
                                ))}
                            </span>

                            <Link
                                className="paginate_button next"
                                to="/future"
                                onClick={() =>
                                    activePag.current + 1 < paggination.length &&
                                    onClick(activePag.current + 1)
                                }
                            >
                                <i className="fa fa-angle-double-right" ></i>
                            </Link>
                        </div>
                    </div>
                </div>                                                
            </div>
           
        </>
    )
}
export default OpenOrdersTab;