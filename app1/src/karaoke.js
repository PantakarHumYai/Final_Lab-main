//Pantakarn Chuayrod 6603052411024
import React, { useRef, useState } from 'react';

export default function Karaoke() {
    const [totalPrice, setTotalPrice] = useState(0);
    const regularHoursInput = useRef();
    const studentHoursInput = useRef();
    const regularRadio = useRef();
    const studentRadio = useRef();

    const calculateTotal = () => {
        const regularHours = regularHoursInput.current.value;
        const studentHours = studentHoursInput.current.value;
        const regularRate = 120;
        const studentRate = 80;
        
        let totalPrice = 0;

        if (regularRadio.current.checked) {
            if (regularHours === "") {
                alert("กรุณากรอกจำนวนชั่วโมง");
                return;
            }
            totalPrice = regularHours * regularRate;

        } else if (studentRadio.current.checked) {
            if (studentHours === "") {
                alert("กรุณากรอกจำนวนชั่วโมง");
                return;
            }
            totalPrice = studentHours * studentRate;
        }

        setTotalPrice(totalPrice);
    };
    const borderStyle = {
        border: '2px solid #000000',
        width: '400px',
    };
    return (
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <table border="2" style={borderStyle}>
                <tbody>
                    <tr><td colSpan="2" id="karaoke">ร้านคาราโอเกะ</td></tr>
                    <tr>
                        <td>
                            <br />&nbsp;&nbsp;
                            <input type="radio" name="c1" ref={regularRadio} /> ไม่มีบัตรนักศึกษา <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 120 บาท จำนวน 
                            <input type="text" size="2" ref={regularHoursInput} /> ชั่วโมง <br />
                            &nbsp;&nbsp;
                            <input type="radio" name="c1" ref={studentRadio} /> มีบัตรนักศึกษา <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 80 บาท จำนวน 
                            <input type="text" size="2" ref={studentHoursInput} /> ชั่วโมง <br /><br />
                        </td>
                    </tr>
                </tbody>
            </table><br />
            <button onClick={calculateTotal}>คิดเงิน</button><br />
            รวมเป็นเงินทั้งสิ้น = <input type="text" value={totalPrice} readOnly /> บาท
        </div>
    );
}