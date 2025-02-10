import React, {useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom'; 
import DropType from "../../bootstrap/DropType";
import ModalTPSL from "./../../Modal/ModalTPSL";
import {Plus, Minus} from "lucide-react" 

const PositionTab = () =>{
    
    const [data, setData] = useState(
        document.querySelectorAll("#futurePosition_wrapper tbody tr")
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
      setData(document.querySelectorAll("#futurePosition_wrapper tbody tr"));
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
                <div id="futurePosition_wrapper" className="dataTables_wrapper no-footer position_dataTables">
                    <table id="example" className="table display dataTable no-footer" style={{minWidth:"845px"}}>
                        <thead>
                            <tr>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">코인종류</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">사이즈</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">진입가</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">현재가</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">청산가</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">마진율</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">증거금</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">미실현수익(수익률 %)</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-closePosition flex items-center">포지션종료</div></div></th>
                                <th><div className="d-flex align-items-center "><div className=" typography-caption2 text-TertiaryText flex items-center">TP/SL</div></div></th>
                            </tr>
                        </thead>
                        <tbody>
                       
                             <tr className="tdGreen">
                                <td className="line_tag"><div className="d-flex align-items-start justify-content-start symbol_item_wrap flex-column"><div className="symbol_item">XRPUSDT</div><div className="d-flex align-items-center"><span className="symbol_item"><span class="badge-dark light badge badge-xs badgexs_title mx-1 border-radius-0">Perp</span></span><span className="symbol_item"><span class="badge-dark light  badge badge-xs badgexs_title mx-1 border-radius-0">20x</span></span></div></div></td>
                                <td><div className="d-flex align-items-center justify-content-start size_item_wrap"><span className="text-size-trade size_item">9.6603 USDT</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black EntryPrice_item">2.35326</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black MarkPrice_item">2.35366</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-mark-price LiqPrice_item">1.2345</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black MarginRatio_item">0.10%</span></div></td>
                                <td><div className="d-flex justify-content-start flex-column"><div className="margin_item text-margin">0.48 USDT</div><div className="d-flex"><span className="margin_item text-margin"> (Cross) </span></div></div></td>
                                <td><div className="d-flex justify-content-start flex-column"><div className="PNLROI_item text-PNLROI-plus">+0.01 USDT</div><div className="d-flex"><span className="PNLROI_item text-PNLROI"> (<Plus size={12} />3.39%) </span></div></div></td>
                                <td className="td_closePositionWrap"><div className="d-flex justify-content-start flex-row"><div className="closePositionWrap"><span className="text-closePositionMarket text-closePosition">Market</span><span className="text-borderline mx-2">|</span><span className="text-closePositionLimit text-closePosition"> Limit </span></div>
                                        <div className="closePositionWrap d-flex justify-content-start flex-row closePosition_editCol mx-5">
                                               <DropType 
                                                        currentValue="2.5336"
                                                        options={["10%", "25%", "50%", "75%", "100%"]}
                                                        placeholder={'currentValue'}
                                                        readOnly={false}
                                                        onValueChange={(value) => {
                                                          localStorage.setItem("userPreference", value);
                                                        }}
                                               />

                                                <DropType 
                                                       currentValue="3.8"
                                                       options={["10%", "25%", "50%", "75%", "100%"]}
                                                       placeholder={'currentValue'}
                                                       readOnly={false}
                                                       onValueChange={(value) => {
                                                         localStorage.setItem("userPreference", value);
                                                       }}
                                              />
                                             
                                            </div>
                                        </div>
                                </td>
                                <td><div className="d-flex justify-content-start flex-row"><ModalTPSL/></div></td>
                            </tr>

                            <tr className="tdGreen">
                                <td className="line_tag"><div className="d-flex align-items-start justify-content-start symbol_item_wrap flex-column"><div className="symbol_item">XRPUSDT</div><div className="d-flex align-items-center"><span className="symbol_item"><span class="badge-dark light badge badge-xs badgexs_title mx-1 border-radius-0">Perp</span></span><span className="symbol_item"><span class="badge-dark light  badge badge-xs badgexs_title mx-1 border-radius-0">20x</span><span class="badge-green light badge badge-xs badgexs_title mx-1 border-radius-0">Long</span></span></div></div></td>
                                <td><div className="d-flex align-items-center justify-content-start size_item_wrap"><span className="text-size-trade size_item">9.6603 USDT</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black EntryPrice_item">2.35326</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black MarkPrice_item">2.35366</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-mark-price LiqPrice_item">1.2345</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black MarginRatio_item">0.10%</span></div></td>
                                <td><div className="d-flex justify-content-start flex-column"><div className="margin_item text-margin">0.48 USDT</div><div className="d-flex"><span className="margin_item text-margin"> (Cross) </span></div></div></td>
                                <td><div className="d-flex justify-content-start flex-column"><div className="PNLROI_item text-PNLROI-plus"><Plus size={12} />0.01 USDT</div><div className="d-flex"><span className="PNLROI_item text-PNLROI"> (<Plus size={12} />3.39%) </span></div></div></td>
                                <td className="td_closePositionWrap"><div className="d-flex justify-content-start flex-row"><div className="closePositionWrap"><span className="text-closePositionMarket text-closePosition">Market</span><span className="text-borderline mx-2">|</span><span className="text-closePositionLimit text-closePosition"> Limit </span></div>
                                        <div className="closePositionWrap d-flex justify-content-start flex-row closePosition_editCol mx-5">
                                               <DropType 
                                                        currentValue="2.5336"
                                                        options={["10%", "25%", "50%", "75%", "100%"]}
                                                        placeholder={'currentValue'}
                                                        readOnly={false}
                                                        onValueChange={(value) => {
                                                          localStorage.setItem("userPreference", value);
                                                        }}
                                               />

                                                <DropType 
                                                       currentValue="3.8"
                                                       options={["10%", "25%", "50%", "75%", "100%"]}
                                                       placeholder={'currentValue'}
                                                       readOnly={false}
                                                       onValueChange={(value) => {
                                                         localStorage.setItem("userPreference", value);
                                                       }}
                                              />
                                            </div>
                                        </div>
                                </td>
                                <td><div className="d-flex justify-content-start flex-row"><ModalTPSL/></div></td>
                            </tr>

                            
                            <tr className="tdRed">
                                <td className="line_tag"><div className="d-flex align-items-start justify-content-start symbol_item_wrap flex-column"><div className="symbol_item">XRPUSDT</div><div className="d-flex align-items-center"><span className="symbol_item"><span class="badge-dark light badge badge-xs badgexs_title mx-1 border-radius-0">Perp</span><span class="badge-dark light  badge badge-xs badgexs_title mx-1 border-radius-0">20x</span><span class="badge-red badge badge-xs badgexs_title mx-1 border-radius-0">Short</span></span><span className="symbol_item"></span></div></div></td>
                                <td><div className="d-flex align-items-center justify-content-start size_item_wrap"><span className="text-size-trade-minus size_item"><Minus size={12} />9.7269 USDT</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black EntryPrice_item">2.35326</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black MarkPrice_item">2.35366</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-mark-price LiqPrice_item">1.2345</span></div></td>
                                <td><div className="d-flex align-items-center justify-content-start "><span className="text-black MarginRatio_item">0.10%</span></div></td>
                                <td><div className="d-flex justify-content-start flex-column"><div className="margin_item text-margin">0.48 USDT</div><div className="d-flex"><span className="margin_item text-margin"> (Cross) </span></div></div></td>
                                <td><div className="d-flex justify-content-start flex-column"><div className="PNLROI_item text-PNLROI-minus"><Minus size={12} />0.01 USDT</div><div className="d-flex"><span className="PNLROI_item text-PNLROI"> (<Plus size={12} />3.39%) </span></div></div></td>
                                <td className="td_closePositionWrap"><div className="d-flex justify-content-start flex-row"><div className="closePositionWrap"><span className="text-closePositionMarket text-closePosition">Market</span><span className="text-borderline mx-2">|</span><span className="text-closePositionLimit text-closePosition"> Limit </span></div>
                                        <div className="closePositionWrap d-flex justify-content-start flex-row closePosition_editCol mx-5">
                                               <DropType 
                                                        currentValue="2.5336"
                                                        options={["10%", "25%", "50%", "75%", "100%"]}
                                                        placeholder={'currentValue'}
                                                        readOnly={false}
                                                        onValueChange={(value) => {
                                                          localStorage.setItem("userPreference", value);
                                                        }}
                                               />

                                                <DropType 
                                                       currentValue="3.8"
                                                       options={["10%", "25%", "50%", "75%", "100%"]}
                                                       placeholder={'currentValue'}
                                                       readOnly={false}
                                                       onValueChange={(value) => {
                                                         localStorage.setItem("userPreference", value);
                                                       }}
                                              />
                                             
                                            </div>
                                        </div>
                                </td>
                                <td><div className="d-flex justify-content-start flex-row"><ModalTPSL/></div></td>
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
export default PositionTab;