import "./Button.css";

type ButtonProps = {
    buttonName: string,
    buttonStyle: "create" | "cancel" | "edit" | "delete" | "save",
    click?: () => void;
    buttonType: "button" | "submit"
}

export default function Button({buttonName, buttonStyle, click, buttonType}: ButtonProps) {
    return (
        <button type={buttonType} className={`button ${buttonStyle}`} onClick={click}>{buttonName}</button>
    );
  }
  