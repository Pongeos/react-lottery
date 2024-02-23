import React, { useState } from 'react'
import style from './CheckRe.module.css'

export default function CheckReward(props) {

    const [showReward, setShowReward] = useState()

    let myFunc = num => String(num)

    let intArr1 = Array.from(String(props.sn1), myFunc)
    let intArr11 = Array.from(String(props.sn11), myFunc)
    let intArr12 = Array.from(String(props.sn12), myFunc)
    let intArr21 = Array.from(String(props.sn21), myFunc)
    let intArr22 = Array.from(String(props.sn22), myFunc)
    let intArr23 = Array.from(String(props.sn23), myFunc)
    let intArr02 = Array.from(String(props.sn02), myFunc)
    // console.log(intArr02)

    const [textInput, setTextInput] = useState("")

    let text1 = Array.from(String(textInput), myFunc)
    // console.log(text1[0])

    const input = (e) => {
        setTextInput(e.target.value)
    }

    let a0 = intArr1[0] === text1[0]
    let aa0 = intArr02[0] === " "
    let a1 = intArr1[1] === text1[1]
    let aa1 = intArr02[1] === text1[1]
    let a2 = intArr1[2] === text1[2]
    let aa2 = intArr02[2] === text1[2]

    console.log(a0)
    console.log(aa0)
    console.log(a1)
    console.log(aa1)
    console.log(a2)
    console.log(aa2)

    function handleCheck() {
        if (a0 === true & a1 === true & a2 === true & aa0 === true & aa1 === true & aa2 === true) {
            console.log(true + "102");
            setShowReward((textInput) + " " + "ยินดีด้วยคุณถูกรางวัลที่ 1 และเลขท้าย 2 ตัว")

        } else if (intArr1[0] === text1[0] & intArr1[1] === text1[1] & intArr1[2] === text1[2]) {
            console.log(true + "1");
            setShowReward((textInput) + " " + "ยินดีด้วยคุณถูกรางวัลที่ 1")

        } else if (intArr11[0] === text1[0] & intArr11[1] === text1[1] & intArr11[2] === text1[2]) {
            console.log(true + "11");
            setShowReward((textInput) + " " + "ยินดีด้วยคุณถูกรางวัลข้างเคียงที่ 1 ")

        } else if (intArr12[0] === text1[0] & intArr12[1] === text1[1] & intArr12[2] === text1[2]) {
            console.log(true + "12");
            setShowReward((textInput) + " " + "ยินดีด้วยคุณถูกรางวัลข้างเคียงที่ 1 ")

        } else if (intArr21[0] === text1[0] & intArr21[1] === text1[1] & intArr21[2] === text1[2]) {
            console.log(true + "21");
            setShowReward((textInput) + " " + "ยินดีด้วยคุณถูกรางวัลที่ 2 ")

        } else if (intArr22[0] === text1[0] & intArr22[1] === text1[1] & intArr22[2] === text1[2]) {
            console.log(true + "22");
            setShowReward((textInput) + " " + "ยินดีด้วยคุณถูกรางวัลที่ 2 ")


        } else if (intArr23[0] === text1[0] & intArr23[1] === text1[1] & intArr23[2] === text1[2]) {
            console.log(true + "23");
            setShowReward((textInput) + " " + "ยินดีด้วยคุณถูกรางวัลที่ 2 ")


        } else if (intArr02[0] === " " & intArr02[1] === text1[1] & intArr02[2] === text1[2]) {
            console.log(true + "02");
            setShowReward((textInput) + " " + "ยินดีด้วยคุณถูกรางวัลเลขท้าย 2 ตัว")

        }
        else {
            console.log(false);
            setShowReward((textInput) + " " + "เสียใจด้วยคุณไม่ถูกรางวัล")

        }
    }

    return (
        <div className={style.wrapper_check}>
            <div className={style.container}>
                <div className={style.content}>
                    <h4>ตรวจรางวัลล็อตเตอรี่</h4>
                    <label>เลขล็อตเตอรี่ : </label><input type="text" maxLength={3} onChange={input} />
                    <h4 className={style.showReward}>{showReward}</h4>
                </div>
                <button className={style.btn_check} onClick={handleCheck}>ตรวจรางวัล</button>
            </div>
        </div>
    )
}
