function ExplanationText({ children, isImportant }) {
  const defaultClasses = "text-default text expl";
  isImportant && defaultClasses + " text-important";
  return <p className={defaultClasses}>{children}</p>;
}
