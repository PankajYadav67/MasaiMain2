
type ButtonProps = {
    children: React.ReactNode;
    colorScheme?: "red" | "green" | "yellow";
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
}

const getColors = (colorScheme?: "red" | "green" | "yellow") => {
    if (colorScheme === "red") {
        return {
            color: "#63171B", backgroundColor: "#FED7D7"
        };
    }
    if (colorScheme === "green") {
        return {
            color: "#F0FFF4", backgroundColor: "#48BB7B"
        };
    }
    if (colorScheme === "yellow") {
        return {
            color: "#FFFFF0", backgroundColor: "#F6E05E"
        };
    } else {
        return {
            color: "black", backgroundColor: "white"
        };
    }
}

export const Button = ({ children, leftIcon, rightIcon, colorScheme }: ButtonProps) => {
    let { color, backgroundColor } = getColors(colorScheme);
    return (
        <button
            style={{ color: color , backgroundColor: backgroundColor }}>
            {leftIcon}
            {children}
            {rightIcon}
        </button>
    )
}