import React, {useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom'; 
import {Plus, Minus} from "lucide-react" 


const PositionHistoryTab = () =>{
    
    const [data, setData] = useState(
        document.querySelectorAll("#futurePositionLog_wrapper tbody tr")
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
      setData(document.querySelectorAll("#futurePositionLog_wrapper tbody tr"));
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

   

    return(
        <>
     
            <div className="table-responsive dataTabletrade " >
                <div id="futurePositionLog_wrapper" className="dataTables_wrapper no-footer position_dataTables">                   
                    <table id="example" className="table display dataTable no-footer" style={{minWidth:"845px"}}>
                        <thead>
                            <tr>
                               <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">코인종류</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">매수시간</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">매도시간</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">구분</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">매수/매도</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">매수가</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">매도가</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">실현손익</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">실현손익 %</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">수수료</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">보유금액</div></div></th>
                            </tr>
                        </thead>
                        <tbody>   
                             <tr className="">
                                <td className=""><div className="d-flex align-items-start justify-content-start symbol_item_wrap flex-column"><div className="symbol_item">XRPUSDT</div><div className="d-flex align-items-center"><span className="symbol_item"><span class="badge-dark light badge badge-xs badgexs_title mx-1 border-radius-0">Perp</span></span><span className="symbol_item"><span class="badge-dark light  badge badge-xs badgexs_title mx-1 border-radius-0"></span></span></div></div></td>
                                <td><div className="d-flex align-items-center justify-content-start size_item_wrap"><span className="DateTimeWrap size_item"> <span className="dataDate">2025-01-14 </span><span className="dataTime">15:23:21</span></span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start size_item_wrap"><span className="DateTimeWrap size_item"> <span className="dataDate">2025-01-14 </span><span className="dataTime">15:23:21</span></span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-black">매도</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-Buy">매수</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black Executed_item">0.0000 USDT</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black AmountOrder_item">9.5310 USDT</span></div></td>
                                <td><div className="d-flex justify-content-start flex-row gap-1"><span className="badge tp-badge-success badge-lg"><Plus size={12} />12.34 USDT</span></div></td>
                                <td><div className="d-flex justify-content-between gap-2 flex-row"><span className="badge tp-badge-success badge-lg"><Plus size={12} />12.34%</span></div></td>
                                <td><div className="d-flex justify-content-between gap-2 flex-row">0.0047862 USDT</div></td>
                                <td><div className="d-flex justify-content-between gap-2 flex-row"><span className="badge tp-badge-success badge-lg">채결</span></div></td>
                            </tr>
                            <tr className="">
                            <td className=""><div className="d-flex align-items-start justify-content-start symbol_item_wrap flex-column"><div className="symbol_item">XRPUSDT</div><div className="d-flex align-items-center"><span className="symbol_item"><span class="badge-dark light badge badge-xs badgexs_title mx-1 border-radius-0">Perp</span><span class="badge-dark light  badge badge-xs badgexs_title mx-1 border-radius-0">20x</span><span class="badge-green badge badge-xs badgexs_title mx-1 border-radius-0">Long</span></span><span className="symbol_item"></span></div></div></td>
                                <td><div className="d-flex align-items-center justify-content-start size_item_wrap"><span className="DateTimeWrap size_item"> <span className="dataDate">2025-01-14 </span><span className="dataTime">15:23:21</span></span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start size_item_wrap"><span className="DateTimeWrap size_item"> <span className="dataDate">2025-01-14 </span><span className="dataTime">15:23:21</span></span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-black text-TypeOrder_item-TP">TP</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-Buy">매수</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black Executed_item">10.3685 USDT</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black AmountOrder_item">10.37535 USDT</span></div></td>
                                <td><div className="d-flex justify-content-start flex-row gap-1"><span className="badge tp-badge-success badge-lg"><Plus size={12} />12.34 USDT</span></div></td>
                               
                                <td><div className="d-flex justify-content-between gap-2 flex-row"><span className="badge tp-badge-success badge-lg"><Plus size={12} />12.34%</span></div></td>
                                <td><div className="d-flex justify-content-between gap-2 flex-row">0.0047862 USDT</div></td>
                                <td><div className="d-flex justify-content-between gap-2 flex-row"><span className="badge tp-badge-cancel badge-lg">취소</span></div></td>
                            </tr>
                            <tr className="">
                                <td className=""><div className="d-flex align-items-start justify-content-start symbol_item_wrap flex-column"><div className="symbol_item">XRPUSDT</div></div></td>
                                <td><div className="d-flex align-items-center justify-content-start size_item_wrap"><span className="DateTimeWrap size_item"> <span className="dataDate">2025-01-14 </span><span className="dataTime">15:23:21</span></span></div></td>      
                                <td><div className="d-flex align-items-center justify-content-start size_item_wrap"><span className="DateTimeWrap size_item"> <span className="dataDate">2025-01-14 </span><span className="dataTime">15:23:21</span></span></div></td>      
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-black">매도</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-Sell">매도</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black Executed_item">9.5659 USDT</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black AmountOrder_item">9.5713 USDT</span></div></td>
                                <td><div className="d-flex justify-content-start flex-row gap-1"><span className="badge tp-badge-danger badge-lg"><Minus size={12} />12.34 USDT</span></div></td>
                                <td><div className="d-flex justify-content-between gap-2 flex-row"><span className="badge tp-badge-danger badge-lg"><Minus size={12} />12.34%</span></div></td>
                                <td><div className="d-flex justify-content-between gap-2 flex-row">0.0047862 USDT</div></td>
                                <td><div className="d-flex justify-content-between gap-2 flex-row"><span className="badge tp-badge-success badge-lg">채결</span></div></td>
                            </tr>
                            <tr className="">
                                <td className=""><div className="d-flex align-items-start justify-content-start symbol_item_wrap flex-column"><div className="symbol_item">XRPUSDT</div><div className="d-flex align-items-center"><span className="symbol_item"><span class="badge-dark light badge badge-xs badgexs_title mx-1 border-radius-0">Perp</span><span class="badge-dark light  badge badge-xs badgexs_title mx-1 border-radius-0">20x</span><span class="badge-red badge badge-xs badgexs_title mx-1 border-radius-0">Short</span></span><span className="symbol_item"></span></div></div></td>
                                <td><div className="d-flex align-items-center justify-content-start size_item_wrap"><span className="DateTimeWrap size_item"> <span className="dataDate">2025-01-14 </span><span className="dataTime">15:23:21</span></span></div></td>      
                                <td><div className="d-flex align-items-center justify-content-start size_item_wrap"><span className="DateTimeWrap size_item"> <span className="dataDate">2025-01-14 </span><span className="dataTime">15:23:21</span></span></div></td>      
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-black text-TypeOrder_item-SL">SL</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className=" TypeOrder_item text-Sell">매도</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black Executed_item">0.0000 USDT</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black AmountOrder_item">9.5659 USDT</span></div></td>
                                <td><div className="d-flex justify-content-start flex-row gap-1"><span className="badge tp-badge-danger badge-lg"><Minus size={12} />12.34 USDT</span></div></td>
                                <td><div className="d-flex justify-content-between gap-2 flex-row"><span className="badge tp-badge-danger badge-lg"><Minus size={12} />12.34%</span></div></td>
                                <td><div className="d-flex justify-content-between gap-2 flex-row">0.0047862 USDT</div></td>
                                <td><div className="d-flex justify-content-between gap-2 flex-row"><span className="badge tp-badge-success badge-lg">채결 </span></div></td>
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
export default PositionHistoryTab;