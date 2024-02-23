import { useEffect, useState } from 'react';
import style from './Table.module.css'
import CheckReward from '../Check/CheckReward';

export default function Table(number, setNumber) {
    const [sn1, setSn1] = useState(localStorage.getItem("value1"))
    const [sn11, setSn11] = useState(localStorage.getItem("value11"))
    const [sn12, setSn12] = useState(localStorage.getItem("value12"))
    const [sn21, setSn21] = useState(localStorage.getItem("value21"))
    const [sn22, setSn22] = useState(localStorage.getItem("value22"))
    const [sn23, setSn23] = useState(localStorage.getItem("value23"))
    const [sn02, setSn02] = useState(localStorage.getItem("value02"))

    // console.log(sn1)

    function handleRandom() {
        let num1 = Math.floor(Math.random() * 999) + 1;
        let num11 = num1 - 1;
        let num12 = num1 + 1;
        let num21 = Math.floor(Math.random() * 999) + 1;
        let num22 = Math.floor(Math.random() * 999) + 1;
        let num23 = Math.floor(Math.random() * 999) + 1;
        let num02 = Math.floor(Math.random() * 99) + 1;

        let rs1 = "";
        let rs11 = "";
        let rs12 = "";
        let rs21 = "";
        let rs22 = "";
        let rs23 = "";
        let rs02 = "";

        if (String(num1).length === 1) {
            rs1 = "00" + num1;
        } else if (String(num1).length === 2) {
            rs1 = "0" + num1;
        } else {
            rs1 = num1;
        }

        if (String(num11).length === 1) {
            rs11 = "00" + num11;
        } else if (String(num11).length === 2) {
            rs11 = "0" + num11;
        } else {
            rs11 = num11;
        }

        if (String(num12).length === 1) {
            rs12 = "00" + num12;
        } else if (String(num12).length === 2) {
            rs12 = "0" + num12;
        } else {
            rs12 = num12;
        }

        if (String(num21).length === 1) {
            rs21 = "00" + num21;
        } else if (String(num21).length === 2) {
            rs21 = "0" + num21;
        } else {
            rs21 = num21;
        }

        if (String(num22).length === 1) {
            rs22 = "00" + num22;
        } else if (String(num22).length === 2) {
            rs22 = "0" + num22;
        } else {
            rs22 = num22;
        }

        if (String(num23).length === 1) {
            rs23 = "00" + num23;
        } else if (String(num23).length === 2) {
            rs23 = "0" + num23;
        } else {
            rs23 = num23;
        }

        if (String(num02).length === 1) {
            rs02 = " 0" + num02;
        } else {
            rs02 = " " + num02;
        }

        setSn1(String(rs1))
        setSn11(String(rs11))
        setSn12(String(rs12))
        setSn21(String(rs21))
        setSn22(String(rs22))
        setSn23(String(rs23))
        setSn02(String(rs02))

        localStorage.setItem("value1", document.getElementById("num1").innerHTML = rs1)
        localStorage.setItem("value11", document.getElementById("num11").innerHTML = rs11)
        localStorage.setItem("value12", document.getElementById("num12").innerHTML = rs12)
        localStorage.setItem("value21", document.getElementById("num21").innerHTML = rs21)
        localStorage.setItem("value22", document.getElementById("num22").innerHTML = rs22)
        localStorage.setItem("value23", document.getElementById("num23").innerHTML = rs23)
        localStorage.setItem("value02", document.getElementById("num02").innerHTML = rs02)
    }

    useEffect(() => {
        document.getElementById("num1").innerHTML = (localStorage.getItem("value1"))
        document.getElementById("num11").innerHTML = (localStorage.getItem("value11"))
        document.getElementById("num12").innerHTML = (localStorage.getItem("value12"))
        document.getElementById("num21").innerHTML = (localStorage.getItem("value21"))
        document.getElementById("num22").innerHTML = (localStorage.getItem("value22"))
        document.getElementById("num23").innerHTML = (localStorage.getItem("value23"))
        document.getElementById("num02").innerHTML = (localStorage.getItem("value02"))
    }, [number])

    return (
        <div>
            <div className={style.wrapper_table}>
                <div className={style.container}>
                    <h4>ผลการออกรางวัลล็อตเตอรี่</h4>
                    <button className={style.btn_random} onClick={handleRandom}>ดำเนินการสุ่มรางวัล</button>
                    <div className={style.content_reward}>
                        <table className={style.reward}>
                            <tr>
                                <td colSpan={2} className={style.td_reward}>รางวัลที่ 1</td>
                                <td colSpan={2} className={style.td_result} id='num1'></td>
                            </tr>
                            <tr>
                                <td colSpan={2} className={style.td_reward}>รางวัลเลขข้างเคียงรางวัลที่ 1</td>
                                <td className={style.td_result} id='num11'></td>
                                <td className={style.td_result} id='num12'></td>
                            </tr>
                            <tr>
                                <td className={style.td_reward}>รางวัลที่ 2</td>
                                <td className={style.td_result} id='num21'></td>
                                <td className={style.td_result} id='num22'></td>
                                <td className={style.td_result} id='num23'></td>
                            </tr>
                            <tr>
                                <td colSpan={2} className={style.td_reward}>รางวัลเลขท้าย 2 ตัว</td>
                                <td colSpan={2} className={style.td_result} id='num02'></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <CheckReward sn1={sn1} sn11={sn11} sn12={sn12} sn21={sn21} sn22={sn22} sn23={sn23} sn02={sn02} />
        </div>
    )
}
