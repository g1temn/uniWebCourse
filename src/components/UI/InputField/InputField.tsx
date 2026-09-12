import React from "react";
import styles from "./InputField.module.scss";

type InputFieldProps = {
  label: string;
  isTextArea?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const InputField: React.FC<InputFieldProps> = ({
  label,
  isTextArea,
  ...props
}) => {
  return (
    <div className={styles.formGroup}>
      <label>{label}</label>
      {isTextArea ? (
        <textarea
          className={styles.input}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={styles.input}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
};
