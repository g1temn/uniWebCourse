import React, { useState } from "react";
import { InputField } from "../UI/InputField/InputField";
import { Button } from "../UI/Button/Button";
import styles from "./Feedback.module.scss";
import text from "../../content/feedback.json";

export const Feedback: React.FC = () => {
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
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <InputField
                label={text.nameLabel}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={text.namePlaceholder}
                required
              />
              <InputField
                label={text.groupLabel}
                name="group"
                value={formData.group}
                onChange={handleChange}
                placeholder={text.groupPlaceholder}
              />
            </div>

            <InputField
              label={text.dateLabel}
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

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

            <InputField
              label={text.feedbackLabel}
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder={text.feedbackPlaceholder}
              isTextArea
              rows={4}
              required
            />

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
              <Button type="submit" variant="primary">
                {text.submitBtn}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
