import React, { useState, useRef } from "react";
import styles from "./Feedback.module.scss";
import text from "../../content/feedback.json";

export const Feedback: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    group: "",
    date: "",
    topic: "",
    technologies: [] as string[],
    rating: "5",
    feedback: "",
    subscribe: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === "subscribe") {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      } else {
        setFormData((prev) => ({
          ...prev,
          technologies: checked
            ? [...prev.technologies, value]
            : prev.technologies.filter((t) => t !== value),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Дані анкети:", formData);
  };

  return (
    <main className={styles.feedback}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            {text.title}{" "}
            <span className={styles.highlight}>{text.titleHighlight}</span>
          </h1>
          <p className={styles.subtitle}>{text.subtitle}</p>
        </header>

        <div className={styles.card}>
          <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>{text.nameLabel}</label>
                <input
                  type="text"
                  name="name"
                  className={styles.selectInput}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={text.namePlaceholder}
                  required
                  pattern="^[A-ZА-ЯІЇЄҐ][a-zа-яіїєґ]{0,49}$"
                  onInvalid={(e) => {
                    const target = e.target as HTMLInputElement;
                    if (target.validity.valueMissing) {
                      target.setCustomValidity(
                        "Будь ласка, заповніть це поле.",
                      );
                    } else if (target.validity.patternMismatch) {
                      target.setCustomValidity(
                        "Ім'я повинно бути одним словом, починатися з великої літери та містити максимум 50 символів.",
                      );
                    }
                  }}
                  onInput={(e) =>
                    (e.target as HTMLInputElement).setCustomValidity("")
                  }
                />
              </div>

              <div className={styles.formGroup}>
                <label>{text.groupLabel}</label>
                <input
                  type="text"
                  name="group"
                  className={styles.selectInput}
                  value={formData.group}
                  onChange={handleChange}
                  placeholder={text.groupPlaceholder}
                  required
                  pattern="^[A-Za-zА-Яа-яІіЇїЄєҐґ]{2}-\d{2}-\d$"
                  onInvalid={(e) => {
                    const target = e.target as HTMLInputElement;
                    if (target.validity.valueMissing) {
                      target.setCustomValidity(
                        "Будь ласка, заповніть це поле.",
                      );
                    } else if (target.validity.patternMismatch) {
                      target.setCustomValidity(
                        "Формат групи має бути: ББ-ЦЦ-Ц (наприклад: АБ-12-3).",
                      );
                    }
                  }}
                  onInput={(e) =>
                    (e.target as HTMLInputElement).setCustomValidity("")
                  }
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>{text.dateLabel}</label>
              <input
                type="date"
                name="date"
                className={styles.selectInput}
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>{text.topicLabel}</label>
              <select
                className={styles.selectInput}
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
              >
                {text.topicOptions.map((opt, idx) => (
                  <option
                    key={idx}
                    value={idx === 0 ? "" : opt}
                    disabled={idx === 0}
                  >
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>{text.techLabel}</label>
              <div className={styles.checkboxGrid}>
                {text.techOptions.map((tech) => (
                  <label key={tech} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="technologies"
                      value={tech}
                      checked={formData.technologies.includes(tech)}
                      onChange={handleChange}
                    />
                    <span>{tech}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.radioGroupWrapper}>
              <label className={styles.radioGroupLabel}>
                {text.ratingLabel}
              </label>
              <div className={styles.radioGroup}>
                {[
                  { value: 5, label: text.ratingExcellent },
                  { value: 4, label: text.ratingGood },
                  { value: 3, label: text.ratingNeedsImprovement },
                ].map((option) => (
                  <label key={option.value} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="rating"
                      value={option.value.toString()}
                      checked={formData.rating === option.value.toString()}
                      onChange={handleChange}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>{text.feedbackLabel}</label>
              <textarea
                name="feedback"
                className={styles.selectInput}
                value={formData.feedback}
                onChange={handleChange}
                placeholder={text.feedbackPlaceholder}
                rows={4}
                required
                maxLength={400}
                title="Повідомлення не може перевищувати 400 символів"
              />
            </div>

            <label className={styles.toggleLabel}>
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
              />
              <span>{text.subscribeLabel}</span>
            </label>

            <div className={styles.formActions}>
              <button
                type="submit"
                className={styles.submitBtn}
                onClick={() => {
                  if (formRef.current) {
                    formRef.current.reportValidity();
                  }
                }}
              >
                {text.submitBtn}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
