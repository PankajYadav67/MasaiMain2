import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import styles from "./style.module.css";

type PinInputProps = {
    length: number,
    setOtp: (val: string) => void,
    limitPerBox: number,
}

export const PinInputComponents = (props: PinInputProps) => {
    const { length, setOtp, limitPerBox } = props;
    const [pinArray, setPinArray] = useState(new Array(length).fill(""));
    const inputRef = useRef<HTMLInputElement[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        e.preventDefault();
        const { value = "" } = e.target
        pinArray[index] = value;
        setOtp(pinArray.join("-"));
        setPinArray([...pinArray]);

        if (value.length >= limitPerBox && index < length - 1) {

            inputRef.current[index + 1].focus();
        }
    }
    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        const { code } = e;
        if (code === "Backspace") {
            if (index > 0 && !pinArray[index]) {
                inputRef.current[index - 1].focus();
            }
        } else {
            console.log(e);
        }
    }

    return (
        <div className={styles.pinInputWrapper} onPaste={(e) => {
            e.preventDefault();
            const input = e.clipboardData.getData("Text");
            const pinChunks = input.match(/.{1,2}/g) || []; // Split the input into chunks of two characters

            pinChunks.forEach((chunk, index) => {
                if (index < length) {
                    pinArray[index] = chunk;
                }
            });

            setOtp(pinArray.join("-"));
            setPinArray([...pinArray]);

        }}>
            {pinArray.map((val, index) => (
                <input
                    key={index}
                    className={styles.pinInputFieldWrapper}
                    maxLength={limitPerBox}
                    ref={(el) => {
                        if (el && inputRef.current) {
                            inputRef.current[index] = el;
                        }
                    }}
                    onKeyUp={(e) => handleKeyUp(e, index)}
                    onChange={(e) => handleChange(e, index)}
                />
            ))}

        </div>
    )
}