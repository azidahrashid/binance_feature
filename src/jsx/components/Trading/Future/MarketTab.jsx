import React, { useState } from "react";
import { Link } from "react-router-dom";
import FutureTradeRangeSlider from "../../RangeSlider/FutureTradeRangeSlider";
import DropDownUI from "../../bootstrap/DropDownUi";

const LimitTab = () => {
    const handleDropdownChange = (value) => {
        setSelectedCurrency(value);
    };

    const [focusedInput, setFocusedInput] = useState(null);
    const handleInputFocus = (id) => {
        setFocusedInput(id);
    };

    const handleInputBlur = () => {
        setFocusedInput(null);
    };

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const [selectedCurrency, setSelectedCurrency] = useState("USDT"); // Default value



    return (
        <>
            {[
                { id: 221, inputId: "unitAmount-221" },
         
            ].map(({ id, inputId }) => (
                <form key={id}>
                    <div className="d-flex align-items-start justify-content-center mt-3 mb-1 flex-column">
                        <div className="d-flex justify-content-start gap-1">
                            <span className="small text-muted">Avbl -</span>
                            <span className="small t-Caption2 text-black cursor-pointer">{selectedCurrency}</span>
                        </div>
                        <div
                            className={`input-group mb-2 ${
                                focusedInput === inputId ? "input-group-focus" : ""
                            }`}
                        >
                            <input
                                id={inputId}
                                type="text"
                                className="form-control border-end-0"
                                onFocus={() => handleInputFocus(inputId)}
                                onBlur={handleInputBlur}
                            />
                            <span className="btn-cur left-radius input-group-text fw-light  border-start-0 textColored">
                                <DropDownUI
                                    options={["USDT", "BTC"]}
                                    placeholder="현재가"
                                    onValueChange={handleDropdownChange}
                                    value={selectedCurrency} 
                                />
                            </span>
                        </div>
                    </div>

                    <FutureTradeRangeSlider />

                    <div className="d-flex justify-content-between flex-wrap">
                        <div className="d-flex">
                            <div className="text-muted">매수</div>
                            <div className="text-black px-1"> 0.00 USDT</div>
                        </div>
                        <div className="d-flex">
                            <div className="text-muted">매도</div>
                            <div className="text-black px-1"> 0.00 USDT </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between flex-wrap">
                        <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                            <div className="check-item-checkbox py-1">
                                <label className="form-check-label d-flex align-items-center">
                                    <input
                                        type="checkbox"
                                        className="form-check-input me-2"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />{" "}
                                    TP/SL
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={`TPS_addOn ${isChecked ? "show" : ""}`}>
                        <div className="d-flex align-items-start justify-content-center mb-1 flex-column">
                            <span className="small text-muted">Take Profit</span>
                            <div
                                className={`input-group mb-2 ${
                                    focusedInput === `${inputId}-tp` ? "input-group-focus" : ""
                                }`}
                            >
                                <input
                                    id={`${inputId}-tp`}
                                    type="text"
                                    className="form-control border-end-0"
                                    onFocus={() => handleInputFocus(`${inputId}-tp`)}
                                    onBlur={handleInputBlur}
                                />
                                <span className="btn-cur left-radius input-group-text fw-light  border-start-0 textColored">
                                    <DropDownUI
                                        options={["Mark", "Last"]}
                                        placeholder="Mark"
                                        onValueChange={handleDropdownChange}
                                    />
                                 </span>
                            </div>
                        </div>
                        <div style={{padding:'5px'}}><FutureTradeRangeSlider /></div>
                        <div className="d-flex align-items-start justify-content-center mt-1 mb-1 flex-column">
                            <span className="small text-muted">Stop Loss</span>
                            <div
                                className={`input-group mb-2 ${
                                    focusedInput === `${inputId}-sl` ? "input-group-focus" : ""
                                }`}
                            >
                                <input
                                    id={`${inputId}-sl`}
                                    type="text"
                                    className="form-control border-end-0"
                                    onFocus={() => handleInputFocus(`${inputId}-sl`)}
                                    onBlur={handleInputBlur}
                                />
                                <span className="btn-cur left-radius input-group-text fw-light  border-start-0 textColored">
                                    <DropDownUI
                                        options={["Mark", "Limit"]}
                                        placeholder="Mark"
                                        onValueChange={handleDropdownChange}
                                    />
                                 </span>
                            </div>
                        </div>
                        <div style={{padding:'5px'}}><FutureTradeRangeSlider /></div>
                    </div>

                    <div className="d-flex justify-content-between flex-wrap flex-column tradeDetails">
                        <div className="d-flex justify-content-between">
                            <div className="text-muted">보유금액</div>
                            <div className="text-black px-1"> 0.00 USDT</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="text-muted">미실현수익</div>
                            <div className="text-black px-1"> 0.00 USDT </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="text-muted">수익률</div>
                            <div className="text-black px-1"> 0.00 % </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="text-muted">사용가능금액</div>
                            <div className="text-black px-1"> 0.00 USDT </div>
                        </div>
                    </div>

                    <div className="mt-3 d-flex justify-content-between gap-2">
                        <Link to={"#"} className="btn btn-success py-2 text-uppercase flex-grow-1">
                            매수
                        </Link>
                        <Link to={"#"} className="btn btn-danger py-2 text-uppercase flex-grow-1">
                            매도
                        </Link>
                    </div>
                </form>
            ))}
        </>
    );
};

export default LimitTab;
